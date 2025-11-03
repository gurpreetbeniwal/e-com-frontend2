import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { toast } from "react-toastify";
import { addToCart } from "../../../api";

export default function Quickview({ quickViewItem }) {
  const [quickviewImages, setQuickviewImages] = useState([
    "/images/product/product-thumb/quickview-1.jpg",
    "/images/product/product-thumb/quickview-2.jpg",
    "/images/product/product-thumb/quickview-3.jpg",
    "/images/product/product-thumb/quickview-4.jpg",
    "/images/product/product-thumb/quickview-5.jpg",
  ]);
  const [thumbSwiper, setThumbSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    if (quickViewItem) {
      // Set images from product
      if (quickViewItem.images && quickViewItem.images.length > 0) {
        setQuickviewImages(quickViewItem.images);
      } else if (quickViewItem.imgSrc) {
        setQuickviewImages([quickViewItem.imgSrc, ...quickviewImages.slice(1)]);
      }

      // Set first variant as selected
      if (quickViewItem.variants && quickViewItem.variants.length > 0) {
        setSelectedVariant(quickViewItem.variants[0]);
      }
      
      // Reset quantity when item changes
      setQuantity(1);
    }
  }, [quickViewItem]);

  const currentVariant = selectedVariant || quickViewItem?.variants?.[0];
  const stockQuantity = currentVariant?.stock_quantity || currentVariant?.stock || 0;
  const maxQuantity = Math.min(stockQuantity, 99);
  const isInStock = stockQuantity > 0;

  // Handle variant selection
  const handleVariantChange = (variantId) => {
    const variant = quickViewItem.variants.find(v => v.id === parseInt(variantId));
    if (variant) {
      setSelectedVariant(variant);
      setQuantity(1); // Reset quantity when variant changes
    }
  };

  // Open cart modal function (same as ProductChoice)
  const openCartModal = () => {
    try {
      const cartTrigger = document.querySelector('[href="#shoppingCart"][data-bs-toggle="offcanvas"]');
      
      if (cartTrigger) {
        cartTrigger.click();
        console.log('✅ Cart opened using header trigger method');
      } else {
        console.warn('⚠️ Cart trigger not found in header');
        toast.info('Cart updated! Click the cart icon in the header to view.');
      }
    } catch (error) {
      console.error('❌ Error opening cart modal:', error);
      toast.info('Item added! Check your cart in the header.');
    }
  };

  // Handle Add to Cart
  const handleAddToCart = async (e) => {
    e.preventDefault();
    
    if (!currentVariant) {
      toast.error('Please select a variant');
      return;
    }

    if (!isInStock) {
      toast.error('This variant is out of stock');
      return;
    }

    if (quantity < 1 || quantity > maxQuantity) {
      toast.error(`Quantity must be between 1 and ${maxQuantity}`);
      return;
    }

    try {
      setAddingToCart(true);

      const response = await addToCart({
        product_variant_id: currentVariant.id,
        quantity: quantity
      });

      if (response.data.success) {
        toast.success(`Added ${quantity} item(s) to cart!`);
        
        // Trigger cart update event
        window.dispatchEvent(new CustomEvent('cartUpdated', {
          detail: { 
            action: 'add',
            cartCount: response.data.cartCount,
            addedItem: {
              productName: quickViewItem.name || quickViewItem.title,
              variantSku: currentVariant.sku,
              quantity: quantity,
              price: currentVariant.price
            }
          }
        }));

        // Auto-open cart modal
        setTimeout(() => {
          openCartModal();
        }, 300);

        // Close quick view modal
        const modalElement = document.getElementById('quickView');
        if (modalElement && window.bootstrap) {
          const modal = window.bootstrap.Modal.getInstance(modalElement);
          if (modal) modal.hide();
        }

      } else {
        toast.error(response.data.message || 'Failed to add to cart');
      }
    } catch (error) {
      console.error('❌ Error adding to cart:', error);
      
      if (error.response?.status === 401) {
        toast.error('Please login to add items to cart');
      } else if (error.response?.status === 400) {
        toast.error(error.response.data?.message || 'Cannot add item to cart');
      } else {
        toast.error('Failed to add item to cart');
      }
    } finally {
      setAddingToCart(false);
    }
  };

  if (!quickViewItem) return null;

  return (
    <div
      className="modal fade modalCentered modal-def modal-quick-view"
      id="quickView"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content flex-md-row">
          <span
            className="icon-close icon-close-popup link"
            data-bs-dismiss="modal"
          />
          <div className="quickview-image">
            <div className="product-thumb-slider">
              <Swiper
                modules={[Navigation, Thumbs]}
                navigation={{
                  prevEl: ".snbpqv",
                  nextEl: ".snbnqv",
                }}
                className="swiper tf-product-view-main"
                thumbs={{ swiper: thumbSwiper }}
              >
                {quickviewImages.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <Link
                      to={`/product-detail/${quickViewItem.id}`}
                      className="d-block tf-image-view"
                    >
                      <img
                        src={elm}
                        alt=""
                        className="lazyload"
                        width={900}
                        height={1000}
                        onError={(e) => {
                          e.target.src = '/placeholder.jpg';
                        }}
                      />
                    </Link>
                  </SwiperSlide>
                ))}

                <div className="swiper-button-prev nav-swiper-2 single-slide-prev snbpqv" />
                <div className="swiper-button-next nav-swiper-2 single-slide-next snbnqv" />
              </Swiper>
              <Swiper
                className="swiper tf-product-view-thumbs"
                data-direction="horizontal"
                onSwiper={setThumbSwiper}
                {...{
                  direction: "horizontal",
                  spaceBetween: 10,
                  slidesPerView: "auto",
                  freeMode: true,
                  watchSlidesProgress: true,
                  observer: true,
                  observeParents: true,
                  nested: true,
                  breakpoints: {
                    0: {
                      direction: "horizontal",
                    },
                  },
                }}
                modules={[FreeMode, Thumbs]}
              >
                {quickviewImages.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="item">
                      <img alt="" src={elm} width={900} height={1000} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="quickview-info-wrap">
            <div className="quickview-info-inner">
              <div className="tf-product-info-content">
                <div className="infor-heading">
                  <p className="caption">
                    Categories:
                    <Link to={`/shop-default`} className="link text-secondary">
                      {quickViewItem.category || "Consumer Electronics"}
                    </Link>
                  </p>
                  <h5 className="product-info-name fw-semibold">
                    <Link
                      to={`/product-detail/${quickViewItem.id}`}
                      className="link"
                    >
                      {quickViewItem.title || quickViewItem.name ||
                        `Elite Gourmet EKT1001B Electric BPA-Free Glass Kettle,
                      Cordless 360° Base`}
                    </Link>
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
                      <p className="caption text-main-2">Reviews (1.738)</p>
                    </li>
                    <li>
                      <p className="caption text-main-2">Sold: 349</p>
                    </li>
                    <li className="d-flex">
                      <Link
                        to={`/shop-default`}
                        className="caption text-secondary link"
                      >
                        View shop
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="infor-center">
                  <div className="product-info-price">
                    <h4 className="text-primary">
                      ₹{(currentVariant?.price || quickViewItem.price || 0).toFixed(2)}
                    </h4>
                    {quickViewItem.oldPrice && (
                      <span className="price-text text-main-2 old-price">
                        ₹{quickViewItem.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Variant Selection */}
                  {quickViewItem.variants && quickViewItem.variants.length > 0 && (
                    <div className="variant-selection mb-3">
                      <p className="body-md-2 fw-semibold mb-2">Select Variant:</p>
                      <select 
                        className="form-select"
                        value={selectedVariant?.id || ''}
                        onChange={(e) => handleVariantChange(e.target.value)}
                        style={{ fontSize: '14px' }}
                      >
                        {quickViewItem.variants.map((variant) => {
                          const variantStock = variant.stock_quantity || variant.stock || 0;
                          return (
                            <option key={variant.id} value={variant.id}>
                              {variant.sku} - ₹{parseFloat(variant.price).toFixed(2)}
                              {variantStock <= 0 && ' - Out of Stock'}
                              {variantStock > 0 && variantStock <= 5 && ` - Only ${variantStock} left`}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  )}

                  {/* Stock Status */}
                  {currentVariant && (
                    <div className="stock-status mb-3">
                      <p className="body-md-2 fw-semibold">Stock Status:</p>
                      <span className={`badge ${isInStock ? 'bg-success' : 'bg-danger'}`}>
                        {isInStock ? `${stockQuantity} in stock` : 'Out of Stock'}
                      </span>
                    </div>
                  )}

                  <ul className="product-fearture-list">
                    <li>
                      <p className="body-md-2 fw-semibold">SKU</p>
                      <span className="body-text-3">{currentVariant?.sku || 'N/A'}</span>
                    </li>
                    <li>
                      <p className="body-md-2 fw-semibold">Brand</p>
                      <span className="body-text-3">{quickViewItem.brand || 'Elite Gourmet'}</span>
                    </li>
                    <li>
                      <p className="body-md-2 fw-semibold">Capacity</p>
                      <span className="body-text-3">1 Liters</span>
                    </li>
                    <li>
                      <p className="body-md-2 fw-semibold">Material</p>
                      <span className="body-text-3">Glass</span>
                    </li>
                  </ul>
                </div>
                <div className="infor-bottom">
                  <h6 className="fw-semibold">About this item</h6>
                  <div className="product-description">
                    {quickViewItem.description ? (
                      <p className="body-text-3">{quickViewItem.description}</p>
                    ) : (
                      <ul className="product-about-list">
                        <li><p className="body-text-3">Here's the quickest way to enjoy your delicious hot tea every single day.</p></li>
                        <li><p className="body-text-3">100% BPA - Free premium design meets excellent</p></li>
                        <li><p className="body-text-3">So easy convenient that everyone can use it</p></li>
                        <li><p className="body-text-3">This powerful 900-1100-Watt kettle has convenient capacity markings on the body lets you accurately</p></li>
                        <li><p className="body-text-3">1 year limited warranty and us-based customer support team lets you buy with confidence.</p></li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div className="box-quantity-wrap">
                <div className="wg-quantity">
                  <button
                    className="btn-quantity minus-btn"
                    disabled={quantity <= 1 || !isInStock || addingToCart}
                    onClick={() => setQuantity((pre) => (pre <= 1 ? 1 : pre - 1))}
                    style={{
                      cursor: (quantity <= 1 || !isInStock || addingToCart) ? 'not-allowed' : 'pointer',
                      opacity: (quantity <= 1 || !isInStock || addingToCart) ? 0.5 : 1
                    }}
                  >
                    <i className="icon-minus" />
                  </button>
                  <input
                    className="quantity-product text-center"
                    type="number"
                    min="1"
                    max={maxQuantity}
                    value={isInStock ? quantity : 0}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value) || 1;
                      setQuantity(Math.min(Math.max(1, newQuantity), maxQuantity));
                    }}
                    disabled={!isInStock || addingToCart}
                  />
                  <button
                    className="btn-quantity plus-btn"
                    disabled={quantity >= maxQuantity || !isInStock || addingToCart}
                    onClick={() => setQuantity((pre) => Math.min(maxQuantity, pre + 1))}
                    style={{
                      cursor: (quantity >= maxQuantity || !isInStock || addingToCart) ? 'not-allowed' : 'pointer',
                      opacity: (quantity >= maxQuantity || !isInStock || addingToCart) ? 0.5 : 1
                    }}
                  >
                    <i className="icon-plus" />
                  </button>
                </div>
                
                {isInStock ? (
                  <button
                    className="tf-btn btn-gray"
                    onClick={handleAddToCart}
                    disabled={addingToCart}
                    style={{
                      cursor: addingToCart ? 'not-allowed' : 'pointer',
                      opacity: addingToCart ? 0.7 : 1
                    }}
                  >
                    <span className="text-white">
                      {addingToCart ? (
                        <>
                          <div className="spinner-border spinner-border-sm me-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          Adding...
                        </>
                      ) : (
                        'Add To Cart'
                      )}
                    </span>
                  </button>
                ) : (
                  <button 
                    className="tf-btn btn-gray" 
                    disabled
                    style={{ opacity: 0.6, cursor: 'not-allowed' }}
                  >
                    <span className="text-white">Out of Stock</span>
                  </button>
                )}
              </div>

              {/* Stock Warnings */}
              {isInStock && stockQuantity <= 5 && (
                <div className="alert alert-warning py-2 px-3 mt-3">
                  <small><strong>Low Stock:</strong> Only {stockQuantity} left!</small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
