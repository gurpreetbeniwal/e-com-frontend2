import React from "react";
import { Link } from "react-router-dom";

export default function Product3() {
  return (
    <section
      className="has-bg-img"
      style={{
        backgroundImage: "url(/images/banner/banner-1.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="banner-image-product hover-img">
          <Link
            to={`/shop-default`}
            className="image img-2 img-style overflow-visible relative"
          >
            <img
              src="/images/item/tivi.png"
              alt=""
              className="lazyload"
              width={994}
              height={986}
            />
            <div className="box-sale-wrap position1">
              <p className="small-text">Sale</p>
              <p className="title-sidebar-2">25%</p>
            </div>
          </Link>
          <div className="content">
            <div className="box-title">
              <h1 className="fw-normal">
                <Link to={`/shop-default`} className="link text-white">
                  GameConsole <br className="d-none d-xl-block" />
                  Destiny Special Edition
                </Link>
              </h1>
              <div className="box-price">
                <p className="old-price style-white main-title-2 fw-light">
                  $80.000
                </p>
                <h3 className="fw-semibold text-third">$60.000</h3>
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
        </div>
      </div>
    </section>
  );
}
