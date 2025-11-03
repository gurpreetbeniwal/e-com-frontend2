import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import CartLength from "../common/CartLength";
import WishlistLength from "../common/WishlistLength";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
import NavCategories2 from "./NavCategories2";

export default function Header3() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token') || localStorage.getItem('authToken');
      setIsLoggedIn(!!token);
    };

    // Check on component mount
    checkAuthStatus();

    // Listen for auth changes
    const handleAuthChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('userLogin', handleAuthChange);
    window.addEventListener('userLogout', handleAuthChange);
    window.addEventListener('storage', (e) => {
      if (e.key === 'token' || e.key === 'authToken') {
        checkAuthStatus();
      }
    });

    return () => {
      window.removeEventListener('userLogin', handleAuthChange);
      window.removeEventListener('userLogout', handleAuthChange);
    };
  }, []);

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchQuery.trim()) {
      // Navigate to shop page with search query parameter
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      // Navigate to shop page without search if empty
      navigate('/shop');
    }
  };

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <header className="tf-header style-4">
      <div className="inner-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-4 d-none d-lg-flex align-items-center">
              <div className="tf-cur justify-content-end bar-lang">
                {/* Language and Currency selectors commented out */}
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-sm-6 col-9">
              <div className="header-center justify-content-lg-center">
                <div className="logo-site">
                  <Link to={`/`}>
                    <img
                      alt="Logo"
                      style={{ height: 40 }}
                      height={40}
                      src="/images/logo/logo.png"
                      width={185}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 col-sm-6 col-3 d-flex align-items-center justify-content-end">
              <div className="header-right">
                <ul className="nav-icon style-2">
                  {/* Cart Icon */}
                  <li className="d-none d-sm-block nav-shop-cart">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="offcanvas"
                      className="d-flex link-fill"
                    >
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.55865 19.1096C6.8483 19.1096 5.46191 20.496 5.46191 22.2064C5.46191 23.9165 6.8483 25.3029 8.55865 25.3029C10.2688 25.3029 11.6552 23.9165 11.6552 22.2064C11.6534 20.4969 10.2681 19.1114 8.55865 19.1096ZM8.55865 24.1644C7.47712 24.1644 6.60037 23.2877 6.60037 22.2064C6.60037 21.1248 7.47712 20.2481 8.55865 20.2481C9.63996 20.2481 10.5167 21.1248 10.5167 22.2064C10.5167 23.2877 9.63996 24.1644 8.55865 24.1644Z"
                          fill="#333E48"
                        />
                        <path
                          d="M25.436 6.1144H5.33643L4.92663 3.82036C4.67403 2.40819 3.56715 1.30353 2.15453 1.05382L0.668757 0.792113C0.359017 0.736969 0.0635073 0.943536 0.00836329 1.25305C-0.0465584 1.56279 0.159787 1.8583 0.469527 1.91345L1.96086 2.17516C2.90187 2.34193 3.63853 3.07859 3.80529 4.01959L5.82027 15.387C6.05819 16.7472 7.24001 17.7393 8.62083 17.738H20.5746C21.8305 17.7418 22.9396 16.9197 23.3014 15.7172L25.9767 6.84861C26.0263 6.67562 25.995 6.48929 25.8913 6.34209C25.7831 6.19956 25.6147 6.11551 25.436 6.1144ZM22.214 15.3813C21.9992 16.1035 21.3337 16.5975 20.5804 16.5938H8.62661C7.79745 16.596 7.08769 15.9994 6.94739 15.182L5.54144 7.24707H24.6731L22.214 15.3813Z"
                          fill="#333E48"
                        />
                        <path
                          d="M20.512 19.1096C18.8017 19.1096 17.4153 20.496 17.4153 22.2064C17.4153 23.9165 18.8017 25.3029 20.512 25.3029C22.2221 25.3029 23.6085 23.9165 23.6085 22.2064C23.6068 20.4969 22.2215 19.1114 20.512 19.1096ZM20.512 24.1644C19.4305 24.1644 18.5537 23.2877 18.5537 22.2064C18.5537 21.1248 19.4305 20.2481 20.512 20.2481C21.5933 20.2481 22.4701 21.1248 22.4701 22.2064C22.4701 23.2877 21.5933 24.1644 20.512 24.1644Z"
                          fill="#333E48"
                        />
                      </svg>
                      <span className="count-box">
                        <CartLength />
                      </span>
                    </a>
                  </li>

                  {/* User Account Icon - Updated with conditional logic */}
                  <li className="d-none d-sm-block">
                    {isLoggedIn ? (
                      <Link
                        to="/my-account"
                        className="d-flex text-main link-svg-fill"
                        title="My Account"
                      >
                        <svg
                          width={22}
                          height={23}
                          viewBox="0 0 22 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.9998 11.5283C5.20222 11.5283 0.485352 16.2452 0.485352 22.0428C0.485352 22.2952 0.69017 22.5 0.942518 22.5C1.19487 22.5 1.39968 22.2952 1.39968 22.0428C1.39968 16.749 5.70606 12.4426 10.9999 12.4426C16.2937 12.4426 20.6001 16.749 20.6001 22.0428C20.6001 22.2952 20.8049 22.5 21.0572 22.5C21.3096 22.5 21.5144 22.2952 21.5144 22.0428C21.5144 16.2443 16.7975 11.5283 10.9998 11.5283Z"
                            fill="#333E48"
                            stroke="#333E48"
                            strokeWidth="0.3"
                          />
                          <path
                            d="M10.9999 0.5C8.22767 0.5 5.97119 2.75557 5.97119 5.52866C5.97119 8.30174 8.22771 10.5573 10.9999 10.5573C13.772 10.5573 16.0285 8.30174 16.0285 5.52866C16.0285 2.75557 13.772 0.5 10.9999 0.5ZM10.9999 9.64303C8.73146 9.64303 6.88548 7.79705 6.88548 5.52866C6.88548 3.26027 8.73146 1.41429 10.9999 1.41429C13.2682 1.41429 15.1142 3.26027 15.1142 5.52866C15.1142 7.79705 13.2682 9.64303 10.9999 9.64303Z"
                            fill="#333E48"
                            stroke="#333E48"
                            strokeWidth="0.3"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <a
                        href="#log"
                        data-bs-toggle="modal"
                        className="d-flex text-main link-svg-fill"
                        title="Login"
                      >
                        <svg
                          width={22}
                          height={23}
                          viewBox="0 0 22 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.9998 11.5283C5.20222 11.5283 0.485352 16.2452 0.485352 22.0428C0.485352 22.2952 0.69017 22.5 0.942518 22.5C1.19487 22.5 1.39968 22.2952 1.39968 22.0428C1.39968 16.749 5.70606 12.4426 10.9999 12.4426C16.2937 12.4426 20.6001 16.749 20.6001 22.0428C20.6001 22.2952 20.8049 22.5 21.0572 22.5C21.3096 22.5 21.5144 22.2952 21.5144 22.0428C21.5144 16.2443 16.7975 11.5283 10.9998 11.5283Z"
                            fill="#333E48"
                            stroke="#333E48"
                            strokeWidth="0.3"
                          />
                          <path
                            d="M10.9999 0.5C8.22767 0.5 5.97119 2.75557 5.97119 5.52866C5.97119 8.30174 8.22771 10.5573 10.9999 10.5573C13.772 10.5573 16.0285 8.30174 16.0285 5.52866C16.0285 2.75557 13.772 0.5 10.9999 0.5ZM10.9999 9.64303C8.73146 9.64303 6.88548 7.79705 6.88548 5.52866C6.88548 3.26027 8.73146 1.41429 10.9999 1.41429C13.2682 1.41429 15.1142 3.26027 15.1142 5.52866C15.1142 7.79705 13.2682 9.64303 10.9999 9.64303Z"
                            fill="#333E48"
                            stroke="#333E48"
                            strokeWidth="0.3"
                          />
                        </svg>
                      </a>
                    )}
                  </li>

                  {/* Mobile Menu Button */}
                  <li className="btn-mobile d-flex d-xl-none align-items-center">
                    <a
                      href="#mobileMenu"
                      className="mobile-button p-0"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobileMenu"
                    >
                      <span />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom bg-primary d-none d-xl-block">
        <div className="container">
          <div className="header-inner-bottom active-container">
            <NavCategories2 styleClass="style-white" />
            <nav className="main-nav-menu style-white">
              <ul className="nav-list">
                <Nav />
              </ul>
            </nav>
            
            {/* ✅ Updated Working Search Form */}
            <form onSubmit={handleSearch} className="form-search-2">
              <fieldset>
                <input
                  className="border-0"
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onKeyPress={handleKeyPress}
                />
              </fieldset>
              <div className="box-btn">
                <button type="submit">
                  <i className="icon-search" />
                  <span>Search</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
