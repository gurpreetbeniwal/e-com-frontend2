import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import AddToCart from "../common/AddToCart";
import AddToWishlist from "../common/AddToWishlist";
import AddToQuickview from "../common/AddToQuickview";
import AddToCompare from "../common/AddToCompare";
// ✅ Import the updated API function
import { getCategoryProducts } from "../../../api";

export default function Relatedproducts({ product }) {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [meta, setMeta] = useState(null);

  console.log("🔗 RelatedProducts received product:", product);

  // ✅ Fetch category products when component mounts or product changes
  useEffect(() => {
    if (product && product.id) {
      fetchCategoryProducts();
    }
  }, [product?.id]);

  const fetchCategoryProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log("🔄 Fetching category products for product:", product.id);

      // ✅ Use the category products endpoint
      const response = await getCategoryProducts(product.id, {
        limit: 8,
        sortBy: 'created_at',
        sortOrder: 'DESC'
      });

      console.log("📦 Category products response:", response);

      if (response.data && response.data.success) {
        setCategoryProducts(response.data.products || []);
        setMeta(response.data.meta || null);
        console.log("✅ Category products loaded:", response.data.products?.length);
      } else {
        console.warn("⚠️ No category products found");
        setCategoryProducts([]);
      }

    } catch (error) {
      console.error("❌ Error fetching category products:", error);
      setError(error.message);
      setCategoryProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Don't render if no product provided
  if (!product || !product.id) {
    return null;
  }

  return (
    <section className="tf-sp-2 pt-0">
      <div className="container">
        <div className="flat-title">
          <h5 className="fw-semibold">
            More Products From This Category
            {meta && (
              <span className="text-muted ms-2">({meta.currentProduct.category})</span>
            )}
          </h5>
          {/* ✅ Only show navigation if we have products */}
          {!loading && !error && categoryProducts.length > 0 && (
            <div className="box-btn-slide relative">
              <div className="swiper-button-prev nav-swiper nav-prev-products snbp67">
                <i className="icon-arrow-left-lg" />
              </div>
              <div className="swiper-button-next nav-swiper nav-next-products snbn67">
                <i className="icon-arrow-right-lg" />
              </div>
            </div>
          )}
        </div>

        {/* ✅ Loading State */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading category products...</span>
            </div>
            <p className="text-muted mt-2">Finding products from this category...</p>
          </div>
        )}

        {/* ✅ Error State */}
        {error && (
          <div className="alert alert-warning text-center">
            <i className="icon-alert-triangle me-2"></i>
            <p className="mb-0">Unable to load category products. Please try again later.</p>
          </div>
        )}

        {/* ✅ No Results State */}
        {!loading && !error && categoryProducts.length === 0 && (
          <div className="text-center py-5">
            <div className="mb-3">
              <i className="icon-package fs-48 text-muted"></i>
            </div>
            <h6 className="fw-semibold mb-2">No Other Products in This Category</h6>
            <p className="text-muted">
              {meta?.currentProduct?.category 
                ? `This is the only product in the ${meta.currentProduct.category} category.`
                : "We couldn't find any other products in this category."
              }
            </p>
          </div>
        )}

        {/* ✅ Products Swiper */}
        {!loading && !error && categoryProducts.length > 0 && (
          <>
            {/* ✅ Product count info */}
            <div className="mb-3">
              <small className="text-muted">
                <i className="icon-grid me-1"></i>
                Showing {categoryProducts.length} of {meta?.total || categoryProducts.length} products
                {meta?.currentProduct?.category && ` in ${meta.currentProduct.category}`}
              </small>
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: ".spd67",
              }}
              navigation={{
                prevEl: ".snbp67",
                nextEl: ".snbn67",
              }}
              className="swiper tf-sw-products"
              breakpoints={{
                0: { slidesPerView: 2 },
                575: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              spaceBetween={15}
            >
              {categoryProducts.map((categoryProduct) => (
                <SwiperSlide className="swiper-slide" key={categoryProduct.id}>
                  <div className="card-product">
                    <div className="card-product-wrapper">
                      <Link
                        to={`/product-detail/${categoryProduct.id}`}
                        className="product-img"
                      >
                        <img
                          className="img-product lazyload"
                          src={categoryProduct.imgSrc}
                          alt={categoryProduct.title}
                          width={500}
                          height={500}
                          loading="lazy"
                        />
                        {categoryProduct.imgHover && (
                          <img
                            className="img-hover lazyload"
                            src={categoryProduct.imgHover}
                            alt={`${categoryProduct.title} hover`}
                            width={500}
                            height={500}
                            loading="lazy"
                          />
                        )}
                      </Link>

                      {/* ✅ Product Action Buttons */}
                      <ul className="list-product-btn">
                        <li>
                          <AddToCart
                            tooltipClass="tooltip-left"
                            productId={categoryProduct.id}
                          />
                        </li>
                        <li className="d-none d-sm-block wishlist">
                          <AddToWishlist
                            tooltipClass="tooltip-left"
                            productId={categoryProduct.id}
                          />
                        </li>
                        <li>
                          <AddToQuickview
                            productId={categoryProduct.id}
                            tooltipClass="tooltip-left"
                          />
                        </li>
                        <li className="d-none d-sm-block">
                          <AddToCompare
                            productId={categoryProduct.id}
                            tooltipClass="tooltip-left"
                          />
                        </li>
                      </ul>

                      {/* ✅ Product Labels */}
                      <div className="product-labels">
                        {categoryProduct.salePercentage && (
                          <span className="label-sale bg-danger text-white">
                            -{categoryProduct.salePercentage}%
                          </span>
                        )}
                        {!categoryProduct.inStock && (
                          <span className="label-sold bg-secondary text-white">
                            Out of Stock
                          </span>
                        )}
                        {categoryProduct.stockQuantity <= 5 && categoryProduct.inStock && (
                          <span className="label-low-stock bg-warning text-dark">
                            Low Stock
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="card-product-info">
                      <div className="box-title">
                        <div className="d-flex flex-column">
                          <p className="caption text-main-2 font-2">
                            {categoryProduct.category}
                          </p>
                          <Link
                            to={`/product-detail/${categoryProduct.id}`}
                            className="name-product body-md-2 fw-semibold text-secondary link"
                            title={categoryProduct.title}
                          >
                            {categoryProduct.title}
                          </Link>
                          {/* ✅ Brand info */}
                          {categoryProduct.brand && (
                            <p className="caption text-main-3 mt-1">
                              by {categoryProduct.brand}
                            </p>
                          )}
                        </div>
                        <div className="price-wrap fw-medium">
                          <span className="new-price price-text fw-medium mb-0">
                            ${categoryProduct.price.toFixed(2)}
                          </span>
                          {categoryProduct.oldPrice && (
                            <span className="old-price body-md-2 text-main-2 fw-normal ms-2">
                              ${categoryProduct.oldPrice.toFixed(2)}
                            </span>
                          )}
                          {/* ✅ Savings info */}
                          {categoryProduct.saveAmount && (
                            <div className="save-amount text-success caption">
                              Save ${categoryProduct.saveAmount}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* ✅ Rating and Stock Info */}
                      <div className="product-footer mt-2">
                        {categoryProduct.rating && (
                          <div className="product-rating d-flex align-items-center">
                            <ul className="list-star me-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <li key={star}>
                                  <i className={`icon-star ${star <= Math.floor(categoryProduct.rating) ? 'text-warning' : 'text-main-4'}`} />
                                </li>
                              ))}
                            </ul>
                            <span className="caption text-main-2">
                              ({categoryProduct.reviewCount || 0})
                            </span>
                          </div>
                        )}
                        
                        {/* ✅ Stock indicator */}
                        <div className="stock-info caption mt-1">
                          {categoryProduct.inStock ? (
                            <span className="text-success">
                              <i className="icon-check-circle me-1"></i>
                              {categoryProduct.stockQuantity > 10 ? 'In Stock' : `${categoryProduct.stockQuantity} left`}
                            </span>
                          ) : (
                            <span className="text-danger">
                              <i className="icon-x-circle me-1"></i>
                              Out of Stock
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center spd67" />
            </Swiper>
          </>
        )}
      </div>
    </section>
  );
}
