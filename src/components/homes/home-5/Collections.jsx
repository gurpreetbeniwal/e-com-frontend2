import React from "react";
import { Link } from "react-router-dom";

export default function Collections() {
  return (
    <div className="grid-cls grid-cls-v4 tf-grid-product-2 mb-20">
      <div className="grid-item2">
        <div className="banner-image-product style-abs p-0 hover-img h-100">
          <a href="#" className="img-style d-block img-box h-100">
            <img
              src="/images/banner/banner-16.jpg"
              alt=""
              className="lazyload"
              width={1590}
              height={1100}
            />
          </a>
          <div className="content w-auto">
            <div className="box-title">
              <div>
                <p className="title-sidebar-2 font-5">
                  Let power flow through you
                </p>
                <h2 className="fw-normal">
                  <Link to={`/shop-default`} className="link font-5">
                    Amazfit GTS 3 <br />
                    Smartwatch
                  </Link>
                </h2>
              </div>
              <div className="box-price">
                <p className="main-title-3 lh-19">Price</p>
                <h1 className="fw-bold text-secondary lh-xxl-71">$450</h1>
              </div>
            </div>
            <div className="box-btn">
              <Link
                to={`/shop-default`}
                className="tf-btn style-3 hover-link-icon"
              >
                <span className="caption fw-bold text-uppercase">
                  Now available
                </span>
                <i className="icon-arrow-right1 link-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item1">
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
            <p className="title-sidebar-2">70%</p>
          </div>
        </div>
      </div>
      <div className="grid-item3">
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
  );
}
