import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getCart, removeFromCart, updateCartItem } from "../../../api";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [updating, setUpdating] = useState({});

  // Fetch cart data when component mounts
  useEffect(() => {
    fetchCart();
    
    // Listen for cart update events
    const handleCartUpdate = () => {
      fetchCart();
    };
    
    window.addEventListener('cartUpdated', handleCartUpdate);
    
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const response = await getCart();
      
      if (response.data && response.data.success) {
        const cart = response.data.cart;
        setCartItems(cart.items || []);
        setTotalPrice(cart.totalPrice || 0);
        setTotalItems(cart.totalItems || 0);
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
      if (error.response?.status === 401) {
        // User not logged in
        setCartItems([]);
        setTotalPrice(0);
        setTotalItems(0);
      } else {
        toast.error('Failed to load cart');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      setUpdating(prev => ({ ...prev, [itemId]: 'removing' }));
      
      const response = await removeFromCart(itemId);
      
      if (response.data.success) {
        toast.success('Item removed from cart');
        fetchCart(); // Refresh cart
      }
    } catch (error) {
      console.error('Error removing item:', error);
      if (error.response?.status === 401) {
        toast.error('Please login to manage your cart');
      } else {
        toast.error('Failed to remove item from cart');
      }
    } finally {
      setUpdating(prev => {
        const newState = { ...prev };
        delete newState[itemId];
        return newState;
      });
    }
  };

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(itemId);
      return;
    }

    try {
      setUpdating(prev => ({ ...prev, [itemId]: 'updating' }));
      
      const response = await updateCartItem(itemId, { quantity: newQuantity });
      
      if (response.data.success) {
        fetchCart(); // Refresh cart
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
      if (error.response?.status === 401) {
        toast.error('Please login to manage your cart');
      } else if (error.response?.status === 400) {
        toast.error(error.response.data.message || 'Cannot update quantity');
      } else {
        toast.error('Failed to update quantity');
      }
    } finally {
      setUpdating(prev => {
        const newState = { ...prev };
        delete newState[itemId];
        return newState;
      });
    }
  };

  return (
    <div
      className="offcanvas offcanvas-end popup-style popup-shopping-cart"
      id="shoppingCart"
    >
      <div className="popup-wrapper">
        <div className="popup-header">
          <h5 className="title fw-semibold">
            Shopping cart
            {totalItems > 0 && (
              <span className="badge bg-primary ms-2">{totalItems}</span>
            )}
          </h5>
          <span
            className="icon-close icon-close-popup link"
            data-bs-dismiss="offcanvas"
          />
        </div>

        {loading ? (
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading cart...</span>
            </div>
            <p className="text-muted mt-2">Loading your cart...</p>
          </div>
        ) : !cartItems.length ? (
          <div className="minicart-empty text-center">
            <svg
              width={100}
              height={100}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80.6344 72.6641H33.3641C32.8541 72.6646 32.3525 72.5345 31.907 72.2864C31.4615 72.0383 31.0869 71.6803 30.8188 71.2465C30.5507 70.8127 30.398 70.3176 30.3753 69.8081C30.3526 69.2987 30.4606 68.7919 30.6891 68.336L33.4656 62.7844C33.6401 62.4347 33.678 62.0325 33.5719 61.6563L22.0563 21.361C21.7786 20.4019 21.1977 19.5587 20.4005 18.9575C19.6033 18.3564 18.6328 18.0298 17.6344 18.0266H7.78282C7.36822 18.0266 6.97059 18.1913 6.67742 18.4845C6.38425 18.7777 6.21954 19.1753 6.21954 19.5899C6.21954 20.0045 6.38425 20.4021 6.67742 20.6953C6.97059 20.9885 7.36822 21.1532 7.78282 21.1532H17.6359C17.9554 21.1542 18.2658 21.2587 18.5208 21.4511C18.7758 21.6436 18.9615 21.9135 19.05 22.2204L30.3984 61.9313L27.8922 66.9391C27.4257 67.8717 27.2054 68.9081 27.2523 69.9497C27.2991 70.9914 27.6115 72.0038 28.1598 72.8908C28.7081 73.7777 29.4741 74.5098 30.3849 75.0173C31.2958 75.5249 32.3213 75.7911 33.3641 75.7907H80.6344C81.0488 75.7907 81.4462 75.6261 81.7392 75.333C82.0323 75.04 82.1969 74.6426 82.1969 74.2282C82.1969 73.8138 82.0323 73.4163 81.7392 73.1233C81.4462 72.8303 81.0488 72.6641 80.6344 72.6641Z"
                fill="#73787D"
              />
              <path
                d="M93.175 25.3828C92.8884 24.9852 92.5114 24.6615 92.0751 24.4382C91.6388 24.2149 91.1557 24.0984 90.6656 24.0984H27.7266C27.3122 24.0984 26.9147 24.263 26.6217 24.556C26.3287 24.8491 26.1641 25.2465 26.1641 25.6609C26.1641 26.0753 26.3287 26.4727 26.6217 26.7657C26.9147 27.0588 27.3122 27.2234 27.7266 27.2234L90.625 27.1718L85.5781 42.3125H32.9312C32.5168 42.3125 32.1194 42.4771 31.8264 42.7701C31.5334 43.0631 31.3687 43.4606 31.3687 43.875C31.3687 44.2894 31.5334 44.6868 31.8264 44.9798C32.1194 45.2728 32.5168 45.4375 32.9312 45.4375H84.5359L79.5078 60.5234H38.1375C37.7229 60.5234 37.3253 60.6881 37.0321 60.9813C36.7389 61.2744 36.5742 61.6721 36.5742 62.0867C36.5742 62.5013 36.7389 62.8989 37.0321 63.1921C37.3253 63.4852 37.7229 63.6499 38.1375 63.6499H80.6344C80.9624 63.65 81.2822 63.5468 81.5484 63.355C81.8145 63.1632 82.0135 62.8925 82.1172 62.5812L93.5875 28.1671C93.7438 27.7037 93.7879 27.2099 93.7162 26.7261C93.6445 26.2423 93.459 25.7809 93.175 25.3828ZM32.0672 78.7343C21.9781 79.0562 21.9797 93.6843 32.0672 94.0031C42.1562 93.6828 42.1531 79.0515 32.0672 78.7343ZM32.0672 90.8765C30.8716 90.8765 29.7251 90.4016 28.8797 89.5562C28.0343 88.7108 27.5594 87.5642 27.5594 86.3687C27.5594 85.1732 28.0343 84.0266 28.8797 83.1812C29.7251 82.3358 30.8716 81.8609 32.0672 81.8609C33.2627 81.8609 34.4093 82.3358 35.2547 83.1812C36.1001 84.0266 36.575 85.1732 36.575 86.3687C36.575 87.5642 36.1001 88.7108 35.2547 89.5562C34.4093 90.4016 33.2627 90.8765 32.0672 90.8765ZM74.5625 78.7343C64.4734 79.0546 64.475 93.6843 74.5625 94.0031C84.6531 93.6828 84.65 79.0531 74.5625 78.7343ZM74.5625 90.8765C73.367 90.8765 72.2204 90.4016 71.375 89.5562C70.5296 88.7108 70.0547 87.5642 70.0547 86.3687C70.0547 85.1732 70.5296 84.0266 71.375 83.1812C72.2204 82.3358 73.367 81.8609 74.5625 81.8609C75.758 81.8609 76.9046 82.3358 77.75 83.1812C78.5954 84.0266 79.0703 85.1732 79.0703 86.3687C79.0703 87.5642 78.5954 88.7108 77.75 89.5562C76.9046 90.4016 75.758 90.8765 74.5625 90.8765Z"
                fill="#73787D"
              />
              <path
                d="M57.8016 15.375C58.216 15.375 58.6134 15.2103 58.9064 14.9173C59.1995 14.6243 59.3641 14.2269 59.3641 13.8125V7.55933C59.3641 7.14492 59.1995 6.7475 58.9064 6.45447C58.6134 6.16145 58.216 5.99683 57.8016 5.99683C57.3872 5.99683 56.9897 6.16145 56.6967 6.45447C56.4037 6.7475 56.2391 7.14492 56.2391 7.55933V13.8125C56.2391 14.2269 56.4037 14.6243 56.6967 14.9173C56.9897 15.2103 57.3872 15.375 57.8016 15.375ZM43.4328 20.4109C43.578 20.5561 43.7503 20.6712 43.94 20.7498C44.1297 20.8284 44.333 20.8688 44.5383 20.8688C44.7436 20.8688 44.9469 20.8284 45.1366 20.7498C45.3262 20.6712 45.4986 20.5561 45.6438 20.4109C45.7889 20.2657 45.9041 20.0934 45.9827 19.9037C46.0612 19.714 46.1017 19.5107 46.1017 19.3054C46.1017 19.1001 46.0612 18.8968 45.9827 18.7071C45.9041 18.5175 45.7889 18.3451 45.6438 18.2L41.2219 13.7796C40.9287 13.4867 40.5311 13.3221 40.1166 13.3223C39.7022 13.3224 39.3047 13.4872 39.0117 13.7804C38.7188 14.0736 38.5542 14.4712 38.5544 14.8857C38.5545 15.3001 38.7193 15.6976 39.0125 15.9906L43.4328 20.4109ZM71.0656 20.8687C71.2708 20.8689 71.4741 20.8286 71.6637 20.75C71.8532 20.6714 72.0254 20.5562 72.1703 20.4109L76.5922 15.989C76.8852 15.6958 77.0497 15.2983 77.0495 14.8838C77.0494 14.4693 76.8846 14.0718 76.5914 13.7789C76.2982 13.4859 75.9007 13.3214 75.4862 13.3215C75.0717 13.3217 74.6742 13.4865 74.3813 13.7796L69.9594 18.2015C69.746 18.4221 69.6018 18.7002 69.5445 19.0017C69.4872 19.3032 69.5194 19.6148 69.6369 19.8983C69.7545 20.1817 69.9524 20.4246 70.2062 20.597C70.4601 20.7695 70.7588 20.8639 71.0656 20.8687Z"
                fill="#73787D"
              />
            </svg>
            <h6>
              Your cart is currently empty <br />
              Let us help you find the perfect item
            </h6>
            <Link to={`/shop`} className="tf-btn btn-gray w-100">
              <span className="text-white">Shop Now</span>
            </Link>
          </div>
        ) : (
          <ul className="popup-body product-list-wrap">
            {cartItems.map((item, i) => (
              <li key={i} className="file-delete">
                <div className="card-product style-row row-small-2 align-items-center">
                  <div className="card-product-wrapper">
                    <Link
                      to={`/product-detail/${item.productId}`}
                      className="product-img"
                    >
                      <img
                        className="img-product lazyload"
                        src={`http://srv1078726.hstgr.cloud:3004/${item.imgSrc}`}
                        alt="image-product"
                        width={80}
                        height={80}
                        style={{ objectFit: 'cover' }}
                      />
                      {item.imgHover && (
                        <img
                          className="img-hover lazyload"
                          src={`http://srv1078726.hstgr.cloud:3004/${item.imgHover}`}
                          alt="image-product"
                          width={80}
                          height={80}
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                    </Link>
                  </div>
                  <div className="card-product-info">
                    <div className="box-title">
                      <Link
                        to={`/product-detail/${item.productId}`}
                        className="name-product body-md-2 fw-semibold text-secondary link"
                        title={item.title}
                      >
                        {item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title}
                      </Link>
                      
                      {/* Variant Info */}
                      {item.variant && (
                        <p className="caption text-muted mb-1">
                          <small>{item.variant.sku}</small>
                        </p>
                      )}
                      
                      {/* Price and Quantity */}
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="price-wrap fw-medium mb-0">
                          <span className="new-price price-text fw-medium">
                            ${item.price.toFixed(2)}
                          </span>
                        </p>
                        
                        {/* Quantity Controls */}
                        <div className="quantity-controls d-flex align-items-center">
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={updating[item.id] || item.quantity <= 1}
                            style={{ 
                              width: '24px', 
                              height: '24px', 
                              padding: '0',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            {updating[item.id] ? (
                              <div className="spinner-border spinner-border-sm" style={{ width: '12px', height: '12px' }}></div>
                            ) : (
                              <i className="icon-minus" style={{ fontSize: '10px' }}></i>
                            )}
                          </button>
                          <span className="mx-2 fw-bold" style={{ minWidth: '20px', textAlign: 'center' }}>
                            {item.quantity}
                          </span>
                          <button 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            disabled={updating[item.id] || item.quantity >= (item.variant?.availableStock || 99)}
                            style={{ 
                              width: '24px', 
                              height: '24px', 
                              padding: '0',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            {updating[item.id] ? (
                              <div className="spinner-border spinner-border-sm" style={{ width: '12px', height: '12px' }}></div>
                            ) : (
                              <i className="icon-plus" style={{ fontSize: '10px' }}></i>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Line Total */}
                      <div className="d-flex justify-content-between align-items-center mt-1">
                        <small className="text-muted">
                          {item.quantity} × ${item.price.toFixed(2)}
                        </small>
                        <span className="fw-bold text-primary">
                          ${item.lineTotal.toFixed(2)}
                        </span>
                      </div>

                      {/* Stock Warning */}
                      {item.variant && !item.variant.inStock && (
                        <small className="text-danger mt-1 d-block">
                          <i className="icon-alert-triangle me-1"></i>
                          Insufficient stock
                        </small>
                      )}
                    </div>
                  </div>
                  <span
                    className="icon-close remove link"
                    onClick={() => handleRemoveItem(item.id)}
                    style={{ 
                      cursor: updating[item.id] ? 'not-allowed' : 'pointer',
                      opacity: updating[item.id] ? 0.5 : 1
                    }}
                    title="Remove from cart"
                  />
                </div>
              </li>
            ))}
          </ul>
        )}

        {cartItems.length > 0 && (
          <div className="popup-footer">
            <div className="cart-summary mb-3">
              <div className="d-flex justify-content-between">
                <span>Items:</span>
                <span>{totalItems}</span>
              </div>
              <div className="d-flex justify-content-between fw-semibold">
                <span>Subtotal:</span>
                <span className="price-amount text-primary">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="box-btn">
              <Link to={`/shop-cart`} className="tf-btn btn-gray">
                <span className="text-white">View Cart</span>
              </Link>
              <Link to={`/checkout`} className="tf-btn">
                <span className="text-white">Check Out</span>
              </Link>
            </div>

            <div className="delivery-progress">
              <div
                className="progress"
                role="progressbar"
                aria-label="Free shipping progress"
                aria-valuenow={Math.min((totalPrice / 250) * 100, 100)}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div 
                  className="progress-bar" 
                  style={{ width: `${Math.min((totalPrice / 250) * 100, 100)}%` }} 
                />
              </div>
              <p className="body-text-3">
                <i className="icon-delivery-2 fs-24" />
                {totalPrice >= 250 ? (
                  <span className="text-success fw-bold">
                    🎉 You qualify for free shipping!
                  </span>
                ) : (
                  <>
                    Free shipping on all orders over{" "}
                    <span className="fw-bold">$250</span>
                    <br />
                    <small className="text-muted">
                      Add ${(250 - totalPrice).toFixed(2)} more to qualify
                    </small>
                  </>
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
