import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

import CartLength from "../common/CartLength";
import CartTotal from "../common/CartTotal";
import WishlistLength from "../common/WishlistLength";
import NavCategories from "./NavCategories";
import SearchForm from "./SearchForm";
export default function Header2() {
  return (
    <header className="tf-header style-3">
      <div className="inner-header">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-7 d-flex align-items-center">
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
            <div className="col-md-6 d-none d-md-block">
              <div className="header-center justify-content-end">
                <SearchForm parentClass="form-search-product style-3" />
                <p className="body-small text-main-2 d-none d-xl-block">
                  Popular search: Ps5 digital edition, fashion sale, macbook m1
                  pro, zenfone 3 max
                </p>
              </div>
            </div>
            <div className="col-md-3 col-5 d-flex align-items-center justify-content-end">
              <div className="header-right">
                <ul className="nav-icon style-3">
                  <li className="d-none d-xxl-block">
                    <Link to={`/wishlist`} className="nav-icon-item">
                      <span className="icon position-relative">
                        <i className="icon-hearth" />
                        <span className="count-box">
                          {" "}
                          <WishlistLength />
                        </span>
                      </span>
                      <div className="infor text-start">
                        <span className="body-text-3 text-main-2">
                          wishlist:
                        </span>
                        <h6 className="number-item fw-semibold text-main-2">
                          4 item
                        </h6>
                      </div>
                    </Link>
                  </li>
                  <li className="d-none d-xl-block">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="offcanvas"
                      className="nav-icon-item"
                    >
                      <span className="icon position-relative">
                        <i className="icon-cart" />
                        <span className="count-box">
                          <CartLength />
                        </span>
                      </span>
                      <div className="infor text-start">
                        <span className="body-text-3 text-main-2">
                          Your cart:
                        </span>
                        <h6 className="number-item text-primary fw-semibold text-main-2">
                          <CartTotal />
                        </h6>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul className="nav-icon justify-content-xl-center d-xl-none">
                  <li className="nav-account">
                    <a
                      href="#log"
                      data-bs-toggle="modal"
                      className="link nav-icon-item"
                    >
                      <span>
                        <svg
                          width={22}
                          height={23}
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
                  <li className="nav-cart">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="offcanvas"
                      className="link nav-icon-item"
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
                            d="M20.512 19.1096C18.8017 19.1096 17.4153 20.496 17.4153 22.2064C17.4153 23.9165 18.8017 25.3029 20.512 25.3029C22.2221 25.3029 23.6085 23.9165 23.6085 22.2064C23.6068 20.4969 22.2215 19.1114 20.512 19.1096ZM20.512 24.1644C19.4305 24.1644 18.5537 23.2877 18.5537 22.2064C18.5537 21.1248 19.4305 20.2481 20.512 20.2481C21.5933 20.2481 22.4701 21.1248 22.4701 22.2064C22.4701 23.2877 21.5933 24.1644 20.512 24.1644Z"
                            fill="#333E48"
                          />
                        </svg>
                      </span>
                      <p className="body-small">Your cart:</p>
                    </a>
                  </li>
                  <li className="d-flex align-items-center d-xl-none">
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
      <div className="header-bottom bg-primary d-none d-xl-block">
        <div className="container">
          <div className="header-bt-left active-container bg-primary relative">
            <NavCategories styleClass=" style-2 style-white" />
            <nav className="main-nav-menu style-white">
              <ul className="nav-list">
                <Nav />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
