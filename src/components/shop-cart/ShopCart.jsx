import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getCart, removeFromCart, updateCartItem } from "../../../api";

export default function ShopCart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [updating, setUpdating] = useState({});
  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const SERVER_URL = "http://srv1078726.hstgr.cloud:3004/";

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
      console.log('📦 Fetching cart data...');
      
      const response = await getCart();
      console.log('📦 Cart response:', response.data);
      
      if (response.data && response.data.success) {
        const cart = response.data.cart;
        setCartItems(cart.items || []);
        setTotalPrice(cart.totalPrice || 0);
        setTotalItems(cart.totalItems || 0);
        console.log('✅ Cart loaded successfully:', cart);
      }
    } catch (error) {
      console.error('❌ Error fetching cart:', error);
      
      if (error.response?.status === 401) {
        toast.error('Please login to view your cart');
      } else {
        toast.error('Failed to load cart');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveItem = async (itemId) => {
    if (updating[itemId]) return; // Prevent multiple calls
    
    try {
      console.log('🗑️ Removing item:', itemId);
      
      setUpdating(prev => ({ ...prev, [itemId]: 'removing' }));
      
      const response = await removeFromCart(itemId);
      console.log('🗑️ Remove response:', response.data);
      
      if (response.data?.success) {
        toast.success('Item removed from cart');
        
        // Update cart immediately for better UX
        setCartItems(prev => prev.filter(item => item.id !== itemId));
        
        // Trigger cart update event
        window.dispatchEvent(new CustomEvent('cartUpdated', {
          detail: { action: 'remove', itemId }
        }));
        
        // Refetch to ensure sync
        fetchCart();
      } else {
        throw new Error(response.data?.message || 'Failed to remove item');
      }
    } catch (error) {
      console.error('❌ Error removing item:', error);
      
      if (error.response?.status === 401) {
        toast.error('Please login to manage your cart');
      } else {
        toast.error(error.response?.data?.message || 'Failed to remove item from cart');
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
    if (updating[itemId]) return; // Prevent multiple calls
    
    if (newQuantity < 1) {
      handleRemoveItem(itemId);
      return;
    }

    try {
      console.log('📊 Updating quantity:', { itemId, newQuantity });
      
      setUpdating(prev => ({ ...prev, [itemId]: 'updating' }));
      
      const response = await updateCartItem(itemId, { quantity: newQuantity });
      console.log('📊 Update response:', response.data);
      
      if (response.data?.success) {
        // Update cart immediately for better UX
        setCartItems(prev => 
          prev.map(item => 
            item.id === itemId 
              ? { ...item, quantity: newQuantity, lineTotal: item.price * newQuantity }
              : item
          )
        );
        
        // Trigger cart update event
        window.dispatchEvent(new CustomEvent('cartUpdated', {
          detail: { action: 'update', itemId, newQuantity }
        }));
        
        // Refetch to ensure sync
        fetchCart();
      } else {
        throw new Error(response.data?.message || 'Failed to update quantity');
      }
    } catch (error) {
      console.error('❌ Error updating quantity:', error);
      
      if (error.response?.status === 401) {
        toast.error('Please login to manage your cart');
      } else if (error.response?.status === 400) {
        toast.error(error.response.data?.message || 'Cannot update quantity');
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

  const handleCouponSubmit = async (e) => {
    e.preventDefault();
    
    if (!couponCode.trim()) {
      toast.error('Please enter a coupon code');
      return;
    }

    try {
      console.log('🎟️ Applying coupon:', couponCode);
      
      // TODO: Implement real coupon API call
      // const response = await applyCoupon(couponCode, totalPrice);
      
      // Mock coupon application for now
      if (couponCode.toLowerCase() === 'save10') {
        const discount = totalPrice * 0.1;
        setCouponDiscount(discount);
        setAppliedCoupon({ code: couponCode, discount: 10 });
        toast.success(`Coupon applied! You saved ₹${discount.toFixed(2)}`);
      } else {
        toast.error('Invalid coupon code');
      }
    } catch (error) {
      console.error('❌ Coupon error:', error);
      toast.error('Failed to apply coupon');
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
    setCouponCode('');
    toast.info('Coupon removed');
  };

  const finalTotal = Math.max(0, totalPrice - couponDiscount);

  // Show loading state
  if (loading) {
    return (
      <div className="s-shoping-cart tf-sp-2">
        <div className="container">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading cart...</span>
            </div>
            <p className="mt-3 text-muted">Loading your shopping cart...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="s-shoping-cart tf-sp-2">
      <div className="container">
        {/* Checkout Progress */}
        <div className="checkout-status tf-sp-2 pt-0">
          <div className="checkout-wrap">
            <span className="checkout-bar first" />
            <div className="step-payment active">
              <span className="icon">
                <i className="icon-shop-cart-1" />
              </span>
              <Link to="/shop-cart" className="text-secondary body-text-3">
                Shopping Cart
                {totalItems > 0 && (
                  <span className="badge bg-primary ms-2">{totalItems}</span>
                )}
              </Link>
            </div>
            <div className="step-payment">
              <span className="icon">
                <i className="icon-shop-cart-2" />
              </span>
              <Link to="/checkout" className="link-secondary body-text-3">
                Shopping &amp; Checkout
              </Link>
            </div>
            <div className="step-payment">
              <span className="icon">
                <i className="icon-shop-cart-3" />
              </span>
              <Link to="/order-details" className="link-secondary body-text-3">
                Confirmation
              </Link>
            </div>
          </div>
        </div>

        {/* Cart Content */}
        <div className="form-discount">
          <div className="overflow-x-auto">
            {cartItems.length > 0 ? (
              <table className="tf-table-page-cart">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="tf-cart-item">
                      <td className="tf-cart-item_product">
                        <Link to={`/product-detail/${item.productId}`} className="img-box">
                          <img
                            alt={item.title}
                            src={`${SERVER_URL}${item.imgSrc}`}
                            width={120}
                            height={120}
                            style={{ objectFit: 'cover' }}
                            onError={(e) => {
                              e.target.src = '/placeholder.jpg';
                            }}
                          />
                        </Link>
                        <div className="cart-info">
                          <Link
                            to={`/product-detail/${item.productId}`}
                            className="cart-title body-md-2 fw-semibold link"
                          >
                            {item.title}
                          </Link>
                          
                          {/* Variant Info */}
                          {item.variant && (
                            <div className="variant-info mt-2">
                              <p className="body-text-3 text-muted mb-1">
                                <strong>SKU:</strong> {item.variant.sku}
                              </p>
                              <p className="body-text-3 text-muted mb-1">
                                <strong>Stock:</strong> 
                                <span className={`ms-1 ${item.variant.inStock ? 'text-success' : 'text-danger'}`}>
                                  {item.variant.availableStock} available
                                </span>
                              </p>
                              {!item.variant.inStock && (
                                <small className="text-danger">
                                  <i className="icon-alert-triangle me-1"></i>
                                  Insufficient stock
                                </small>
                              )}
                            </div>
                          )}
                        </div>
                      </td>
                      
                      <td data-cart-title="Price" className="tf-cart-item_price">
                        <p className="cart-price price-on-sale price-text fw-medium">
                          ₹{item.price.toFixed(2)}
                        </p>
                      </td>
                      
                      <td data-cart-title="Quantity" className="tf-cart-item_quantity">
                        <div className="wg-quantity">
                          <button
                            className="btn-quantity btn-decrease"
                            disabled={item.quantity <= 1 || updating[item.id]}
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            style={{ 
                              cursor: (item.quantity <= 1 || updating[item.id]) ? 'not-allowed' : 'pointer',
                              opacity: updating[item.id] ? 0.5 : 1,
                              background: 'white',
                              border: '1px solid #ddd',
                              borderRadius: '4px',
                              padding: '8px 12px'
                            }}
                          >
                            {updating[item.id] === 'updating' ? (
                              <div className="spinner-border spinner-border-sm"></div>
                            ) : (
                              <i className="icon-minus" />
                            )}
                          </button>
                          
                          <input
                            className="quantity-product text-center"
                            type="number"
                            value={updating[item.id] ? '' : item.quantity}
                            onChange={(e) => {
                              const newQuantity = parseInt(e.target.value) || 1;
                              if (newQuantity !== item.quantity && !updating[item.id]) {
                                handleUpdateQuantity(item.id, newQuantity);
                              }
                            }}
                            min="1"
                            max={item.variant?.availableStock || 99}
                            disabled={updating[item.id]}
                            style={{ 
                              minWidth: '60px',
                              opacity: updating[item.id] ? 0.5 : 1,
                              border: '1px solid #ddd',
                              borderRadius: '4px',
                              padding: '8px',
                              margin: '0 4px'
                            }}
                            placeholder={updating[item.id] ? '...' : ''}
                          />
                          
                          <button
                            className="btn-quantity btn-increase"
                            disabled={updating[item.id] || item.quantity >= (item.variant?.availableStock || 99)}
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            style={{ 
                              cursor: (updating[item.id] || item.quantity >= (item.variant?.availableStock || 99)) ? 'not-allowed' : 'pointer',
                              opacity: updating[item.id] ? 0.5 : 1,
                              background: 'white',
                              border: '1px solid #ddd',
                              borderRadius: '4px',
                              padding: '8px 12px'
                            }}
                          >
                            {updating[item.id] === 'updating' ? (
                              <div className="spinner-border spinner-border-sm"></div>
                            ) : (
                              <i className="icon-plus" />
                            )}
                          </button>
                        </div>
                        
                        {/* Stock limit warning */}
                        {item.variant && item.quantity >= item.variant.availableStock && (
                          <small className="text-warning mt-1 d-block">
                            Max quantity reached
                          </small>
                        )}
                      </td>
                      
                      <td data-cart-title="Total" className="tf-cart-item_total">
                        <p className="cart-total total-price price-text fw-medium">
                          ₹{(item.lineTotal || item.price * item.quantity).toFixed(2)}
                        </p>
                      </td>
                      
                      <td data-cart-title="Remove" className="remove-cart text-xxl-end">
                        <button
                          className="remove icon icon-close link btn btn-link p-0"
                          onClick={() => handleRemoveItem(item.id)}
                          disabled={updating[item.id]}
                          style={{ 
                            cursor: updating[item.id] ? 'not-allowed' : 'pointer',
                            opacity: updating[item.id] ? 0.5 : 1,
                            border: 'none',
                            background: 'transparent',
                            color: '#dc3545'
                          }}
                          title={updating[item.id] ? 'Removing...' : 'Remove from cart'}
                        >
                          {updating[item.id] === 'removing' ? (
                            <div className="spinner-border spinner-border-sm"></div>
                          ) : (
                            <i className="icon-close"></i>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="empty-cart text-center p-5">
                <div className="empty-cart-icon mb-4">
                  <i className="icon-shop-cart-1" style={{ fontSize: '64px', color: '#ccc' }}></i>
                </div>
                <h4 className="mb-3">Your Cart is Empty</h4>
                <p className="text-muted mb-4">
                  Start adding your favorite products to cart!
                </p>
                <Link
                  className="tf-btn text-white"
                  to="/shop"
                >
                  <span className="text-white">Explore Products</span>
                </Link>
              </div>
            )}
          </div>

          {/* Cart Bottom - Only show if cart has items */}
          {cartItems.length > 0 && (
            <>
              <div className="cart-bottom">
                <form onSubmit={handleCouponSubmit} className="ip-discount-code">
                  <input
                    type="text"
                    placeholder="Enter your coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    disabled={!!appliedCoupon}
                  />
                  <button 
                    type="submit" 
                    className="tf-btn btn-gray"
                    disabled={!!appliedCoupon || !couponCode.trim()}
                  >
                    <span className="text-white">Apply coupon</span>
                  </button>
                </form>
                
                <div className="cart-totals">
                  {appliedCoupon && (
                    <div className="coupon-applied mb-2 p-3 bg-success bg-opacity-10 rounded">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-success">
                          <i className="icon-check-circle me-2"></i>
                          Coupon "{appliedCoupon.code}" applied
                        </span>
                        <span className="text-success fw-bold">
                          -₹{couponDiscount.toFixed(2)}
                        </span>
                        <button 
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={removeCoupon}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <div className="total-breakdown">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal:</span>
                      <span>₹{totalPrice.toFixed(2)}</span>
                    </div>
                    {couponDiscount > 0 && (
                      <div className="d-flex justify-content-between mb-2 text-success">
                        <span>Discount:</span>
                        <span>-₹{couponDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    <hr />
                    <div className="d-flex justify-content-between">
                      <span className="main-title fw-semibold">Total:</span>
                      <span className="main-title fw-semibold text-primary">
                        ₹{finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="box-btn">
                <Link to="/shop-default" className="tf-btn btn-gray">
                  <span className="text-white">Continue shopping</span>
                </Link>
                <Link 
                  to="/checkout" 
                  className="tf-btn"
                  onClick={(e) => {
                    const hasOutOfStockItems = cartItems.some(item => !item.variant?.inStock);
                    const hasUpdatingItems = Object.keys(updating).length > 0;
                    
                    if (hasOutOfStockItems) {
                      e.preventDefault();
                      toast.error('Please remove out-of-stock items before proceeding to checkout');
                    } else if (hasUpdatingItems) {
                      e.preventDefault();
                      toast.error('Please wait for cart updates to complete');
                    }
                  }}
                >
                  <span className="text-white">
                    Proceed to checkout (₹{finalTotal.toFixed(2)})
                  </span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
