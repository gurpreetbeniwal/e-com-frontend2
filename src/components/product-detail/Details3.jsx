import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider3 from "./sliders/Slider3";
import ProductChoice from "./ProductChoice";

const SERVER_URL = "https://e-com.gurpreetbeniwal.com";

export default function Details3({ product }) {
  console.log("🛍️ Details3 received product:", product);

  // ✅ Simple state to track selected variant
  const [selectedVariant, setSelectedVariant] = useState(null);

  // Initialize with first variant
  useEffect(() => {
    if (product && product.variants && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <section>
        <div className="tf-main-product section-image-zoom">
          <div className="container">
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
              <div className="text-center">
                <div className="spinner-border text-primary mb-3" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p>Loading details...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ✅ Get current variant info
  const currentVariant = selectedVariant || (product.variants?.[0]);
  const currentPrice = currentVariant ? parseFloat(currentVariant.price).toFixed(2) : 'N/A';
  const currentStock = currentVariant ? currentVariant.stock_quantity : 0;
  const currentSKU = currentVariant ? currentVariant.sku : 'N/A';
  
  // Calculate old price for discount display
  const oldPrice = currentVariant ? (parseFloat(currentVariant.price) * 1.2).toFixed(2) : null;
  
  const features = product.description 
    ? product.description.includes('\n') 
      ? product.description.split('\n').filter(line => line.trim() !== '') 
      : [product.description]
    : ['No description available'];

  // ✅ Simple callback for variant change
  const handleVariantChange = (variant) => {
    console.log("🔄 Variant selected:", variant);
    setSelectedVariant(variant);
  };

  return (
    <section>
      <div className="tf-main-product section-image-zoom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tf-product-media-wrap thumbs-left sticky-top">
                <div className="thumbs-slider">
                  <Slider3 
                    media={product.thumbImages || []} 
                    serverUrl={SERVER_URL} 
                    productName={product.name}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tf-product-info-wrap position-relative">
                <div className="tf-zoom-main" />
                <div className="tf-product-info-list style-2">
                  <div className="tf-product-info-content">
                    <div className="infor-heading">
                      <p className="caption">
                        Category:
                        <Link 
                          to={`/shop?category=${product.category_id || ''}`} 
                          className="link text-secondary"
                        >
                          &nbsp;{product.Category?.name || product.category || 'Uncategorized'}
                        </Link>
                      </p>
                      <h5 className="product-info-name fw-semibold">
                        {product.title || product.name || 'Product Name'}
                      </h5>
                      <ul className="product-info-rate-wrap">
                        <li className="star-review">
                          <ul className="list-star">
                            <li><i className="icon-star" /></li>
                            <li><i className="icon-star" /></li>
                            <li><i className="icon-star" /></li>
                            <li><i className="icon-star" /></li>
                            <li><i className="icon-star text-main-4" /></li>
                          </ul>
                          <p className="caption text-main-2">
                            Reviews ({product.variants?.length || 0} variants)
                          </p>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="infor-center">
                      {/* ✅ Shows selected variant price */}
                      <div className="product-info-price">
                        <h4 className="text-primary">₹{currentPrice}</h4>
                        {oldPrice && currentPrice !== 'N/A' && (
                          <span className="price-text text-main-2 old-price">₹{oldPrice}</span>
                        )}
                      </div>
                      
                      <div className="product-delivery">
                        <p><i className="icon-delivery-2" />Free shipping</p>
                      </div>
                      
                      {/* ✅ Shows selected variant stock */}
                      <div className="product-stock">
                        {/* <p className={`caption ${currentStock > 0 ? 'text-success' : 'text-danger'}`}>
                          <i className={`icon ${currentStock > 0 ? 'icon-check' : 'icon-close'}`} />
                          {currentStock > 0 
                            ? `In Stock (${currentStock} available)` 
                            : 'Out of Stock'}
                        </p> */}
                      </div>
                    </div>
                    
                    <ul className="product-fearture-list">
                      <li>
                        <p className="body-md-2 fw-semibold">Brand</p>
                        <span className="body-text-3">{product.brand || 'Generic'}</span>
                      </li>
                      {/* ✅ Shows selected variant SKU */}
                      <li>
                        <p className="body-md-2 fw-semibold">SKU</p>
                        <span className="body-text-3">{currentSKU}</span>
                      </li>
                      <li>
                        <p className="body-md-2 fw-semibold">Product Code</p>
                        <span className="body-text-3">{product.slug}</span>
                      </li>
                    </ul>
                    
                    <div className="product-variant-selection">
                      {/* ✅ Pass callback to get selected variant */}
                      <ProductChoice 
                        product={product} 
                        onVariantChange={handleVariantChange}
                        selectedVariant={selectedVariant}
                      />
                    </div>
                    
                    <div className="infor-bottom">
                      <h6 className="fw-semibold">About this item</h6>
                      <ul className="product-about-list">
                        {features.map((feature, index) => (
                          <li key={index}>
                            <p className="body-text-3">{feature.trim()}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
