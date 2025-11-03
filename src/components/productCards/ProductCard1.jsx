import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AddToCart from "../common/AddToCart";
import AddToWishlist from "../common/AddToWishlist";
import AddToQuickview from "../common/AddToQuickview";
import AddToCompare from "../common/AddToCompare";
import CountdownTimer from "../common/Countdown";
export default function ProductCard1({ product, index }) {
  const [currentImage, setCurrentImage] = useState(product.imgSrc);
  useEffect(() => {
    setCurrentImage(product.imgSrc);
  }, [product]);

  return (
    <div
      className={`card-product style-border ${
        index < 4 ? "wow fadeInLeft" : ""
      }`}
      data-wow-delay={product.wowDelay}
    >
      <div className="card-product-wrapper overflow-visible">
        <div className="product-thumb-image">
          <Link to={`/product/${product.title}/${product.id}`} className="card-image">
            <img
              alt="Image Product"
              className="lazyload img-product"
              src={currentImage}
              width={product.width}
              height={product.height}
            />
          </Link>
          <ul className="list-image-product">
            {product.thumbImages.map((thumb, thumbIndex) => (
              <li
                className={`image-swap ${thumbIndex === 0 ? "active" : ""}`}
                key={thumbIndex}
                onMouseOver={() => setCurrentImage(thumb)}
              >
                <img
                  alt="Image Product"
                  className="lazyload"
                  src={thumb}
                  width={product.width}
                  height={product.height}
                />
              </li>
            ))}
          </ul>
        </div>
        <ul className="list-product-btn top-0 end-0">
          <li>
            <AddToCart tooltipClass="tooltip-left" productId={product.id} />
          </li>
          <li className="wishlist">
            <AddToWishlist tooltipClass="tooltip-left" productId={product.id} />
          </li>
          <li>
            <AddToQuickview
              productId={product.id}
              tooltipClass="tooltip-left"
            />
          </li>
          <li className="">
            <AddToCompare productId={product.id} tooltipClass="tooltip-left" />
          </li>
        </ul>
        {product.salePercentage && (
          <div className="box-sale-wrap top-0 start-0 z-5">
            <p className="small-text">Sale</p>
            <p className="title-sidebar-2">{product.salePercentage}</p>
          </div>
        )}
      </div>
      <div className="card-product-info">
        <div className="box-title gap-xl-12">
          <div className="d-flex flex-column">
            <h6>
              <Link
                to={`/product/${product.title}/${product.id}`}
                className="name-product fw-semibold text-secondary link"
              >
                {product.title}
              </Link>
            </h6>
          </div>
          <p className="price-wrap fw-medium">
            <span className="new-price h4 fw-normal text-primary mb-0">
              {product.price.toFixed(3)}
            </span>{" "}
            {product.oldPrice && (
              <span className="old-price price-text text-main-2">
                {product.oldPrice.toFixed(3)}
              </span>
            )}
            <span className="box-sale-tag">Save: {product.saveAmount}</span>
          </p>
        </div>
        <div className="box-infor-detail gap-xl-20">
          <div className="countdown-box">
            <div
              className="js-countdown"
              data-timer={product.countdownTimer}
              data-labels="Days,Hours,Mins,Secs"
            >
              <CountdownTimer style={2} />
            </div>
          </div>
          <div className="product-progress-sale">
            <div
              className="progress-sold progress"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar bg-primary"
                style={{ width: product.progressWidth }}
              />
            </div>
            <div className="box-quantity d-flex justify-content-between">
              <p className="text-avaiable caption">
                Sold:
                <span className="fw-bold">{product.sold}</span>
              </p>
              <p className="text-avaiable caption">
                Available:
                <span className="fw-bold">{product.available}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
