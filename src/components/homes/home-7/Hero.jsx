import { products29 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
export default function Hero() {
  return (
    <section className="tf-sp-7">
      <div className="container">
        <div className="banner-image-product style-abs type-abs-2 p-0 hover-img h-100 mb-14">
          <a href="#" className="img-style d-block img-box h-100">
            <img
              src="/images/banner/banner-19.jpg"
              alt=""
              className="lazyload h-100"
              width={1490}
              height={400}
            />
          </a>
          <div className="content w-auto">
            <div className="box-title">
              <h1 className="fw-normal">
                <Link to={`/shop-default`} className="link font-5 text-white">
                  Room-Filling Sound
                </Link>
              </h1>
              <p className="main-title-3 font-5 text-white fw-3">
                Apple Homepod Mini bassup wireless speaker
              </p>
            </div>
            <div className="box-btn">
              <h1 className="price text-white fw-3">
                <span>$</span>3.490
              </h1>
              <Link
                to={`/shop-default`}
                className="tf-btn style-3 hover-link-icon bg-primary"
              >
                <span className="caption fw-bold text-uppercase">Shop now</span>
                <i className="icon-arrow-right1 link-icon" />
              </Link>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd57",
          }}
          className="swiper tf-sw-categories"
          breakpoints={{
            0: { slidesPerView: 1 },
            575: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 14,
            },
          }}
          spaceBetween={15}
        >
          {products29.map((product) => (
            <SwiperSlide key={product.id} className="swiper-slide">
              <Link
                to={`/product-detail/${product.id}`}
                className="wg-product-view hover-img d-block"
              >
                <div className="image img-style">
                  <img
                    src={product.imgSrc}
                    alt=""
                    className="lazyload"
                    width={product.width}
                    height={product.height}
                  />
                </div>
                <div
                  className={`content ${
                    product.id === 3 || product.id === 4 ? "h-100" : ""
                  }`}
                >
                  <div className="box-title">
                    <p
                      className={`name link font-5 link ${product.textColor}`}
                      dangerouslySetInnerHTML={{ __html: product.title }}
                    ></p>
                    <p className={`sub ${product.textColor}`}>
                      {product.subText}
                    </p>
                  </div>
                  <div className={`box-price ${product.textColor}`}>
                    <span className="text">From</span>
                    <span className={`price ${product.priceColor}`}>
                      ${product.price.toFixed(3)}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="sw-dot-default sw-pagination-categories justify-content-center spd57" />
        </Swiper>
      </div>
    </section>
  );
}
