import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../../../api";
import { useContextElement } from "@/context/Context";
import { allProducts } from "@/data/products";

export default function Wishlist() {
  const {
    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();
  
  const [items, setItems] = useState([]);
  const [addingToCart, setAddingToCart] = useState({});

  // Get wishlist items from localStorage and filter allProducts
  useEffect(() => {
    const loadWishlistItems = () => {
      const wishlistIds = JSON.parse(localStorage.getItem('wishlist') || '[]');
      const wishlistItems = allProducts.filter(product => wishlistIds.includes(product.id));
      setItems(wishlistItems);
    };

    loadWishlistItems();

    // Listen for wishlist updates
    const handleWishlistUpdate = () => {
      loadWishlistItems();
    };

    window.addEventListener('wishlistUpdated', handleWishlistUpdate);
    
    return () => {
      window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
    };
  }, []);

  // Remove from wishlist and localStorage
  const removeFromWishlist = (productId) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const updatedWishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    
    // Update local state
    setItems(prev => prev.filter(item => item.id !== productId));
    
    toast.info('Removed from wishlist');
    
    // Dispatch wishlist update event
    window.dispatchEvent(new CustomEvent('wishlistUpdated', {
      detail: { action: 'remove', productId }
    }));
  };

  // Handle Add to Cart with real API
  const handleAddToCart = async (product) => {
    if (addingToCart[product.id] || !product.variants || product.variants.length === 0) return;

    try {
      setAddingToCart(prev => ({ ...prev, [product.id]: true }));
      
      const firstVariant = product.variants[0];
      const response = await addToCart({
        product_variant_id: firstVariant.id,
        quantity: 1
      });

      if (response.data.success) {
        toast.success('Added to cart successfully!');
        
        // Trigger cart update event
        window.dispatchEvent(new CustomEvent('cartUpdated', {
          detail: { action: 'add' }
        }));

        // Auto-open cart modal
        setTimeout(() => {
          const cartTrigger = document.querySelector('[href="#shoppingCart"][data-bs-toggle="offcanvas"]');
          if (cartTrigger) cartTrigger.click();
        }, 300);
      } else {
        toast.error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Add to cart error:', error);
      toast.error('Failed to add to cart');
    } finally {
      setAddingToCart(prev => ({ ...prev, [product.id]: false }));
    }
  };

  return (
    <div className="tf-sp-2">
      <div className="container">
        <div className="tf-wishlist">
          {items.length ? (
            <table className="tf-table-wishlist">
              <thead>
                <tr>
                  <th className="wishlist-item_remove" />
                  <th className="wishlist-item_image" />
                  <th className="wishlist-item_info">
                    <p className="product-title fw-semibold">Product Name</p>
                  </th>
                  <th className="wishlist-item_price">
                    <p className="product-title fw-semibold">Unit Price</p>
                  </th>
                  <th className="wishlist-item_stock">
                    <p className="product-title fw-semibold">Stock Status</p>
                  </th>
                  <th className="wishlist-item_action" />
                </tr>
              </thead>
              <tbody>
                {items.map((product, i) => (
                  <tr key={i} className="wishlist-item">
                    <td
                      className="wishlist-item_remove"
                      onClick={() => removeFromWishlist(product.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <i className="icon-close remove link cs-pointer" />
                    </td>
                    <td className="wishlist-item_image">
                      <Link to={`/product-detail/${product.id}`}>
                        <img
                          src={`http://localhost:3004/${product.imgSrc}`}
                          alt="Image"
                          className="lazyload"
                          width={500}
                          height={500}
                          onError={(e) => {
                            e.target.src = '/placeholder.jpg';
                          }}
                        />
                      </Link>
                    </td>
                    <td className="wishlist-item_info">
                      <Link
                        className="text-line-clamp-2 body-md-2 fw-semibold text-secondary link"
                        to={`/product-detail/${product.id}`}
                      >
                        {product.title}
                      </Link>
                    </td>
                    <td className="wishlist-item_price">
                      <p className="price-wrap fw-medium flex-nowrap">
                        <span className="new-price price-text fw-medium mb-0">
                          ₹{parseFloat(product.price || 0).toFixed(2)}
                        </span>
                        {product.oldPrice && (
                          <span className="old-price body-md-2 text-main-2 fw-normal">
                            ₹{parseFloat(product.oldPrice).toFixed(2)}
                          </span>
                        )}
                      </p>
                    </td>
                    <td className="wishlist-item_stock">
                      <span className="wishlist-stock-status text-success">
                        {product.variants && product.variants.length > 0 && product.variants[0].stock > 0 
                          ? 'In Stock' 
                          : 'Out of Stock'
                        }
                      </span>
                    </td>
                    <td className="wishlist-item_action">
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={addingToCart[product.id] || !product.variants || product.variants.length === 0}
                        className="tf-btn btn-gray"
                        style={{
                          cursor: addingToCart[product.id] ? 'not-allowed' : 'pointer',
                          opacity: addingToCart[product.id] ? 0.7 : 1
                        }}
                      >
                        <span className="text-white">
                          {addingToCart[product.id] 
                            ? 'Adding...' 
                            : (isAddedToCartProducts(product.id) ? 'Already Added' : 'Add to Cart')
                          }
                        </span>
                        {addingToCart[product.id] && (
                          <div className="spinner-border spinner-border-sm ms-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="d-none">
                <tr>
                  <td colSpan={6} className="text-center">
                    No products added to the wishlist
                  </td>
                </tr>
              </tfoot>
            </table>
          ) : (
            <div className="p-4">
              <div className="col-4">
                Your wishlist is empty. Start adding favorite products to
                wishlist!
              </div>
              <Link
                className="tf-btn mt-2 mb-3 text-white"
                style={{ width: "fit-content" }}
                to="/shop-default"
              >
                Explore Products
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
