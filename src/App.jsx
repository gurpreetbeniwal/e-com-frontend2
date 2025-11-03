import Context from "@/context/Context";

import "photoswipe/dist/photoswipe.css";

import "../public/scss/main.scss";
import { useEffect } from "react";
import WOW from "@/utlis/wow";
import { Route, Routes, useLocation } from "react-router-dom";
import Cart from "@/components/modals/Cart";
import Login from "@/components/modals/Login";
import Register from "@/components/modals/Register";
import ScrollTop from "@/components/common/ScrollTop";
import Quickview from "@/components/modals/Quickview";
import Compare from "@/components/modals/Compare";
import MobileMenu from "@/components/modals/MobileMenu";
import Toolbar from "@/components/modals/Toolbar";
import Search from "@/components/modals/Search";
import AddParallax from "@/utlis/AddParallax";
import NewsLetter from "@/components/modals/NewsLetter";
import HomePage from "./pages/page";
import HomePage2 from "./pages/homes/home-2";
import HomePage3 from "./pages/homes/home-3";
import HomePage4 from "./pages/homes/home-4";
import HomePage5 from "./pages/homes/home-5";
import HomePage6 from "./pages/homes/home-6";
import HomePage7 from "./pages/homes/home-7";
import HomePage8 from "./pages/homes/home-8";
import HomePage9 from "./pages/homes/home-9";
import HomePage10 from "./pages/homes/home-10";
import HomePage11 from "./pages/homes/home-11";
import ShopDefaultPage from "./pages/shop/shop-default";
import ShopRightSidebarPage from "./pages/shop/shop-right-sidebar";
import ShopFullwidthPage from "./pages/shop/shop-fullwidth";
import ShopCartPage from "./pages/products/shop-cart";
import ComparePage from "./pages/products/compare";
import WishlistPage from "./pages/products/wishlist";
import CheckoutPage from "./pages/products/checkout";
import OrderDetailsPage from "./pages/products/order-details";
import TrackYourOrderPage from "./pages/products/track-your-order";
import MyAccountPage from "./pages/dashboard/my-account";
import ProductDetailPage from "./pages/product-detail/product-detail";
import ProductThumbsRightPage from "./pages/product-detail/product-thumbs-right";
import ProductThumbsLeftPage from "./pages/product-detail/product-thumbs-left";
import ProductDetailPage2 from "./pages/product-detail/product-detail-2";
import ProductDetailPage3 from "./pages/product-detail/product-detail-3";
import ProductDetailPage4 from "./pages/product-detail/product-detail-4";
import ProductInnerCircleZoomPage from "./pages/product-detail/product-inner-circle-zoom";
import ProductInnerZoomPage from "./pages/product-detail/product-inner-zoom";
import BlogListPage from "./pages/blogs/blog-list";
import BlogGridPage from "./pages/blogs/blog-grid";
import BlogDetailPage from "./pages/blogs/blog-detail";
import ContactPage from "./pages/other-pages/contact";
import AboutPage from "./pages/other-pages/about";
import PrivacyPage from "./pages/other-pages/privacy";
import FaqPage from "./pages/other-pages/faq";
import NotFoundPage from "./pages/other-pages/404";
import MyAccountOrdersPage from "./pages/dashboard/my-account-orders";
import MyAccountAddressPage from "./pages/dashboard/my-account-address";
import MyAccountEditPage from "./pages/dashboard/my-account-edit";
import ScrollTopBehaviour from "./components/common/ScrollToTopBehaviour";
import PremiumMembership from "./pages/PremiumMembership/PremiumMembership"

