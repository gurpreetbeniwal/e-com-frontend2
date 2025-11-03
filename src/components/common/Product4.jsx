import { featuredProducts2 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
export default function Products4() {
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
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}
          spaceBetween={15}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd4",
          }}
        >
          {featuredProducts2.map((product) => (
            <SwiperSlide key={product.id} className="swiper-slide">
              <Link
                to={`/product-detail/${product.id}`}
                className="wg-product-view style-2 hover-img d-block"
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
                <div className="content">
                  <div className="box-title">
                    <p
                      className={`tag body-md-2 fw-semibold ${product.tagColor}`}
                    >
                      {product.tag}
                    </p>
                    <h4 className={`name link ${product.textColor}`}>
                      {product.title.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </h4>
                    <p className={`caption lh-15 fw-3 ${product.textColor}`}>
                      {product.description.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                  <div className={`box-price ${product.priceColor} fw-medium`}>
                    <span className="text">$</span>
                    <span className="price">
                      {product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="sw-dot-default sw-pagination-categories justify-content-center spd4" />
        </Swiper>
      </div>
    </div>
  );
}
