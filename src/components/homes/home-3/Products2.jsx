import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import AddToCart from "@/components/common/AddToCart";
import AddToWishlist from "@/components/common/AddToWishlist";
import AddToQuickview from "@/components/common/AddToQuickview";
import AddToCompare from "@/components/common/AddToCompare";
import { toast } from "react-toastify";
import { getProducts } from "../../../../api"; // ✅ Using your API function

export default function Products2() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🛍️ Fetching trending products...');
      
      // Fetch products with parameters for trending/popular items
      const response = await getProducts({
        limit: 20, // Get more products for trending section
        sortBy: 'created_at',
        sortOrder: 'DESC'
      });
      
      console.log('📡 Products API response:', response);
      console.log('📦 Products data:', response.data);
      
      // Handle the response based on your backend structure
      const productsData = response.data?.data || response.data || [];
      console.log('✅ Trending products processed:', productsData);
      
      setProducts(productsData);
    } catch (err) {
      console.error('❌ Error fetching trending products:', err);
      console.error('❌ Error response:', err.response);
      console.error('❌ Error data:', err.response?.data);
      
      setError(err.message || 'Failed to load products');
      
      if (err.response?.status === 404) {
        toast.error('Products API endpoint not found');
      } else if (err.message.includes('Unexpected token')) {
        toast.error('Server returned invalid response. Please check the API endpoint.');
      } else {
        toast.error('Failed to load trending products');
      }
    } finally {
      setLoading(false);
    }
  };

  console.log('🎨 Rendering Products2 with:', { 
    loading, 
    error, 
    productsCount: products.length 
  });

  if (loading) {
    return (
      <section className="tf-sp-2">
        <div className="container">
          <div className="flat-title wow fadeInUp" data-wow-delay="0s">
            <h5 className="fw-semibold">Trending Products</h5>
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
            <div className="text-center">
              <div className="spinner-border text-primary mb-3" role="status">
                <span className="visually-hidden">Loading products...</span>
              </div>
              <p className="text-muted">Loading trending products...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="tf-sp-2">
        <div className="container">
          <div className="flat-title wow fadeInUp" data-wow-delay="0s">
            <h5 className="fw-semibold">Trending Products</h5>
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
            <div className="text-center">
              <div className="alert alert-danger mb-3" role="alert">
                <h6 className="mb-2">Unable to load products</h6>
                <p className="mb-0 small">{error}</p>
              </div>
              <button 
                className="tf-btn btn-primary"
                onClick={fetchProducts}
              >
                <span className="text-white">Try Again</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="tf-sp-2">
        <div className="container">
          <div className="flat-title wow fadeInUp" data-wow-delay="0s">
            <h5 className="fw-semibold">Trending Products</h5>
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
            <div className="text-center">
              <div className="mb-4">
                <i className="icon-shopping-bag" style={{ fontSize: '3rem', color: '#ccc' }}></i>
              </div>
              <h6 className="mb-2">No products found</h6>
              <p className="text-muted mb-3">Check back later for trending products!</p>
              <button 
                className="tf-btn btn-primary"
                onClick={fetchProducts}
              >
                <span className="text-white">Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="tf-sp-2">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <h5 className="fw-semibold">Trending Products</h5>
          <div className="box-btn-slide relative">
            <div className="swiper-button-prev nav-swiper nav-prev-products snbp36">
              <i className="icon-arrow-left-lg" />
            </div>
            <div className="swiper-button-next nav-swiper nav-next-products snbn36">
              <i className="icon-arrow-right-lg" />
            </div>
          </div>
        </div>
        <Swiper
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
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            el: ".spd36",
          }}
          navigation={{
            prevEl: ".snbp36",
            nextEl: ".snbn36",
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id} className="swiper-slide">
              <div
                className="card-product wow fadeInUp"
                data-wow-delay={`${(index % 5) * 0.1}s`}
              >
                <div className="card-product-wrapper">
                  <Link
                    to={`/product/${product.title}/${product.id}`}
                    className="product-img"
                  >
                    <img
                      className="img-product lazyload"
                      src={`http://srv1078726.hstgr.cloud:3004/${product.imgSrc}`}
                      alt={product.title || 'Product image'}
                      width={300}
                      height={300}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300/CCCCCC/FFFFFF?text=No+Image';
                      }}
                    />
                    <img
                      className="img-hover lazyload"
                      src={`http://srv1078726.hstgr.cloud:3004/${product.imgSrc}`}
                      alt={product.title || 'Product hover image'}
                      width={300}
                      height={300}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300/CCCCCC/FFFFFF?text=No+Image';
                      }}
                    />
                  </Link>
                  
                  {/* Sale badge if product has discount */}
                  {/* {product.salePercentage && (
                    <div className="box-sale-wrap pst-default z-5">
                      <p className="small-text">Sale</p>
                      <p className="title-sidebar-2">{product.salePercentage}</p>
                    </div>
                  )} */}
                  
                  {/* <ul className="list-product-btn">
                    <li>
                      <AddToCart
                        tooltipClass="tooltip-left"
                        productId={product.id}
                      />
                    </li>
                    <li className="d-none d-sm-block wishlist">
                      <AddToWishlist
                        tooltipClass="tooltip-left"
                        productId={product.id}
                      />
                    </li>
                    <li>
                      <AddToQuickview
                        productId={product.id}
                        tooltipClass="tooltip-left"
                      />
                    </li>
                    <li className="d-none d-sm-block">
                      <AddToCompare
                        productId={product.id}
                        tooltipClass="tooltip-left"
                      />
                    </li>
                  </ul> */}
                </div>
                <div className="card-product-info">
                  <div className="box-title">
                    <div className="d-flex flex-column">
                      <p className="caption text-main-2 font-2">
                        {product.category || 'Electronics'}
                      </p>
                      <Link
                        to={`/product/${product.title}/${product.id}`}
                        className="name-product body-md-2 fw-semibold text-secondary link"
                      >
                        {product.title || 'Product Name'}
                      </Link>
                    </div>
                    <p className="price-wrap fw-medium">
                      <span className="new-price price-text fw-medium mb-0">
                        ₹{parseFloat(product.price || 0).toFixed(2)}
                      </span>
                      {product.oldPrice && (
                        <span className="old-price body-md-2 text-main-2 fw-normal">
                          ₹{parseFloat(product.oldPrice).toFixed(2)}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd36" />
        </Swiper>
      </div>
    </section>
  );
}
