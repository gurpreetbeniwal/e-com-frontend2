import { blogItems4 } from "@/data/blogs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
export default function Blogs() {
  return (
    <section className="tf-sp-2">
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <h5 className="fw-semibold">News</h5>
          <div className="box-btn-slide relative">
            <div className="swiper-button-prev nav-swiper nav-prev-products snbp65">
              <i className="icon-arrow-left-lg" />
            </div>
            <div className="swiper-button-next nav-swiper nav-next-products snbn65">
              <i className="icon-arrow-right-lg" />
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            el: ".spd65",
          }}
          navigation={{
            prevEl: ".snbp65",
            nextEl: ".snbn65",
          }}
          className="swiper tf-sw-products"
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
        >
          {blogItems4.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div
                className={`news-item hover-img wow fadeInUp`}
                data-wow-delay={item.wowDelay}
              >
                <Link to={`/blog-detail`} className="entry_image img-style">
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="lazyload"
                    width={555}
                    height={312}
                  />
                </Link>
                <div className="content">
                  <div className="entry_meta">
                    <div className="tags">
                      <img
                        alt=""
                        src="/images/folder.svg"
                        width={16}
                        height={16}
                      />
                      <p className="caption fw-medium text-secondary">
                        {item.tag}
                      </p>
                    </div>
                    <div className="date">
                      <p className="caption">{item.date}</p>
                    </div>
                  </div>
                  <div className="entry_infor_news">
                    <h6>
                      <a href="#" className="link fw-semibold">
                        {item.title}
                      </a>
                    </h6>
                    <p className="subs body-text-3">{item.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd65" />
        </Swiper>
      </div>
    </section>
  );
}
