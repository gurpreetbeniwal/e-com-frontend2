import React, { useState, useEffect } from 'react';
import { getSubscriptionPlans, getMySubscription, purchaseSubscription } from '../../../api';
import Header3 from '@/components/headers/Header3';
import Footer1 from '@/components/footers/Footer1';

const PremiumMembership = () => {
    const [plans, setPlans] = useState([]);
    const [currentSubscription, setCurrentSubscription] = useState(null);
    const [loading, setLoading] = useState(true);
    const [purchasing, setPurchasing] = useState(false);
    const [error, setError] = useState(null);
    
    // Modal States
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [modalMessage, setModalMessage] = useState('');

    // Card hover states
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(null);

    // Inline Styles
    const styles = {
        membershipContainer: {
            minHeight: '100vh',
            background: '#f8f9fa'
        },
        membershipHero: {
            position: 'relative',
            height: '40vh',
            background: 'linear-gradient(135deg, #ff8181ff 0%, #ff3d3d 50%, #f87373ff 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            overflow: 'hidden'
        },
        heroContent: {
            position: 'relative',
            zIndex: 2,
            maxWidth: '800px',
            padding: '0 2rem'
        },
        heroTitle: {
            fontSize: window.innerWidth <= 768 ? '2.5rem' : '4rem',
            fontWeight: '700',
            marginBottom: '2rem',
            background: 'linear-gradient(45deg, #fff, #e8d5b7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        heroSubtitle: {
            fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.3rem',
            lineHeight: '1.6',
            opacity: '0.9',
            marginBottom: '0'
        },
        currentMembershipBanner: {
            background: 'linear-gradient(135deg, #28a745, #20c997)',
            color: 'white',
            padding: '2rem 0',
            marginBottom: '4rem'
        },
        membershipStatus: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem'
        },
        statusIcon: {
            fontSize: '3rem',
            color: '#ffd700'
        },
        statusTitle: {
            margin: '0 0 0.5rem 0',
            fontSize: '1.5rem',
            fontWeight: '600'
        },
        statusText: {
            margin: '0',
            opacity: '0.9'
        },
        membershipPlansSection: {
            padding: '6rem 0',
            background: 'transparent'
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem'
        },
        plansGrid: {
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            justifyContent: 'center'
        },
        membershipCard: (cardId, isPopular) => ({
            background: '#ffffff',
            borderRadius: '24px',
            padding: '0',
            boxShadow: hoveredCard === cardId ? '0 20px 60px rgba(0, 0, 0, 0.15)' : '0 10px 40px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            border: isPopular ? '3px solid #e8d5b7' : '3px solid transparent',
            transform: isPopular 
                ? (hoveredCard === cardId ? 'scale(1.05) translateY(-8px)' : 'scale(1.05)')
                : (hoveredCard === cardId ? 'translateY(-8px)' : 'none')
        }),
        membershipCardActiveMember: {
            borderColor: '#28a745'
        },
        popularBadge: {
            position: 'absolute',
            top: '-1px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #e8d5b7, #d4af37)',
            color: '#1a1a2e',
            padding: '0.5rem 1.5rem',
            borderRadius: '0 0 16px 16px',
            fontWeight: '600',
            fontSize: '0.9rem',
            zIndex: 5
        },
        cardHeader: {
            textAlign: 'center',
            padding: '3rem 2rem 2rem',
            background: 'linear-gradient(135deg, #f8f9fa, #ffffff)'
        },
        planName: {
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1a1a2e',
            marginBottom: '1rem'
        },
        planPrice: {
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            gap: '0.25rem',
            color: '#1a1a2e'
        },
        currency: {
            fontSize: '1.5rem',
            fontWeight: '600'
        },
        amount: {
            fontSize: '3rem',
            fontWeight: '700'
        },
        period: {
            fontSize: '1rem',
            color: '#6c757d',
            fontWeight: '500'
        },
        cardBody: {
            padding: '2rem'
        },
        featuresList: {
            listStyle: 'none',
            padding: '0',
            margin: '0'
        },
        featureItem: {
            display: 'flex',
            alignItems: 'center',
            padding: '0.75rem 0',
            fontSize: '1.1rem',
            color: '#4a5568',
            borderBottom: '1px solid #f1f3f4'
        },
        featureCheck: {
            color: '#28a745',
            marginRight: '1rem',
            fontSize: '1.2rem'
        },
        cardFooter: {
            padding: '2rem',
            background: '#f8f9fa'
        },
        membershipBtn: (buttonId, isPopular, isActive, disabled) => ({
            width: '100%',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: '2px solid transparent',
            fontWeight: '600',
            fontSize: '1.1rem',
            cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            opacity: disabled ? 0.7 : 1,
            ...(isActive ? {
                background: '#28a745',
                color: 'white',
                cursor: 'default'
            } : isPopular ? {
                background: hoveredButton === buttonId ? 'linear-gradient(135deg, #d4af37, #b8860b)' : 'linear-gradient(135deg, #e8d5b7, #d4af37)',
                color: '#1a1a2e',
                borderColor: '#e8d5b7',
                transform: hoveredButton === buttonId ? 'translateY(-2px)' : 'none',
                boxShadow: hoveredButton === buttonId ? '0 8px 25px rgba(212, 175, 55, 0.3)' : 'none'
            } : {
                background: hoveredButton === buttonId ? 'linear-gradient(135deg, #e8d5b7, #d4af37)' : 'transparent',
                color: '#1a1a2e',
                borderColor: '#e8d5b7'
            })
        }),
        btnSpinner: {
            width: '1rem',
            height: '1rem',
            border: '2px solid transparent',
            borderTop: '2px solid currentColor',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        },
        benefitsSection: {
            padding: '6rem 0',
            background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)'
        },
        benefitsTitle: {
            textAlign: 'center',
            fontSize: window.innerWidth <= 768 ? '2rem' : '3rem',
            fontWeight: '700',
            color: '#1a1a2e',
            marginBottom: '4rem'
        },
        benefitsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem'
        },
        benefitItem: {
            textAlign: 'center',
            padding: '2rem'
        },
        benefitIcon: {
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e8d5b7, #d4af37)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            fontSize: '2rem',
            color: '#1a1a2e'
        },
        benefitTitle: {
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1a1a2e',
            marginBottom: '1rem'
        },
        benefitText: {
            color: '#6c757d',
            lineHeight: '1.6'
        },
        // Modal Styles
        modalOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        },
        modalContent: {
            background: 'white',
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '500px',
            width: '90%',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)'
        },
        modalHeader: {
            textAlign: 'center',
            marginBottom: '1.5rem'
        },
        modalTitle: {
            fontSize: '1.5rem',
            fontWeight: '600',
            margin: '1rem 0 0.5rem 0',
            color: '#1a1a2e'
        },
        modalBody: {
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#6c757d',
            lineHeight: '1.6'
        },
        modalButtons: {
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center'
        },
        modalButton: {
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
        },
        primaryButton: {
            background: 'linear-gradient(135deg, #e8d5b7, #d4af37)',
            color: '#1a1a2e'
        },
        secondaryButton: {
            background: '#f8f9fa',
            color: '#6c757d',
            border: '1px solid #dee2e6'
        },
        loadingOverlay: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center'
        },
        spinner: {
            width: '3rem',
            height: '3rem',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #e8d5b7',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '1rem'
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const [plansResponse, subscriptionResponse] = await Promise.all([
                getSubscriptionPlans(),
                getMySubscription().catch(() => ({ data: { is_premium_member: false } }))
            ]);
            
            setPlans(plansResponse.data.plans || []);
            setCurrentSubscription(subscriptionResponse.data);
        } catch (error) {
            console.error('Error loading data:', error);
            setError('Failed to load subscription data. Please refresh the page.');
        } finally {
            setLoading(false);
        }
    };

    const handlePurchaseClick = (plan) => {
        setSelectedPlan(plan);
        setShowConfirmModal(true);
    };

    const handlePurchaseConfirm = async () => {
        setShowConfirmModal(false);
        setPurchasing(true);
        
        try {
            const response = await purchaseSubscription({
                plan_id: selectedPlan.id,
                payment_reference: `demo_payment_${Date.now()}`
            });

            if (response.data.success) {
                setModalMessage('🎉 Subscription purchased successfully! You are now a Premium Member!');
                setShowSuccessModal(true);
                loadData();
            } else {
                setModalMessage('Purchase failed: ' + (response.data.message || 'Unknown error'));
                setShowErrorModal(true);
            }
        } catch (error) {
            console.error('Purchase error:', error);
            setModalMessage('Error purchasing subscription:  Login or Register your Account  ' + (error.response?.data?.message || error.message));
            setShowErrorModal(true);
        } finally {
            setPurchasing(false);
        }
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN').format(price);
    };

    const getPlanFeatures = (plan, index) => {
        const baseFeatures = [
            'Access to Flash Sales',
            'Premium Support',
            'Mobile App Access',
            'Email Notifications'
        ];

        const planSpecificFeatures = {
            0: [...baseFeatures, 'Basic Dashboard', '5 Guest Passes'],
            1: [...baseFeatures, 'Advanced Dashboard', 'Priority Flash Sales', 'Unlimited Guest Passes', 'Advanced Analytics'],
            2: [...baseFeatures, 'Custom Dashboard', 'Dedicated Account Manager', 'API Access', 'White-label Options']
        };

        return planSpecificFeatures[index] || baseFeatures;
    };

    const isPremiumMember = currentSubscription?.is_premium_member || false;

    // Custom Modal Components
    const ConfirmModal = () => (
        showConfirmModal && (
            <div style={styles.modalOverlay}>
                <div style={styles.modalContent}>
                    <div style={styles.modalHeader}>
                        <i className="fas fa-question-circle fa-3x" style={{color: '#f39c12'}}></i>
                        <h3 style={styles.modalTitle}>Confirm Purchase</h3>
                    </div>
                    <div style={styles.modalBody}>
                        <p>Are you sure you want to purchase the <strong>{selectedPlan?.name}</strong> plan for <strong>₹{formatPrice(selectedPlan?.price || 0)}</strong>?</p>
                        <p>This will activate your premium membership immediately.</p>
                    </div>
                    <div style={styles.modalButtons}>
                        <button 
                            style={{...styles.modalButton, ...styles.secondaryButton}} 
                            onClick={() => setShowConfirmModal(false)}
                        >
                            Cancel
                        </button>
                        <button 
                            style={{...styles.modalButton, ...styles.primaryButton}} 
                            onClick={handlePurchaseConfirm}
                        >
                            Confirm Purchase
                        </button>
                    </div>
                </div>
            </div>
        )
    );

    const SuccessModal = () => (
        showSuccessModal && (
            <div style={styles.modalOverlay}>
                <div style={styles.modalContent}>
                    <div style={styles.modalHeader}>
                        <i className="fas fa-check-circle fa-3x" style={{color: '#28a745'}}></i>
                        <h3 style={styles.modalTitle}>Success!</h3>
                    </div>
                    <div style={styles.modalBody}>
                        <p>{modalMessage}</p>
                    </div>
                    <div style={styles.modalButtons}>
                        <button 
                            style={{...styles.modalButton, ...styles.primaryButton}} 
                            onClick={() => setShowSuccessModal(false)}
                        >
                            Great!
                        </button>
                    </div>
                </div>
            </div>
        )
    );

    const ErrorModal = () => (
        showErrorModal && (
            <div style={styles.modalOverlay}>
                <div style={styles.modalContent}>
                    <div style={styles.modalHeader}>
                        <i className="fas fa-exclamation-triangle fa-3x" style={{color: '#dc3545'}}></i>
                        <h3 style={styles.modalTitle}>Error</h3>
                    </div>
                    <div style={styles.modalBody}>
                        <p>{modalMessage}</p>
                    </div>
                    <div style={styles.modalButtons}>
                        <button 
                            style={{...styles.modalButton, ...styles.primaryButton}} 
                            onClick={() => setShowErrorModal(false)}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        )
    );

    if (loading) {
        return (
            <div style={styles.membershipContainer}>
                <div style={styles.loadingOverlay}>
                    <div style={styles.spinner}></div>
                    <p>Loading membership options...</p>
                </div>
            </div>
        );
    }

    return (
        <>
        <Header3/>
        <div style={styles.membershipContainer}>
            {/* Hero Section */}
            <div style={styles.membershipHero}>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>Membership Options</h1>
                    <p style={styles.heroSubtitle}>
                        All Memberships include full access to our amenities,<br />
                        exclusive flash sales, premium features & much more lorem ipsum.
                    </p>
                </div>
            </div>

            {/* Current Subscription Status */}
            {isPremiumMember && (
                <div style={styles.currentMembershipBanner}>
                    <div style={styles.container}>
                        <div style={styles.membershipStatus}>
                            <div style={styles.statusIcon}>
                                <i className="fas fa-crown"></i>
                            </div>
                            <div>
                                <h4 style={styles.statusTitle}>You're a Premium Member!</h4>
                                <p style={styles.statusText}>
                                    Active until {currentSubscription.expires_at ? 
                                        new Date(currentSubscription.expires_at).toLocaleDateString('en-IN', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        }) : 'N/A'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Membership Plans */}
            <div style={styles.membershipPlansSection}>
                <div style={styles.container}>
                    <div style={styles.plansGrid}>
                        {plans.map((plan, index) => {
                            const planFeatures = getPlanFeatures(plan, index);
                            const isPopular = index === 1;
                            const cardId = `card-${plan.id}`;
                            const buttonId = `btn-${plan.id}`;
                            
                            return (
                                <div 
                                    key={plan.id} 
                                    style={{
                                        ...styles.membershipCard(cardId, isPopular),
                                        ...(isPremiumMember ? styles.membershipCardActiveMember : {})
                                    }}
                                    onMouseEnter={() => setHoveredCard(cardId)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    {isPopular && <div style={styles.popularBadge}>Most Popular</div>}
                                    
                                    <div style={styles.cardHeader}>
                                        <h3 style={styles.planName}>{plan.name}</h3>
                                        <div style={styles.planPrice}>
                                            <span style={styles.currency}>₹</span>
                                            <span style={styles.amount}>{formatPrice(plan.price)}</span>
                                            <span style={styles.period}>/{plan.duration_days} days</span>
                                        </div>
                                    </div>

                                    <div style={styles.cardBody}>
                                        <ul style={styles.featuresList}>
                                            {planFeatures.map((feature, idx) => (
                                                <li key={idx} style={{
                                                    ...styles.featureItem,
                                                    borderBottom: idx === planFeatures.length - 1 ? 'none' : '1px solid #f1f3f4'
                                                }}>
                                                    <i className="fas fa-check" style={styles.featureCheck}></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div style={styles.cardFooter}>
                                        {isPremiumMember ? (
                                            <button style={styles.membershipBtn(buttonId, isPopular, true, true)}>
                                                <i className="fas fa-check" style={{marginRight: '0.5rem'}}></i>
                                                Active Plan
                                            </button>
                                        ) : (
                                            <button 
                                                style={styles.membershipBtn(buttonId, isPopular, false, purchasing)}
                                                onClick={() => handlePurchaseClick(plan)}
                                                disabled={purchasing}
                                                onMouseEnter={() => setHoveredButton(buttonId)}
                                                onMouseLeave={() => setHoveredButton(null)}
                                            >
                                                {purchasing ? (
                                                    <>
                                                        <span style={styles.btnSpinner}></span>
                                                        Processing...
                                                    </>
                                                ) : (
                                                    'Get Started'
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div style={styles.benefitsSection}>
                <div style={styles.container}>
                    <h2 style={styles.benefitsTitle}>Premium Member Benefits</h2>
                    <div style={styles.benefitsGrid}>
                        {[
                            { icon: 'fas fa-bolt', title: 'Exclusive Flash Sales', text: 'Access to member-only discount codes with up to 80% off' },
                            { icon: 'fas fa-crown', title: 'Premium Features', text: 'Unlock all premium features and advanced functionality' },
                            { icon: 'fas fa-headset', title: 'Priority Support', text: 'Get faster response times and dedicated customer support' },
                            { icon: 'fas fa-star', title: 'Early Access', text: 'Be the first to know about new products and exclusive offers' }
                        ].map((benefit, index) => (
                            <div key={index} style={styles.benefitItem}>
                                <div style={styles.benefitIcon}>
                                    <i className={benefit.icon}></i>
                                </div>
                                <h4 style={styles.benefitTitle}>{benefit.title}</h4>
                                <p style={styles.benefitText}>{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom Modals */}
            <ConfirmModal />
            <SuccessModal />
            <ErrorModal />

            {/* CSS Animations */}
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @media (max-width: 480px) {
                    .plans-grid {
                        padding: 0 1rem;
                    }
                    
                    .card-header {
                        padding: 2rem 1rem 1rem;
                    }
                    
                    .card-body, .card-footer {
                        padding: 1rem;
                    }
                }
            `}</style>
        </div>
        <Footer1 />
        </>
    );
};

export default PremiumMembership;
