import React, { useEffect, useReducer, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom"; // ✅ Add these imports
import { toast } from "react-toastify";

// Import components and the reducer
import FilterOptions from "./FilterOptions";
import ShowLength from "./ShowLength";
import LayoutHandler from "./LayoutHandler";
import ProductCards3 from "../productCards/ProductCards3";
import { initialState, reducer } from "@/reducer/filterReducer";

// Import your API functions
import { getProducts, getCategories } from "../../../api";

export default function Products1() {
  console.log('🎯 Products1 component rendering...');

  // ✅ Add URL search params and location hooks
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // The reducer manages the UI state for filters
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // State for products and backend data
  const [products, setProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [pagination, setPagination] = useState({
    totalProducts: 0,
    totalPages: 1,
    currentPage: 1
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    price = [0, 1000],
    categories = [],
    sortingOption = "Default",
    currentPage = 1,
    itemPerPage = 6,
  } = state;

  console.log('🔧 Current state:', {
    price, categories, sortingOption, currentPage, itemPerPage
  });

  const fetchingRef = React.useRef(false);

  // ✅ Handle URL parameters on component mount and URL change
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    
    if (categoryFromUrl) {
      console.log('🔗 Category from URL:', categoryFromUrl);
      
      // Parse category ID (convert string to number if needed)
      const categoryId = parseInt(categoryFromUrl);
      
      if (!isNaN(categoryId) && !categories.includes(categoryId)) {
        console.log('📂 Setting category from URL:', categoryId);
        dispatch({ 
          type: "SET_CATEGORIES", 
          payload: [categoryId] // Set as array with single category
        });
      }
    }
  }, [searchParams, location.pathname]); // ✅ Listen to URL changes

  // ✅ Update URL when categories change (optional - for better UX)
  useEffect(() => {
    // Only update URL if we have categories and they're different from URL
    if (categories.length > 0) {
      const currentCategory = searchParams.get('category');
      const newCategory = categories[0].toString(); // Use first category
      
      if (currentCategory !== newCategory) {
        console.log('🔄 Updating URL with category:', newCategory);
        setSearchParams({ category: newCategory });
      }
    } else if (searchParams.has('category')) {
      // Clear category from URL if no categories selected
      searchParams.delete('category');
      setSearchParams(searchParams);
    }
  }, [categories, setSearchParams, searchParams]);

  // Fetch categories for filter sidebar - Only run once
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log('📂 Fetching categories...');
        const response = await getCategories();
        console.log('✅ Categories response:', response);
        
        let categoriesData = [];
        
        if (response.data?.success && response.data?.data) {
          categoriesData = response.data.data;
        } else if (Array.isArray(response.data)) {
          categoriesData = response.data;
        } else if (response.data?.data && Array.isArray(response.data.data)) {
          categoriesData = response.data.data;
        }
        
        console.log('📂 Processed categories:', categoriesData);
        setAllCategories(Array.isArray(categoriesData) ? categoriesData : []);
      } catch (error) {
        console.error('❌ Error fetching categories:', error);
        toast.error("Could not load filter options.");
        setAllCategories([]);
      }
    };
    
    fetchCategories();
  }, []);

  // ✅ MAIN DATA FETCHING - Updated to work with URL params
  useEffect(() => {
    const paramString = JSON.stringify({
      page: currentPage,
      limit: itemPerPage,
      priceMin: price[0] !== 0 ? price[0] : undefined,
      priceMax: price[1] !== 1000 ? price[1] : undefined,
      categories: categories.length > 0 ? categories.join(',') : undefined,
      sortBy: sortingOption !== "Default" ? (
        sortingOption === "Title Ascending" ? "name" :
        sortingOption === "Title Descending" ? "name" :
        sortingOption === "Price Ascending" ? "price" :
        sortingOption === "Price Descending" ? "price" : undefined
      ) : undefined,
      sortOrder: sortingOption !== "Default" ? (
        sortingOption.includes("Ascending") ? "ASC" : "DESC"
      ) : undefined
    });

    if (fetchingRef.current) {
      console.log('⏸️ Already fetching, skipping...');
      return;
    }

    const fetchFilteredProducts = async () => {
      fetchingRef.current = true;
      
      try {
        console.log('🛍️ Fetching products with categories:', categories);
        setLoading(true);
        setError(null);

        const params = {
          page: currentPage,
          limit: Math.max(itemPerPage, 6),
        };

        if (price[0] !== 0) {
          params.priceMin = price[0];
        }
        if (price[1] !== 1000) {
          params.priceMax = price[1];
        }
        if (categories.length > 0) {
          params.categories = categories.join(',');
        }

        if (sortingOption !== "Default") {
          const sortMap = {
            "Title Ascending": { sortBy: "name", sortOrder: "ASC" },
            "Title Descending": { sortBy: "name", sortOrder: "DESC" },
            "Price Ascending": { sortBy: "price", sortOrder: "ASC" },
            "Price Descending": { sortBy: "price", sortOrder: "DESC" }
          };
          
          const sortConfig = sortMap[sortingOption];
          if (sortConfig) {
            params.sortBy = sortConfig.sortBy;
            params.sortOrder = sortConfig.sortOrder;
          }
        }

        console.log('📤 Final API Params:', params);

        const response = await getProducts(params);
        console.log('📥 Products response:', response);

        const responseData = response.data;
        const productsData = responseData?.data || responseData?.products || responseData || [];
        const paginationData = responseData?.pagination || {};

        setProducts(Array.isArray(productsData) ? productsData : []);
        setPagination({
          totalProducts: paginationData.total || productsData.length || 0,
          totalPages: paginationData.pages || Math.ceil((paginationData.total || productsData.length) / Math.max(itemPerPage, 6)) || 1,
          currentPage: paginationData.page || currentPage
        });

      } catch (error) {
        console.error('❌ Error fetching products:', error);
        setError(error.message || 'Failed to load products');
        setProducts([]);
        
        if (error.response?.status === 404) {
          toast.error("Products not found");
        } else if (error.message.includes('Unexpected token')) {
          toast.error("Server error. Please check your backend.");
        } else {
          toast.error("Failed to load products. Please try again.");
        }
      } finally {
        setLoading(false);
        fetchingRef.current = false;
      }
    };

    const timeoutId = setTimeout(() => {
      fetchFilteredProducts();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };

  }, [
    currentPage,
    itemPerPage, 
    price[0],
    price[1],
    categories.length,
    categories.join(','),
    sortingOption
  ]);

  // Mobile Filter Sidebar Logic - Only run once
  useEffect(() => {
    const handleOpenFilter = () => {
      if (window.innerWidth <= 1200) {
        document.querySelector(".sidebar-filter")?.classList.add("show");
        document.querySelector(".overlay-filter")?.classList.add("show");
        document.body.classList.add("no-scroll");
      }
    };
    
    const handleCloseFilter = () => {
      document.querySelector(".sidebar-filter")?.classList.remove("show");
      document.querySelector(".overlay-filter")?.classList.remove("show");
      document.body.classList.remove("no-scroll");
    };

    const openButtons = document.querySelectorAll("#filterShop, .sidebar-btn");
    const closeButtons = document.querySelectorAll(".close-filter, .overlay-filter");

    openButtons.forEach((button) => button?.addEventListener("click", handleOpenFilter));
    closeButtons.forEach((button) => button?.addEventListener("click", handleCloseFilter));

    return () => {
      openButtons.forEach((button) => button?.removeEventListener("click", handleOpenFilter));
      closeButtons.forEach((button) => button?.removeEventListener("click", handleCloseFilter));
    };
  }, []);

  // ✅ Create props object with URL-aware category management
  const allProps = {
    ...state,
    allCategories,
    setPrice: (value) => {
      console.log('💰 Setting price:', value);
      dispatch({ type: "SET_PRICE", payload: value });
    },
    setCategories: (catId) => {
      console.log('📂 Toggling category:', catId);
      const updated = categories.includes(catId)
        ? categories.filter(id => id !== catId)
        : [...categories, catId];
      dispatch({ type: "SET_CATEGORIES", payload: updated });
    },
    removeCategory: (catId) => {
      console.log('🗑️ Removing category:', catId);
      const updated = categories.filter(id => id !== catId);
      dispatch({ type: "SET_CATEGORIES", payload: updated });
    },
    setSortingOption: (value) => {
      console.log('🔄 Setting sort:', value);
      dispatch({ type: "SET_SORTING_OPTION", payload: value });
    },
    setCurrentPage: (value) => {
      console.log('📄 Setting page:', value);
      dispatch({ type: "SET_CURRENT_PAGE", payload: value });
    },
    setItemPerPage: (value) => {
      const finalValue = Math.max(value, 6);
      console.log('📊 Setting items per page:', finalValue);
      dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
      dispatch({ type: "SET_ITEM_PER_PAGE", payload: finalValue });
    },
    clearFilter: () => {
      console.log('🧹 Clearing filters');
      dispatch({ type: "CLEAR_FILTER" });
      // ✅ Also clear URL parameters
      searchParams.delete('category');
      setSearchParams(searchParams);
    },
  };

  // Find selected category names
  const selectedCategoryNames = allCategories.filter(cat => 
    categories.includes(cat.id)
  );

  console.log('🎨 Rendering with:', {
    productsCount: products.length,
    loading,
    error,
    paginationInfo: pagination,
    selectedCategories: selectedCategoryNames
  });

  // Rest of your component remains the same...
  // (Error state, return JSX, etc.)

  if (error && !loading) {
    return (
      <div className="flat-content">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '500px' }}>
            <div className="text-center">
              <h5 className="mb-3">Something went wrong</h5>
              <p className="text-muted mb-3">{error}</p>
              <button 
                className="tf-btn btn-primary"
                onClick={() => {
                  setError(null);
                  fetchingRef.current = false;
                  dispatch({ type: "CLEAR_FILTER" });
                }}
              >
                <span className="text-white">Try Again</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flat-content">
      <div className="container">
        <div className="tf-product-view-content wrapper-control-shop">
          {/* Filter Sidebar */}
          <div className="canvas-filter-product sidebar-filter handle-canvas left">
            <div className="canvas-wrapper">
              <div className="canvas-header d-flex d-xl-none">
                <h5 className="title">Filter</h5>
                <span className="icon-close link icon-close-popup close-filter" />
              </div>
              <div className="canvas-body">
                <FilterOptions allProps={allProps} />
              </div>
              <div className="canvas-bottom d-flex d-xl-none">
                <button 
                  id="reset-filter" 
                  onClick={() => allProps.clearFilter()} 
                  className="tf-btn btn-reset w-100"
                >
                  <span className="caption text-white">Reset Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="content-area">
            {/* Shop Controls */}
            <div className="tf-shop-control flex-wrap gap-10">
              <div className="d-flex align-items-center gap-10">
                <button id="filterShop" className="tf-btn-filter d-flex d-xl-none">
                  <span className="icon icon-filter">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#121212" viewBox="0 0 256 256">
                      <path d="M176,80a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H184A8,8,0,0,1,176,80ZM40,88H144v16a8,8,0,0,0,16,0V56a8,8,0,0,0-16,0V72H40a8,8,0,0,0,0,16Zm176,80H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16ZM88,144a8,8,0,0,0-8,8v16H40a8,8,0,0,0,0,16H80v16a8,8,0,0,0,16,0V152A8,8,0,0,0,88,144Z" />
                    </svg>
                  </span>
                  <span className="body-md-2 fw-medium">Filter</span>
                </button>
                <p className="body-text-3 d-none d-lg-block">
                  Showing {products.length} of {pagination.totalProducts} results
                  {/* ✅ Show category filter info */}
                  {selectedCategoryNames.length > 0 && (
                    <span className="text-primary ms-2">
                      in {selectedCategoryNames.map(cat => cat.name).join(', ')}
                    </span>
                  )}
                </p>
              </div>

              <div className="tf-control-view flat-title-tab-product flex-wrap">
                <LayoutHandler />
                <div className="tf-dropdown-sort tf-sort type-sort-by" data-bs-toggle="dropdown">
                  <div className="btn-select w-100">
                    <i className="icon-sort" />
                    <p className="body-text-3 w-100">
                      Sort by: <span className="text-sort-value">{sortingOption}</span>
                    </p>
                    <i className="icon-arrow-down fs-10" />
                  </div>
                  <div className="dropdown-menu">
                    {["Default", "Title Ascending", "Title Descending", "Price Ascending", "Price Descending"].map((elm, i) => (
                      <div 
                        key={i} 
                        className={`select-item ${sortingOption === elm ? "active" : ""}`} 
                        onClick={() => allProps.setSortingOption(elm)}
                      >
                        <span className="text-value-item">{elm}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Applied Filters Display */}
            {(categories.length > 0 || price[0] !== 0 || price[1] !== 1000) && (
              <div className="meta-filter-shop">
                <div className="count-text">
                  <span className="count">{pagination.totalProducts}</span> Products Found
                </div>
                <div id="applied-filters">
                  {selectedCategoryNames.map((cat, i) => (
                    <span 
                      key={i} 
                      className="filter-tag" 
                      onClick={() => allProps.removeCategory(cat.id)}
                    >
                      {cat.name}
                      <span className="remove-tag icon-close" />
                    </span>
                  ))}
                  {(price[0] !== 0 || price[1] !== 1000) && (
                    <span 
                      className="filter-tag" 
                      onClick={() => allProps.setPrice([0, 1000])}
                    >
                      ${price[0]} to ${price[1]}
                      <span className="remove-tag icon-close" />
                    </span>
                  )}
                </div>
                <button 
                  id="remove-all" 
                  className="remove-all-filters" 
                  onClick={() => allProps.clearFilter()}
                >
                  <span className="caption">REMOVE ALL</span>
                  <i className="icon icon-close" />
                </button>
              </div>
            )}

            {/* Products Grid */}
            <div className="gridLayout-wrapper">
              <div className="tf-grid-layout lg-col-4 md-col-3 sm-col-2 flat-grid-product wrapper-shop layout-tabgrid-1" id="gridLayout">
                {loading ? (
                  <div className="w-100 d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
                    <div className="text-center">
                      <div className="spinner-border text-primary mb-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p>Loading Products...</p>
                    </div>
                  </div>
                ) : products.length > 0 ? (
                  products.map((product, i) => (
                    <ProductCards3 key={product.id || i} product={product} />
                  ))
                ) : (
                  <div className="w-100 d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
                    <div className="text-center">
                      <h5 className="mb-3">No products found</h5>
                      <p className="text-muted mb-3">Try adjusting your filters</p>
                      <button 
                        className="tf-btn btn-primary"
                        onClick={() => allProps.clearFilter()}
                      >
                        <span className="text-white">Clear Filters</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {!loading && products.length > 0 && pagination.totalPages > 1 && (
                <ul className="wg-pagination wd-load">
                  <li>
                    <button 
                      onClick={() => allProps.setCurrentPage(Math.max(1, pagination.currentPage - 1))} 
                      disabled={pagination.currentPage === 1} 
                      className="link"
                    >
                      <i className="icon-arrow-left-lg" />
                    </button>
                  </li>
                  {Array.from({ length: Math.min(pagination.totalPages, 5) }, (_, i) => {
                    const pageNumber = i + Math.max(1, pagination.currentPage - 2);
                    return pageNumber <= pagination.totalPages ? (
                      <li key={pageNumber} className={pageNumber === pagination.currentPage ? 'active' : ''}>
                        <button 
                          onClick={() => allProps.setCurrentPage(pageNumber)} 
                          className="title-normal link"
                        >
                          {pageNumber}
                        </button>
                      </li>
                    ) : null;
                  })}
                  <li>
                    <button 
                      onClick={() => allProps.setCurrentPage(Math.min(pagination.totalPages, pagination.currentPage + 1))} 
                      disabled={pagination.currentPage === pagination.totalPages} 
                      className="link"
                    >
                      <i className="icon-arrow-right-lg" />
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="overlay-filter" />
    </div>
  );
}
