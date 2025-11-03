import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getActiveFlashSales } from "../../../api";

export default function Banner2() {
  const [flashSales, setFlashSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    fetchFlashSales();
    
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const fetchFlashSales = async () => {
    try {
      console.log('🔍 Fetching flash sales...');
      const response = await getActiveFlashSales();
      console.log('📡 API Response:', response.data);
      
      if (response.data.success) {
        setFlashSales(response.data.flash_sales || []);
        console.log('✅ Flash sales set:', response.data.flash_sales.length);
      }
    } catch (error) {
      console.error('❌ Error fetching flash sales:', error);
    } finally {
      setLoading(false);
    }
  };

  // Get countdown timer for flash sale
  const getCountdown = (endTime) => {
    const now = currentTime.getTime();
    const end = new Date(endTime).getTime();
    const diff = end - now;

    if (diff <= 0) return { expired: true };

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, expired: false };
  };

  // Get the best available tier for a flash sale
  const getBestTier = (tiers) => {
    if (!tiers || tiers.length === 0) return null;
    
    const availableTiers = tiers.filter(tier => 
      tier.status === 'active' && tier.used_count < tier.member_limit
    );
    
    if (availableTiers.length === 0) return null;
    
    return availableTiers.reduce((best, current) => 
      current.discount_percent > best.discount_percent ? current : best
    );
  };

  // Copy promo code to clipboard
  const copyPromoCode = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Code ${code} copied to clipboard!`);
  };

  // Filter active flash sales
  const activeFlashSales = !loading 
    ? flashSales.filter(sale => {
        const countdown = getCountdown(sale.end_time);
        return !countdown.expired;
      })
    : [];

  console.log('🔥 Active flash sales found:', activeFlashSales.length);

  // If no flash sales, don't render anything
  if (loading) {
    return (
      <section>
        <div className="container">
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading flash sales...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (activeFlashSales.length === 0) {
    return null; // Don't show anything if no active sales
  }

  return (
    <section className="flash-sales-section py-4">
      <div className="container">
        <div className="row g-4">
          {activeFlashSales.map((flashSale) => {
            const bestTier = getBestTier(flashSale.tiers);
            const countdown = getCountdown(flashSale.end_time);
            
            // Default values when no tiers exist
            const discountPercent = bestTier ? bestTier.discount_percent : 25;
            const slotsLeft = bestTier ? (bestTier.member_limit - bestTier.used_count) : 100;
            const totalSlots = bestTier ? bestTier.member_limit : 100;

            return (
              <div key={flashSale.id} className="col-12">
                <div className="flash-sale-card">
                  <div className="row align-items-center">
                    {/* Left Side - Flash Sale Info */}
                    <div className="col-md-8">
                      <div className="flash-sale-content">
                        {/* Header */}
                        <div className="d-flex align-items-center mb-3">
                          <span className="live-badge me-3">
                            <span className="live-dot"></span>
                            LIVE FLASH SALE
                          </span>
                          <span className="discount-badge">
                            {discountPercent}% OFF
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="flash-sale-title mb-2">
                          {flashSale.name}
                        </h3>

                        {/* Description */}
                        {flashSale.description && (
                          <p className="flash-sale-description mb-3">
                            {flashSale.description}
                          </p>
                        )}

                        {/* Promo Code */}
                        <div className="promo-code-section mb-3">
                          <label className="form-label fw-bold">Use Promo Code:</label>
                          <div className="input-group" style={{ maxWidth: '300px' }}>
                            <input
                              type="text"
                              className="form-control fw-bold text-center"
                              value={flashSale.code}
                              readOnly
                              style={{ letterSpacing: '3px', fontSize: '18px' }}
                            />
                            <button
                              className="btn btn-outline-primary"
                              onClick={() => copyPromoCode(flashSale.code)}
                              title="Copy code"
                            >
                              📋 Copy
                            </button>
                          </div>
                        </div>

                        {/* Slots Remaining */}
                        <div className="slots-section mb-3">
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <span className="fw-bold text-danger">
                              🔥 Only {slotsLeft} slots remaining!
                            </span>
                            <span className="text-muted small">
                              {slotsLeft}/{totalSlots} available
                            </span>
                          </div>
                          <div className="progress" style={{ height: '8px' }}>
                            <div 
                              className="progress-bar bg-danger" 
                              style={{ 
                                width: `${(slotsLeft / totalSlots) * 100}%` 
                              }}
                            ></div>
                          </div>
                        </div>

                        {/* Member Badge */}
                        {flashSale.is_members_only && (
                          <div className="mb-3">
                            <span className="badge bg-primary px-3 py-2">
                              🏆 Premium Members Only
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Side - Countdown & Action */}
                    <div className="col-md-4">
                      <div className="countdown-section text-center">
                        <h5 className="text-danger fw-bold mb-3">Sale Ends In:</h5>
                        
                        <div className="countdown-timer mb-4">
                          <div className="row text-center">
                            {countdown.days > 0 && (
                              <div className="col-3">
                                <div className="time-unit">
                                  <div className="time-value">
                                    {countdown.days.toString().padStart(2, '0')}
                                  </div>
                                  <div className="time-label">Days</div>
                                </div>
                              </div>
                            )}
                            <div className="col-3">
                              <div className="time-unit">
                                <div className="time-value">
                                  {countdown.hours.toString().padStart(2, '0')}
                                </div>
                                <div className="time-label">Hours</div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="time-unit">
                                <div className="time-value">
                                  {countdown.minutes.toString().padStart(2, '0')}
                                </div>
                                <div className="time-label">Min</div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="time-unit">
                                <div className="time-value">
                                  {countdown.seconds.toString().padStart(2, '0')}
                                </div>
                                <div className="time-label">Sec</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <Link
                          to="/checkout"
                          className="btn btn-danger btn-lg px-4 py-3 fw-bold"
                        >
                          🛒 Shop Now & Save {discountPercent}%
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .flash-sales-section {
          background: linear-gradient(135deg, #fff3cd 0%, #ffe4e1 100%);
          border-top: 3px solid #ff6b6b;
          border-bottom: 3px solid #ff6b6b;
        }

        .flash-sale-card {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 2px solid #ffc107;
          position: relative;
          overflow: hidden;
        }

        .flash-sale-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ff6b6b, #ffa500, #ff6b6b);
          animation: shimmer 2s infinite;
        }

        .live-badge {
          background: #28a745;
          color: white;
          padding: 8px 16px;
          border-radius: 25px;
          font-weight: bold;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background: #ff4444;
          border-radius: 50%;
          margin-right: 8px;
          animation: blink 1s infinite;
        }

        .discount-badge {
          background: #ffc107;
          color: #000;
          padding: 8px 16px;
          border-radius: 25px;
          font-weight: bold;
          font-size: 16px;
        }

        .flash-sale-title {
          color: #333;
          font-size: 28px;
          font-weight: bold;
        }

        .flash-sale-description {
          color: #666;
          font-size: 16px;
        }

        .time-unit {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 10px 5px;
          margin: 0 2px;
          border: 2px solid #dee2e6;
        }

        .time-value {
          font-size: 24px;
          font-weight: bold;
          color: #dc3545;
          line-height: 1;
        }

        .time-label {
          font-size: 12px;
          color: #6c757d;
          text-transform: uppercase;
          margin-top: 4px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .promo-code-section input:focus {
          box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);
          border-color: #ffc107;
        }

        .countdown-timer {
          background: #f8f9fa;
          border-radius: 15px;
          padding: 20px;
          border: 2px dashed #dee2e6;
        }

        @media (max-width: 768px) {
          .flash-sale-card {
            padding: 20px;
          }
          
          .flash-sale-title {
            font-size: 24px;
          }
          
          .time-value {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}
