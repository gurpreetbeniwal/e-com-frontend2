import { categoryItems2 } from "@/data/collections";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
export default function Collections() {
  return (
    <div>
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
            992: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          spaceBetween={15}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd53",
          }}
        >
          {categoryItems2.map((item, index) => (
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
                    className={`box-title font-2 text-uppercase ${
                      item.whiteText ? "text-white" : "text-black"
                    }`}
                  >
                    <p className="product-title-2">{item.title1}</p>
                    <p className="main-title-2 fw-bold">{item.title2}</p>
                    <p className="product-title-2">{item.title3}</p>
                  </div>
                  <Link
                    to={`/shop-default`}
                    className={`tf-btn-icon ${
                      item.whiteText ? "style-white" : ""
                    }`}
                  >
                    <i className="icon-circle-chevron-right" />
                    <span className={item.whiteText ? "font-2" : ""}>
                      Shop now
                    </span>
                  </Link>
                </div>
                <div className="box-sale-wrap">
                  <p className="small-text">Sale</p>
                  <p className="title-sidebar-2">{item.sale}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-dot-default sw-pagination-categories justify-content-center spd53" />
        </Swiper>
      </div>
    </div>
  );
}
