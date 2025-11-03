import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCart, getAddresses, addAddress, createOrder, applyCoupon, getMySubscription, getActiveFlashSales, applyFlashCode } from "../../../api";


export default function Checkout() {
  console.log('🚀 Checkout component started');
  const navigate = useNavigate();


  // Cart State
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [cartLoading, setCartLoading] = useState(true);


  


  // Address State
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressLoading, setAddressLoading] = useState(true);
  const [addingAddress, setAddingAddress] = useState(false);


  // Payment State
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [processingOrder, setProcessingOrder] = useState(false);


  // Contact State
  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: ''
  });


  // New Address Form
  const [newAddress, setNewAddress] = useState({
    first_name: '',
    last_name: '',
    country: 'India',
    city: '',
    state: '',
    zip_code: '',
    address_line_1: '',
    address_line_2: '',
    is_default: false
  });


  // Order Notes
  const [orderNotes, setOrderNotes] = useState('');


  // Coupon State
  const [couponCode, setCouponCode] = useState('');
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [applyingCoupon, setApplyingCoupon] = useState(false);

  // Flash Sale State (NEW)
  const [isPremiumMember, setIsPremiumMember] = useState(false);
  const [flashSales, setFlashSales] = useState([]);

  const [applyingFlash, setApplyingFlash] = useState(false);

  const [appliedFlashSale, setAppliedFlashSale] = useState(null);


  const [flashDiscount, setFlashDiscount] = useState(0);
