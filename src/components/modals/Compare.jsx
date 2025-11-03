import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useContextElement } from "@/context/Context";
import { allProducts } from "@/data/products";
export default function Compare() {
  const { removeFromCompareItem, compareItem, setCompareItem } =
    useContextElement();
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([
      ...allProducts.filter((product) => compareItem.includes(product.id)),
    ]);
  }, [compareItem]);

  return (
    <div className="offcanvas offcanvas-bottom offcanvas-compare" id="compare">
      <div className="offcanvas-content">
        <div className="header">
          <span
            className="icon-close icon-close-popup link"
            data-bs-dismiss="offcanvas"
          />
        </div>
        <div className="wrap">
          <div className="container">
            <div className="tf-compare-list">
              <h5 className="title fw-semibold">
                Compare <br className="d-none d-md-block" />
                Products
              </h5>
              {!compareItem.length ? (
                <div className="mini-compare-empty w-100 text-center">
                  <h6>Your compare is curently empty</h6>
                </div>
              ) : (
                <div className="tf-compare-wrap">
                  {items.map((product, i) => (
                    <div key={i} className="tf-compare-item">
                      <span className="btns-repeat">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_5628_27)">
                            <path
                              d="M11.334 1.33301L14.0007 3.99967L11.334 6.66634"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2 7.99951V6.66618C2 5.95893 2.28095 5.28066 2.78105 4.78056C3.28115 4.28046 3.95942 3.99951 4.66667 3.99951H14"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.66667 15.9996L2 13.3329L4.66667 10.6663"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14 9.33301V10.6663C14 11.3736 13.719 12.0519 13.219 12.552C12.7189 13.0521 12.0406 13.333 11.3333 13.333H2"
                              stroke="#181818"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath>
                              <rect
                                width={16}
                                height={16}
                                fill="white"
                                transform="translate(0 0.66626)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span
                        className="icon-close remove"
                        onClick={() => removeFromCompareItem(product.id)}
                      />
                      <Link
                        to={`/product-detail/${product.id}`}
                        className="image"
                      >
                        <img
                          className="lazyload"
                          src={product.imgSrc}
                          alt=""
                          width={500}
                          height={500}
                        />
                      </Link>
                      <div className="content">
                        <Link
                          className="text-line-clamp-2 body-md-2 fw-semibold text-secondary link"
                          to={`/product-detail/${product.id}`}
                        >
                          {product.title}
                        </Link>
                        <p className="price-wrap fw-medium">
                          <span className="new-price price-text fw-medium">
                            ${product.price.toFixed(3)}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="tf-compare-buttons">
                <div className="tf-compare-btn">
                  <Link to={`/compare`} className="tf-btn btn-gray btn-large-3">
                    <span className="text-white">Compare Products</span>
                  </Link>
                  <div
                    className="tf-btn tf-compapre-button-clear-all clear-file-delete link btn-large-3"
                    onClick={() => setCompareItem([])}
                  >
                    <span className="text-white">Clear All Products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
