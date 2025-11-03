import { categories2 } from "@/data/collections";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
export default function Collections() {
  return (
    <div className="themesFlat">
      <div className="container">
        <Swiper
          className="swiper tf-sw-categories"
          breakpoints={{
            0: { slidesPerView: 1 },
            575: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          spaceBetween={15}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd31",
          }}
        >
          {categories2.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div
                className="cls-category style-abs hover-img wow fadeInLeft"
                data-wow-delay={item.wowDelay}
              >
                <Link
                  to={`/shop-default`}
                  className="img-box img-style d-block"
                >
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="lazyload"
                    width={525}
                    height={407}
                  />
                </Link>
                <div className="content">
                  <div
                    className={`box-title font-2 ${item.textColor} text-uppercase`}
                  >
                    <p className="product-title-2">catch big</p>
                    <p className="main-title-2 fw-bold">deals</p>
                    <p className="product-title-2">{item.product}</p>
                  </div>
                  <Link
                    to={`/shop-default`}
                    className={`tf-btn-icon ${
                      item.textColor === "text-white" ? "style-white" : ""
                    }`}
                  >
                    <i className="icon-circle-chevron-right" />
                    <span className="font-2">Shop now</span>
                  </Link>
                </div>
                <div className="box-sale-wrap">
                  <p className="small-text">Sale</p>
                  <p className="title-sidebar-2">{item.sale}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-dot-default sw-pagination-categories justify-content-center spd31" />
        </Swiper>
      </div>
    </div>
  );
}
