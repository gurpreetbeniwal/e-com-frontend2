import { features } from "@/data/features";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features({
  parentClass = "tf-sp-2 pt-0",
  hacontainer = true,
}) {
  return (
    <div className={parentClass}>
      <div className={hacontainer ? "container" : ""}>
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
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd3",
          }}
        >
          {features.map((slide, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div
                className="tf-icon-box wow fadeInLeft"
                data-wow-delay={slide.delay}
              >
                <div className="icon-box">
                  <i className={`icon ${slide.icon}`} />
                </div>
                <div className="content">
                  <p className="body-text fw-semibold">{slide.title}</p>
                  <p className="body-text-3">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-pagination-iconbox sw-dot-default justify-content-center spd3" />
        </Swiper>
      </div>
    </div>
  );
}
