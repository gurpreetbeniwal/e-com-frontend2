import { products11 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import AddToCart from "./AddToCart";
import AddToWishlist from "./AddToWishlist";
import AddToQuickview from "./AddToQuickview";
import AddToCompare from "./AddToCompare";
export default function Products2({
  parentClass = "tf-sp-2 pt-0",
  title = "Smart Home Appliances",
}) {
  const productSlides = products11.reduce((acc, product, index) => {
    const slideIndex = Math.floor(index / 2);
    if (!acc[slideIndex]) {
      acc[slideIndex] = {
        id: slideIndex + 1,
        wowDelay: product.wowDelay,
        products: [],
      };
    }
    acc[slideIndex].products.push(product);
    return acc;
  }, []);

  return (
    <section className={parentClass}>
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <h5 className="fw-semibold">{title}</h5>
          <div className="box-btn-slide relative">
            <div className="swiper-button-prev nav-swiper nav-prev-products snbp9">
              <i className="icon-arrow-left-lg" />
            </div>
            <div className="swiper-button-next nav-swiper nav-next-products snbn9">
              <i className="icon-arrow-right-lg" />
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            el: ".spd9",
          }}
          navigation={{
            prevEl: ".snbp9",
            nextEl: ".snbn9",
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
          {productSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="swiper-slide">
              <ul
                className="product-list-wrap wow fadeInUp"
                data-wow-delay={slide.wowDelay}
              >
                {slide.products.map((product) => (
                  <li key={product.id}>
                    <div className="card-product style-row row-small-2">
                      <div className="card-product-wrapper">
                        <Link
                          to={`/product-detail/${product.id}`}
                          className="product-img"
                        >
                          <img
                            className="img-product lazyload"
                            src={product.imgSrc}
                            alt="image-product"
                            width={product.width}
                            height={product.height}
                          />
                          <img
                            className="img-hover lazyload"
                            src={product.imgHover}
                            alt="image-product"
                            width={product.width}
                            height={product.height}
                          />
                        </Link>
                      </div>
                      <div className="card-product-info">
                        <div className="box-title">
                          <div className="bg-white relative z-5">
                            <p className="caption text-main-2 font-2">
                              {product.category}
                            </p>
                            <Link
                              to={`/product-detail/${product.id}`}
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              {product.title}
                            </Link>
                          </div>
                          <div className="group-btn">
                            <p className="price-wrap fw-medium">
                              <span className="new-price price-text fw-medium">
                                ${product.price.toFixed(3)}
                              </span>
                              <span className="old-price body-md-2 text-main-2">
                                ${product.oldPrice.toFixed(3)}
                              </span>
                            </p>
                            <ul className="list-product-btn flex-row">
                              <li>
                                <AddToCart productId={product.id} />
                              </li>
                              <li className="wishlist">
                                <AddToWishlist productId={product.id} />
                              </li>
                              <li>
                                <AddToQuickview
                                  productId={product.id}
                                  tooltipClass=""
                                />
                              </li>
                              <li className="">
                                <AddToCompare productId={product.id} />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
          <div className="sw-dot-default sw-pagination-products justify-content-center spd9" />
        </Swiper>
      </div>
    </section>
  );
}
