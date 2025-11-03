import { useContextElement } from "@/context/Context";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AddToCart from "../common/AddToCart";
import AddToWishlist from "../common/AddToWishlist";
import AddToQuickview from "../common/AddToQuickview";
import { toast } from "react-toastify";
import { addToCart, removeFromCart } from "../../../api";

export default function ProductCards3({ product }) {
  const {
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();

  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Check if product is in wishlist on mount
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsInWishlist(wishlist.includes(product.id));
  }, [product.id]);

  // Handle Add to Cart
  const handleAddToCart = async () => {
    if (isAddingToCart || !product.variants || product.variants.length === 0) return;

    try {
      setIsAddingToCart(true);
      const firstVariant = product.variants[0];
      
      const response = await addToCart({
        product_variant_id: firstVariant.id,
        quantity: 1
      });

      if (response.data.success) {
        toast.success('Added to cart successfully!');
        setIsInCart(true);
        
        // Trigger cart update event
        window.dispatchEvent(new CustomEvent('cartUpdated', {
          detail: { action: 'add' }
        }));

        // Open cart
        const cartTrigger = document.querySelector('[href="#shoppingCart"][data-bs-toggle="offcanvas"]');
        if (cartTrigger) setTimeout(() => cartTrigger.click(), 300);
      } else {
        toast.error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Add to cart error:', error);
      toast.error('Failed to add to cart');
    } finally {
      setIsAddingToCart(false);
    }
  };

  // Handle Wishlist Toggle
  const handleWishlistToggle = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    if (isInWishlist) {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter(id => id !== product.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setIsInWishlist(false);
      toast.info('Removed from wishlist');
    } else {
      // Add to wishlist
      const updatedWishlist = [...wishlist, product.id];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setIsInWishlist(true);
      toast.success('Added to wishlist');
    }
    
    // Dispatch wishlist update event
    window.dispatchEvent(new CustomEvent('wishlistUpdated', {
      detail: { 
        action: isInWishlist ? 'remove' : 'add', 
        productId: product.id 
      }
    }));
  };

  return (
    <div className="card-product">
      <div className="card-product-wrapper">
        <Link to={`/product/${product.title}/${product.id}`} className="product-img">
          <img
            className="img-product ls-is-cached lazyloaded"
            src={`http://srv1078726.hstgr.cloud:3004/${product.imgSrc}`}
            data-=""
            alt="image-product"
            width={500}
            height={500}
          />
        
          <img
            className="img-hover ls-is-cached lazyloaded"
            src={`http://srv1078726.hstgr.cloud:3004/${product.imgHover}`}
            data-=""
            alt="image-product"
            width={500}
            height={500}
          />
        </Link>
        <ul className="list-product-btn top-0 end-0">
          <li onClick={handleAddToCart} >
            <AddToCart productId={product.id}  />
          </li>
          {/* <li className="wishlist" onClick={handleWishlistToggle}>
            <AddToWishlist productId={product.id} tooltipClass="tooltip-left" />
          </li>
          <li>
            <AddToQuickview
              productId={product.id}
              tooltipClass="tooltip-left"
            />
          </li> */}
        </ul>
        {product.hotSale && (
          <div className="box-sale-wrap pst-default">
            <p className="small-text">Sale</p>
            <p className="title-sidebar-2">70%</p>
          </div>
        )}
      </div>
      <div className="card-product-info">
        <div className="box-title">
          <div>
            <p className="product-tag caption text-main-2 d-none">Headphone</p>
            <Link
              to={`/product/${product.title}/${product.id}`}
              className="name-product body-md-2 fw-semibold text-secondary link"
            >
              {product.title}
            </Link>
          </div>
          <p className="price-wrap fw-medium">
            <span className="new-price price-text fw-medium">
              ₹{product.price.toFixed(3)}
            </span>
            {product.oldPrice && (
              <span className="old-price body-md-2 text-main-2">
                ₹{product.oldPrice.toFixed(3)}
              </span>
            )}
          </p>
        </div>
      </div>
      
      <button 
        onClick={handleAddToCart} 
        disabled={isAddingToCart}
        className="tf-btn text-white d-flex align-items-center justify-content-center"
        style={{ 
          height: '45px',
          borderRadius: '8px',
          border: 'none',
          padding: '0 20px',
          cursor: isAddingToCart ? 'not-allowed' : 'pointer',
          opacity: isAddingToCart ? 0.7 : 1,
          transition: 'opacity 0.3s ease'
        }}
      >
        {isAddingToCart ? (
          <>
            <div className="spinner-border spinner-border-sm me-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            Adding...
          </>
        ) : (
          <>
            Add to cart
            <i className="icon-cart-2 ms-2" />
          </>
        )}
      </button>

      <div className="card-product-btn">
        <a
          href="#shoppingCart"
          data-bs-toggle="offcanvas"
          className="tf-btn btn-line w-100"
          onClick={handleAddToCart}
        >
          <span>
            {isAddingToCart ? 'Adding...' : (isInCart ? 'Added to Cart' : 'Add to Cart')}
          </span>
          <i className="icon-cart-2" />
        </a>
        <div className="box-btn">
          <a
            href="#compare"
            data-bs-toggle="offcanvas"
            className="tf-btn-icon style-2 type-black"
            onClick={() => addToCompareItem(product.id)}
          >
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6.5V9V6.5ZM9 9V11.5V9ZM9 9H11.5H9ZM9 9H6.5H9ZM16.5 9C16.5 9.98491 16.306 10.9602 15.9291 11.8701C15.5522 12.7801 14.9997 13.6069 14.3033 14.3033C13.6069 14.9997 12.7801 15.5522 11.8701 15.9291C10.9602 16.306 9.98491 16.5 9 16.5C8.01509 16.5 7.03982 16.306 6.12987 15.9291C5.21993 15.5522 4.39314 14.9997 3.6967 14.3033C3.00026 13.6069 2.44781 12.7801 2.0709 11.8701C1.69399 10.9602 1.5 9.98491 1.5 9C1.5 7.01088 2.29018 5.10322 3.6967 3.6967C5.10322 2.29018 7.01088 1.5 9 1.5C10.9891 1.5 12.8968 2.29018 14.3033 3.6967C15.7098 5.10322 16.5 7.01088 16.5 9Z"
                stroke="#004EC3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="body-text-3 fw-normal">
              {" "}
              {isAddedtoCompareItem(product.id) ? "Compared" : "Compare"}
            </span>
          </a>
          <a
            href="#"
            onClick={handleWishlistToggle}
            className="tf-btn-icon style-2 type-black"
            style={{ 
              color: isInWishlist ? '#FF3D3D' : 'inherit'
            }}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill={isInWishlist ? "#FF3D3D" : "none"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.59837 5.26487C3.25014 5.61309 2.97391 6.02649 2.78546 6.48146C2.597 6.93644 2.5 7.42408 2.5 7.91654C2.5 8.409 2.597 8.89664 2.78546 9.35161C2.97391 9.80658 3.25014 10.22 3.59837 10.5682L10 16.9699L16.4017 10.5682C17.105 9.86494 17.5001 8.9111 17.5001 7.91654C17.5001 6.92197 17.105 5.96814 16.4017 5.26487C15.6984 4.5616 14.7446 4.16651 13.75 4.16651C12.7555 4.16651 11.8016 4.5616 11.0984 5.26487L10 6.3632L8.9017 5.26487C8.55348 4.91665 8.14008 4.64042 7.68511 4.45196C7.23013 4.2635 6.74249 4.1665 6.25003 4.1665C5.75757 4.1665 5.26993 4.2635 4.81496 4.45196C4.35998 4.64042 3.94659 4.91665 3.59837 5.26487V5.26487Z"
                stroke="#FF3D3D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="body-text-3 fw-normal">
              {isInWishlist ? "Wishlisted" : "Wishlist"}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
