import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getCategoriesWithSampleImage } from "../../../api";

export default function NavCategories2({ styleClass = "" }) {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failedImages, setFailedImages] = useState(new Set());
  const navRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      console.log('🔄 Fetching categories for navigation...');
      
      const response = await getCategoriesWithSampleImage();
      console.log('📦 Nav Categories response:', response.data);
      
      if (response.data && Array.isArray(response.data)) {
        setCategories(response.data);
        console.log('✅ Nav Categories loaded:', response.data.length);
      } else {
        console.warn('⚠️ No categories data received for navigation');
        setCategories([]);
      }
    } catch (error) {
      console.error('❌ Error fetching categories for navigation:', error);
      toast.error('Failed to load categories');
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle image loading errors
  const handleImageError = (categoryId, categoryName) => {
    console.warn(`Nav image load error for category: ${categoryName}`);
    setFailedImages(prev => new Set([...prev, categoryId]));
  };

  // Get category icon based on name (fallback)
  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'electronics': 'icon-computer',
      'clothing': 'icon-clothing',
      'fashion': 'icon-clothing',
      'apparel': 'icon-clothing',
      'beauty': 'icon-beauti',
      'cosmetic': 'icon-beauti',
      'automotive': 'icon-car',
      'furniture': 'icon-sofa',
      'home': 'icon-computer-wifi',
      'house': 'icon-computer-wifi',
      'machinery': 'icon-machine',
      'jewelry': 'icon-jewelry',
      'jewellery': 'icon-jewelry',
      'tools': 'icon-tool',
      'hardware': 'icon-tool',
      'sports': 'icon-tool',
      'health': 'icon-beauti',
      'books': 'icon-computer',
      'toys': 'icon-best-seller',
      'games': 'icon-best-seller',
      'food': 'icon-best-seller',
      'drink': 'icon-best-seller',
      'phone': 'icon-computer',
      'mobile': 'icon-computer',
      'computer': 'icon-computer',
      'laptop': 'icon-computer',
      'watch': 'icon-jewelry',
      'bag': 'icon-clothing',
      'shoe': 'icon-clothing',
      'default': 'icon-best-seller'
    };

    const categoryLower = categoryName.toLowerCase();
    
    // Find matching icon
    for (const [key, icon] of Object.entries(iconMap)) {
      if (categoryLower.includes(key)) {
        return icon;
      }
    }
    
    return iconMap.default;
  };

  return (
    <div ref={navRef} className={`nav-category-wrap ${styleClass}`}>
      <div
        onClick={() => setActiveDropdown((pre) => !pre)}
        className={`nav-title btn-active hover-gray ${
          activeDropdown ? "active" : ""
        }`}
      >
        <i className="icon-menu-dots fs-20" />
        <h6 className="title fw-semibold">
          All Categories
          {/* {!loading && categories.length > 0 && (
            <small className="ms-2 text-muted">({categories.length})</small>
          )} */}
        </h6>
      </div>
      
      <nav
        className={`category-menu active-item ${
          activeDropdown ? "active" : ""
        }`}
      >
        <div className="menu-category-menu-container">
          {loading ? (
            <div className="d-flex align-items-center justify-content-center py-4">
              <div className="spinner-border spinner-border-sm text-primary me-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <span className="text-muted">Loading categories...</span>
            </div>
          ) : categories.length > 0 ? (
            <ul id="primary-menu" className="megamenu">
              {categories.slice(0, 10).map((category) => (
                <li key={category.id} className="menu-item">
                  <Link 
                    to={`/shop?category=${category.id}`}
                    onClick={() => setActiveDropdown(false)}
                    className="d-flex align-items-center"
                    title={`Browse ${category.name} products`}
                  >
                    {/* Category Image or Icon */}
                    <div 
                      className="category-icon-wrapper me-2"
                      style={{ 
                        width: '20px', 
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {category.image && !failedImages.has(category.id) ? (
                        <img 
                          src={`https://e-com.gurpreetbeniwal.com/${category.image}`}
                          alt={category.name}
                          width={20}
                          height={20}
                          style={{ 
                            objectFit: 'cover', 
                            borderRadius: '3px',
                            display: 'block'
                          }}
                          onError={() => handleImageError(category.id, category.name)}
                          onLoad={() => {
                            // Remove from failed images if it loads successfully
                            setFailedImages(prev => {
                              const newSet = new Set(prev);
                              newSet.delete(category.id);
                              return newSet;
                            });
                          }}
                        />
                      ) : (
                        <i 
                          className={`${getCategoryIcon(category.name)} fs-20`}
                          style={{ 
                            fontSize: '16px',
                            color: '#666'
                          }}
                        />
                      )}
                    </div>
                    
                    {/* Category Name */}
                    <span className="category-name">
                      {category.name}
                    </span>
                  </Link>
                </li>
              ))}
              
              {/* Show "More Categories" if there are more than 10 */}
              {categories.length > 10 && (
                <li className="menu-item border-top mt-1 pt-1">
                  <Link 
                    to="/shop"
                    onClick={() => setActiveDropdown(false)}
                    className="text-primary fw-medium d-flex align-items-center"
                  >
                    <div className="category-icon-wrapper me-2" style={{ width: '20px', height: '20px' }}>
                      <i className="icon-plus fs-16" />
                    </div>
                    <span>+{categories.length - 10} More Categories</span>
                  </Link>
                </li>
              )}
              
              {/* View All Products */}
              <li className="menu-item border-top mt-2 pt-2">
                <Link 
                  to="/shop"
                  onClick={() => setActiveDropdown(false)}
                  className="fw-bold text-secondary d-flex align-items-center"
                >
                  <div className="category-icon-wrapper me-2" style={{ width: '20px', height: '20px' }}>
                    <i className="icon-grid fs-20" style={{ fontSize: '16px' }} />
                  </div>
                  <span>View All Products</span>
                </Link>
              </li>
            </ul>
          ) : (
            <div className="text-center py-4">
              <i className="icon-alert-triangle fs-24 text-muted mb-2 d-block"></i>
              <p className="text-muted mb-2">No categories found</p>
              <Link 
                to="/shop"
                onClick={() => setActiveDropdown(false)}
                className="btn btn-sm btn-outline-primary"
              >
                Browse Products
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
