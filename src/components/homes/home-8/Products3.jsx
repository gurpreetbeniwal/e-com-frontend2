import { products36 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
export default function Products3() {
  return (
    <section
      className="s-banner has-bg-img"
      style={{
        backgroundImage: `url(/images/banner/banner-23.jpg)`,
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="content-banner">
          <h1 className="title fs-xxl-70 text-white">
            <span className="fw-2">Game Console </span> <br />
            Destiny Special Edition
          </h1>
          <h3 className="text-third-2 fw-semibold font-2">$84.700</h3>
          <div className="box-btn">
            <Link
              to={`/shop-default`}
              className="tf-btn-icon style-white d-inline-flex"
            >
              <i className="icon-circle-chevron-right" />
              <span className="price-text lh-xl-25 font-2">Shop now</span>
            </Link>
          </div>
        </div>
        <div className="box-btn-slide-2 sw-nav-effect type-pst-2">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              el: ".spd53",
            }}
            navigation={{
              prevEl: ".snbp53",
              nextEl: ".snbn53",
            }}
            className="swiper tf-sw-products"
            breakpoints={{
              0: { slidesPerView: 1 },
              575: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
            spaceBetween={15}
          >
            {products36.map((product) => (
              <SwiperSlide className="swiper-slide" key={product.id}>
                <div className="card-product style-3 style-row type-row-3 h-100 flex-sm-row align-items-start">
                  <div className="card-product-wrapper">
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="product-img"
                    >
                      <img
                        className="img-product lazyload"
                        src={product.imgSrc}
                        alt="image-product"
                        width={500}
                        height={500}
                      />
                      <img
                        className="img-hover lazyload"
                        src={product.imgHover}
                        alt="image-product"
                        width={500}
                        height={500}
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
                          className="name-product body-md-2 fw-semibold text-secondary link line-clamp-xl-3"
                        >
                          {product.title}
                        </Link>
                      </div>
                      <p className="price-wrap fw-medium">
                        <span className="new-price price-text fw-medium">
                          ${product.price.toFixed(3)}
                        </span>
                        <span className="old-price body-md-2 text-main-2">
                          ${product.oldPrice.toFixed(3)}
                        </span>
                      </p>
                      <div className="box-btn relative z-6">
                        <Link
                          to={`/product-detail/${product.id}`}
                          className="tf-btn style-3 hover-link-icon bg-primary btn-large"
                        >
                          <span className="body-md-2 fw-semibold">
                            Shop now
                          </span>
                          <i className="icon-circle-chevron-right link-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd53" />
          </Swiper>
          <div className="d-none d-xl-flex swiper-button-prev nav-swiper nav-prev-products-2 snbp53">
            <i className="icon-arrow-left-lg" />
          </div>
          <div className="d-none d-xl-flex swiper-button-next nav-swiper nav-next-products-2 snbn53">
            <i className="icon-arrow-right-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
