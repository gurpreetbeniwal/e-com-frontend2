import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { products7 } from "@/data/products";
import AddToCart from "../common/AddToCart";
import AddToWishlist from "../common/AddToWishlist";
import AddToQuickview from "../common/AddToQuickview";
import AddToCompare from "../common/AddToCompare";
export default function Search() {
  return (
    <div className="offcanvas offcanvas-top offcanvas-search" id="search">
      <div className="offcanvas-content">
        <div className="popup-header">
          <button
            className="icon-close icon-close-popup link"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="looking-for-wrap">
                <h3 className="heading fw-semibold text-center">
                  What are you looking for?
                </h3>
                <form action="#" className="form-search">
                  <fieldset>
                    <input
                      className=""
                      type="text"
                      placeholder="Search for anything"
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required=""
                    />
                  </fieldset>
                  <button type="submit" className="button-submit">
                    <i className="icon-search" />
                  </button>
                </form>
                <div className="popular-searches justify-content-md-center">
                  <span className="text fw-semibold body-text-3">
                    Popular searches:
                  </span>
                  <ul>
                    <li>
                      <a className="link body-text-3 fw-medium" href="#">
                        Featured
                      </a>
                    </li>
                    <li>
                      <a className="link body-text-3 fw-medium" href="#">
                        Trendy
                      </a>
                    </li>
                    <li>
                      <a className="link body-text-3 fw-medium" href="#">
                        New
                      </a>
                    </li>
                    <li>
                      <a className="link body-text-3 fw-medium" href="#">
                        Sale
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="popup-feature">
                <h5 className="fw-semibold mb-30">Featured Product</h5>
                <div className="box-btn-slide-2 sw-nav-effect">
                  <Swiper
                    className="swiper tf-sw-products"
                    spaceBetween={15}
                    breakpoints={{
                      0: { slidesPerView: 2 },
                      575: {
                        slidesPerView: 3,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                      },
                      992: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                      },
                    }}
                    modules={[Navigation, Pagination]}
                    pagination={{
                      clickable: true,
                      el: ".spds11",
                    }}
                    navigation={{
                      prevEl: ".snbps11",
                      nextEl: ".snbns11",
                    }}
                  >
                    {products7.map((product) => (
                      <SwiperSlide className="swiper-slide" key={product.id}>
                        <div
                          className={`card-product style-img-border ${
                            product.animation ? "wow " + product.animation : ""
                          }`}
                          data-wow-delay={product.wowDelay || undefined}
                        >
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
                                width={product.hoverWidth || product.width}
                                height={product.hoverHeight || product.height}
                              />
                            </Link>
                            {product.salePercentage && (
                              <div className="box-sale-wrap pst-default z-5">
                                <p className="small-text">Sale</p>
                                <p className="title-sidebar-2">
                                  {product.salePercentage}
                                </p>
                              </div>
                            )}
                            <ul className="list-product-btn">
                              <li>
                                <AddToCart
                                  tooltipClass="tooltip-left"
                                  productId={product.id}
                                />
                              </li>
                              <li className="d-none d-sm-block wishlist">
                                <AddToWishlist
                                  tooltipClass="tooltip-left"
                                  productId={product.id}
                                />
                              </li>
                              <li>
                                <AddToQuickview
                                  productId={product.id}
                                  tooltipClass="tooltip-left"
                                />
                              </li>
                              <li className="d-none d-sm-block">
                                <AddToCompare
                                  productId={product.id}
                                  tooltipClass="tooltip-left"
                                />
                              </li>
                            </ul>
                          </div>
                          <div className="card-product-info">
                            <div className="box-title">
                              <div className="d-flex flex-column">
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
                              <p className="price-wrap fw-medium">
                                <span className="new-price price-text fw-medium text-primary mb-0">
                                  ${product.price.toFixed(3)}
                                </span>
                                <span className="old-price body-md-2 text-main-2 fw-normal">
                                  ${product.oldPrice.toFixed(3)}
                                </span>
                              </p>
                            </div>
                            <div className="box-infor-detail">
                              <div className="product-progress-sale">
                                <div
                                  className="progress-sold progress"
                                  role="progressbar"
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  <div
                                    className="progress-bar bg-primary"
                                    style={{ width: product.progressWidth }}
                                  />
                                </div>
                                <div className="box-quantity d-flex justify-content-between">
                                  <p className="text-avaiable caption">
                                    Sold:{" "}
                                    <span className="fw-bold">
                                      {product.sold}
                                    </span>
                                  </p>
                                  <p className="text-avaiable caption">
                                    Available:{" "}
                                    <span className="fw-bold">
                                      {product.available}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="sw-dot-default sw-pagination-products justify-content-center spds11" />
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
