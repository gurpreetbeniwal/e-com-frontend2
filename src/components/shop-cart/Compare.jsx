import React, { useEffect, useState } from "react";

import { useContextElement } from "@/context/Context";
import { allProducts } from "@/data/products";
export default function Compare() {
  const {
    removeFromCompareItem,
    compareItem,

    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([
      ...allProducts.filter((product) => compareItem.includes(product.id)),
    ]);
  }, [compareItem]);

  return (
    <div className="tf-sp-2">
      <div className="container">
        <div className="tf-compare">
          <table className="tf-table-compare">
            <tbody>
              <tr className="tf-compare-row row-info">
                <td className="tf-compare-col">
                  <h6 className="fw-semibold">Product Name</h6>
                </td>
                {items.map((product, i) => (
                  <td key={i} className="tf-compare-col tf-compare-info">
                    <div className="compare-item_info">
                      <a
                        href="#"
                        className="text-line-clamp-2 body-md-2 fw-semibold text-secondary link"
                      >
                        {product.title}
                      </a>
                      <span
                        className="icon"
                        onClick={() => removeFromCompareItem(product.id)}
                      >
                        <i className="icon-close remove link cs-pointer" />
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="tf-compare-row row-image">
                <td className="tf-compare-col">
                  <h6 className="fw-semibold">Image</h6>
                </td>
                {items.map((product, i) => (
                  <td key={i} className="tf-compare-col tf-compare-image">
                    <a href="#" className="image">
                      <img
                        src={product.imgSrc}
                        alt="Image"
                        className="lazyload"
                        width={500}
                        height={500}
                      />
                    </a>
                  </td>
                ))}
              </tr>
              <tr className="tf-compare-row">
                <td className="tf-compare-col">
                  <h6 className="fw-semibold">SKU</h6>
                </td>
                {items.map((product, i) => (
                  <td key={i} className="tf-compare-col">
                    <span>0047</span>
                  </td>
                ))}
              </tr>
              <tr className="tf-compare-row">
                <td className="tf-compare-col">
                  <h6 className="fw-semibold">Price</h6>
                </td>
                {items.map((product, i) => (
                  <td key={i} className="tf-compare-col">
                    <p className="price-wrap fw-medium flex-nowrap">
                      <span className="new-price price-text fw-medium mb-0">
                        ${product.price.toFixed(3)}
                      </span>
                      {product.oldPrice && (
                        <span className="old-price body-md-2 text-main-2 fw-normal">
                          ${product.oldPrice.toFixed(3)}
                        </span>
                      )}
                    </p>
                  </td>
                ))}
              </tr>
              <tr className="tf-compare-row">
                <td className="tf-compare-col">
                  <h6 className="fw-semibold">Dimensions</h6>
                </td>
                {items.map((product, i) => (
                  <td key={i} className="tf-compare-col">
                    <span>N/A</span>
                  </td>
                ))}
              </tr>
              <tr className="tf-compare-row">
                <td className="tf-compare-col">
                  <h6 className="fw-semibold">Add To Cart</h6>
                </td>
                {items.map((product, i) => (
                  <td key={i} className="tf-compare-col">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="offcanvas"
                      className="tf-btn btn-gray text-nowrap"
                      onClick={() => addProductToCart(product.id)}
                    >
                      <span className="text-white">
                        {isAddedToCartProducts(product.id)
                          ? "Already Added"
                          : "Add to Cart"}
                      </span>
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
