import { products6 } from "@/data/products";
import React from "react";
import { Link } from "react-router-dom";

import AddToCart from "@/components/common/AddToCart";
import AddToWishlist from "@/components/common/AddToWishlist";
import AddToQuickview from "@/components/common/AddToQuickview";
import AddToCompare from "@/components/common/AddToCompare";
export default function Hero() {
  return (
    <section
      className="has-bg-img"
      style={{ backgroundImage: "url(/images/banner/banner-6.jpg)" }}
    >
      <div className="container">
        <div className="banner-product flex-xl-nowrap justify-content-center">
          <div className="product-wrap hover-img flex-md-nowrap justify-content-center">
            <Link
              to={`/shop-default`}
              className="d-inline-flex item-product img-style"
            >
              <img
                src="/images/item/dou-headphone.png"
                alt=""
                className="lazyload"
                width={1084}
                height={808}
              />
            </Link>
            <div className="info-product text-center text-md-start">
              <div className="box-title">
                <p className="tag-new text-white text-uppercase title-sidebar">
                  New arrival
                </p>
                <h1 className="name">
                  <Link
                    to={`/shop-default`}
                    className="text-white text-uppercase link"
                  >
                    Headset &amp; <br />
                    <span className="fw-8"> Headphone </span>
                  </Link>
                </h1>
              </div>
              <div className="box-price">
                <p className="start text-white">Starting</p>
                <h1 className="price text-primary">$250</h1>
              </div>
            </div>
          </div>
          <div className="other-item flex-xl-column flex-md-row">
            {products6.map((product) => (
              <div
                className={`card-product style-row row-small-2 ${product.additionalClasses}`}
                key={product.id}
              >
                <div className="card-product-wrapper">
                  <Link
                    to={`/product-detail/${product.id}`}
                    className="product-img"
                  >
                    <img
                      className="img-product lazyload"
                      src={product.imgSrc}
                      alt="image-product"
                      width={product.width}
                      height={product.height}
                    />
                    <img
                      className="img-hover lazyload"
                      src={product.imgHover}
                      alt="image-product"
                      width={product.hoverWidth || product.width}
                      height={product.hoverHeight || product.height}
                    />
                  </Link>
                </div>
                <div className="card-product-info">
                  <div className="box-title">
                    <div className="bg-white relative z-5">
                      <p className="caption text-main-2 font-2">
                        {product.category}
                      </p>
                      <Link
                        to={`/product-detail/${product.id}`}
                        className="name-product body-md-2 fw-semibold text-secondary link"
                      >
                        {product.title}
                      </Link>
                    </div>
                    <div className="group-btn">
                      <p className="price-wrap fw-medium">
                        <span className="new-price price-text fw-medium">
                          ${product.price.toFixed(3)}
                        </span>
                        <span className="old-price body-md-2 text-main-2">
                          ${product.oldPrice.toFixed(3)}
                        </span>
                      </p>
                      <ul className="list-product-btn flex-row">
                        <li>
                          <AddToCart productId={product.id} />
                        </li>
                        <li className="wishlist">
                          <AddToWishlist productId={product.id} />
                        </li>
                        <li>
                          <AddToQuickview productId={product.id} />
                        </li>
                        <li>
                          <AddToCompare productId={product.id} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
