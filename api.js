import axios from 'axios';

const API_URL = 'http://localhost:3004/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ PRODUCT APIs
export const getProducts = (params) => api.get('/products', { params });
export const getProductById = (id) => api.get(`/products/${id}`);
export const getDealProducts = () => api.get('/products/deals');
export const getCategories = () => api.get('/products/categories');
export const getCategoriesWithSampleImage = () => api.get('/products/categories/with-sample-image');
export const getCategoryProducts = (productId, params = {}) => 
    api.get(`/products/${productId}/category-products`, { params });

// ✅ REVIEW APIs
export const getProductReviews = (productId) => api.get(`/users/${productId}/reviews`);
export const addProductReview = (productId, reviewData) => api.post(`/users/${productId}/reviews`, reviewData);

// ✅ AUTH APIs
export const login = (credentials) => api.post('/users/login', credentials);
export const register = (userData) => api.post('/users/register', userData);
export const googleSignIn = (credential) => api.post('/users/google-signin', { credential });
export const logout = () => api.post('/users/logout');

// ✅ ADDRESS APIs
export const addAddress = (addressData) => api.post('/users/addresses', addressData);
export const getAddresses = () => api.get('/users/addresses');
export const updateAddress = (id, addressData) => api.put(`/users/addresses/${id}`, addressData);
export const deleteAddress = (id) => api.delete(`/users/addresses/${id}`);

// ✅ USER PROFILE APIs
export const getUserProfile = () => api.get('/users/profile');
export const updateUserProfile = (userData) => api.put('/users/profile', userData);
export const changePassword = (passwordData) => api.post('/users/change-password', passwordData);

// ✅ CART APIs
export const getCartCount = () => api.get('/cart/count');
export const getCart = () => api.get('/cart');
export const addToCart = (cartData) => api.post('/cart/add', cartData);
export const updateCartItem = (itemId, data) => api.put(`/cart/update/${itemId}`, data);
export const removeFromCart = (itemId) => api.delete(`/cart/remove/${itemId}`);
export const clearCart = () => api.delete('/cart/clear');
export const validateCart = () => api.post('/cart/validate');

// ✅ ORDER APIs
export const createOrder = (orderData) => api.post('/users/orders', orderData);
export const getOrders = (params = {}) => api.get('/users/orders', { params });
export const getOrder = (orderId) => api.get(`/users/orders/${orderId}`);

// ✅ COUPON APIs
export const applyCoupon = (couponCode, cartTotal) => api.post('/users/coupons/apply', { couponCode, cartTotal });
export const validateCoupon = (couponCode) => api.post('/users/coupons/validate', { couponCode });

// =================================================================
// ✅ SUBSCRIPTION MANAGEMENT APIs
// =================================================================

// Get all subscription plans (public)
export const getSubscriptionPlans = () => api.get('/subscriptions/plans');

// Purchase a subscription plan (requires auth)
export const purchaseSubscription = (subscriptionData) => api.post('/subscriptions/purchase', subscriptionData);

// Get current user's subscription status (requires auth)
export const getMySubscription = () => api.get('/subscriptions/my-subscription');

// =================================================================
// ✅ FLASH SALES APIs (CORRECTED ENDPOINTS)
// =================================================================

// Get all active flash sales (public)
export const getActiveFlashSales = () => api.get('/flash-sales/active');

// Apply flash sale code (requires premium membership)
export const applyFlashCode = (flashCodeData) => api.post('/flash-sales/apply', flashCodeData);

// Get user's flash sale usage history (requires auth)
export const getFlashSaleUsage = () => api.get('/flash-sales/my-usage');

// Validate flash sale code without applying (requires auth)
export const validateFlashCode = (code) => api.get(`/flash-sales/validate/${code}`);

// =================================================================
// ✅ MEMBERSHIP VERIFICATION APIs
// =================================================================

// Check if user is premium member (requires auth) - Uses existing subscription endpoint
export const checkPremiumMembership = () => api.get('/subscriptions/my-subscription');

// Get membership benefits and features (public)
export const getMembershipBenefits = () => api.get('/subscriptions/plans');

export default api;
