import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserProfile, getMySubscription ,logout as apiLogout  } from '../../../api';




export default function MyAccount() {
  const [accountDetails, setAccountDetails] = useState(null);
  const [subscriptionData, setSubscriptionData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Hover state management
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const [profileResponse, subscriptionResponse] = await Promise.all([
          getUserProfile(),
          getMySubscription().catch(() => ({ data: { is_premium_member: false } }))
        ]);
        
        setAccountDetails(profileResponse.data);
        setSubscriptionData(subscriptionResponse.data);
      } catch (error) {
        console.error("Failed to fetch account details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccountData();
  }, []);

  const handleUpgradeToPremium = () => {
    navigate('/premiummembership');
  };

  const handleLogout = async () => {
  try {
    // Call backend to invalidate session/token (if your API expects it)
    await apiLogout().catch(() => {}); // ignore backend failure to avoid blocking client logout

    // Clear client-side auth
    localStorage.removeItem('authToken');

    // Optional: clear other cached data
    // localStorage.removeItem('cart');
    // sessionStorage.clear();

    // Navigate to login (or home)
    navigate('/', { replace: true });
  } catch (e) {
    // Fallback: still navigate after clearing token
    localStorage.removeItem('authToken');
    navigate('/', { replace: true });
  }
};

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysRemaining = (endDate) => {
    if (!endDate) return 0;
    const now = new Date();
    const expiry = new Date(endDate);
    const diffTime = expiry - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  // Card style function with hover state
  const getCardStyle = (cardId, isButton = false, isPremium = false) => {
    const isHovered = hoveredCard === cardId;
    
    const baseStyle = {
      background: isButton 
        ? (isPremium 
          ? 'linear-gradient(135deg, #28a745, #20c997)' 
          : 'linear-gradient(135deg, #ffc107, #ff8f00)')
        : 'white',
      color: isButton 
        ? (isPremium ? 'white' : '#000')
        : 'inherit',
      padding: '1.5rem',
      borderRadius: '8px',
      textDecoration: 'none',
      border: isButton ? 'none' : '1px solid #e9ecef',
      cursor: 'pointer',
      textAlign: isButton ? 'left' : 'initial',
      transition: 'all 0.3s ease',
      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: isHovered 
        ? (isButton 
          ? '0 4px 12px rgba(0,0,0,0.2)' 
          : '0 4px 12px rgba(0,0,0,0.1)')
        : 'none',
      display: 'block',
      width: '100%'
    };

    return baseStyle;
  };

  if (loading) {
    return (
      <div className="my-account-content account-dashboard">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid #f3f3f3', 
            borderTop: '4px solid #007bff', 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }}></div>
          <p>Loading your dashboard...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (!accountDetails) {
    return (
      <div className="my-account-content account-dashboard">
        <h3 className="fw-semibold mb-20">Could not load your details.</h3>
        <p>
          Please <Link to="/login" className="text-secondary link fw-medium">log in</Link> again.
        </p>
      </div>
    );
  }

  const isPremiumMember = subscriptionData?.is_premium_member || false;
  const daysRemaining = isPremiumMember ? getDaysRemaining(subscriptionData?.expires_at) : 0;

  return (
    <div className="my-account-content account-dashboard">
      <div className="mb_60">
        {/* Dynamic Greeting */}
        <h3 className="fw-semibold mb-20">Hello {accountDetails.first_name}!</h3>
        
        {/* Subscription Status Section */}
        <div style={{
          background: isPremiumMember 
            ? 'linear-gradient(135deg, #28a745, #20c997)' 
            : 'linear-gradient(135deg, #6c757d, #495057)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          marginBottom: '2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100px',
            height: '100px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            transform: 'translate(30px, -30px)'
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                {isPremiumMember ? '👑' : '🌟'}
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem', fontWeight: '600' }}>
                  {isPremiumMember ? 'Premium Member' : 'Free Account'}
                </h4>
                <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
                  {isPremiumMember 
                    ? `Active until ${formatDate(subscriptionData?.expires_at)}` 
                    : 'Upgrade to unlock exclusive features'
                  }
                </p>
              </div>
            </div>

            {isPremiumMember ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.25rem' }}>
                    Days Remaining
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {/* <Link 
                    to="/flash-sales" 
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    ⚡ Flash Sales
                  </Link>
                  <Link 
                    to="/premium-membership" 
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    ⚙️ Manage
                  </Link> */}
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '0.5rem' }}>
                    • Access to Flash Sales<br />
                    • Priority Support<br />
                    • Exclusive Discounts
                  </div>
                </div>
                <button
                  onClick={handleUpgradeToPremium}
                  style={{
                    background: 'linear-gradient(135deg, #ffc107, #ff8f00)',
                    color: '#000',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Upgrade Now
                </button>
              </div>
            )}
          </div>
        </div>

        <p>
          From your account dashboard you can view your
          <Link className="text-secondary link fw-medium" to={`/my-account-orders`}>
            &nbsp;recent orders
          </Link>
          , manage your
          <Link className="text-secondary link fw-medium" to={`/my-account-address`}>
            &nbsp;shipping and billing address
          </Link>
          , and
          <Link className="text-secondary link fw-medium" to={`/my-account-edit`}>
            &nbsp;edit your password and account details
          </Link>
          .
        </p>

        {/* Quick Action Cards - FIXED HOVER EFFECTS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          
          {/* Orders Card */}
          <Link 
            to="/my-account-orders" 
            style={getCardStyle('orders')}
            onMouseEnter={() => setHoveredCard('orders')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📦</div>
            <h5 style={{ margin: '0 0 0.5rem 0', fontWeight: '600' }}>Recent Orders</h5>
            <p style={{ margin: 0, color: '#6c757d', fontSize: '0.9rem' }}>
              Track your orders and download invoices
            </p>
          </Link>

          {/* Addresses Card */}
          <Link 
            to="/my-account-address" 
            style={getCardStyle('addresses')}
            onMouseEnter={() => setHoveredCard('addresses')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📍</div>
            <h5 style={{ margin: '0 0 0.5rem 0', fontWeight: '600' }}>Addresses</h5>
            <p style={{ margin: 0, color: '#6c757d', fontSize: '0.9rem' }}>
              Manage shipping and billing addresses
            </p>
          </Link>

          {/* Account Settings Card */}
          <Link 
            to="/my-account-edit" 
            style={getCardStyle('settings')}
            onMouseEnter={() => setHoveredCard('settings')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚙️</div>
            <h5 style={{ margin: '0 0 0.5rem 0', fontWeight: '600' }}>Account Settings</h5>
            <p style={{ margin: 0, color: '#6c757d', fontSize: '0.9rem' }}>
              Update profile and change password
            </p>
          </Link>

          {/* Membership Card */}
          <div 
            style={getCardStyle('membership', true, isPremiumMember)}
            onMouseEnter={() => setHoveredCard('membership')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={handleUpgradeToPremium}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              {isPremiumMember ? '👑' : '⭐'}
            </div>
            <h5 style={{ margin: '0 0 0.5rem 0', fontWeight: '600' }}>
              {isPremiumMember ? 'Premium Membership' : 'Upgrade to Premium'}
            </h5>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>
              {isPremiumMember 
                ? 'Manage your premium benefits' 
                : 'Unlock exclusive flash sales and features'
              }
            </p>
          </div>
        
        <div
  role="button"
  tabIndex={0}
  style={getCardStyle('logout')}
  onMouseEnter={() => setHoveredCard('logout')}
  onMouseLeave={() => setHoveredCard(null)}
  onClick={handleLogout}
  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleLogout(); }}
>
  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚪</div>
  <h5 style={{ margin: '0 0 0.5rem 0', fontWeight: '600' }}>Log Out</h5>
  <p style={{ margin: 0, color: '#6c757d', fontSize: '0.9rem' }}>
    Sign out of your account
  </p>
</div>



        </div>
      </div>
    </div>
  );
}
