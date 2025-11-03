import { products24 } from "@/data/products";
import React from "react";
import { Link } from "react-router-dom";

import AddToCart from "@/components/common/AddToCart";
import AddToWishlist from "@/components/common/AddToWishlist";
import AddToQuickview from "@/components/common/AddToQuickview";
import AddToCompare from "@/components/common/AddToCompare";
export default function Hero() {
  return (
    <section
      className="has-bg-img tf-sp-5"
      style={{ backgroundImage: "url(/images/banner/banner-17.jpg)" }}
    >
      <div className="container">
        <div className="banner-product style-3 p-0 flex-md-nowrap">
          <div className="product-wrap">
            <div className="content">
              <div className="box-title">
                <h1 className="font-5 text-cl-5">
                  Xiaomi <br />
                  Redmi Note 10 Pro
                </h1>
                <p className="property main-title-3">
                  Display: 6.7-inch AMOLED screen <br />
                  Resolution: 2400 x 1080 FHD+ 395 PPI
                </p>
              </div>
              <h1 className="fw-bold text-secondary">$798.00</h1>
            </div>
            <div className="box-btn">
              <Link
                to={`/shop-default`}
                className="tf-btn style-3 hover-link-icon bg-primary"
              >
                <span className="caption fw-bold text-uppercase">Shop now</span>
                <i className="icon-arrow-right1 link-icon" />
              </Link>
            </div>
          </div>
          <div className="other-item">
            {products24.map((product) => (
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
