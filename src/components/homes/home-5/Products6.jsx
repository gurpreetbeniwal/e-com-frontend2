import { products22 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
import AddToCart from "@/components/common/AddToCart";
import AddToWishlist from "@/components/common/AddToWishlist";
import AddToQuickview from "@/components/common/AddToQuickview";
import AddToCompare from "@/components/common/AddToCompare";
export default function Products6() {
  // Group products into pairs for each slide
  const groupedProducts = [];
  for (let i = 0; i < products22.length; i += 2) {
    groupedProducts.push({
      id: Math.floor(i / 2) + 1,
      products: [products22[i], products22[i + 1]].filter(Boolean),
      delay: products22[i].delay || "0s",
    });
  }
  return (
    <section className="tf-sp-2 box-btn-slide-item">
      <div className="flat-title wow fadeInUp" data-wow-delay="0s">
        <h5 className="fw-semibold">Smart Home Appliances</h5>
        <div className="box-btn-slide relative">
          <div className="swiper-button-prev nav-swiper nav-prev-products snbp51">
            <i className="icon-arrow-left-lg" />
          </div>
          <div className="swiper-button-next nav-swiper nav-next-products snbn51">
            <i className="icon-arrow-right-lg" />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
          el: ".spd51",
        }}
        navigation={{
          prevEl: ".snbp51",
          nextEl: ".snbn51",
        }}
        className="swiper tf-sw-products"
        spaceBetween={15}
        breakpoints={{
          0: { slidesPerView: 1 },
          575: {
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {groupedProducts.map((slide) => (
          <SwiperSlide key={slide.id} className="swiper-slide">
            <ul
              className={`product-list-wrap wow fadeInUp`}
              data-wow-delay={slide.delay}
            >
              {slide.products.map((product) => (
                <li key={product.id}>
                  <div className="card-product style-row row-small-2">
                    <div className="card-product-wrapper">
                      <Link
                        to={`/product-detail/${product.id}`}
                        className="product-img"
                      >
                        <img
                          className="img-product lazyload"
                          src={product.imgSrc}
                          alt="image-product"
                          width={product.width}
                          height={product.height}
                        />
                        <img
                          className="img-hover lazyload"
                          src={product.imgHover}
                          alt="image-product"
                          width={product.width}
                          height={product.height}
                        />
                      </Link>
                    </div>
                    <div className="card-product-info">
                      <div className="box-title">
                        <div className="bg-white relative z-5">
                          <p className="caption text-main-2 font-2">
                            {product.category}
                          </p>
                          <Link
                            to={`/product-detail/${product.id}`}
                            className="name-product body-md-2 fw-semibold text-secondary link"
                          >
                            {product.title}
                          </Link>
                        </div>
                        <div className="group-btn">
                          <p className="price-wrap fw-medium">
                            <span className="new-price price-text fw-medium">
                              ${product.price.toFixed(3)}
                            </span>
                            <span className="old-price body-md-2 text-main-2">
                              ${product.oldPrice.toFixed(3)}
                            </span>
                          </p>
                          <ul className="list-product-btn flex-row">
                            <li>
                              <AddToCart productId={product.id} />
                            </li>
                            <li className="wishlist">
                              <AddToWishlist productId={product.id} />
                            </li>
                            <li>
                              <AddToQuickview productId={product.id} />
                            </li>
                            <li>
                              <AddToCompare productId={product.id} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </SwiperSlide>
        ))}
        <div className="sw-dot-default sw-pagination-products justify-content-center spd51" />
      </Swiper>
    </section>
  );
}