const [flashDiscountPercent, setFlashDiscountPercent] = useState(null);
const [flashUsageId, setFlashUsageId] = useState(null);
const [flashSaleName, setFlashSaleName] = useState('');
const [flashTierName, setFlashTierName] = useState('');
const [flashCode, setFlashCode] = useState('');


  const subtotalAfterDiscounts = Math.max(0, totalPrice - couponDiscount - flashDiscount);

  useEffect(() => {
    console.log('🔥 useEffect triggered');
    fetchCartProducts();
    fetchAddresses();
    fetchMembershipAndSales(); // NEW
  }, []);

  
  // NEW: Fetch membership status & flash sales
  const fetchMembershipAndSales = async () => {
    try {
      const [membershipRes, flashRes] = await Promise.all([
        getMySubscription().catch(() => ({ data: { is_premium_member: false } })),
        getActiveFlashSales().catch(() => ({ data: { flash_sales: [] } }))
      ]);
      
      setIsPremiumMember(membershipRes.data.is_premium_member);
      setFlashSales(flashRes.data.flash_sales);
    } catch (error) {
      console.error('Error fetching membership/flash sales:', error);
    }
  };

  // NEW: Helper to get available flash tier
  const availableFlashTier = (() => {
    for (const sale of flashSales) {
      for (const tier of sale.tiers || []) {
        if (tier.is_active && tier.used_count < tier.member_limit) {
          return {
            saleName: sale.name,
            saleCode: sale.code,
            tierName: tier.tier_name,
            discountPercent: tier.discount_percent,
            remainingSlots: tier.member_limit - tier.used_count
          };
        }
      }
    }
    return null;
  })();


  // ✅ Fetch cart products from database
  const fetchCartProducts = async () => {
    console.log('📦 Starting cart fetch...');
    try {
      setCartLoading(true);


      const response = await getCart();
      console.log('📦 Cart API response:', response.data);


      if (response.data?.success) {
        const cart = response.data.cart;
        setCartProducts(cart.items || []);
        setTotalPrice(cart.totalPrice || 0);
        setTotalItems(cart.totalItems || 0);
        
        console.log('✅ Cart loaded:', {
          items: cart.items?.length || 0,
          total: cart.totalPrice || 0
        });
      } else {
        console.log('⚠️ Cart not successful:', response.data);
      }
    } catch (error) {
      console.error('❌ Error fetching cart:', error);
      console.error('❌ Error details:', error.response?.data);
      
      if (error.response?.status === 401) {
        toast.error('Please login to proceed with checkout');
        navigate('/login');
        return;
      }
      toast.error('Failed to load cart');
    } finally {
      setCartLoading(false);
    }
  };


  // ✅ Fetch user addresses - FIXED
  const fetchAddresses = async () => {
    console.log('🏠 Starting address fetch...');
    try {
      setAddressLoading(true);
      const response = await getAddresses();
      
      console.log('🏠 Full Address API response:', response);
      console.log('🏠 Address response.data:', response.data);
      
      // ✅ Handle different response structures
      let addressList = [];
      
      if (Array.isArray(response.data)) {
        // If response.data is directly an array of addresses
        addressList = response.data;
        console.log('✅ Addresses found directly in response.data');
      } else if (response.data?.success && Array.isArray(response.data.addresses)) {
        // If wrapped in success object
        addressList = response.data.addresses;
        console.log('✅ Addresses found in response.data.addresses');
      } else if (response.data?.data && Array.isArray(response.data.data)) {
        // If nested in data.data
        addressList = response.data.data;
        console.log('✅ Addresses found in response.data.data');
      } else {
        console.log('⚠️ No addresses structure matched, trying raw response');
        addressList = response.data || [];
      }
      
      console.log('✅ Final processed address list:', addressList);
      console.log('✅ Address list length:', addressList.length);
      
      setAddresses(addressList);
      
      if (addressList.length > 0) {
        const defaultAddr = addressList.find(addr => addr.is_default) || addressList[0];
        console.log('🎯 Setting default address:', defaultAddr);
        setSelectedAddressId(defaultAddr.id);
      } else {
        console.log('📝 No addresses found - will show form');
        setShowAddressForm(true);
      }
    } catch (error) {
      console.error('❌ Error fetching addresses:', error);
      console.error('❌ Address error details:', error.response?.data);
      
      if (error.response?.status === 401) {
        toast.error('Please login to view addresses');
        navigate('/login');
        return;
      }
      // Continue without addresses, show form
      console.log('📝 Error occurred - showing form');
      setShowAddressForm(true);
    } finally {
      setAddressLoading(false);
    }
  };


  // ✅ Handle add address
  const handleAddAddress = async (e) => {
    e.preventDefault();
    console.log('📝 Adding address:', newAddress);
    
    try {
      setAddingAddress(true);
      const response = await addAddress(newAddress);
      console.log('✅ Address added:', response.data);
      
      if (response.data?.success) {
        toast.success('Address added successfully!');
        fetchAddresses();
        setShowAddressForm(false);
        // Reset form
        setNewAddress({
          first_name: '',
          last_name: '',
          country: 'India',
          city: '',
          state: '',
          zip_code: '',
          address_line_1: '',
          address_line_2: '',
          is_default: false
        });
      }
    } catch (error) {
      console.error('❌ Add address error:', error);
      toast.error(error.response?.data?.message || 'Failed to add address');
    } finally {
      setAddingAddress(false);
    }
  };


  // ✅ Handle coupon apply
  const handleCouponApply = async (e) => {
    e.preventDefault();
    console.log('🎟️ Applying coupon:', couponCode);
    
    if (!couponCode.trim()) {
      toast.error('Please enter a coupon code');
      return;
    }


    try {
      setApplyingCoupon(true);
      const response = await applyCoupon(couponCode, totalPrice);
      console.log('✅ Coupon response:', response.data);
      
      if (response.data?.success) {
        setCouponDiscount(response.data.discount);
        setAppliedCoupon(response.data.coupon);
        toast.success(`Coupon applied! You saved ₹${response.data.discount.toFixed(2)}`);
      }
    } catch (error) {
      console.error('❌ Coupon error:', error);
      toast.error(error.response?.data?.message || 'Invalid coupon code');
    } finally {
      setApplyingCoupon(false);
    }
  };

  // NEW: Apply flash sale code
  const handleApplyFlashCode = async (e) => {
  e.preventDefault();
  if (!flashCode.trim()) {
    toast.error("Enter a flash sale code");
    return;
  }
  try {
    setApplyingFlash(true);
    const res = await applyFlashCode({ code: flashCode.trim() });
    if (res.data.success) {
      const discountPercent = parseFloat(res.data.discount_percent);
      const discount = (discountPercent / 100) * totalPrice;
      setFlashDiscount(discount);
      setFlashDiscountPercent(discountPercent);
      setFlashUsageId(res.data.usage_id);
      setFlashSaleName(res.data.flash_sale_name);
      setFlashTierName(res.data.tier_name);
      setFlashCode(flashCode.trim());

      toast.success(`Flash sale applied! You saved ₹${discount.toFixed(2)}`);
    }
  } catch (err) {
    console.error(err);
    toast.error(err.response?.data?.message || "Invalid flash sale code");
  } finally {
    setApplyingFlash(false);
  }
};


  // NEW: Remove flash sale
  const removeFlashSale = () => {
    setFlashDiscount(0);
    setAppliedFlashSale(null);
    setFlashCode('');
    toast.info('Flash sale removed');
  };


  // ✅ Handle place order - UPDATED WITH FLASH SALE SUPPORT
  const handlePlaceOrder = async () => {
    console.log('🚀 Starting order placement...');
    console.log('📊 Current form data:', {
      email: contactInfo.email,
      phone: contactInfo.phone,
      selectedAddressId,
      cartProductsLength: cartProducts.length,
      paymentMethod
    });
    
    // ✅ Enhanced Validation with detailed logging
    if (!contactInfo.email || !contactInfo.phone) {
      console.log('❌ Contact info missing:', contactInfo);
      toast.error('Please enter both email and phone number');
      return;
    }


    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactInfo.email)) {
      console.log('❌ Invalid email format:', contactInfo.email);
      toast.error('Please enter a valid email address');
      return;
    }


    // ✅ Phone validation
    if (contactInfo.phone.length < 10) {
      console.log('❌ Phone too short:', contactInfo.phone);
      toast.error('Please enter a valid phone number');
      return;
    }


    if (!selectedAddressId) {
      console.log('❌ No address selected:', { selectedAddressId, addresses });
      toast.error('Please select or add a delivery address');
      return;
    }


    if (cartProducts.length === 0) {
      console.log('❌ Cart is empty:', cartProducts);
      toast.error('Your cart is empty');
      return;
    }


    try {
      setProcessingOrder(true);
      console.log('⏳ Setting processing order to true');


      // ✅ Calculate amounts with flash discount (UPDATED)
      const subtotalAfterCoupon = Math.max(0, totalPrice - couponDiscount);
      const subtotalAfterFlash = subtotalAfterCoupon - flashDiscount;
      const gstAmount = subtotalAfterFlash * 0.18; // 18% GST
      const shippingCharge = subtotalAfterFlash >= 250 ? 0 : 50;
      const totalAmount = subtotalAfterFlash + gstAmount + shippingCharge;


      console.log('💰 Calculated amounts:', {
        totalPrice,
        couponDiscount,
        flashDiscount, // NEW
        subtotalAfterCoupon,
        subtotalAfterFlash, // NEW
        gstAmount,
        shippingCharge,
        totalAmount
      });


      // ✅ Prepare order data with flash sale fields (UPDATED)
      const orderData = {
        shipping_address_id: parseInt(selectedAddressId), // Ensure it's a number
        subtotal_amount: parseFloat(subtotalAfterFlash.toFixed(2)), // UPDATED
        gst_amount: parseFloat(gstAmount.toFixed(2)),
        shipping_charge: parseFloat(shippingCharge.toFixed(2)),
        total_amount: parseFloat(totalAmount.toFixed(2)),
        payment_method: paymentMethod,
        contact_email: contactInfo.email.trim(),
        contact_phone: contactInfo.phone.trim(),
        order_notes: orderNotes?.trim() || null,
        coupon_code: appliedCoupon?.code || null,
        coupon_discount: parseFloat(couponDiscount.toFixed(2)) || 0,
        // NEW: Flash sale fields
        
         flash_sale_code: flashCode,
    flash_discount: flashDiscount,
    flash_usage_id: flashUsageId,
      };


      console.log('📦 Final order data being sent:', orderData);
      console.log('📦 Order data types:', {
        shipping_address_id: typeof orderData.shipping_address_id,
        subtotal_amount: typeof orderData.subtotal_amount,
        total_amount: typeof orderData.total_amount,
        payment_method: typeof orderData.payment_method,
        flash_sale_code: typeof orderData.flash_sale_code, // NEW
        flash_discount: typeof orderData.flash_discount, // NEW
        flash_usage_id: typeof orderData.flash_usage_id // NEW
      });


      console.log('📡 Making create order API call...');
      const response = await createOrder(orderData);
      console.log('✅ Order API raw response:', response);
      console.log('✅ Order response data:', response.data);
      console.log('✅ Order response status:', response.status);


      // ✅ Handle different success response formats
      if (response.data?.success || response.status === 200 || response.status === 201) {
        console.log('🎉 Order placed successfully!');
        
        // Get order ID from different possible locations
        const orderId = response.data?.orderId || 
                       response.data?.order?.id || 
                       response.data?.id ||
                       response.data?.data?.id;
        
        console.log('🎯 Extracted order ID:', orderId);
        
        toast.success('Order placed successfully!');
        
        // ✅ Clear cart and trigger update
        try {
          window.dispatchEvent(new CustomEvent('cartUpdated'));
          console.log('📢 Cart update event dispatched');
        } catch (eventError) {
          console.log('⚠️ Cart update event failed:', eventError);
        }


        // ✅ Navigate to success page
        if (orderId) {
          console.log('🧭 Navigating to order details with ID:', orderId);
          navigate('/my-account-orders', { 
            state: { orderId: orderId },
            replace: true
          });
        } else {
          console.log('🧭 Navigating to order details without ID');
          navigate('/my-account-orders', { replace: true });
        }
        
        return; // Exit successfully
      } else {
        console.log('❌ Order API returned unsuccessful response:', response.data);
        throw new Error(response.data?.message || 'Order placement failed');
      }


    } catch (error) {
      console.error('💥 ORDER PLACEMENT ERROR:', error);
      console.error('💥 Error name:', error.name);
      console.error('💥 Error message:', error.message);
      console.error('💥 Error stack:', error.stack);
      
      if (error.response) {
        console.error('💥 Error response status:', error.response.status);
        console.error('💥 Error response data:', error.response.data);
        console.error('💥 Error response headers:', error.response.headers);
      }
      
      // ✅ User-friendly error messages
      let errorMessage = 'Failed to place order';
      
      if (error.response?.status === 401) {
        errorMessage = 'Please login again to place order';
        navigate('/login');
        return;
      } else if (error.response?.status === 400) {
        errorMessage = error.response.data?.message || 'Invalid order data';
      } else if (error.response?.status === 500) {
        errorMessage = 'Server error. Please try again later';
      } else if (error.message.includes('Network Error')) {
        errorMessage = 'Network error. Please check your connection';
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      
      toast.error(errorMessage);
    } finally {
      console.log('🔄 Setting processing order to false');
      setProcessingOrder(false);
    }
  };


  // Calculate totals (UPDATED WITH FLASH DISCOUNT)
  const subtotalAmount = Math.max(0, totalPrice - couponDiscount - flashDiscount);
  const gstAmount = subtotalAmount * 0.18;
  const shippingCharge = subtotalAmount >= 250 ? 0 : 50;
  const grandTotal = subtotalAmount + gstAmount + shippingCharge;


  console.log('💰 Current totals:', {
    totalPrice,
    couponDiscount,
    flashDiscount, // NEW
    subtotalAmount,
    gstAmount,
    shippingCharge,
    grandTotal
  });


  console.log('🎯 Current state:', {
    cartLoading,
    cartProductsLength: cartProducts.length,
    addressLoading,
    addressesLength: addresses.length,
    showAddressForm,
    selectedAddressId,
    processingOrder,
    isPremiumMember, // NEW
    availableFlashTier: availableFlashTier ? 'Available' : 'None' // NEW
  });


  // Show loading state
  if (cartLoading) {
    console.log('⏳ Showing cart loading...');
    return (
      <section className="tf-sp-2">
        <div className="container">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading checkout...</span>
            </div>
            <p className="mt-3">Loading your cart...</p>
          </div>
        </div>
      </section>
    );
  }


  // Show empty cart state
  if (cartProducts.length === 0) {
    console.log('🛒 Showing empty cart...');
    return (
      <section className="tf-sp-2">
        <div className="container">
          <div className="text-center py-5">
            <h4>Your cart is empty</h4>
            <p className="text-muted mb-4">Add some products to proceed with checkout</p>
            <Link to="/shop-default" className="tf-btn">
              <span className="text-white">Continue Shopping</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }


  console.log('🚀 Rendering main checkout');


  return (
    <section className="tf-sp-2">
      <div className="container">
        {/* Progress Steps */}
        <div className="checkout-status tf-sp-2 pt-0">
          <div className="checkout-wrap">
            <span className="checkout-bar next" />
            <div className="step-payment">
              <span className="icon">
                <i className="icon-shop-cart-1" />
              </span>
              <Link to="/shop-cart" className="link body-text-3">
                Shopping Cart
              </Link>
            </div>
            <div className="step-payment">
              <span className="icon">
                <i className="icon-shop-cart-2" />
              </span>
              <Link to="/checkout" className="text-secondary link body-text-3">
                Shopping &amp; Checkout
              </Link>
            </div>
            <div className="step-payment">
              <span className="icon">
                <i className="icon-shop-cart-3" />
              </span>
              <Link to="/my-account-orders" className="link body-text-3">
                Confirmation
              </Link>
            </div>
          </div>
        </div>


        <div className="tf-checkout-wrap flex-lg-nowrap">
          <div className="page-checkout">
            {/* Contact Information */}
            <div className="wrap">
              <h5 className="title has-account">
                <span className="fw-semibold">Contact Information</span>
              </h5>
              <div className="form-checkout-contact">
                <label className="body-md-2 fw-semibold">Email *</label>
                <input
                  className={`def ${contactInfo.email}`}
                  type="email"
                  placeholder="your@email.com"
                  value={contactInfo.email}
                  style={{ borderColor: "rgba(131, 131, 131, 1)" }}

                  onChange={(e) => {
                    console.log('📧 Email changed:', e.target.value);
                    setContactInfo({...contactInfo, email: e.target.value});
                
                  }}
                  required
                />
                <label className="body-md-2 fw-semibold">Phone *</label>
                <input
                  className={`def ${contactInfo.phone}`}
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={contactInfo.phone}
                  onChange={(e) => {
                    console.log('📱 Phone changed:', e.target.value);
                    setContactInfo({...contactInfo, phone: e.target.value});
                  }}
                style={{ borderColor: "rgba(131, 131, 131, 1)" }}
                  required
                />
                <p className="caption text-main-2 font-2">
                  Order information will be sent to your email
                </p>
                
                {/* Contact validation feedback */}
                {(!contactInfo.email || !contactInfo.phone) && (
                  <div className="alert alert-warning py-2 mt-2">
                    <small>📝 Both email and phone are required for order placement</small>
                  </div>
                )}
              </div>
            </div>


            {/* Delivery Address */}
            <div className="wrap">
              <h5 className="title fw-semibold">
                Delivery Address
                {addresses.length > 0 && !showAddressForm && (
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary ms-3"
                    onClick={() => navigate('/my-account-address')}
                  >
                    Manage Addresses
                  </button>
                )}
              </h5>


              {addressLoading ? (
                <div className="text-center p-3">
                  <div className="spinner-border spinner-border-sm"></div>
                  <span className="ms-2">Loading addresses...</span>
                </div>
              ) : addresses.length > 0 && !showAddressForm ? (
                <div className="address-list">
                  <p className="text-muted mb-3">Select delivery address:</p>
                  {addresses.map((address) => {
                    console.log('🏠 Rendering address:', address);
                    return (
                      <div 
                        key={address.id} 
                        className={`mb-3 p-3 border rounded ${selectedAddressId === address.id ? 'border-primary bg-light' : ''}`}
                      >
                        <label className="w-100 cursor-pointer">
                          <input
                            type="radio"
                            name="address"
                            value={address.id}
                            checked={selectedAddressId === address.id}
                            onChange={(e) => {
                              console.log('✅ Address selected:', e.target.value);
                              setSelectedAddressId(parseInt(e.target.value));
                            }}
                            className="me-3"
                          />
                          <div className="d-inline-block">
                            <strong>
                              {address.first_name || 'N/A'} {address.last_name || 'N/A'}
                            </strong>
                            {address.is_default && <span className="badge bg-primary ms-2">Default</span>}
                            <br />
                            <span>{address.street_address || address.address_line_1 || 'No address'}</span>
                            <br />
                            <span>{address.city || 'N/A'}, {address.state || 'N/A'} {address.postal_code || address.zip_code || 'N/A'}</span>
                            <br />
                            <span>{address.country || 'N/A'}</span>
                            {address.phone_number && (
                              <>
                                <br />
                                <span className="text-muted">📞 {address.phone_number}</span>
                              </>
                            )}
                          </div>
                        </label>
                      </div>
                    );
                  })}
                  
                  <button
                    type="button"
                    className="btn btn-outline-secondary mt-3"
                    onClick={() => navigate('/my-account-address')} 
                  >
                    + Add New Address
                  </button>
                </div>
              ) : (
                <div className="text-center p-4 border rounded bg-light">
                  <p className="text-muted mb-3">No addresses found</p>
                  <div className="d-flex gap-3 justify-content-center">
                    <button
                      type="button"
                      className="tf-btn"
                      onClick={() => navigate('/my-account-address')} 
                    >
                      <span className="text-white">Add New Address</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => navigate('/my-account-address')}
                    >
                      Manage Addresses
                    </button>
                  </div>
                </div>
              )}


              {/* Address validation feedback */}
              {!selectedAddressId && addresses.length > 0 && (
                <div className="alert alert-warning py-2 mt-2">
                  <small>📍 Please select a delivery address</small>
                </div>
              )}
            </div>


            {/* Payment Methods */}
            <div className="wrap">
              <h5 className="title">Payment Method</h5>
              <div className="payment-box">
                <div className="payment-item">
                  <label className="payment-header d-flex align-items-center">
                    <input
                      type="radio"
                      name="payment-method"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => {
                        console.log('💳 Payment method changed to:', e.target.value);
                        setPaymentMethod(e.target.value);
                      }}
                      className="tf-check-rounded me-2"
                    />
                    <span className="body-text-3">Cash on Delivery</span>
                  </label>
                </div>
                <div className="payment-item">
                  <label className="payment-header d-flex align-items-center">
                    <input
                      type="radio"
                      name="payment-method"
                      value="gateway"
                      checked={paymentMethod === 'gateway'}
                      onChange={(e) => {
                        console.log('💳 Payment method changed to:', e.target.value);
                        setPaymentMethod(e.target.value);
                      }}
                      className="tf-check-rounded me-2"
                    />
                    <span className="body-text-3">Online Payment (Razorpay)</span>
                  </label>
                </div>
              </div>


              {/* Order Summary */}
              <div className="order-summary-checkout mt-4 p-3 bg-light rounded">
                <h6 className="mb-3">Order Summary</h6>
                <div className="d-flex justify-content-between">
                  <span>Subtotal:</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                {couponDiscount > 0 && (
                  <div className="d-flex justify-content-between text-success">
                    <span>Coupon Discount:</span>
                    <span>-₹{couponDiscount.toFixed(2)}</span>
                  </div>
                )}
                {/* NEW: Flash Sale Discount */}
                {flashDiscount > 0 && (
                  <div className="d-flex justify-content-between text-warning">
                    <span>Flash Sale Discount:</span>
                    <span>-₹{flashDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="d-flex justify-content-between">
                  <span>GST (18%):</span>
                  <span>₹{gstAmount.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Shipping:</span>
                  <span>{shippingCharge === 0 ? 'Free' : `₹${shippingCharge.toFixed(2)}`}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total:</span>
                  <span>₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>


              {/* Place Order Button */}
              <div className="box-btn mt-4">
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  disabled={processingOrder || !selectedAddressId || !contactInfo.email || !contactInfo.phone}
                  className={`tf-btn w-100 ${processingOrder ? 'opacity-75' : ''}`}
                >
                  {processingOrder ? (
                    <>
                      <div className="spinner-border spinner-border-sm me-2"></div>
                      Processing Order...
                    </>
                  ) : (
                    <span className="text-white">
                      {paymentMethod === 'cod' ? 'Place Order' : 'Proceed to Payment'} - ₹{grandTotal.toFixed(2)}
                    </span>
                  )}
                </button>
                
                {/* Validation helper text */}
                {(!contactInfo.email || !contactInfo.phone || !selectedAddressId) && (
                  <p className="small text-muted mt-2 text-center">
                    {!contactInfo.email || !contactInfo.phone ? 'Enter contact info' : ''} 
                    {(!contactInfo.email || !contactInfo.phone) && !selectedAddressId ? ' and ' : ''}
                    {!selectedAddressId ? 'select address' : ''} to place order
                  </p>
                )}
              </div>
            </div>
          </div>


          {/* Order Summary Sidebar */}
          <div className="flat-sidebar-checkout">
            <div className="sidebar-checkout-content">
              <h5 className="fw-semibold">Order Summary ({totalItems} items)</h5>


              {/* Cart Items */}
              <ul className="list-product">
                {cartProducts.map((item) => (
                  <li key={item.id} className="item-product">
                    <Link to={`/product-detail/${item.productId}`} className="img-product">
                      <img
                        alt={item.title}
                        src={`http://srv1078726.hstgr.cloud:3004/${item.imgSrc}`}
                        width={500}
                        height={500}
                       
                      />
                    </Link>
                    <div className="content-box">
                      <Link
                        to={`/product-detail/${item.productId}`}
                        className="link-secondary body-md-2 fw-semibold"
                      >
                        {item.title}
                      </Link>
                      <p className="price-quantity price-text fw-semibold">
                        ₹{item.price.toFixed(2)}
                        <span className="body-md-2 text-main-2 fw-normal">
                          ×{item.quantity}
                        </span>
                      </p>
                      {item.variant?.sku && (
                        <p className="body-md-2 text-main-2">SKU: {item.variant.sku}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>


              {/* Coupon Section */}
              <div className="">
                <p className="body-md-2 fw-semibold sub-type">Discount code</p>
                <form onSubmit={handleApplyFlashCode} className="ip-discount-code style-2 mt-3">
    <input
      type="text"
      className="def"
      placeholder="Enter flash sale code"
      value={flashCode}
      onChange={e => setFlashCode(e.target.value.toUpperCase())}
      disabled={applyingFlash}
    />
    <button type="submit" disabled={applyingFlash} className="tf-btn btn-warning">
      {applyingFlash ? <div className="spinner-border spinner-border-sm" /> : "Apply Flash"}
    </button>
  </form>
                
                {appliedCoupon && (
                  <div className="mt-2 p-2 bg-success bg-opacity-10 rounded">
                    <span className="text-success small">
                      ✓ Coupon "{appliedCoupon.code}" applied (-₹{couponDiscount.toFixed(2)})
                    </span>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger ms-2"
                      onClick={() => {
                        setAppliedCoupon(null);
                        setCouponDiscount(0);
                        setCouponCode('');
                        toast.info('Coupon removed');
                      }}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* NEW: Flash Sale Section - Only for Premium Members */}
              {isPremiumMember && availableFlashTier && (
                <div className="mt-4">
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-2">⚡</span>
                    <p className="body-md-2 fw-semibold sub-type mb-0">Flash Sale - {availableFlashTier.saleName}</p>
                  </div>
                  
                  {appliedFlashSale ? (
                    <div className="p-2 bg-warning bg-opacity-10 rounded border border-warning">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="text-warning small fw-bold">
                            🎉 {appliedFlashSale.code}
                          </span>
                          <br />
                          <small className="text-muted">
                            {appliedFlashSale.discountPercent}% off - Saved ₹{appliedFlashSale.discount.toFixed(2)}
                          </small>
                        </div>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={removeFlashSale}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flash-sale-form">
                      <div className="mb-2 d-flex justify-content-between">
                        <span className="badge bg-primary">{availableFlashTier.tierName}</span>
                        <span className="badge bg-success">{availableFlashTier.discountPercent}% OFF</span>
                      </div>
                      <small className="text-muted mb-2 d-block">
                        {availableFlashTier.remainingSlots} slots remaining
                      </small>
                      <div className="ip-discount-code style-2">
                        <input
                          type="text"
                          className="def"
                          placeholder="Enter flash sale code"
                          value={flashCode}
                          onChange={(e) => setFlashCode(e.target.value.toUpperCase())}
                          disabled={applyingFlash}
                        />
                        <button 
                          type="button" 
                          onClick={handleApplyFlashCode}
                          disabled={applyingFlash || !flashCode.trim()}
                          className="tf-btn btn-warning"
                        >
                          {applyingFlash ? (
                            <div className="spinner-border spinner-border-sm"></div>
                          ) : (
                            <span>Apply</span>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}


              {/* Price Breakdown (UPDATED) */}
              <ul className="sec-total-price">
                <li>
                  <span className="body-text-3">Subtotal</span>
                  <span className="body-text-3">₹{totalPrice.toFixed(2)}</span>
                </li>
                {couponDiscount > 0 && (
                  <li>
                    <span className="body-text-3 text-success">Coupon Discount</span>
                    <span className="body-text-3 text-success">-₹{couponDiscount.toFixed(2)}</span>
                  </li>
                )}
                {/* NEW: Flash Sale Discount in Price Breakdown */}
                 {flashDiscount > 0 && (
    <div className="d-flex justify-content-between text-warning">
      <span>Flash Discount:</span>
      <span>-₹{flashDiscount.toFixed(2)}</span>
    </div>
  )}
                <li>
                  <span className="body-text-3">GST (18%)</span>
                  <span className="body-text-3">₹{gstAmount.toFixed(2)}</span>
                </li>
                <li>
                  <span className="body-text-3">Shipping</span>
                  <span className="body-text-3">
                    {shippingCharge === 0 ? 'Free' : `₹${shippingCharge.toFixed(2)}`}
                  </span>
                </li>
                <li>
                  <span className="body-md-2 fw-semibold">Total</span>
                  <span className="body-md-2 fw-semibold text-primary">
                    ₹{grandTotal.toFixed(2)}
                  </span>
                </li>
              </ul>


              {/* Free Shipping Progress */}
              {shippingCharge > 0 && (
                <div className="shipping-progress mt-3">
                  <div className="progress mb-2" style={{ height: '6px' }}>
                    <div 
                      className="progress-bar bg-success" 
                      style={{ width: `${Math.min((subtotalAmount / 250) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <p className="small text-muted">
                    Add ₹{(250 - subtotalAmount).toFixed(2)} more for free shipping
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
