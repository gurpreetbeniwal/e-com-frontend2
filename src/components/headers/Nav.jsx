import React from "react";

import { Link, useLocation } from "react-router-dom";
import {
  blogMenuItems,
  demoItems,
  othersPages,
  shopDetailsPages,
  shopPages,
} from "@/data/menu";

export default function Nav() {
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
    <>
<li>
 <a href="/" className="item-link body-md-2 fw-semibold">
          <span>Home</span>
</a>
</li>
<li>
 <a href="/shop" className="item-link body-md-2 fw-semibold">
          <span>Shop</span>
</a>
</li>

<li>
 <a href="/about" className="item-link body-md-2 fw-semibold">
          <span>About Us</span>
</a>
</li>
<li>
 <a href="/contact" className="item-link body-md-2 fw-semibold">
          <span>Contact Us</span>
</a>
</li>
<li>
 <a href="/premiummembership" className="item-link body-md-2 fw-semibold">
          <span>Premium Membership</span>
</a>
</li>



      <li
        className={`nav-item ${
          isMenuParentActive(demoItems) ? "active" : ""
        }  pst-unset`}
      >
        {/* <a href="#" className="item-link link body-md-2 fw-semibold">
          <span>Home</span>
          <i className="icon icon-arrow-down" />
        </a> */}
        <div className="sub-menu-container mega-menu mega-home">
          <div className="container">
            <ul className="row-demo">
              {demoItems.map((item) => (
                <li
                  key={item.id}
                  className={`demo-item ${isMenuActive(item) ? "active" : ""}`}
                >
                  <Link to={item.href}>
                    <div className="demo-image relative">
                      <img
                        src={item.imageSrc}
                        alt=""
                        className="lazyload"
                        width={273}
                        height={300}
                      />
                      <div className="demo-label">
                        {item.labels.map((label, index) => (
                          <span key={index} className={label.className || ""}>
                            {label.text}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="demo-name">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            {/* <div class="view-all-demo text-center">
                                <a href="#modalDemo" data-bs-toggle="modal"
                                    class="tf-btn d-inline-flex">
                                    <span class="text-white">View All Demos</span>
                                </a>
                            </div> */}
          </div>
        </div>
      </li>
      <li
        className={`nav-item ${isMenuParentActive2(shopPages) ? "active" : ""}`}
      >
        {/* <a href="#" className="item-link body-md-2 fw-semibold">
          <span>Shop</span>
          <i className="icon icon-arrow-down" />
        </a> */}
        <div className="sub-menu-container mega-menu text-nowrap">
          <div className="wrapper-sub-menu">
            {shopPages.map((menu) => (
              <div key={menu.id} className="mega-menu-item">
                <p className="menu-heading body-small">{menu.heading}</p>
                <ul className="menu-list">
                  {menu.items.map((item) => (
                    <li
                      key={item.id}
                      className={` ${isMenuActive(item) ? "active" : ""}`}
                    >
                      <Link to={item.href} className="body-md-2 link">
                        <span>{item.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </li>
      <li
        className={`nav-item ${
          isMenuParentActive2(shopDetailsPages) ? "active" : ""
        }`}
      >
        {/* <a href="#" className="item-link body-md-2 fw-semibold">
          <span>Product</span>
          <i className="icon icon-arrow-down" />
        </a> */}
        <div className="sub-menu-container mega-menu text-nowrap">
          <div className="wrapper-sub-menu">
            {shopDetailsPages.map((menu) => (
              <div key={menu.id} className="mega-menu-item">
                <p className="menu-heading body-small">{menu.heading}</p>
                <ul className="menu-list">
                  {menu.items.map((item) => (
                    <li
                      key={item.id}
                      className={` ${isMenuActive(item) ? "active" : ""}`}
                    >
                      <Link to={item.href} className="body-md-2 link">
                        <span>{item.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </li>
      <li
        className={`nav-item ${
          isMenuParentActive(blogMenuItems) ? "active" : ""
        }`}
      >
        {/* <a href="#" className="item-link body-md-2 fw-semibold">
          <span>Blog</span>
          <i className="icon icon-arrow-down" />
        </a> */}
        <div className="sub-menu-container">
          <ul className="sub-menu-list">
            {blogMenuItems.map((item) => (
              <li
                key={item.id}
                className={` ${isMenuActive(item) ? "active" : ""}`}
              >
                <Link to={item.href} className="body-md-2 link">
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
      <li
        className={`nav-item relative ${
          isMenuParentActive(othersPages) ? "active" : ""
        }`}
      >
        {/* <a href="#" className="item-link body-md-2 fw-semibold">
          <span>Page</span>
          <i className="icon icon-arrow-down" />
        </a> */}
        <div className="sub-menu-container">
          <ul className="sub-menu-list">
            {othersPages.map((item) => (
              <li
                key={item.id}
                className={` ${isMenuActive(item) ? "active" : ""}`}
              >
                <Link to={item.href} className="body-md-2 link">
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
}
