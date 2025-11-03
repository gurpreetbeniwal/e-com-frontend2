import { products48 } from "@/data/products";
import React from "react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import AddToCart from "@/components/common/AddToCart";
import AddToWishlist from "@/components/common/AddToWishlist";
import AddToQuickview from "@/components/common/AddToQuickview";
import AddToCompare from "@/components/common/AddToCompare";
export default function Products5() {
  return (
    <section className="tf-sp-2 pt-0">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <h5 className="fw-semibold">Computers &amp; Accessories</h5>
          <div className="box-btn-slide relative">
            <div className="swiper-button-prev nav-swiper nav-prev-products snbp20">
              <i className="icon-arrow-left-lg" />
            </div>
            <div className="swiper-button-next nav-swiper nav-next-products snbn20">
              <i className="icon-arrow-right-lg" />
            </div>
          </div>
        </div>
        <div className="slider-wrap style-2">
          <div
            className="width-item-1 d-none d-xl-block wow fadeInLeft"
            data-wow-delay="0s"
          >
            <div className="banner-product-3 hover-img">
              <Link to={`/shop-default`} className="image img-style h-100">
                <img
                  src="/images/section/product-16.jpg"
                  alt=""
                  className="lazyload"
                  width={601}
                  height={975}
                />
              </Link>
              <div className="content text-center">
                <div className="d-flex justify-content-center">
                  <p className="tag type-2 body-md-2 fw-bold">Baseus</p>
                </div>
                <div className="box-title">
                  <Link
                    to={`/shop-default`}
                    className="name main-title-3 fw-bold link"
                  >
                    Standard Cables for New iP 20W PD Chargers
                  </Link>
                  <p className="sub title-sidebar-2 fw-semibold">
                    High Density Braided Fast Charging Data Cable
                  </p>
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
              el: ".spd20",
            }}
            navigation={{
              prevEl: ".snbp20",
              nextEl: ".snbn20",
            }}
          >
            {products48.map((product) => (
              <SwiperSlide className="swiper-slide" key={product.id}>
                <div
                  className="card-product style-small style-img-border wow fadeInUp"
                  data-wow-delay={product.delay}
                >
                  <div className="card-product-wrapper">
                    <Link
                      to={`/product-detail/${product.id}`}
                      className="product-img"
                    >
                      <img
                        className="img-product lazyload"
                        src={product.imgSrc}
                        data-src={product.imgSrc}
                        alt="image-product"
                        width={500}
                        height={500}
                      />
                      <img
                        className="img-hover lazyload"
                        src={product.imgHover}
                        data-src={product.imgHover}
                        alt="image-product"
                        width={500}
                        height={500}
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
                      <li className="d-none d-sm-block d-xl-none d-xxl-block">
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
            <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center spd20" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
