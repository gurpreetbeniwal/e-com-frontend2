import { products19, products55 } from "@/data/products";
import React from "react";
import { Link } from "react-router-dom";

import AddToCart from "@/components/common/AddToCart";
import AddToWishlist from "@/components/common/AddToWishlist";
import AddToQuickview from "@/components/common/AddToQuickview";
import AddToCompare from "@/components/common/AddToCompare";
import ProductCard2 from "@/components/productCards/ProductCard2";
export default function Products3() {
  return (
    <section className="tf-sp-2 pt-0">
      <div className="flat-title pb-8 wow fadeInUp" data-wow-delay="0s">
        <h5 className="fw-semibold text-primary flat-title-has-icon">
          <span className="icon">
            <i className="icon-fire tf-ani-tada" />
          </span>
          Deal Of The Day
        </h5>
      </div>
      <div className="grid-cls grid-cls-v3">
        <div className="grid-item2 wow fadeInUp" data-wow-delay="0s">
          <ProductCard2
            parentClass="card-product style-border style-thums-2 wow fadeInUp"
            product={products55[0]}
          />
        </div>
        <div className="grid-item3 wow fadeInUp" data-wow-delay="0s">
          <ul className="product-list-wrap">
            {products19.map((product) => (
              <li key={product.id}>
                <div className="card-product style-row row-small-2">
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
