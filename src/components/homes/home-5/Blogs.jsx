import { blogItems2 } from "@/data/blogs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
export default function Blogs() {
  return (
    <section className="box-btn-slide-item">
      <div className="flat-title wow fadeInUp" data-wow-delay="0s">
        <h5 className="fw-semibold">From the blog</h5>
        <div className="box-btn-slide relative">
          <div className="swiper-button-prev nav-swiper nav-prev-products snbp45">
            <i className="icon-arrow-left-lg" />
          </div>
          <div className="swiper-button-next nav-swiper nav-next-products snbn45">
            <i className="icon-arrow-right-lg" />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".snbp45",
          nextEl: ".snbn45",
        }}
        className="swiper tf-sw-products"
        spaceBetween={30}
      >
        {blogItems2.map((item, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div
              className={`news-item hover-img gap-10${
                item.hasAnimation ? " wow fadeInUp" : ""
              }`}
              {...(item.hasAnimation && { "data-wow-delay": item.wowDelay })}
            >
              <Link
                to={`/blog-detail`}
                className="entry_image img-style relative"
              >
                <img
                  src={item.imgSrc}
                  alt=""
                  className="lazyload"
                  width={426}
                  height={240}
                />
                <p className="entry_tag text-black d-block body-text-3">
                  {item.tag}
                </p>
              </Link>
              <div className="content gap-0">
                <p className="caption text-main-2">{item.date}</p>
                <Link
                  to={`/blog-detail`}
                  className="link fw-semibold body-md-2"
                >
                  {item.title}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
