import React from "react";
import { Link } from "react-router-dom";

import CountdownTimer from "@/components/common/Countdown";
export default function Hero() {
  return (
    <section
      className="has-bg-img"
      style={{ backgroundImage: "url(/images/banner/banner-28.jpg)" }}
    >
      <div className="container">
        <div className="banner-countdown hover-img flex-xl-nowrap">
          <a href="#" className="img-style image overflow-visible">
            <img
              src="/images/item/laptop-3.png"
              alt=""
              className="lazyload"
              width={1468}
              height={1080}
            />
          </a>
          <div className="content">
            <div className="box-title text-center">
              <p className="fw-3 letter-sp-s1 price-text text-white text-uppercase">
                Best - Selling
              </p>
              <h1 className="lh-xl-71 fw-bold text-third-4">
                Alienware Area-51m R2
              </h1>
              <p className="text-white h4 lh-xl-22">New Gaming Standards</p>
            </div>
            <div className="">
              <div className="countdown-box-2">
                <div
                  className="js-countdown"
                  data-timer={102738}
                  data-labels="Days,Hours,Mins,Secs"
                >
                  <CountdownTimer style={2} />
                </div>
              </div>
            </div>
            <div className="bottom text-center">
              <p className="box-price text-white">
                <span className="price-text fw-3">Starting at</span> <br />
                <span className="price h1 fw-semibold">$2.870</span>
              </p>
              <div className="box-btn">
                <Link
                  to={`/shop-default`}
                  className="tf-btn d-inline-flex hover-link-icon bg-primary btn-large-4"
                >
                  <i className="icon-circle-chevron-right link-icon text-white" />
                  <span className="price-text lh-xl-24 fw-semibold text-white">
                    Shop now
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
