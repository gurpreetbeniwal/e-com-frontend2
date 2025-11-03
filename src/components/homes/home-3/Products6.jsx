import { smallProducts } from "@/data/products";
import React from "react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import AddToCart from "@/components/common/AddToCart";
import AddToWishlist from "@/components/common/AddToWishlist";
import AddToQuickview from "@/components/common/AddToQuickview";
import AddToCompare from "@/components/common/AddToCompare";
export default function Products6() {
  return (
    <section className="tf-sp-2">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <h5 className="fw-semibold">Smart Home Appliances</h5>
          <div className="box-btn-slide relative">
            <div className="swiper-button-prev nav-swiper nav-prev-products snbp38">
              <i className="icon-arrow-left-lg" />
            </div>
            <div className="swiper-button-next nav-swiper nav-next-products snbn38">
              <i className="icon-arrow-right-lg" />
            </div>
          </div>
        </div>
        <div className="slider-wrap style-2">
          <div
            className="width-item-1 banner-product-2 d-none d-xl-block wow fadeInLeft"
            data-wow-delay="0s"
          >
            <a href="#" className="image h-100">
              <img
                src="/images/banner/banner-12.jpg"
                alt=""
                className="lazyload"
                width={400}
                height={650}
              />
            </a>
            <div className="content">
              <div className="box-top">
                <p
                  className="text-white body-text-3 text-uppercase fw-2"
                  style={{ letterSpacing: "9.8px" }}
                >
                  New arrival
                </p>
              </div>
              <div className="box-bottom">
                <Link
                  to={`/shop-default`}
                  className="link h3 mb-0 lh-xl-49 text-white"
                >
                  Headset &amp; <br />
                  Headphone
                </Link>
                <div className="box-price">
                  <span className="text fw-2 price-text text-white">
                    Starting
                  </span>
                  <span className="h2 mb-0 fw-bold text-price">$250</span>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            className="swiper width-item-2 tf-sw-products"
            breakpoints={{
              0: { slidesPerView: 2 },
              575: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={15}
            grid={{
              rows: 2,
              fill: "row",
            }}
            modules={[Navigation, Pagination, Grid]}
            pagination={{
              clickable: true,
              el: ".spd38",
            }}
            navigation={{
              prevEl: ".snbp38",
              nextEl: ".snbn38",
            }}
          >
            {smallProducts.map((product) => (
              <SwiperSlide key={product.id} className="swiper-slide">
                <div
                  className={`card-product style-small style-img-border ${
                    product.animation ? `wow ${product.animation}` : ""
                  }`}
                >
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
                    <ul className="list-product-btn">
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
                      <li className={product.compareClass}>
                        <AddToCompare
                          productId={product.id}
                          tooltipClass="tooltip-left"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="card-product-info">
                    <div className="box-title">
                      <div className="d-flex flex-column">
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
                      <p className="price-wrap fw-medium">
                        <span className="new-price price-text fw-medium mb-0">
                          ${product.price.toFixed(3)}
                        </span>
                        <span className="old-price body-md-2 text-main-2 fw-normal">
                          ${product.oldPrice.toFixed(3)}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center spd38" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
