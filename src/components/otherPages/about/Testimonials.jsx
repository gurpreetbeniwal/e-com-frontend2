import { testimonials2 } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
export default function Testimonials() {
  return (
    <section className="tf-sp-2">
      <div className="container">
        <div className="flat-title wow fadeInUp">
          <h5 className="fw-semibold">Customer Review</h5>
          <div className="box-btn-slide relative">
            <div className="swiper-button-prev nav-swiper nav-prev-products snbp66">
              <i className="icon-arrow-left-lg" />
            </div>
            <div className="swiper-button-next nav-swiper nav-next-products snbn66">
              <i className="icon-arrow-right-lg" />
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
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            el: ".spd66",
          }}
          navigation={{
            prevEl: ".snbp66",
            nextEl: ".snbn66",
          }}
        >
          {testimonials2.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div
                className={`wg-testimonial wow fadeInUp${
                  item.wowDelay ? "" : ""
                }`}
                {...(item.wowDelay ? { "data-wow-delay": item.wowDelay } : {})}
              >
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
                        {item.verified && (
                          <p className="body-small text-main-2 fw-semibold">
                            Verified Purchase
                          </p>
                        )}
                      </li>
                    </ul>
                    <ul className="list-star">
                      {Array.from({ length: item.stars }).map(
                        (_, starIndex) => (
                          <li key={starIndex}>
                            <i className="icon-star" />
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <p className="entry_text">{item.text}</p>
                  <p className="entry_date body-small">{item.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-dot-default sw-pagination-products justify-content-center spd66" />
        </Swiper>
      </div>
    </section>
  );
}
