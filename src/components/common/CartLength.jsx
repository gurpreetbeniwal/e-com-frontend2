import React, { useState, useEffect } from "react";
import { getCart } from "../../../api";

export default function CartLength() {
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in by checking for token in localStorage
  const isLoggedIn = () => {
    const token = localStorage.getItem('token') || localStorage.getItem('authToken');
    return !!token;
  };

  // Fetch cart data from backend (same as your Cart component)
  const fetchCartCount = async () => {
    if (!isLoggedIn()) {
      setTotalItems(0);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await getCart();
      
      if (response.data && response.data.success) {
        const cart = response.data.cart;
        // Use totalItems from backend response
        setTotalItems(cart.totalItems || 0);
      } else {
        setTotalItems(0);
      }
    } catch (error) {
      console.error('Error fetching cart count:', error);
      if (error.response?.status === 401) {
        // User not logged in
        setTotalItems(0);
      } else {
        // Other errors - still show 0
        setTotalItems(0);
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch cart count on component mount
  useEffect(() => {
    fetchCartCount();
  }, []);

  // Listen for cart update events (same as your Cart component)
  useEffect(() => {
    const handleCartUpdate = () => {
      fetchCartCount();
    };
    
    const handleAuthChange = () => {
      fetchCartCount();
    };
    
    // Listen for cart update events
    window.addEventListener('cartUpdated', handleCartUpdate);
    window.addEventListener('userLogin', handleAuthChange);
    window.addEventListener('userLogout', handleAuthChange);
    
    // Listen for storage changes (login/logout from other tabs)
    window.addEventListener('storage', (e) => {
      if (e.key === 'token' || e.key === 'authToken') {
        fetchCartCount();
      }
    });
    
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
      window.removeEventListener('userLogin', handleAuthChange);
      window.removeEventListener('userLogout', handleAuthChange);
      window.removeEventListener('storage', handleCartUpdate);
    };
  }, []);

  // If user is not logged in, return empty
  if (!isLoggedIn()) {
    return <></>;
  }

  // Show loading state (optional - you can remove this if you prefer no indicator)
  if (loading) {
    return <>•</>;
  }

  // If user is logged in, show total items from backend
  return <>{totalItems}</>;
}
