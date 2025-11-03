import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

import SearchForm from "./SearchForm";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
import NavCategories from "./NavCategories";
export default function Header4({ fullWidth = false }) {
  return (
    <header className="tf-header">
      <div className="inner-header line-bt">
        <div className={`container${fullWidth ? "-full" : ""}`}>
          <div className="row">
            <div className=" col-lg-2 col-6 d-flex align-items-center">
              <div className="logo-site">
                <Link to={`/`}>
                  <img
                    alt="Logo"
                    src="/images/logo/logo.png"
                    width={185}
                    height={41}
                  />
                </Link>
              </div>
            </div>
            <div className=" col-lg-8 d-none d-lg-block">
              <div className="header-center">
                <SearchForm parentClass="form-search-product m-auto" />
              </div>
            </div>
            <div className=" col-lg-2 col-6 d-flex align-items-center justify-content-end">
              <div className="header-right">
                <ul className="nav-icon justify-content-xl-center">
                  <li className="nav-account">
                    <a
                      href="#log"
                      data-bs-toggle="modal"
                      className="link nav-icon-item link-fill"
                    >
                      <span>
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 22 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.9998 11.5283C5.20222 11.5283 0.485352 16.2452 0.485352 22.0428C0.485352 22.2952 0.69017 22.5 0.942518 22.5C1.19487 22.5 1.39968 22.2952 1.39968 22.0428C1.39968 16.749 5.70606 12.4426 10.9999 12.4426C16.2937 12.4426 20.6001 16.749 20.6001 22.0428C20.6001 22.2952 20.8049 22.5 21.0572 22.5C21.3096 22.5 21.5144 22.2952 21.5144 22.0428C21.5144 16.2443 16.7975 11.5283 10.9998 11.5283Z"
                            fill="#333E48"
                            stroke="#333E48"
                            strokeWidth="0.3"
                          />
                          <path
                            d="M10.9999 0.5C8.22767 0.5 5.97119 2.75557 5.97119 5.52866C5.97119 8.30174 8.22771 10.5573 10.9999 10.5573C13.772 10.5573 16.0285 8.30174 16.0285 5.52866C16.0285 2.75557 13.772 0.5 10.9999 0.5ZM10.9999 9.64303C8.73146 9.64303 6.88548 7.79705 6.88548 5.52866C6.88548 3.26027 8.73146 1.41429 10.9999 1.41429C13.2682 1.41429 15.1142 3.26027 15.1142 5.52866C15.1142 7.79705 13.2682 9.64303 10.9999 9.64303Z"
                            fill="#333E48"
                            stroke="#333E48"
                            strokeWidth="0.3"
                          />
                        </svg>
                      </span>
                      <p className="body-small">Sign in</p>
                    </a>
                  </li>
                  <li className="nav-support d-none d-xl-block">
                    <Link
                      to={`/wishlist`}
                      className="link link-fill nav-icon-item relative"
                    >
                      <span>
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.1949 2.23732C15.1929 2.22573 13.2896 3.17827 12 4.83729C10.7184 3.16693 8.80988 2.21168 6.80503 2.23732C3.0467 2.23732 0 5.53791 0 9.60943C0 16.5867 11.2405 23.3993 11.6962 23.6626C11.8801 23.7957 12.1199 23.7957 12.3038 23.6626C12.7595 23.3993 24 16.6854 24 9.60943C24 5.53791 20.9532 2.23732 17.1949 2.23732ZM12 22.3461C10.238 21.2272 1.21519 15.2702 1.21519 9.60943C1.21519 6.26499 3.71785 3.55371 6.80508 3.55371C8.69561 3.52682 10.4648 4.55986 11.4836 6.28534C11.6904 6.59433 12.0893 6.66318 12.3746 6.43905C12.4291 6.39621 12.477 6.34437 12.5164 6.28534C14.206 3.48618 17.6702 2.70077 20.2541 4.53107C21.8358 5.65155 22.7879 7.56199 22.7848 9.60937C22.7848 15.336 13.762 21.2601 12 22.3461Z"
                            fill="#333E48"
                          />
                        </svg>
                      </span>
                      <span className="count-box style-pst-2 d-none d-xxl-flex">
                        04
                      </span>
                      <p className="body-small">Wishlist</p>
                    </Link>
                  </li>
                  <li className="nav-cart">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="offcanvas"
                      className="link link-fill nav-icon-item relative"
                    >
                      <span>
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.55865 19.1096C6.8483 19.1096 5.46191 20.496 5.46191 22.2064C5.46191 23.9165 6.8483 25.3029 8.55865 25.3029C10.2688 25.3029 11.6552 23.9165 11.6552 22.2064C11.6534 20.4969 10.2681 19.1114 8.55865 19.1096ZM8.55865 24.1644C7.47712 24.1644 6.60037 23.2877 6.60037 22.2064C6.60037 21.1248 7.47712 20.2481 8.55865 20.2481C9.63996 20.2481 10.5167 21.1248 10.5167 22.2064C10.5167 23.2877 9.63996 24.1644 8.55865 24.1644Z"
                            fill="#333E48"
                          />
                          <path
                            d="M25.436 6.1144H5.33643L4.92663 3.82036C4.67403 2.40819 3.56715 1.30353 2.15453 1.05382L0.668757 0.792113C0.359017 0.736969 0.0635073 0.943536 0.00836329 1.25305C-0.0465584 1.56279 0.159787 1.8583 0.469527 1.91345L1.96086 2.17516C2.90187 2.34193 3.63853 3.07859 3.80529 4.01959L5.82027 15.387C6.05819 16.7472 7.24001 17.7393 8.62083 17.738H20.5746C21.8305 17.7418 22.9396 16.9197 23.3014 15.7172L25.9767 6.84861C26.0263 6.67562 25.995 6.48929 25.8913 6.34209C25.7831 6.19956 25.6147 6.11551 25.436 6.1144ZM22.214 15.3813C21.9992 16.1035 21.3337 16.5975 20.5804 16.5938H8.62661C7.79745 16.596 7.08769 15.9994 6.94739 15.182L5.54144 7.24707H24.6731L22.214 15.3813Z"
                            fill="#333E48"
                          />
                          <path
                            d="M20.5123 19.1096C18.8019 19.1096 17.4155 20.496 17.4155 22.2064C17.4155 23.9165 18.8019 25.3029 20.5123 25.3029C22.2224 25.3029 23.6088 23.9165 23.6088 22.2064C23.607 20.4969 22.2217 19.1114 20.5123 19.1096ZM20.5123 24.1644C19.4307 24.1644 18.554 23.2877 18.554 22.2064C18.554 21.1248 19.4307 20.2481 20.5123 20.2481C21.5936 20.2481 22.4703 21.1248 22.4703 22.2064C22.4703 23.2877 21.5936 24.1644 20.5123 24.1644Z"
                            fill="#333E48"
                          />
                        </svg>
                      </span>
                      <span className="count-box style-pst-2 d-none d-xxl-flex">
                        10
                      </span>
                      <p className="body-small">Your cart:</p>
                    </a>
                  </li>
                  <li className="d-flex align-items-center d-xl-none btn-mobile">
                    <a
                      href="#mobileMenu"
                      className="mobile-button"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobileMenu"
                    >
                      <span />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom d-none d-xl-block">
        <div className={`container${fullWidth ? "-full" : ""}`}>
          <div className="row">
            <div className="col-xxl-9 col-8">
              <div className="header-bt-left active-container">
                <NavCategories styleClass="" />
                <span className="br-line type-vertical bg-gray-2" />
                <nav className="main-nav-menu">
                  <ul className="nav-list">
                    <Nav />
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xxl-3 col-4 d-flex align-items-center justify-content-end">
              <div className="header-bt-right">
                <div className="tf-cur bar-lang type-2">
                  <div className="tf-cur-item gap-0">
                    <i className="icon icon-budget" />
                    <div className="tf-curs">
                      <CurrencySelect topStart />
                    </div>
                  </div>
                  <div className="tf-cur-item">
                    <i className="icon icon-global gap-0" />
                    <div className="tf-lans">
                      <LanguageSelect
                        topStart
                        parentClassName="image-select center style-default type-lan"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
