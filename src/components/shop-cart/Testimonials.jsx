import { testimonials } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
export default function Testimonials() {
  return (
    <div className="themesFlat">
      <div className="container">
        <div className="tf-cart-sold">
          <div className="notification-progress">
            <div className="delivery-progress">
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress-bar" style={{ width: "50%" }} />
              </div>
              <p className="body-text-3">
                <i className="icon-delivery-2 fs-24" />
                Free shipping on all orders over
                <span className="fw-bold">$250</span>
              </p>
            </div>
          </div>
        </div>
        <Swiper
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
              spaceBetween: 30,
            },
          }}
          spaceBetween={15}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd69",
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="wg-testimonial">
                <div className="entry_image">
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="lazyload"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="content">
                  <div className="box-title">
                    <a
                      href="#"
                      className="entry_name product-title link fw-semibold"
                    >
                      {item.name}
                    </a>
                    <ul className="entry_meta">
                      <li>
                        <p className="body-small text-main-2">
                          Color: {item.color}
                        </p>
                      </li>
                      <li className="br-line" />
                      <li>
                        <p className="body-small text-main-2 fw-semibold">
                          {item.verified ? "Verified Purchase" : ""}
                        </p>
                      </li>
                    </ul>
                    <ul className="list-star">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <li key={i}>
                          <i className="icon-star" />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="entry_text">{item.text}</p>
                  <p className="entry_date body-small">{item.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd69" />
        </Swiper>
      </div>
    </div>
  );
}