import { ToastContainer } from 'react-toastify'; // Import the container
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    const delta = 5;
    let navbarHeight = 0;
    let didScroll = false;
    const header = document.querySelector("header");

    const handleScroll = () => {
      didScroll = true;
    };

    const checkScroll = () => {
      if (didScroll && header) {
        const st = window.scrollY || document.documentElement.scrollTop;
        navbarHeight = header.offsetHeight;

        if (st > navbarHeight) {
          if (st > lastScrollTop + delta) {
            // Scroll down
            header.style.top = `-${navbarHeight}px`;
          } else if (st < lastScrollTop - delta) {
            // Scroll up
            header.style.top = "0";
            header.classList.add("header-bg");
          }
        } else {
          // At top of page
          header.style.top = "";
          header.classList.remove("header-bg");
        }

        lastScrollTop = st;
        didScroll = false;
      }
    };

    // Initial measurement
    if (header) {
      navbarHeight = header.offsetHeight;
    }

    // Set up event listeners
    window.addEventListener("scroll", handleScroll);
    const scrollInterval = setInterval(checkScroll, 250);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(scrollInterval);
    };
  }, [pathname]); // Empty dependency array means this runs once on mount

  useEffect(() => {
    // Dynamically import Bootstrap
    import("bootstrap")
      .then((bootstrap) => {
        // Close any open modal
        const modalElements = document.querySelectorAll(".modal.show");
        modalElements.forEach((modal) => {
          const modalInstance = bootstrap.Modal.getInstance(modal);
          if (modalInstance) {
            modalInstance.hide();
          }
        });

        // Close any open offcanvas
        const offcanvasElements = document.querySelectorAll(".offcanvas.show");
        offcanvasElements.forEach((offcanvas) => {
          const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
          if (offcanvasInstance) {
            offcanvasInstance.hide();
          }
        });
      })
      .catch((error) => {
        console.error("Error loading Bootstrap:", error);
      });
  }, [pathname]); // Runs every time the route changes

  useEffect(() => {
    const wow = new WOW({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);
  return (
    <>

      {/* --- Add the ToastContainer here --- */}
      {/* It's self-closing and doesn't need to wrap anything */}
      <ToastContainer
        position="top-right" // You can change the position
        autoClose={5000}     // Toasts will close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div id="wrapper">
        <Context>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage3 />} />
              <Route path="" element={<HomePage3 />} />
              <Route path="home-2" element={<HomePage2 />} />
              <Route path="home-3" element={<HomePage />} />
              <Route path="home-4" element={<HomePage4 />} />
              <Route path="home-5" element={<HomePage5 />} />
              <Route path="home-6" element={<HomePage6 />} />
              <Route path="home-7" element={<HomePage7 />} />
              <Route path="home-8" element={<HomePage8 />} />
              <Route path="home-9" element={<HomePage9 />} />
              <Route path="home-10" element={<HomePage10 />} />
              <Route path="home-11" element={<HomePage11 />} />

              <Route path="shop" element={<ShopDefaultPage />} />
              <Route
                path="shop-right-sidebar"
                element={<ShopRightSidebarPage />}
              />
              <Route path="PremiumMembership" element={<PremiumMembership />} ></Route>
              <Route path="shop-fullwidth" element={<ShopFullwidthPage />} />
              <Route path="shop-cart" element={<ShopCartPage />} />
              <Route path="compare" element={<ComparePage />} />
              <Route path="wishlist" element={<WishlistPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="order-details/:orderId" element={<OrderDetailsPage />} />
              <Route path="track-your-order" element={<TrackYourOrderPage />} />
              <Route path="my-account" element={<MyAccountPage />} />
              <Route
                path="product-detail/:id"
                element={<ProductDetailPage />}
              />
              <Route
                path="product-thumbs-right"
                element={<ProductThumbsRightPage />}
              />
              <Route
                path="product/:slug/:id"
                element={<ProductThumbsLeftPage />}
              />
              <Route path="product-detail-2" element={<ProductDetailPage2 />} />
              <Route path="product-detail-3" element={<ProductDetailPage3 />} />
              <Route path="product-detail-4" element={<ProductDetailPage4 />} />
              <Route
                path="product-inner-zoom"
                element={<ProductInnerZoomPage />}
              />
              <Route
                path="product-inner-circle-zoom"
                element={<ProductInnerCircleZoomPage />}
              />
              <Route path="blog-list" element={<BlogListPage />} />
              <Route path="blog-grid" element={<BlogGridPage />} />
              <Route path="blog-detail" element={<BlogDetailPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="404" element={<NotFoundPage />} />

              <Route
                path="my-account-orders"
                element={<MyAccountOrdersPage />}
              />
              <Route
                path="my-account-address"
                element={<MyAccountAddressPage />}
              />
              <Route path="my-account-edit" element={<MyAccountEditPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>

          <Login />
          <Register />
          <Cart />
          <Quickview />
          <Compare />
          <MobileMenu />
          <ScrollTop />
          <Toolbar />
          <Search />
          <NewsLetter />
          <AddParallax />
          <ScrollTopBehaviour />
        </Context>
      </div>
    </>
  );
}

export default App;
