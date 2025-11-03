import React from "react";
import { Link } from "react-router-dom";

export default function Banner3() {
  return (
    <div>
      <Link
        to={`/shop-default`}
        className="image wow fadeInUp radius-8 overflow-hidden"
        data-wow-delay="0s"
      >
        <img
          src="/images/section/product-7.jpg"
          alt=""
          className="lazyload"
          width={1764}
          height={375}
        />
      </Link>
    </div>
  );
}
