import { categories } from "@/data/collections";
import React from "react";
import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <section className="tf-sp-2 pt-0">
      <div className="container">
        <Swiper
          className="swiper tf-sw-products"
          spaceBetween={15}
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
          grid={{
            rows: 2,
            fill: "row",
          }}
          modules={[Grid, Pagination]}
          pagination={{
            clickable: true,
            el: ".spd30",
          }}
        >
          {categories.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div
                className="wg-cls hover-img type-abs wow fadeInUp"
                data-wow-delay="0s"
              >
                <Link to={`/shop-default`} className="img-style d-block">
                  <img alt="" src={item.img} width={700} height={224} />
                </Link>
                <div className="content">
                  <h6 className="fw-normal">
                    <Link to={`/shop-default`} className="link">
                      {item.title}
                    </Link>
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="sw-dot-default sw-pagination-products justify-content-center spd30" />
        </Swiper>
      </div>
    </section>
  );
}
