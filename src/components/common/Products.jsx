import { products4 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
import AddToCart from "./AddToCart";
import AddToWishlist from "./AddToWishlist";
import AddToQuickview from "./AddToQuickview";
import AddToCompare from "./AddToCompare";
export default function Products({ parentClass = "tf-sp-2" }) {
  return (
    <section className={parentClass}>
      <div className="container">
        <div className="tf-grid-product sliders">
          <div className="tf-grid-product-item box-btn-slide-item">
            <div className="flat-title wow fadeInUp" data-wow-delay="0s">
              <h5 className="fw-semibold">Top 20</h5>
              <div className="box-btn-slide relative">
                <div className="swiper-button-prev nav-swiper nav-prev-products snbp5">
                  <i className="icon-arrow-left-lg" />
                </div>
                <div className="swiper-button-next nav-swiper nav-next-products snbn5">
                  <i className="icon-arrow-right-lg" />
                </div>
              </div>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: ".spd5",
              }}
              navigation={{
                prevEl: ".snbp5",
                nextEl: ".snbn5",
              }}
              className="swiper tf-sw-products"
              spaceBetween={20}
            >
              <SwiperSlide className="swiper-slide">
                <ul className="product-list-wrap">
                  {products4.slice(0, 3).map((product) => (
                    <li
                      className="wow fadeInUp"
                      data-wow-delay={product.wowDelay}
                      key={product.id}
                    >
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
                                <li>
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

              <SwiperSlide className="swiper-slide">
                <ul className="product-list-wrap">
                  {products4.slice(3, 6).map((product) => (
                    <li
                      className="wow fadeInUp"
                      data-wow-delay={product.wowDelay}
                      key={product.id}
                    >
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
                                <li>
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

              <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center spd5" />
            </Swiper>
          </div>
          <div className="tf-grid-product-item box-btn-slide-item">
            <div className="flat-title wow fadeInUp" data-wow-delay="0s">
              <h5 className="fw-semibold">Featured Products</h5>
              <div className="box-btn-slide relative">
                <div className="swiper-button-prev nav-swiper nav-prev-products snbp6">
                  <i className="icon-arrow-left-lg" />
                </div>
                <div className="swiper-button-next nav-swiper nav-next-products snbn6">
                  <i className="icon-arrow-right-lg" />
                </div>
              </div>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: ".spd6",
              }}
              navigation={{
                prevEl: ".snbp6",
                nextEl: ".snbn6",
              }}
              className="swiper tf-sw-products"
              spaceBetween={20}
            >
              <SwiperSlide className="swiper-slide">
                <ul className="product-list-wrap">
                  {products4.slice(3, 6).map((product) => (
                    <li
                      className="wow fadeInUp"
                      data-wow-delay={product.wowDelay}
                      key={product.id}
                    >
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
                                <li>
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
              </SwiperSlide>{" "}
              <SwiperSlide className="swiper-slide">
                <ul className="product-list-wrap">
                  {products4.slice(0, 3).map((product) => (
                    <li
                      className="wow fadeInUp"
                      data-wow-delay={product.wowDelay}
                      key={product.id}
                    >
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
                                <li>
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
              <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center spd6" />
            </Swiper>
          </div>
          <div className="tf-grid-product-item box-btn-slide-item">
            <div className="flat-title wow fadeInUp" data-wow-delay="0s">
              <h5 className="fw-semibold">Top Selling Product</h5>
              <div className="box-btn-slide relative">
                <div className="swiper-button-prev nav-swiper nav-prev-products snbp7">
                  <i className="icon-arrow-left-lg" />
                </div>
                <div className="swiper-button-next nav-swiper nav-next-products snbn7">
                  <i className="icon-arrow-right-lg" />
                </div>
              </div>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: ".spd7",
              }}
              navigation={{
                prevEl: ".snbp7",
                nextEl: ".snbn7",
              }}
              className="swiper tf-sw-products"
              spaceBetween={20}
            >
              <SwiperSlide className="swiper-slide">
                <ul className="product-list-wrap">
                  {products4.slice(0, 3).map((product) => (
                    <li
                      className="wow fadeInUp"
                      data-wow-delay={product.wowDelay}
                      key={product.id}
                    >
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
                                <li>
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

              <SwiperSlide className="swiper-slide">
                <ul className="product-list-wrap">
                  {products4.slice(3, 6).map((product) => (
                    <li
                      className="wow fadeInUp"
                      data-wow-delay={product.wowDelay}
                      key={product.id}
                    >
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
                                <li>
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

              <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center spd7" />
            </Swiper>
          </div>
          <div className="tf-grid-product-item box-btn-slide-item">
            <div className="flat-title wow fadeInUp" data-wow-delay="0s">
              <h5 className="fw-semibold">On-sale Product</h5>
              <div className="box-btn-slide relative">
                <div className="swiper-button-prev nav-swiper nav-prev-products snbp8">
                  <i className="icon-arrow-left-lg" />
                </div>
                <div className="swiper-button-next nav-swiper nav-next-products snbn8">
                  <i className="icon-arrow-right-lg" />
                </div>
              </div>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: ".spd8",
              }}
              navigation={{
                prevEl: ".snbp8",
                nextEl: ".snbn8",
              }}
              className="swiper tf-sw-products"
              spaceBetween={20}
            >
              <SwiperSlide className="swiper-slide">
                <ul className="product-list-wrap">
                  {products4.slice(3, 6).map((product) => (
                    <li
                      className="wow fadeInUp"
                      data-wow-delay={product.wowDelay}
                      key={product.id}
                    >
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
                                <li>
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
              </SwiperSlide>{" "}
              <SwiperSlide className="swiper-slide">
                <ul className="product-list-wrap">
                  {products4.slice(0, 3).map((product) => (
                    <li
                      className="wow fadeInUp"
                      data-wow-delay={product.wowDelay}
                      key={product.id}
                    >
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
                                <li>
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
              <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center spd8" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
