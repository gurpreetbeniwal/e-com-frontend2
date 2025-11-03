import React from "react";
import { Link, useLocation } from "react-router-dom";

import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";

import {
  blogMenuItems,
  demoItems,
  othersPages,
  shopDetailsPages,
  shopPages,
} from "@/data/menu";
export default function MobileMenu() {
  const { pathname } = useLocation();
  const isMenuActive = (link) => {
    return link.href?.split("/")[1] == pathname.split("/")[1];
  };
  const isMenuParentActive = (menu) => {
    return menu.some((elm) => isMenuActive(elm));
  };
  const isMenuParentActive2 = (menu) => {
    return menu.some((elm) => isMenuParentActive(elm.items));
  };

  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span
        className="icon-close btn-close-mb link"
        data-bs-dismiss="offcanvas"
      />
      <div className="logo-site">
        <Link to={`/`}>
          <img alt="" src="/images/logo/logo.png" width={185} height={41} />
        </Link>
      </div>
      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="flat-animate-tab">
            {/* <div className="flat-title-tab-nav-mobile">
              <ul className="menu-tab-line" role="tablist">
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#main-menu"
                    className="tab-link link fw-semibold active"
                    data-bs-toggle="tab"
                  >
                    Menu
                  </a>
                </li>
                <li className="br-line type-vertical bg-line h23" />
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#category"
                    className="tab-link link fw-semibold"
                    data-bs-toggle="tab"
                  >
                    Categories
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="tab-content">
              <div
                className="tab-pane active show"
                id="main-menu"
                role="tabpanel"
              >
                <div className="mb-content-top">
                  {/* <form action="#" className="form-search">
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
                  </form> */}
                  <ul>
                    <br></br>
                    <li className="nav-mb-item" >
 <a href="/" className="collapsed mb-menu-link">
          <span>Home</span>
</a>
</li>
<br></br>
<li>
 <a href="/shop" className="item-link body-md-2 fw-semibold">
          <span>Shop</span>
</a>
</li>
<br></br>
<li>
 <a href="/about" className="item-link body-md-2 fw-semibold">
          <span>About Us</span>
</a>
</li>
<br></br>
<li>
 <a href="/contact" className="item-link body-md-2 fw-semibold">
          <span>Contact Us</span>
</a>
</li>
<br></br>
<li>
 <a href="/premiummembership" className="item-link body-md-2 fw-semibold">
          <span>Premium Membership</span>
</a>
</li>
<br></br>

                  </ul>
                  {/* <ul className="nav-ul-mb" id="wrapper-menu-navigation">
                    <li
                      className={`nav-mb-item  ${
                        isMenuParentActive(demoItems) ? "active" : ""
                      } `}
                    >
                      <a
                        href="#dropdown-menu-home"
                        className="collapsed mb-menu-link"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="dropdown-menu-home"
                      >
                        <span>Home</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="dropdown-menu-home" className="collapse">
                        <ul className="sub-nav-menu">
                          {demoItems.map((item, i) => (
                            <li key={i}>
                              <Link
                                to={item.href}
                                className={`sub-nav-link ${
                                  isMenuActive(item) ? "active" : ""
                                }`}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li
                      className={`nav-mb-item  ${
                        isMenuParentActive2(shopPages) ? "active" : ""
                      } `}
                    >
                      <a
                        href="#dropdown-menu-shop"
                        className="collapsed mb-menu-link"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="dropdown-menu-shop"
                      >
                        <span>Shop</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="dropdown-menu-shop" className="collapse">
                        <ul className="sub-nav-menu">
                          {shopPages.map((items, i) => (
                            <li key={i}>
                              <a
                                href={`#shop_layout${i}`}
                                className="sub-nav-link collapsed"
                                data-bs-toggle="collapse"
                                aria-expanded="true"
                                aria-controls={`shop_layout${i}`}
                              >
                                {items.heading}
                                <span className="btn-open-sub" />
                              </a>
                              <div id={`shop_layout${i}`} className="collapse">
                                <ul className="sub-nav-menu sub-menu-level-2">
                                  {items.items.map((item, i) => (
                                    <li key={i}>
                                      <Link
                                        to={item.href}
                                        className={`sub-nav-link body-md-2 ${
                                          isMenuActive(item) ? "active" : ""
                                        }`}
                                      >
                                        <span>{item.text}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li
                      className={`nav-mb-item  ${
                        isMenuParentActive2(shopDetailsPages) ? "active" : ""
                      } `}
                    >
                      <a
                        href="#dropdown-menu-product"
                        className="collapsed mb-menu-link"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="dropdown-menu-product"
                      >
                        <span>Product</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="dropdown-menu-product" className="collapse">
                        <ul className="sub-nav-menu">
                          {shopDetailsPages.map((items, i) => (
                            <li key={i}>
                              <a
                                href={`#product_layout${i}`}
                                className="sub-nav-link collapsed"
                                data-bs-toggle="collapse"
                                aria-expanded="true"
                                aria-controls={`product_layout${i}`}
                              >
                                {items.heading}
                                <span className="btn-open-sub" />
                              </a>
                              <div
                                className="collapse"
                                id={`product_layout${i}`}
                              >
                                <ul className="sub-nav-menu sub-menu-level-2">
                                  {items.items.map((item, i) => (
                                    <li key={i}>
                                      <Link
                                        to={item.href}
                                        className={`sub-nav-link body-md-2 ${
                                          isMenuActive(item) ? "active" : ""
                                        }`}
                                      >
                                        <span>{item.text}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li
                      className={`nav-mb-item  ${
                        isMenuParentActive(blogMenuItems) ? "active" : ""
                      } `}
                    >
                      <a
                        href="#dropdown-menu-blog"
                        className="collapsed mb-menu-link"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="dropdown-menu-blog"
                      >
                        <span>Blog</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="dropdown-menu-blog" className="collapse">
                        <ul className="sub-nav-menu">
                          {blogMenuItems.map((item, i) => (
                            <li key={i}>
                              <Link
                                to={item.href}
                                className={`sub-nav-link ${
                                  isMenuActive(item) ? "active" : ""
                                }`}
                              >
                                {item.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                    <li
                      className={`nav-mb-item  ${
                        isMenuParentActive(othersPages) ? "active" : ""
                      } `}
                    >
                      <a
                        href="#dropdown-menu-page"
                        className="collapsed mb-menu-link"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="dropdown-menu-page"
                      >
                        <span>Pages</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="dropdown-menu-page" className="collapse">
                        <ul className="sub-nav-menu">
                          {othersPages.map((item, i) => (
                            <li key={i}>
                              <Link
                                to={item.href}
                                className={`sub-nav-link body-md-2 ${
                                  isMenuActive(item) ? "active" : ""
                                }`}
                              >
                                <span>{item.text}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  </ul> */}
                </div>
                <div className="mb-other-content">
                  <ul className="mb-info">
                    <li>
                      <p>
                        Address:
                        <a
                          target="_blank"
                          href="https://www.google.com/maps?q=8500LoremStreetChicago,IL55030Dolorsitamet"
                        >
                          <span className="fw-medium">
                            85 Lorem Street Chicago, IL 55030 Dolor
                          </span>
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Phone:
                        <a href="tel:+88001234567">
                          <span className="fw-medium">+8(800) 123 4567</span>
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Email:
                        <a href="mailto:onsus@support.com">
                          <span className="fw-medium">onsus@support.com</span>
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane" id="category" role="tabpanel">
                <div className="mb-content-top">
                  <ul className="nav-ul-mb">
                    <li className="nav-mb-item">
                      <a
                        href="#drd-categories-appearl"
                        className="collapsed mb-menu-link"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="drd-categories-appearl"
                      >
                        <span>Apparel</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="drd-categories-appearl" className="collapse">
                        <ul className="sub-nav-menu">
                          <li>
                            <a href="#" className="sub-nav-link">
                              New arrival
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-nav-link">
                              Steall the deals
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-nav-link">
                              Best Sellers
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-nav-link">
                              Men
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-nav-link">
                              Woman
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-nav-link">
                              Season collection
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-nav-link">
                              This Week's Highlights
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-nav-link">
                              Home wear
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-nav-link">
                              Underwear
                            </a>
                          </li>
                          <li>
                            <a href="#" className="sub-nav-link">
                              Travel clothes
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-mb-item">
                      <a href="#" className="mb-menu-link">
                        <span>Automotive Parts</span>
                      </a>
                    </li>
                    <li className="nav-mb-item">
                      <a href="#" className="mb-menu-link">
                        <span>Beauty &amp; Personal Care</span>
                      </a>
                    </li>
                    <li className="nav-mb-item">
                      <a href="#" className="mb-menu-link">
                        <span>Consumer Electronics</span>
                      </a>
                    </li>
                    <li className="nav-mb-item">
                      <a href="#" className="mb-menu-link">
                        <span>Furniture</span>
                      </a>
                    </li>
                    <li className="nav-mb-item">
                      <a href="#" className="mb-menu-link">
                        <span>Home Products</span>
                      </a>
                    </li>
                    <li className="nav-mb-item">
                      <a href="#" className="mb-menu-link">
                        <span>Machinery</span>
                      </a>
                    </li>
                    <li className="nav-mb-item">
                      <a href="#" className="mb-menu-link">
                        <span>Timepieces, Jewelry &amp; Eyewear</span>
                      </a>
                    </li>
                    <li className="nav-mb-item">
                      <a href="#" className="mb-menu-link">
                        <span>Tool &amp; Hardware</span>
                      </a>
                    </li>
                    <li className="nav-mb-item">
                      <a href="#" className="mb-menu-link">
                        <span>Bestseller</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mb-bottom">
          <div className="bottom-bar-language bar-lang">
            <div className="tf-curs">
              <CurrencySelect />
            </div>
            <div className="tf-lans">
              <LanguageSelect parentClassName="image-select center style-default type-lan" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
