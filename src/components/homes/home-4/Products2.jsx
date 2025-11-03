import { products15 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
import AddToCart from "@/components/common/AddToCart";
import AddToWishlist from "@/components/common/AddToWishlist";
import AddToQuickview from "@/components/common/AddToQuickview";
import AddToCompare from "@/components/common/AddToCompare";
export default function Products2() {
  return (
    <section className="tf-sp-2">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <h5 className="fw-semibold">Best Sellers</h5>
          <div className="box-btn-slide relative">
            <div className="swiper-button-prev nav-swiper nav-prev-products snbp41">
              <i className="icon-arrow-left-lg" />
            </div>
            <div className="swiper-button-next nav-swiper nav-next-products snbn41">
              <i className="icon-arrow-right-lg" />
            </div>
          </div>
        </div>
        <div className="slider-wrap style-3">
          <div
            className="width-item-1 banner-image-product-3 style-2 hover-img d-none d-xl-block wow fadeInLeft"
            data-wow-delay="0s"
          >
            <div className="wrap">
              <div className="image">
                <img
                  src="/images/banner/banner-14.jpg"
                  alt=""
                  className="lazyload"
                  width={578}
                  height={370}
                />
              </div>
              <div className="content">
                <div className="box-price">
                  <p className="start product-title">Price</p>
                  <p className="text-secondary fw-bold h1">$450</p>
                </div>
                <div className="box-name">
                  <p>Let power flow through you</p>
                  <a href="#" className="link h3 font-5 fw-normal lh-lg-42">
                    Dell G5 <br />
                    Gaming Laptop
                  </a>
                </div>
              </div>
            </div>
            <Link
              to={`/shop-default`}
              className="img-item img-style overflow-visible"
            >
              <img
                src="/images/item/laptop-2.png"
                alt=""
                className="lazyload"
                width={1236}
                height={1236}
              />
            </Link>
          </div>
          <Swiper
            className="width-item-2 swiper tf-sw-products"
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
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            spaceBetween={15}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              el: ".spd41",
            }}
            navigation={{
              prevEl: ".snbp41",
              nextEl: ".snbn41",
            }}
          >
            {products15.map((product) => (
              <SwiperSlide key={product.id} className="swiper-slide">
                <div
                  className={`card-product style-img-border ${
                    product.animation ? `wow ${product.animation}` : ""
                  }`}
                  {...(product.wowDelay
                    ? { "data-wow-delay": product.wowDelay }
                    : {})}
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
                        {product.oldPrice && (
                          <span className="old-price body-md-2 text-main-2 fw-normal">
                            ${product.oldPrice.toFixed(3)}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center spd41" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
