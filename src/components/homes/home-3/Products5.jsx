import { gridProducts, products55 } from "@/data/products";
import React from "react";
import { Link } from "react-router-dom";

import AddToCart from "@/components/common/AddToCart";
import AddToWishlist from "@/components/common/AddToWishlist";
import AddToQuickview from "@/components/common/AddToQuickview";
import AddToCompare from "@/components/common/AddToCompare";
import ProductCard2 from "@/components/productCards/ProductCard2";
export default function Products5() {
  return (
    <section className="tf-sp-6 position-relative">
      <div className="relative z-5">
        <div className="container">
          <div className="flat-title mb-20 wow fadeInUp" data-wow-delay="0s">
            <h5 className="fw-semibold">Hot Product</h5>
          </div>
          <div
            className="grid-cls grid-cls-v2 wow fadeInUp"
            data-wow-delay="0s"
          >
            {gridProducts.slice(0, 1).map((product) => (
              <div key={product.id} className={product.gridClass}>
                <div className="card-product style-3 style-row h-100 flex-sm-row">
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
                          className="name-product body-md-2 fw-semibold text-secondary link line-clamp-xl-3"
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
              </div>
            ))}
            <div className="grid-item2">
              <ProductCard2
                product={products55[1]}
                parentClass="card-product bg-white style-border type-bd-2 style-thums-2 h-100"
                typeClass="type-right-2"
              />
            </div>
            {gridProducts.slice(1, 4).map((product) => (
              <div key={product.id} className={product.gridClass}>
                <div className="card-product style-3 style-row h-100 flex-sm-row">
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
                          className="name-product body-md-2 fw-semibold text-secondary link line-clamp-xl-3"
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tf-overlay">
        <img
          src="/images/section/parallax-4.jpg"
          alt=""
          className="lazyload effect-paralax"
          width={1920}
          height={900}
        />
      </div>
    </section>
  );
}
