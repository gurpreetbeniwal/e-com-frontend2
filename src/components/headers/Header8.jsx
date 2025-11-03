import React from "react";
import { Link } from "react-router-dom";

import SearchForm from "./SearchForm";
import CartLength from "../common/CartLength";
import WishlistLength from "../common/WishlistLength";
import CompareLength from "../common/CompareLength";
export default function Header8() {
  return (
    <header className="tf-header style-5">
      <div className="inner-header bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-md-3 col-7 d-flex align-items-center">
              <div className="logo-site">
                <Link to={`/`}>
                  <img
                    alt="Logo"
                    src="/images/logo/logo-white.svg"
                    width={185}
                    height={41}
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-md-6 d-none d-md-block">
              <div className="header-center justify-content-center gap-10">
                <a
                  href="#mobileMenu"
                  className="btn-open-nav text-white link d-none d-xl-flex"
                  data-bs-toggle="offcanvas"
                  aria-controls="mobileMenu"
                >
                  <i className="icon-menu-dots fs-20" />
                </a>
                <SearchForm parentClass="form-search-product style-3 bg-white" />
              </div>
            </div>
            <div className="col-xl-3 col-md-3 col-5 d-flex align-items-center justify-content-end">
              <div className="header-right">
                <ul className="nav-icon style-2">
                  <li className="d-none d-sm-block">
                    <a href="#compare" data-bs-toggle="offcanvas">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.85714 10.4286L4.42857 13.8572L1 10.4286"
                          stroke="#ffffff"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.1429 15.625L21.5714 12.1964L25 15.625"
                          stroke="#ffffff"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 20.7142C7 19.2941 5.84874 18.1428 4.42858 18.1428C3.00841 18.1428 1.85715 19.2941 1.85715 20.7142C1.85715 22.1344 3.00841 23.2856 4.42858 23.2856C5.84874 23.2856 7 22.1344 7 20.7142Z"
                          stroke="#ffffff"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M24.1429 5.28575C24.1429 3.86559 22.9916 2.71432 21.5714 2.71432C20.1513 2.71432 19 3.86559 19 5.28575C19 6.70591 20.1513 7.85718 21.5714 7.85718C22.9916 7.85718 24.1429 6.70591 24.1429 5.28575Z"
                          stroke="#ffffff"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.42856 13L4.42856 8.5C4.42856 7.64752 4.76721 6.82995 5.37 6.22716C5.9728 5.62436 6.79036 5.28571 7.64284 5.28571L19 5.28571"
                          stroke="#ffffff"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.5714 13.0535L21.5714 17.5535C21.5714 18.406 21.2328 19.2236 20.63 19.8264C20.0272 20.4292 19.2096 20.7678 18.3571 20.7678L7 20.7678"
                          stroke="#ffffff"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="count-box">
                        {" "}
                        <CompareLength />
                      </span>
                    </a>
                  </li>
                  <li className="d-none d-sm-block">
                    <Link to={`/wishlist`} className="d-flex">
                      <i className="icon-hearth text-white fs-26 link" />
                      <span className="count-box">
                        {" "}
                        <WishlistLength />
                      </span>
                    </Link>
                  </li>
                  <li className="d-none d-sm-block">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="offcanvas"
                      className="d-flex"
                    >
                      <i className="icon-cart text-white fs-26 link" />
                      <span className="count-box">
                        <CartLength />
                      </span>
                    </a>
                  </li>
                  <li className="btn-mobile d-flex d-xl-none align-items-center">
                    <a
                      href="#mobileMenu"
                      className="mobile-button p-0"
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
    </header>
  );
}
