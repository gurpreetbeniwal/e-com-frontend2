import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { addToCart } from "../../../api";

export default function ProductChoice({ product, onVariantChange, selectedVariant }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariantId, setSelectedVariantId] = useState(null);
  const [addingToCart, setAddingToCart] = useState(false);

  console.log("🎛️ ProductChoice received:", { product, selectedVariant });

  // Initialize with first variant
  useEffect(() => {
    if (product && product.variants && product.variants.length > 0) {
      const firstVariant = product.variants[0];
      setSelectedVariantId(firstVariant.id);
      if (onVariantChange) {
        onVariantChange(firstVariant);
      }
    }
  }, [product]);

  // Handle variant selection
  const handleVariantChange = (variantId) => {
    const variant = product.variants.find(v => v.id === parseInt(variantId));
    if (variant) {
      setSelectedVariantId(variant.id);
      // Reset quantity when variant changes
      setQuantity(1);
      console.log("🔄 Variant selected:", variant);
      if (onVariantChange) {
        onVariantChange(variant);
      }
    }
  };

  // ✅ Get current variant and handle both stock property names
  const currentVariant = selectedVariant || product.variants?.find(v => v.id === selectedVariantId) || product.variants?.[0];
  const stockQuantity = currentVariant?.stock_quantity || currentVariant?.stock || 0;
  const maxQuantity = Math.min(stockQuantity, 99); // Max 99 items per order
  const isInStock = stockQuantity > 0;

  console.log("📦 Current variant stock:", {
    variant: currentVariant,
    stock_quantity: currentVariant?.stock_quantity,
    stock: currentVariant?.stock,
    finalStock: stockQuantity,
    isInStock
  });

  // ✅ Use same method as header cart icon to open cart
  const openCartModal = () => {
    try {
      // Find the existing cart trigger in the header that uses Bootstrap offcanvas
      const cartTrigger = document.querySelector('[href="#shoppingCart"][data-bs-toggle="offcanvas"]');
      
      if (cartTrigger) {
        // Use the same method as the header - click the existing trigger
        cartTrigger.click();
        console.log('✅ Cart opened using header trigger method');
      } else {
        console.warn('⚠️ Cart trigger not found in header');
        toast.info('Cart updated! Click the cart icon in the header to view.');
      }
    } catch (error) {
      console.error('❌ Error opening cart modal:', error);
      toast.info('Item added! Check your cart in the header.');
    }
  };

  // ✅ Handle Add to Cart with modal trigger
  const handleAddToCart = async (e) => {
    e.preventDefault();
    
    if (!currentVariant) {
      toast.error('Please select a variant');
      return;
    }

    if (!isInStock) {
      toast.error('This variant is out of stock');
      return;
    }

    if (quantity < 1 || quantity > maxQuantity) {
      toast.error(`Quantity must be between 1 and ${maxQuantity}`);
      return;
    }

    try {
      setAddingToCart(true);

      const response = await addToCart({
        product_variant_id: currentVariant.id,
        quantity: quantity
      });

      if (response.data.success) {
        toast.success(`Added ${quantity} item(s) to cart!`);
        
        // ✅ Trigger cart update event
        window.dispatchEvent(new CustomEvent('cartUpdated', {
          detail: { 
            action: 'add',
            cartCount: response.data.cartCount,
            addedItem: {
              productName: product.name,
              variantSku: currentVariant.sku,
              quantity: quantity,
              price: currentVariant.price
            }
          }
        }));

        // ✅ Auto-open cart modal using same method as header
        setTimeout(() => {
          openCartModal();
        }, 300); // Small delay to ensure cart updates first

      } else {
        toast.error(response.data.message || 'Failed to add to cart');
      }
    } catch (error) {
      console.error('❌ Error adding to cart:', error);
      
      if (error.response?.status === 401) {
        toast.error('Please login to add items to cart');
      } else if (error.response?.status === 400) {
        // Handle stock issues
        const errorMessage = error.response.data.message;
        if (errorMessage.includes('stock')) {
          toast.error(errorMessage);
          // Update local stock if API provides updated stock info
          if (error.response.data.availableStock !== undefined) {
            console.log('📦 Updated stock info:', error.response.data.availableStock);
          }
        } else {
          toast.error(errorMessage);
        }
      } else {
        toast.error('Failed to add item to cart');
      }
    } finally {
      setAddingToCart(false);
    }
  };

  return (
    <>
      {/* Variant Selection and Quantity in horizontal layout */}
      <div className="tf-product-info-choose-option d-flex flex-wrap gap-4 align-items-end mb-4">
        
        {/* Variant Selection */}
        {product.variants && product.variants.length > 0 && (
          <div className="product-variant" style={{ minWidth: '200px' }}>
            <p className="title body-text-3 mb-2">Select Variant</p>
            <select 
              className="form-select"
              value={selectedVariantId || ''}
              onChange={(e) => handleVariantChange(e.target.value)}
              style={{ fontSize: '14px', padding: '8px 12px' }}
            >
              {product.variants.map((variant) => {
                const variantStock = variant.stock_quantity || variant.stock || 0;
                return (
                  <option key={variant.id} value={variant.id}>
                    {variant.sku} - ₹{parseFloat(variant.price).toFixed(2)}
                    {/* Show main attributes in dropdown */}
                    {variant.attributes && variant.attributes.length > 0 && (
                      ` (${variant.attributes.map(attr => attr.value).join(', ')})`
                    )}
                    {variantStock <= 0 && ' - Out of Stock'}
                    {variantStock > 0 && variantStock <= 5 && ` - Only ${variantStock} left`}
                  </option>
                );
              })}
            </select>
          </div>
        )}

        {/* Quantity Selection */}
        <div className="product-quantity" style={{ minWidth: '140px' }}>
          <p className="title body-text-3 mb-2">
            Quantity 
            {isInStock && (
              <span className="text-muted ms-1">
                (Max: {maxQuantity})
              </span>
            )}
          </p>
          <div className="wg-quantity d-flex align-items-center">
            <button
              className="btn-quantity btn-decrease"
              disabled={quantity <= 1 || !isInStock || addingToCart}
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              style={{ 
                width: '35px', 
                height: '35px',
                border: '1px solid #ddd',
                borderRadius: '50%',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: (quantity <= 1 || !isInStock || addingToCart) ? 'not-allowed' : 'pointer',
                opacity: addingToCart ? 0.7 : 1
              }}
            >
              <i className="icon-minus" />
            </button>
            <input
              className="quantity-product mx-2 text-center"
              type="number"
              value={isInStock ? quantity : 0}
              onChange={(e) => {
                const newQuantity = parseInt(e.target.value) || 1;
                setQuantity(Math.min(Math.max(1, newQuantity), maxQuantity));
              }}
              min="1"
              max={maxQuantity}
              disabled={!isInStock || addingToCart}
              style={{
                width: '60px',
                height: '35px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 'bold',
                opacity: addingToCart ? 0.7 : 1
              }}
            />
            <button
              className="btn-quantity btn-increase"
              disabled={quantity >= maxQuantity || !isInStock || addingToCart}
              onClick={() => setQuantity((prev) => Math.min(maxQuantity, prev + 1))}
              style={{ 
                width: '35px', 
                height: '35px',
                border: '1px solid #ddd',
                borderRadius: '50%',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: (quantity >= maxQuantity || !isInStock || addingToCart) ? 'not-allowed' : 'pointer',
                opacity: addingToCart ? 0.7 : 1
              }}
            >
              <i className="icon-plus" />
            </button>
          </div>
          {!isInStock && (
            <small className="text-danger mt-1 d-block">Out of Stock</small>
          )}
          {isInStock && stockQuantity <= 5 && (
            <small className="text-warning mt-1 d-block">
              Only {stockQuantity} left!
            </small>
          )}
        </div>

        {/* Add to Cart Button */}
        <div className="product-box-btn" style={{ minWidth: '150px' }}>
          {isInStock ? (
            <button
              onClick={handleAddToCart}
              disabled={addingToCart}
              className="tf-btn text-white d-flex align-items-center justify-content-center"
              style={{ 
                height: '45px',
                borderRadius: '8px',
                border: 'none',
                padding: '0 20px',
                cursor: addingToCart ? 'not-allowed' : 'pointer',
                opacity: addingToCart ? 0.7 : 1,
                transition: 'opacity 0.3s ease'
              }}
            >
              {addingToCart ? (
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
          ) : (
            <button 
              className="tf-btn text-white d-flex align-items-center justify-content-center" 
              disabled
              style={{ 
                height: '45px',
                borderRadius: '8px',
                opacity: 0.6, 
                cursor: 'not-allowed',
                backgroundColor: '#6c757d',
                border: 'none',
                padding: '0 20px'
              }}
            >
              Out of Stock
              <i className="icon-x-circle ms-2" />
            </button>
          )}
        </div>
      </div>

      {/* ✅ Success Animation/Feedback */}
      {addingToCart && (
        <div className="adding-to-cart-feedback mb-3">
          <div className="alert alert-info d-flex align-items-center">
            <div className="spinner-border spinner-border-sm me-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div>
              <strong>Adding to cart...</strong>
              <br />
              <small>Please wait while we add {quantity} item(s) to your cart</small>
            </div>
          </div>
        </div>
      )}

      {/* Show Selected Variant Details */}
      {currentVariant && (
        <div className="variant-details mb-4">
          <h6 className="fw-semibold mb-3">Selected Variant Details</h6>
          
          {/* Basic Variant Info */}
          <div className="variant-basic-info p-3 bg-light rounded mb-3">
            <div className="row">
              <div className="col-md-3 col-6">
                <p className="mb-1 text-muted small">SKU</p>
                <span className="text-primary fw-bold">{currentVariant.sku}</span>
              </div>
              <div className="col-md-3 col-6">
                <p className="mb-1 text-muted small">Price</p>
                <span className="text-success fw-bold fs-5">₹{parseFloat(currentVariant.price).toFixed(2)}</span>
              </div>
              <div className="col-md-3 col-6">
                <p className="mb-1 text-muted small">Stock</p>
                <span className={`fw-bold ${stockQuantity > 0 ? 'text-success' : 'text-danger'}`}>
                  {stockQuantity} units
                </span>
              </div>
              <div className="col-md-3 col-6">
                <p className="mb-1 text-muted small">Status</p>
                <span className={`badge ${stockQuantity > 0 ? 'bg-success' : 'bg-danger'}`}>
                  {stockQuantity > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
            
            {/* Order Total Preview */}
            {isInStock && quantity > 0 && (
              <div className="order-preview mt-3 pt-3 border-top">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">Order Total:</span>
                  <span className="fw-bold fs-5 text-primary">
                    ₹{(parseFloat(currentVariant.price) * quantity).toFixed(2)}
                  </span>
                </div>
                <small className="text-muted">
                  {quantity} × ₹{parseFloat(currentVariant.price).toFixed(2)}
                </small>
              </div>
            )}
          </div>

          {/* Show Variant Attributes */}
          {currentVariant.attributes && currentVariant.attributes.length > 0 && (
            <div className="variant-attributes mb-3">
              <h6 className="fw-semibold mb-3">Variant Specifications</h6>
              <div className="row g-3">
                {currentVariant.attributes.map((attribute, index) => (
                  <div key={index} className="col-md-4 col-sm-6">
                    <div className="attribute-card p-3 border rounded-3 h-100">
                      <div className="d-flex flex-column">
                        <p className="mb-1 text-muted small text-uppercase fw-bold">
                          {attribute.name}
                        </p>
                        <span className="fw-bold text-dark fs-6">
                          {attribute.value}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Show message if no attributes */}
          {(!currentVariant.attributes || currentVariant.attributes.length === 0) && (
            <div className="no-attributes p-3 border rounded bg-light">
              <p className="mb-0 text-muted fst-italic text-center">
                <i className="icon-info-circle me-2"></i>
                No additional specifications available for this variant.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Stock Warnings */}
      {currentVariant && stockQuantity > 0 && stockQuantity <= 5 && (
        <div className="alert alert-warning py-2 px-3 mb-3">
          <i className="icon-alert-triangle me-2" />
          <small><strong>Low Stock Alert:</strong> Only {stockQuantity} units left!</small>
        </div>
      )}

      {/* Out of Stock Message */}
      {currentVariant && stockQuantity === 0 && (
        <div className="alert alert-danger py-2 px-3 mb-3">
          <i className="icon-x-circle me-2" />
          <small><strong>Out of Stock:</strong> This variant is currently unavailable.</small>
        </div>
      )}
    </>
  );
}
