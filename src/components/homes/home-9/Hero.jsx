import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
export default function Hero() {
  return (
    <section
      className="tf-sp-4 has-bg-img"
      style={{
        backgroundImage: "url(/images/banner/banner-25.jpg)",
        backgroundPosition: "bottom",
      }}
    >
      <div className="container">
        <div className="grid-cls grid-cls-v5 grid-banner">
          <div className="grid-item1">
            <div
              className="banner-image-product-4 hover-img has-bg-img"
              style={{
                backgroundImage: "url(/images/banner/banner-29.jpg)",
              }}
            >
              <div className="content">
                <div className="box-title">
                  <div>
                    <p className="title-sidebar-2 font-5 text-white">
                      Let power flow through you
                    </p>
                    <h2 className="fw-normal">
                      <Link
                        to={`/shop-default`}
                        className="link font-5 text-white"
                      >
                        Amazfit GTS 3 <br />
                        Smartwatch
                      </Link>
                    </h2>
                  </div>
                  <div className="box-price">
                    <p className="main-title-3 lh-19 text-cl-7">Price</p>
                    <h1 className="fw-bold text-secondary lh-xxl-71 text-third-2">
                      $450
                    </h1>
                  </div>
                </div>
                <div className="box-btn">
                  <Link
                    to={`/shop-default`}
                    className="tf-btn style-3 hover-link-icon bg-white"
                  >
                    <span className="caption fw-bold text-uppercase text-secondary">
                      Now available
                    </span>
                    <i className="icon-arrow-right1 link-icon text-secondary" />
                  </Link>
                </div>
              </div>
              <Link
                to={`/shop-default`}
                className="img-style img-item overflow-visible"
              >
                <img
                  src="/images/item/dou-clock.png"
                  alt=""
                  className="lazyload"
                  width={1342}
                  height={1092}
                />
              </Link>
            </div>
          </div>
          <div className="grid-item2 d-none d-xl-block">
            <div
              className="cls-product has-bg-img hover-img"
              style={{
                backgroundImage: "url(/images/banner/banner-10.jpg)",
              }}
            >
              <div className="content">
                <div className="box-title">
                  <p className="font-4 text-uppercase text-white mb-xl--5 title-sidebar lh-xl-22">
                    Exclusive
                  </p>
                  <p className="font-4 fw-bold text-uppercase text-white main-title-3">
                    Black panther
                  </p>
                  <p className="font-4 text-uppercase text-white title-sidebar lh-xl-22">
                    Controlller
                  </p>
                </div>
                <div className="box-btn">
                  <a
                    href="#"
                    className="tf-btn d-inline-flex style-2 hover-link-icon"
                  >
                    <span className="text-white fw-bold small-text text-uppercase">
                      Now available
                    </span>
                    <i className="icon-arrow-right1 text-white fs-12 link-icon" />
                  </a>
                </div>
              </div>
              <a href="#" className="d-inline-flex w-100 img-style">
                <img
                  src="/images/item/controller.png"
                  alt=""
                  className="lazyload"
                  width={688}
                  height={688}
                />
              </a>
            </div>
          </div>
          <div className="grid-item3 d-none d-xl-block">
            <div
              className="cls-product style-2 has-bg-img hover-img"
              style={{
                backgroundImage: "url(/images/banner/banner-11.jpg)",
              }}
            >
              <div className="content">
                <div className="box-title">
                  <p
                    className="font-5 text-uppercase text-white caption lh-xl-14 fw-light"
                    style={{ letterSpacing: "4.2px" }}
                  >
                    New arival
                  </p>
                  <p className="font-5 fw-medium text-uppercase text-white main-title-2 lh-xl-31 mb-xl--5">
                    Headphone
                  </p>
                  <p className="font-5 text-uppercase text-white body-small lh-16">
                    Today’s super offer
                  </p>
                </div>
                <div className="box-price">
                  <p className="font-5 fw-light text-white">
                    <span className="text">Form</span>
                    <span className="fw-medium h3 mb-0 text-third-2 lh-xl-49">
                      $1.399
                    </span>
                  </p>
                </div>
                <div className="box-btn">
                  <a
                    href="#"
                    className="tf-btn d-inline-flex style-2 hover-link-icon"
                  >
                    <span className="text-white fw-bold small-text">
                      Order Now
                    </span>
                    <i className="icon-arrow-right1 text-white fs-12 link-icon" />
                  </a>
                </div>
              </div>
              <a href="#" className="d-inline-flex w-100 img-style">
                <img
                  src="/images/item/headphone.png"
                  alt=""
                  className="lazyload"
                  width={808}
                  height={808}
                />
              </a>
            </div>
          </div>
          <div className="grid-item4 d-none d-xl-block">
            <div className="cls-category style-abs hover-img">
              <Link to={`/shop-default`} className="img-box img-style d-block">
                <img
                  src="/images/collection/cls-category-6.jpg"
                  alt=""
                  className="lazyload"
                  width={540}
                  height={398}
                />
              </Link>
              <div className="content">
                <div className="box-title">
                  <p className="text-white product-title-2 text-uppercase">
                    catch big
                  </p>
                  <p className="text-white main-title-2 text-uppercase fw-bold">
                    deals
                  </p>
                  <p className="text-white product-title-2 text-uppercase">
                    on the cameras
                  </p>
                </div>
                <Link to={`/shop-default`} className="tf-btn-icon style-white">
                  <i className="icon-circle-chevron-right" />
                  <span>Shop now</span>
                </Link>
              </div>
              <div className="box-sale-wrap">
                <p className="small-text">Sale</p>
                <p className="title-sidebar-2">70%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sw-cls d-block d-xl-none">
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
                spaceBetween: 16,
              },
            }}
            spaceBetween={15}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spd57",
            }}
          >
            {/* item 1 */}
            <SwiperSlide className="swiper-slide">
              <div
                className="cls-product has-bg-img hover-img justify-content-between"
                style={{
                  backgroundImage: "url(/images/banner/banner-10.jpg)",
                }}
              >
                <div className="content">
                  <div className="box-title">
                    <p className="font-4 text-uppercase text-white mb-xl--5 title-sidebar lh-xl-22">
                      Exclusive
                    </p>
                    <p className="font-4 fw-bold text-uppercase text-white main-title-3">
                      Black panther
                    </p>
                    <p className="font-4 text-uppercase text-white title-sidebar lh-xl-22">
                      Controlller
                    </p>
                  </div>
                  <div className="box-btn">
                    <a
                      href="#"
                      className="tf-btn d-inline-flex style-2 hover-link-icon"
                    >
                      <span className="text-white fw-bold small-text text-uppercase">
                        Now available
                      </span>
                      <i className="icon-arrow-right1 text-white fs-12 link-icon" />
                    </a>
                  </div>
                </div>
                <a href="#" className="d-inline-flex w-100 img-style img-item">
                  <img
                    src="/images/item/controller.png"
                    alt=""
                    className="lazyload"
                    width={688}
                    height={688}
                  />
                </a>
              </div>
            </SwiperSlide>
            {/* item 2 */}
            <SwiperSlide className="swiper-slide">
              <div
                className="cls-product style-2 has-bg-img hover-img justify-content-between"
                style={{
                  backgroundImage: "url(/images/banner/banner-11.jpg)",
                }}
              >
                <div className="content">
                  <div className="box-title">
                    <p
                      className="font-5 text-uppercase text-white caption lh-xl-14 fw-light"
                      style={{ letterSpacing: "4.2px" }}
                    >
                      New arival
                    </p>
                    <p className="font-5 fw-medium text-uppercase text-white main-title-2 lh-xl-31 mb-xl--5">
                      Headphone
                    </p>
                    <p className="font-5 text-uppercase text-white body-small lh-16">
                      Today’s super offer
                    </p>
                  </div>
                  <div className="box-price">
                    <p className="font-5 fw-light text-white">
                      <span className="text">Form</span>
                      <span className="fw-medium h3 mb-0 text-third-2 lh-xl-49">
                        $1.399
                      </span>
                    </p>
                  </div>
                  <div className="box-btn">
                    <a
                      href="#"
                      className="tf-btn d-inline-flex style-2 hover-link-icon"
                    >
                      <span className="text-white fw-bold small-text">
                        Order Now
                      </span>
                      <i className="icon-arrow-right1 text-white fs-12 link-icon" />
                    </a>
                  </div>
                </div>
                <a href="#" className="d-inline-flex w-100 img-style img-item">
                  <img
                    src="/images/item/headphone.png"
                    alt=""
                    className="lazyload"
                    width={808}
                    height={808}
                  />
                </a>
              </div>
            </SwiperSlide>
            {/* item 3 */}
            <SwiperSlide className="swiper-slide">
              <div className="cls-category style-abs hover-img radius-8 overflow-hidden">
                <Link
                  to={`/shop-default`}
                  className="img-box img-style d-block"
                >
                  <img
                    src="/images/collection/cls-category-6.jpg"
                    alt=""
                    className="lazyload"
                    width={540}
                    height={398}
                  />
                </Link>
                <div className="content">
                  <div className="box-title">
                    <p className="text-white product-title-2 text-uppercase">
                      catch big
                    </p>
                    <p className="text-white main-title-2 text-uppercase fw-bold">
                      deals
                    </p>
                    <p className="text-white product-title-2 text-uppercase">
                      on the cameras
                    </p>
                  </div>
                  <Link
                    to={`/shop-default`}
                    className="tf-btn-icon style-white"
                  >
                    <i className="icon-circle-chevron-right" />
                    <span>Shop now</span>
                  </Link>
                </div>
                <div className="box-sale-wrap">
                  <p className="small-text">Sale</p>
                  <p className="title-sidebar-2">70%</p>
                </div>
              </div>
            </SwiperSlide>

            <div className="d-flex d-xl-none sw-dot-default sw-pagination-products justify-content-center spd57" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
