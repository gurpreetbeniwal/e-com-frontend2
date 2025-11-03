import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section>
      <div className="container">
        <Link
          to={`/shop-default`}
          className="banner-image-product-2 hover-img d-block"
        >
          <div className="item-image item-1 img-style overflow-visible">
            <img
              src="/images/item/camera-2.png"
              alt=""
              className="lazyload"
              width={312}
              height={242}
            />
          </div>
          <div className="item-image item-2 img-style overflow-visible d-none d-lg-block">
            <img
              src="/images/item/camera-3.png"
              alt=""
              className="lazyload"
              width={249}
              height={167}
            />
          </div>
          <div
            className="item-banner has-bg-img"
            style={{
              backgroundImage: 'url("/images/banner/banner-2.jpg")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="inner">
              <h3 className="fw-normal text-white lh-lg-50 font-2">
                Shop and <span className="fw-bold">SAVE BIG</span>
                <br />
                on hottest camera
              </h3>
              <div className="box-sale-wrap type-3 relative">
                <p className="small-text">Save</p>
                <p className="price-text-2">$68.990</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
