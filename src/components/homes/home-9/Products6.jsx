import { products42 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
import AddToCart from "@/components/common/AddToCart";
import AddToWishlist from "@/components/common/AddToWishlist";
import AddToQuickview from "@/components/common/AddToQuickview";
import AddToCompare from "@/components/common/AddToCompare";
export default function Products6() {
  return (
    <section className="tf-sp-2 pt-0">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <h5 className="fw-semibold">Houseware</h5>
          <div className="box-btn-slide relative">
            <div className="swiper-button-prev nav-swiper nav-prev-products snbp61">
              <i className="icon-arrow-left-lg" />
            </div>
            <div className="swiper-button-next nav-swiper nav-next-products snbn61">
              <i className="icon-arrow-right-lg" />
            </div>
          </div>
        </div>
        <div className="slider-wrap">
          <div
            className="banner-image-product-3 hover-img d-none d-xl-block wow fadeInLeft"
            data-wow-delay="0s"
          >
            <div className="wrap">
              <div className="image">
                <img
                  src="/images/banner/banner-7.jpg"
                  alt=""
                  className="lazyload"
                  width={550}
                  height={370}
                />
              </div>
              <div className="content">
                <div className="box-title">
                  <h2 className="name fw-light lh-lg-50">
                    <a href="#" className="text-white link">
                      Samsung <br />
                      8K TV
                    </a>
                  </h2>
                  <p className="sub-name h1 mb-0 text-white">70”</p>
                </div>
                <p className="caption text-white font-2">
                  For a limited time, get a free 4k TV when you join t- <br />
                  Mobile and buy an eligible Samsung smartphone.
                </p>
              </div>
            </div>
            <Link
              to={`/shop-default`}
              className="img-item img-style overflow-visible"
            >
              <img
                src="/images/item/tivi-2.png"
                alt=""
                className="lazyload"
                width={314}
                height={311}
              />
            </Link>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              el: ".spd61",
            }}
            navigation={{
              prevEl: ".snbp61",
              nextEl: ".snbn61",
            }}
            className="swiper tf-sw-products"
            breakpoints={{
              0: { slidesPerView: 2 },
              575: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            spaceBetween={15}
          >
            {products42.map((product) => (
              <SwiperSlide className="swiper-slide" key={product.id}>
                <div
                  className="card-product style-img-border wow fadeInLeft"
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
                      <li className="d-none d-sm-block">
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
            <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center spd61" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
