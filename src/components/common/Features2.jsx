import { iconSlides } from "@/data/features";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features2({ fullWidth = false }) {
  return (
    <div className="tf-sp-2 pt-0">
      <div className={`container${fullWidth ? "-full" : ""}`}>
        <Swiper
          className="swiper tf-sw-iconbox"
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
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          spaceBetween={15}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spf2",
          }}
        >
          {iconSlides.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div
                className="tf-icon-box wow fadeInLeft"
                data-wow-delay={item.delay}
              >
                <div className="icon-box">
                  <i className={`${item.iconClass} text-black`} />
                </div>
                <div className="content">
                  <p className="body-text fw-semibold">{item.title}</p>
                  <p className="body-text-3 text-cl-1">
                    Velit ullamco elit et aliqua magna
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-pagination-iconbox sw-dot-default justify-content-center spf2" />
        </Swiper>
      </div>
    </div>
  );
}
