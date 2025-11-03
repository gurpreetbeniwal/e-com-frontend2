import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

// Import your API function
import { getProductById } from "../../../../api";

// Import child components
import BrandsSlider from "@/components/common/BrandsSlider";
import RecentProducts from "@/components/common/RecentProducts";
import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Description2 from "@/components/product-detail/Description2";
import Details3 from "@/components/product-detail/Details3";
import Relatedproducts from "@/components/product-detail/Relatedproducts";
import SimilerProducts from "@/components/product-detail/SimilerProducts";
import MetaComponent from "@/components/common/MetaComponent";
import Header3 from "@/components/headers/Header3";

export default function ProductThumbsLeftPage() {
  // --- STEP 1: Get the product ID from the URL ---
  const { id } = useParams();
  const { slug } = useParams();
  console.log('📦 Product ID:', id, 'Slug:', slug);

  // --- STEP 2: Create state to hold the product data ---
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- STEP 3: Fetch the product data when the component loads ---
  useEffect(() => {
    const fetchProduct = async () => {
      // Scroll to top on new product load
      window.scrollTo(0, 0);
      
      try {
        console.log('🔄 Fetching product with ID:', id);
        setLoading(true);
        setError(null);
        
        const response = await getProductById(id);
        console.log('✅ Product API response:', response);
        
        // ✅ Handle different response structures
        let productData = null;
        if (response.data?.success && response.data?.data) {
          // Backend returns {success: true, data: {...}}
          productData = response.data.data;
        } else if (response.data && typeof response.data === 'object') {
          // Backend returns product object directly
          productData = response.data;
        }
        
        console.log('📦 Processed product data:', productData);
        
        if (!productData) {
          throw new Error('Product data not found in response');
        }
        
        setProduct(productData);
      } catch (error) {
        console.error('❌ Failed to fetch product:', error);
        console.error('❌ Error details:', {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status
        });
        
        setError(error.message || 'Failed to load product');
        toast.error("Could not load product details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    } else {
      console.error('❌ No product ID provided');
      setError('No product ID provided');
      setLoading(false);
    }
  }, [id]); // This effect re-runs whenever the `id` in the URL changes

  // --- Handle Loading State ---
  if (loading) {
    return (
      <>
        <Header3 />
        <div className="container" style={{ padding: '100px 0' }}>
          <div className="d-flex justify-content-center align-items-center">
            <div className="text-center">
              <div className="spinner-border text-primary mb-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p>Loading product...</p>
            </div>
          </div>
        </div>
        <Footer1 />
      </>
    );
  }

  // --- Handle Error State ---
  if (error) {
    return (
      <>
        <Header3 />
        <div className="container" style={{ padding: '100px 0' }}>
          <div className="text-center">
            <h3 className="fw-semibold mb-3">Something went wrong</h3>
            <p className="text-muted mb-4">{error}</p>
            <Link to="/shop" className="tf-btn btn-primary">
              <span className="text-white">Return to Shop</span>
            </Link>
          </div>
        </div>
        <Footer1 />
      </>
    );
  }

  // --- Handle Product Not Found State ---
  if (!product) {
    return (
      <>
        <Header3 />
        <div className="container" style={{ padding: '100px 0' }}>
          <div className="text-center">
            <h3 className="fw-semibold mb-3">Product Not Found</h3>
            <p className="text-muted mb-4">Sorry, we couldn't find the product you're looking for.</p>
            <Link to="/shop" className="tf-btn btn-primary">
              <span className="text-white">Return to Shop</span>
            </Link>
          </div>
        </div>
        <Footer1 />
      </>
    );
  }
  
  console.log('🎨 Rendering product page for:', product);

  // --- ✅ SAFE DYNAMIC METADATA ---
  const metadata = {
    title: `${product.title || product.name || 'Product'} || Onsus`,
    description: (product.description && typeof product.description === 'string') 
      ? product.description.substring(0, 150) 
      : `${product.title || product.name || 'Product'} - Available at Onsus`
  };

  return (
    <>
      <MetaComponent meta={metadata} />
      <Header3 />
      <div className="tf-sp-1">
        <div className="container">
          {/* --- DYNAMIC BREADCRUMBS --- */}
          <ul className="breakcrumbs">
            <li>
              <Link to={`/`} className="body-small link">Home</Link>
            </li>
            <li className="d-flex align-items-center">
              <i className="icon icon-arrow-right" />
            </li>
            <li>
              <Link to={`/shop`} className="body-small link">Shop</Link>
            </li>
            <li className="d-flex align-items-center">
              <i className="icon icon-arrow-right" />
            </li>
            <li>
              <span className="body-small">{product.title || product.name || 'Product'}</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* --- STEP 4: Pass the fetched product data as a prop to child components --- */}
      <Details3 product={product} />
      <Description2 product={product} />
      {/* <SimilerProducts product={product} /> */}
      <Relatedproducts product={product} />
      
      {/* <BrandsSlider />
      <RecentProducts /> */}
      <Footer1 />
    </>
  );
}
