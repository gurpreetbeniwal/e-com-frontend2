import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import CountdownTimer from "@/components/common/Countdown";
import { toast } from "react-toastify";
import { getDealProducts } from "../../../../api"; // ✅ Using your API function
import { products1 } from "@/data/products";

export default function Products1() {
  const [dealProducts, setDealProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDealProducts();
  }, []);

  const fetchDealProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🔥 Fetching deal products from API...');
      console.log('🌐 API Base URL check:', import.meta.env?.VITE_API_URL || 'Using default');
      
      const response = await getDealProducts();
      console.log('📡 Raw API response:', response);
      console.log('📊 Response data:', response.data);
      
      // Handle the response based on your backend structure
      const products = response.data?.data || response.data || [];
      console.log('✅ Deal products processed:', products);
      
      setDealProducts(products);
    } catch (err) {
      console.error('❌ Detailed error:', err);
      console.error('❌ Error response:', err.response);
      console.error('❌ Error data:', err.response?.data);
      console.error('❌ Error status:', err.response?.status);
      
      setError(err.message || 'Failed to load deal products');
      
      // Show different error messages based on the error
      if (err.response?.status === 404) {
        toast.error('Deal products API endpoint not found');
      } else if (err.message.includes('Unexpected token')) {
        toast.error('Server returned invalid response. Please check the API endpoint.');
      } else {
        toast.error('Failed to load deal products');
      }
    } finally {
      setLoading(false);
    }
  };


  // Debug render - show what we have
  console.log('🎨 Rendering with:', { 
    loading, 
    error, 
    productsCount: dealProducts.length,
    products: dealProducts 
  });

    

  if (loading) {
    return (
      <section className="tf-sp-2 pt-xl-0">
        <div className="container">
          <div className="section-wrap">
            <div className="flat-title">
              <h5 className="fw-semibold text-primary flat-title-has-icon">
                <span className="icon">
                  <i className="icon-fire tf-ani-tada" />
                </span>
                Deal Of The Day
              </h5>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
              <div className="text-center">
                <div className="spinner-border text-primary mb-3" role="status">
                  <span className="visually-hidden">Loading deals...</span>
                </div>
                <p className="text-muted">Loading amazing deals...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="tf-sp-2 pt-xl-0">
        <div className="container">
          <div className="section-wrap">
            <div className="flat-title">
              <h5 className="fw-semibold text-primary flat-title-has-icon">
                <span className="icon">
                  <i className="icon-fire tf-ani-tada" />
                </span>
                Deal Of The Day
              </h5>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
              <div className="text-center">
                <div className="alert alert-danger mb-3" role="alert">
                  <h6 className="mb-2">Oops! Something went wrong</h6>
                  <p className="mb-0 small">{error}</p>
                </div>
                <button 
                  className="tf-btn btn-primary"
                  onClick={fetchDealProducts}
                >
                  <span className="text-white">Try Again</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (dealProducts.length === 0) {
    return (
      <section className="tf-sp-2 pt-xl-0">
        <div className="container">
          <div className="section-wrap">
            <div className="flat-title">
              <h5 className="fw-semibold text-primary flat-title-has-icon">
                <span className="icon">
                  <i className="icon-fire tf-ani-tada" />
                </span>
                Deal Of The Day
              </h5>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
              <div className="text-center">
                <div className="mb-4">
                  <i className="icon-tag" style={{ fontSize: '3rem', color: '#ccc' }}></i>
                </div>
                <h6 className="mb-2">No deals available</h6>
                <p className="text-muted mb-3">Check back later for amazing deals!</p>
                <button 
                  className="tf-btn btn-primary"
                  onClick={fetchDealProducts}
                >
                  <span className="text-white">Refresh</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="tf-sp-2 pt-xl-0">
      <div className="container">
        <div className="section-wrap wow fadeInUp" data-wow-delay="0s">
          <div className="flat-title">
            <h5 className="fw-semibold text-primary flat-title-has-icon">
              <span className="icon">
                <i className="icon-fire tf-ani-tada" />
              </span>
              Deal Of The Day
            </h5>
            <div className="box-btn-slide relative">
              <div className="swiper-button-prev nav-swiper nav-prev-products snbp35">
                <i className="icon-arrow-left-lg" />
              </div>
              <div className="swiper-button-next nav-swiper nav-next-products snbn35">
                <i className="icon-arrow-right-lg" />
              </div>
            </div>
          </div>
          <Swiper
            className="swiper tf-sw-products"
            spaceBetween={15}
            breakpoints={{
              0: { slidesPerView: 1 },
              575: { slidesPerView: 2 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 2, spaceBetween: 30 },
            }}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              el: ".spd35",
            }}
            navigation={{
              prevEl: ".snbp35",
              nextEl: ".snbn35",
            }}
          >
            {dealProducts.map((product) => (
              <SwiperSlide key={product.id} className="swiper-slide">
                <div className="card-product style-img-border style-row type-row-2 flex-lg-row">
                  <div className="card-product-wrapper">
                    <Link
                      to={`/product/${product.title}/${product.id}`}
                      className="product-img"
                    >
                      <img
                        className="img-product lazyload"
                        src={`https://e-com.gurpreetbeniwal.com/${product.imgSrc}`}
                        alt={product.title}
                        width={400}
                        height={400}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x400/CCCCCC/FFFFFF?text=No+Image';
                        }}
                      />
                      <img
                        className="img-hover lazyload"
                        src={`https://e-com.gurpreetbeniwal.com/${product.imgSrc}`}
                        alt={product.title || 'Product hover image'}
                        width={400}
                        height={400}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x400/CCCCCC/FFFFFF?text=No+Image';
                        }}
                      />
                    </Link>
                    {product.salePercentage && (
                      <div className="box-sale-wrap pst-default z-5">
                        <p className="small-text">Sale</p>
                        <p className="title-sidebar-2">
                          {product.salePercentage}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="card-product-info gap-xxl-51">
                    <div className="box-title">
                      <div className="bg-white relative z-5">
                        <p className="caption text-main-2 font-2">
                          {product.category || 'Electronics'}
                        </p>
                        <Link
                          to={`/product/${product.title}/${product.id}`}
                          className="name-product product-title fw-semibold text-secondary link"
                        >
                          {product.title || 'Product Name'}
                        </Link>
                      </div>
                      <p className="price-wrap fw-medium">
                        <span className="new-price price-text fw-medium text-primary mb-0">
                          ₹{parseFloat(product.price || 0).toFixed(2)}
                        </span>
                        {product.oldPrice && (
                          <span className="old-price body-md-2 text-main-2 fw-normal">
                            ₹{parseFloat(product.oldPrice).toFixed(2)}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="box-infor-detail">
                      <div className="product-progress-sale gap-0">
                        <div className="box-quantity d-flex justify-content-between">
                          <p className="text-avaiable body-small">
                            Available:{" "}
                            <span className="fw-bold">{product.available || 0}</span>
                          </p>
                          <p className="text-avaiable body-small">
                            Sold:{" "}
                            <span className="fw-bold">{product.sold || 0}</span>
                          </p>
                        </div>
                        <div
                          className="progress-sold progress style-3"
                          role="progressbar"
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="progress-bar bg-primary"
                            style={{ 
                              width: product.progressWidth || '50%' 
                            }}
                          />
                        </div>
                      </div>
                      <div className="countdown-box d-flex gap-10 flex-wrap">
                        <div className="d-flex gap-10 flex-xxl-column gap-xxl-0">
                          <h6 className="fw-semibold">Hurry Up</h6>
                          <p className="body-small text-main-2">
                            offer ends in:
                          </p>
                        </div>
                        <div
                          className="js-countdown"
                          data-timer={product.countdownTimer}
                          data-labels="Days,Hours,Mins,Secs"
                        >
                          <CountdownTimer 
                            style={2} 
                            targetDate={product.countdownTimer ? new Date(product.countdownTimer) : null}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd35" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
