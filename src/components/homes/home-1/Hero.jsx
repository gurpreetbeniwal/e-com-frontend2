import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="tf-sp-5">
      <div className="container">
        <div className="s-banner-wrapper">
          <div className="wrap-item-1 d-none d-lg-block">
            <div className="tf-nav-menu">
              <div className="main-nav">
                <h6 className="fw-semibold title">
                  <i className="icon-menu-dots" />
                  All departments
                </h6>
                <ul className="menu-category-list">
                  <li className="menu-item">
                    <a href="#" className="item-link body-text-3">
                      <span>
                        <i className="icon icon-clothing" />
                        Apparel
                      </span>
                    </a>
                    <div className="sub-menu-container d-flex">
                      <ul className="sub-menu-list">
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            New arrival
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Steall the deals
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Best sellers
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Men
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Season collection
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            This Week's Highlights
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Home wear
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Underwear
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Travel clothes
                          </a>
                        </li>
                      </ul>
                      <div className="cls-category style-abs abs-2 hover-img">
                        <Link
                          to={`/shop-default`}
                          className="img-box img-style d-block"
                        >
                          <img
                            src="/images/collection/autumn-cls.jpg"
                            alt=""
                            className="lazyload"
                            width={347}
                            height={500}
                          />
                        </Link>
                        <div className="content text-center">
                          <div className="box-title">
                            <h3 className="fw-bold text-uppercase">-60%</h3>
                            <p className="product-title-2 text-uppercase">
                              Autumn collection
                            </p>
                          </div>
                          <div className="box-btn">
                            <Link
                              to={`/shop-default`}
                              className="tf-btn btn-line-white text-main d-inline-flex"
                            >
                              <span>Shop now</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="item-link body-text-3">
                      <span>
                        <span className="icon">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g mask="url(#mask0_1739_24870)">
                              <path
                                d="M17.5037 10.9552C17.5037 15.6269 13.7165 19.4141 9.04482 19.4141C4.37311 19.4141 0.585938 15.6269 0.585938 10.9552C0.585938 6.28348 4.37311 2.49634 9.04482 2.49634"
                                stroke="black"
                                strokeMiterlimit={10}
                              />
                              <path
                                d="M10.336 10.9553C10.336 11.6694 9.75791 12.2483 9.04483 12.2483C8.33171 12.2483 7.75366 11.6694 7.75366 10.9553C7.75366 10.2412 8.33171 9.66232 9.04483 9.66232C9.75791 9.66232 10.336 10.2412 10.336 10.9553Z"
                                stroke="black"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14.6223 10.9551C14.6223 7.82548 12.2025 5.35873 9.03296 5.35873L9.04491 0.585891C14.5859 0.585891 19.4141 4.94236 19.4141 10.9551H14.6223Z"
                                stroke="black"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12.5154 10.9552C12.5154 12.8813 10.9562 14.4426 9.03282 14.4426C7.10939 14.4426 5.55017 12.8813 5.55017 10.9552C5.55017 9.02913 7.10939 7.46777 9.03282 7.46777C10.9562 7.46777 12.5154 9.02913 12.5154 10.9552Z"
                                stroke="black"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9.0448 16.6132V17.3433"
                                stroke="black"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M2.6283 10.9551H3.35837"
                                stroke="black"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4.50122 15.3274L5.01747 14.8111"
                                stroke="black"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M13.1156 14.8111L13.6318 15.3274"
                                stroke="black"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.16481 6.86035L4.64856 6.3441"
                                stroke="black"
                                strokeMiterlimit={10}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                        </span>
                        Automotive parts
                      </span>
                    </a>
                    <div className="sub-menu-container">
                      <ul className="sub-menu-list">
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Engine
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Lubricants &amp; Fluids
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Best sellers
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Cooling System
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Exhaust System
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Battery
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Interior
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="item-link body-text-3">
                      <span>
                        <i className="icon icon-beauti" />
                        Beauty &amp; personal care
                      </span>
                    </a>
                    <div className="sub-menu-container">
                      <ul className="sub-menu-list">
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Skincare
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Makeup
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Haircare
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Fragrance &amp; Deodorant
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Body Care
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="item-link body-text-3">
                      <span>
                        <i className="icon icon-computer" />
                        Consumer Electronics
                      </span>
                    </a>
                    <div className="sub-menu-container">
                      <ul className="sub-menu-list">
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Mobile Devices
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Computers
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Audio &amp; Video
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Smart Home
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="item-link body-text-3">
                      <span>
                        <i className="icon icon-sofa" />
                        Furniture
                      </span>
                    </a>
                    <div className="sub-menu-container">
                      <ul className="sub-menu-list">
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Living Room
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Dining &amp; Kitchen
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="item-link body-text-3">
                      <span>
                        <i className="icon icon-computer-wifi" />
                        Home products
                      </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="item-link body-text-3">
                      <span>
                        <i className="icon icon-machine" />
                        Machinery
                      </span>
                    </a>
                    <div className="sub-menu-container">
                      <ul className="sub-menu-list">
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Industrial{" "}
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Construction
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a href="#" className="body-text-3 link">
                            Metal &amp; Woodworking
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="item-link body-text-3">
                      <span>
                        <i className="icon icon-jewelry" />
                        Timepieces, jewelry &amp; eyewear
                      </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="item-link body-text-3">
                      <span>
                        <i className="icon icon-tool" />
                        Tool &amp; hardware
                      </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="item-link body-text-3">
                      <span>
                        <i className="icon icon-best-seller" />
                        Bestseller
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="wrap-item-2">
            <div
              className="banner-image-product-4 style-2 hover-img has-bg-img"
              style={{ backgroundImage: "url(/images/banner/banner-30.jpg)" }}
            >
              <div className="content">
                <div className="box-title">
                  <div className="d-grid gap-10">
                    <h2 className="fw-normal">
                      <Link
                        to={`/shop-default`}
                        className="link font-5 text-white"
                      >
                        The New <br />
                        Standard
                      </Link>
                    </h2>
                    <p className="title-sidebar-2 font-5 text-white">
                      Under favorable 360 cameras
                    </p>
                  </div>
                  <div className="box-price">
                    <p className="main-title-3 lh-19 text-cl-7">From</p>
                    <h1 className="fw-bold text-secondary lh-xxl-71 text-third-2">
                      $287
                    </h1>
                  </div>
                </div>
                <div className="box-btn">
                  <Link
                    to={`/shop-default`}
                    className="tf-btn-icon type-2 style-white"
                  >
                    <i className="icon-circle-chevron-right" />
                    <span>Shop now</span>
                  </Link>
                </div>
              </div>
              <Link
                to={`/shop-default`}
                className="img-style img-item overflow-visible"
              >
                <img
                  src="/images/item/tivi-3.png"
                  alt=""
                  className="lazyload"
                  width={800}
                  height={794}
                />
              </Link>
            </div>
          </div>
          <div className="wrap-item-3">
            <div className="cls-category style-abs hover-img">
              <Link to={`/shop-default`} className="img-box img-style d-block">
                <img
                  src="/images/collection/cls-category-5.jpg"
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
                <p className="title-sidebar-2">17%</p>
              </div>
            </div>
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
                <p className="title-sidebar-2">10%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
