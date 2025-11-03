import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
// ✅ Import the API functions
import { getProductReviews, addProductReview } from "../../../api";

export default function Description2({ product }) {
  console.log("📄 Description2 received product:", product);

  // States for reviews
  const [reviews, setReviews] = useState([]);
  const [reviewStats, setReviewStats] = useState({
    averageRating: 0,
    totalReviews: 0,
    ratings: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  });
  // ✅ Updated form state - removed name and email
  const [reviewForm, setReviewForm] = useState({
    rating: 5,
    comment: ''
  });
  const [submittingReview, setSubmittingReview] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  // Fallback if no product is provided
  if (!product) {
    return (
      <section className="tf-sp-4">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
            <p className="text-muted">Loading product details...</p>
          </div>
        </div>
      </section>
    );
  }

  // Get product information safely
  const productName = product.title || product.name || 'Product';
  const productDescription = product.description || 'No description available for this product.';
  const productBrand = product.brand || 'Unknown Brand';
  const productPrice = product.variants && product.variants.length > 0 
    ? parseFloat(product.variants[0].price).toFixed(2) 
    : '0.00';

  // Split description into paragraphs if it contains line breaks
  const descriptionParagraphs = productDescription.includes('\n') 
    ? productDescription.split('\n').filter(p => p.trim()) 
    : [productDescription];

  // Fetch reviews when component loads
  useEffect(() => {
    if (product.id) {
      fetchReviews();
    }
  }, [product.id]);

  // ✅ Updated fetch reviews function using API
  const fetchReviews = async () => {
    try {
      setReviewsLoading(true);
      console.log('🔄 Fetching reviews for product:', product.id);
      
      const response = await getProductReviews(product.id);
      console.log('📥 Reviews API response:', response);
      
      const data = response.data;
      
      if (data.success) {
        setReviews(data.reviews || []);
        setReviewStats(data.stats || {
          averageRating: 0,
          totalReviews: 0,
          ratings: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
        });
      } else {
        console.error('❌ API returned error:', data.message);
      }
    } catch (error) {
      console.error('❌ Error fetching reviews:', error);
      // Don't show error to user on initial load, just log it
    } finally {
      setReviewsLoading(false);
    }
  };

  // Handle star rating click
  const handleStarClick = (rating) => {
    setReviewForm({ ...reviewForm, rating });
  };

  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setReviewForm({ ...reviewForm, [name]: value });
  };

  // ✅ Updated submit review function - no name/email validation
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    
    // ✅ Only validate comment now (no name/email needed)
    if (!reviewForm.comment) {
      toast.error('Please write a review comment');
      return;
    }

    if (reviewForm.comment.length < 10) {
      toast.error('Review must be at least 10 characters long');
      return;
    }

    try {
      setSubmittingReview(true);
      
      // ✅ Only send rating and comment - backend will get user from auth token
      const reviewData = {
        rating: reviewForm.rating,
        comment: reviewForm.comment.trim()
      };
      
      console.log('📤 Submitting review:', reviewData);
      
      const response = await addProductReview(product.id, reviewData);
      console.log('📥 Submit review response:', response);

      const data = response.data;

      if (data.success) {
        toast.success('Review submitted successfully!');
        // ✅ Reset form with only rating and comment
        setReviewForm({ rating: 5, comment: '' });
        fetchReviews(); // Refresh reviews
      } else {
        toast.error(data.message || 'Failed to submit review');
      }
    } catch (error) {
      console.error('❌ Error submitting review:', error);
      
      // ✅ Better error handling for authentication
      if (error.response?.status === 401) {
        toast.error('Please login to submit a review');
      } else if (error.response?.status === 400) {
        toast.error(error.response?.data?.message || 'Invalid review data');
      } else {
        toast.error('Failed to submit review. Please try again.');
      }
    } finally {
      setSubmittingReview(false);
    }
  };

  // Calculate percentage for rating bars
  const getRatingPercentage = (rating) => {
    if (reviewStats.totalReviews === 0) return 0;
    return (reviewStats.ratings[rating] / reviewStats.totalReviews) * 100;
  };

  return (
    <section className="tf-sp-4">
      <div className="container">
        <div className="flat-product-des-list">
          
          {/* ✅ Dynamic Description Section */}
          <div className="flat-title-tab-product-des">
            <div className="flat-title-tab">
              <ul className="menu-tab-line">
                <li className="nav-tab-item">
                  <p className="product-title fw-semibold">Description</p>
                </li>
              </ul>
            </div>
            <div className="tab-main tab-des">
              {descriptionParagraphs.map((paragraph, index) => (
                <p key={index} className="body-text-3 mb-4">
                  {paragraph.trim()}
                </p>
              ))}

              {product.variants && product.variants.length > 1 && (
                <div className="variant-description mb-4">
                  <h6 className="fw-semibold mb-3">Available Variants</h6>
                  <p className="body-text-3">
                    This product is available in {product.variants.length} different variants, 
                    each with unique specifications and pricing. Choose the variant that best 
                    suits your needs from the selection above.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ✅ Dynamic Product Information Section */}
          <div className="flat-title-tab-product-des">
            <div className="flat-title-tab">
              <ul className="menu-tab-line">
                <li className="nav-tab-item">
                  <p className="product-title fw-semibold">Product information</p>
                </li>
              </ul>
            </div>
            <div className="tab-main tab-info">
              <ul className="list-feature">
                <li>
                  <p className="name-feature">Product Name</p>
                  <p className="property">{productName}</p>
                </li>
                <li>
                  <p className="name-feature">Brand</p>
                  <p className="property">{productBrand}</p>
                </li>
                <li>
                  <p className="name-feature">Product ID</p>
                  <p className="property">#{product.id}</p>
                </li>
                <li>
                  <p className="name-feature">Category</p>
                  <p className="property">{product.Category?.name || product.category || 'Electronics'}</p>
                </li>
                {product.slug && (
                  <li>
                    <p className="name-feature">Product Code</p>
                    <p className="property">{product.slug}</p>
                  </li>
                )}
                <li>
                  <p className="name-feature">Available Variants</p>
                  <p className="property">{product.variants?.length || 0} options</p>
                </li>
                <li>
                  <p className="name-feature">Price Range</p>
                  <p className="property">
                    {product.variants && product.variants.length > 0 
                      ? product.variants.length === 1 
                        ? `$${parseFloat(product.variants[0].price).toFixed(2)}`
                        : `$${Math.min(...product.variants.map(v => parseFloat(v.price))).toFixed(2)} - $${Math.max(...product.variants.map(v => parseFloat(v.price))).toFixed(2)}`
                      : 'N/A'
                    }
                  </p>
                </li>
                <li>
                  <p className="name-feature">Stock Status</p>
                  <p className="property">
                    {product.variants && product.variants.some(v => (v.stock || v.stock_quantity || 0) > 0) 
                      ? <span className="text-success">In Stock</span>
                      : <span className="text-danger">Out of Stock</span>
                    }
                  </p>
                </li>
                <li>
                  <p className="name-feature">Customer Reviews</p>
                  <div className="w-100 star-review flex-wrap">
                    <ul className="list-star">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <li key={star}>
                          <i className={`icon-star ${star <= Math.floor(reviewStats.averageRating) ? '' : 'text-main-4'}`} />
                        </li>
                      ))}
                    </ul>
                    <p className="caption text-main-2">
                      {reviewStats.totalReviews} {reviewStats.totalReviews === 1 ? 'Review' : 'Reviews'}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* ✅ Functional Reviews Section */}
          <div className="flat-title-tab-product-des">
            <div className="flat-title-tab">
              <ul className="menu-tab-line">
                <li className="nav-tab-item">
                  <p className="product-title fw-semibold">Reviews ({reviewStats.totalReviews})</p>
                </li>
              </ul>
            </div>
            <div className="tab-main tab-review flex-lg-nowrap">
              <div className="tab-rating-wrap">
                <div className="rating-percent">
                  <p className="rate-percent">
                    {reviewStats.averageRating || 0} <span>/ 5</span>
                  </p>
                  <ul className="list-star justify-content-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <li key={star}>
                        <i className={`icon-star ${star <= Math.floor(reviewStats.averageRating || 0) ? '' : 'text-main-4'}`} />
                      </li>
                    ))}
                  </ul>
                  <p className="text-cl-3">Based on {reviewStats.totalReviews} reviews</p>
                </div>
                
                {/* ✅ Dynamic rating progress bars */}
                <ul className="rating-progress-list">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <li key={rating}>
                      <p className="start-number body-text-3">
                        {rating}<i className="icon-star text-third" />
                      </p>
                      <div className="rating-progress">
                        <div className="progress style-2" role="progressbar">
                          <div 
                            className="progress-bar" 
                            style={{ width: `${getRatingPercentage(rating)}%` }} 
                          />
                        </div>
                      </div>
                      <p className="count-review body-text-3">{reviewStats.ratings[rating] || 0}</p>
                    </li>
                  ))}
                </ul>

                {/* ✅ Updated Review Form - No name/email fields */}
                <div className="add-comment-wrap">
                  <h5 className="fw-semibold">Add your review for {productName}</h5>
                  <div>
                    <form onSubmit={handleReviewSubmit} className="form-add-comment">
                      <fieldset className="rate">
                        <label>Rating:</label>
                        <ul className="list-star justify-content-start">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <li key={star} onClick={() => handleStarClick(star)} style={{ cursor: 'pointer' }}>
                              <i className={`icon-star ${star <= reviewForm.rating ? '' : 'text-main-4'}`} />
                            </li>
                          ))}
                        </ul>
                      </fieldset>
                      
                      {/* ✅ Removed name and email fields */}
                      
                      <fieldset className="align-items-sm-start">
                        <label>Review:</label>
                        <textarea 
                          name="comment"
                          placeholder={`Write your review about ${productName}... (minimum 10 characters)`} 
                          value={reviewForm.comment}
                          onChange={handleFormChange}
                          rows="4"
                          required
                          minLength={10}
                        />
                      </fieldset>
                      <div className="btn-submit">
                        <button 
                          type="submit" 
                          className="tf-btn btn-gray btn-large-2"
                          disabled={submittingReview}
                        >
                          <span className="text-white">
                            {submittingReview ? 'Submitting...' : 'Add Review'}
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                  
                  {/* ✅ Login reminder */}
                  <div className="mt-3">
                    <p className="caption text-muted">
                      <i className="icon-info-circle me-1"></i>
                      You must be logged in to submit a review
                    </p>
                  </div>
                </div>
              </div>

              {/* ✅ Dynamic Reviews Display */}
              <div className="tab-review-wrap">
                {reviewsLoading ? (
                  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading reviews...</span>
                    </div>
                  </div>
                ) : reviews.length > 0 ? (
                  <ul className="review-list">
                    {reviews.map((review) => (
                      <li key={review.id} className="box-review">
                        <div className="avt">
                          <div 
                            className="avatar-placeholder d-flex align-items-center justify-content-center"
                            style={{ 
                              width: '60px', 
                              height: '60px', 
                              backgroundColor: '#f8f9fa', 
                              borderRadius: '50%',
                              fontSize: '24px',
                              color: '#6c757d'
                            }}
                          >
                            {/* ✅ Updated to use reviewer_name from backend transformation */}
                            {(review.reviewer_name || 'A').charAt(0).toUpperCase()}
                          </div>
                        </div>
                        <div className="review-content">
                          <div className="author-wrap">
                            <h6 className="name fw-semibold">
                              {/* ✅ Updated to use reviewer_name from backend */}
                              {review.reviewer_name || 'Anonymous'}
                            </h6>
                            <ul className="verified">
                              {/* <li className="body-small fw-semibold text-main-2">
                                Verified Purchase
                              </li> */}
                            </ul>
                            <ul className="list-star">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <li key={star}>
                                  <i className={`icon-star ${star <= review.rating ? '' : 'text-main-4'}`} />
                                </li>
                              ))}
                            </ul>
                          </div>
                          <p className="text-review">
                            {review.comment}
                          </p>
                          <p className="date-review body-small">
                            {new Date(review.created_at).toLocaleDateString('en-US', {
                              day: '2-digit',
                              month: '2-digit', 
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                    <div className="text-center">
                      <i className="icon-message-circle fs-48 text-muted mb-3"></i>
                      <h6 className="fw-semibold mb-2">No Reviews Yet</h6>
                      <p className="text-muted">Be the first to review {productName}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
