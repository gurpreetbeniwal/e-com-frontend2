import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination, Navigation } from "swiper/modules";
import { toast } from "react-toastify";
import { getCategoriesWithSampleImage } from "../../../api";

export default function Categories({ parentClass = "" }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failedImages, setFailedImages] = useState(new Set());

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      console.log('🔄 Fetching categories from backend...');
      
      const response = await getCategoriesWithSampleImage();
      console.log('📦 Categories response:', response.data);
      
      if (response.data && Array.isArray(response.data)) {
        const categoriesWithImages = response.data.filter(cat => cat.image !== null);
        setCategories(categoriesWithImages);
        console.log('✅ Categories loaded:', categoriesWithImages.length);
      } else {
        console.warn('⚠️ No categories data received');
        setCategories([]);
      }
    } catch (error) {
      console.error('❌ Error fetching categories:', error);
      toast.error('Failed to load categories');
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  const handleImageError = (e, categoryId, categoryName) => {
    if (!failedImages.has(categoryId)) {
      console.warn(`Image load error for category: ${categoryName}`);
      setFailedImages(prev => new Set([...prev, categoryId]));
      e.target.src = '/placeholder.jpg';
    }
  };

  if (loading) {
    return (
      <section className={parentClass}>
        <div className="container">
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading categories...</span>
            </div>
            <p className="mt-2 text-muted">Loading categories...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={parentClass}>
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <h5 className="fw-semibold">Product Category</h5>
          <div className="box-btn-slide relative">
            <div className="swiper-button-prev nav-swiper nav-prev-products">
              <i className="icon-arrow-left-lg" />
            </div>
            <div className="swiper-button-next nav-swiper nav-next-products">
              <i className="icon-arrow-right-lg" />
            </div>
          </div>
        </div>
        <div
          className="box-btn-slide-2 sw-nav-effect wow fadeInUp"
          data-wow-delay="0s"
        >
          {categories.length > 0 ? (
            <Swiper
              className="swiper tf-sw-products slider-category"
              breakpoints={{
                0: { slidesPerView: 2 },
                575: { slidesPerView: 4 },
                768: { slidesPerView: 7 },
                992: { slidesPerView: 10 },
              }}
              modules={[Pagination, Navigation]}
              pagination={{
                clickable: true,
                el: ".spd2",
              }}
              navigation={{
                prevEl: ".nav-prev-products",
                nextEl: ".nav-next-products",
              }}
              spaceBetween={10}
              loop={false}
              allowTouchMove={true}
            >
              {categories.map((category) => (
                <SwiperSlide className="swiper-slide" key={category.id}>
                  <div className="wg-cls-2 hover-img">
                    {/* ✅ Updated Link to go to shop with category filter */}
                    <Link
                      to={`/shop?category=${category.id}`}
                      className="image img-style-2 overflow-visible"
                    >
                      <span className="tf-overlay" />
                      <img 
                        src={failedImages.has(category.id) 
                          ? '/placeholder.jpg' 
                          : (category.image ? `https://e-com.gurpreetbeniwal.com/${category.image}` : '/placeholder.jpg')
                        }
                        alt={category.name} 
                        width={296} 
                        height={296}
                        onError={(e) => handleImageError(e, category.id, category.name)}
                        style={{ 
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          backgroundColor: '#f8f9fa'
                        }}
                        loading="lazy"
                      />
                    </Link>
                    {/* ✅ Updated Link to go to shop with category filter */}
                    <Link 
                      to={`/shop?category=${category.id}`}
                      className="link body-text-3"
                    >
                      {category.name}
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
              <div className="d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd2" />
            </Swiper>
          ) : (
            <div className="text-center py-4">
              <p className="text-muted">No categories available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
