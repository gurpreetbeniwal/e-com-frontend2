import { rowProducts } from "@/data/products";
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
      style={{ backgroundImage: "url(/images/banner/banner-13.jpg)" }}
    >
      <div className="container">
        <div className="banner-product style-2 flex-xl-nowrap p-xl-0">
          <div className="product-wrap hover-img flex-md-nowrap">
            <a
              href="#"
              className="d-inline-flex item-product img-style"
              style={{ maxWidth: 618 }}
            >
              <img
                src="/images/item/laptop-2.png"
                alt=""
                className="lazyload"
                width={1236}
                height={1236}
              />
            </a>
            <div className="info-product">
              <div className="box-price">
                <p className="start">Starting</p>
                <h1 className="price text-secondary">$450</h1>
              </div>
              <div className="box-title">
                <p className="sub-tag title-sidebar">
                  Let power flow through you
                </p>
                <h2 className="name">
                  <a href="#" className="link font-5 fw-normal">
                    Dell G5 <br />
                    Gaming Laptop
                  </a>
                </h2>
              </div>
            </div>
          </div>
          <div className="other-item flex-xl-column flex-md-row">
            {rowProducts.map((product) => (
              <div
                key={product.id}
                className="card-product style-row row-small-2 bg-white radius-8"
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
                      width={product.width}
                      height={product.height}
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
