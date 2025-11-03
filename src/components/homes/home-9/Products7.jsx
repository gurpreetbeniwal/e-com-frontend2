import { products43 } from "@/data/products";
import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import AddToCart from "@/components/common/AddToCart";
import AddToWishlist from "@/components/common/AddToWishlist";
import AddToQuickview from "@/components/common/AddToQuickview";
import AddToCompare from "@/components/common/AddToCompare";
export default function Products7() {
  return (
    <section className="tf-sp-2 s-banner style-2 relative">
      <div className="relative z-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-banner p-0 m-lg-0">
                <h1 className="title fs-xxl-70 text-white fw-9">
                  <span className="fw-normal">Game Console</span> <br />
                  Destiny Special Edition
                </h1>
                <h1 className="text-third-3 fw-bold price">
                  <span>$</span>85.400
                </h1>
                <div className="box-btn">
                  <a
                    href="#"
                    className="tf-btn d-inline-flex style-2 hover-link-icon btn-large-3"
                  >
                    <i className="icon-circle-chevron-right text-white fs-16 link-icon" />
                    <span className="text-white fw-semibold price-text lh-xl-25 font-2">
                      Shop now
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tf-lg-width ms-lg-auto">
                <Swiper
                  modules={[Pagination, Grid]}
                  pagination={{
                    clickable: true,
                    el: ".spd62",
                  }}
                  className="swiper tf-sw-products"
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    575: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                  grid={{
                    rows: 2,
                    fill: "row",
                  }}
                  spaceBetween={12}
                >
                  {products43.map((product) => (
                    <SwiperSlide className="swiper-slide" key={product.id}>
                      <div
                        className="card-product style-4 style-small wow fadeInUp"
                        data-wow-delay={product.delay}
                      >
                        <div className="card-product-wrapper">
                          <Link
                            to={`/product-detail/${product.id}`}
                            className="product-img"
                          >
                            <img
                              className="img-product lazyload"
                              src={product.imgSrc}
                              data-src={product.imgSrc}
                              alt="image-product"
                              width={500}
                              height={500}
                            />
                            <img
                              className="img-hover lazyload"
                              src={product.imgHover}
                              data-src={product.imgHover}
                              alt="image-product"
                              width={500}
                              height={500}
                            />
                          </Link>
                          <ul className="list-product-btn d-flex d-md-none">
                            <li>
                              <AddToCart
                                tooltipClass="tooltip-left"
                                productId={product.id}
                              />
                            </li>
                            <li className="wishlist">
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
                            <li>
                              <AddToCompare
                                productId={product.id}
                                tooltipClass="tooltip-left"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="card-product-info">
                          <div className="box-title">
                            <Link
                              to={`/product-detail/${product.id}`}
                              className="name-product body-md-2 fw-semibold text-secondary link"
                            >
                              {product.title}
                            </Link>
                            <p className="price-wrap fw-medium">
                              <span className="new-price price-text fw-medium mb-0">
                                ${product.price.toFixed(3)}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="d-flex d-lg-none sw-dot-default sw-pagination-products justify-content-center spd62" />
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tf-overlay">
        <img
          src="/images/banner/banner-27.jpg"
          alt=""
          className="lazyload effect-paralax"
          width={1920}
          height={780}
        />
      </div>
    </section>
  );
}
