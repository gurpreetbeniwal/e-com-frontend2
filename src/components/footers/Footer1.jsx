import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
export default function Footer1({ fullWidth = false }) {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  return (
    <footer className="tf-footer">
      <div className="ft-body-wrap">
        <div className="ft-body-inner">
          <div className={`container${fullWidth ? "-full" : ""}`}>
            <div className="ft-inner flex-wrap flex-xl-nowrap">
              <div className="ft-logo">
                <Link to={`/`} className="logo-site">
                  <img
                    alt="Logo"
                    src="/images/logo/logo.png"
                    width={185}
                    height={41}
                  />
                </Link>
                <div className="method-payment">
                  <p>We accept:</p>
                  <ul className="method-list">
                    <li>
                      <img
                        alt="Payment"
                        src="/images/payment/visa.svg"
                        width={50}
                        height={50}
                      />
                    </li>
                    <li>
                      <img
                        alt="Payment"
                        src="/images/payment/paypal.svg"
                        width={50}
                        height={50}
                      />
                    </li>
                    <li>
                      <img
                        alt="Payment"
                        src="/images/payment/discover.svg"
                        width={50}
                        height={50}
                      />
                    </li>
                    <li>
                      <img
                        alt="Payment"
                        src="/images/payment/master.svg"
                        width={50}
                        height={50}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="ft-link-wrap w-100 tf-grid-layout md-col-2 lg-col-4">
                <li className="footer-col-block">
                  <h6 className="ft-heading footer-heading-mobile fw-semibold">
                    Get help
                  </h6>
                  <div className="tf-collapse-content">
                    <ul className="ft-menu-list">
                      <li>
                        <Link to={`/privacy`} className="link">
                          Delivery Information
                        </Link>
                      </li>
                      <li>
                        <Link to={`/faq`} className="link">
                          Sale Terms &amp; Conditions
                        </Link>
                      </li>
                      <li>
                        <Link to={`/privacy`} className="link">
                          Returns &amp; Refunds
                        </Link>
                      </li>
                      <li>
                        <Link to={`/privacy`} className="link">
                          Privacy Notice
                        </Link>
                      </li>
                      <li>
                        <Link to={`/faq`} className="link">
                          Shopping FAQs
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="footer-col-block">
                  <h6 className="ft-heading footer-heading-mobile fw-semibold">
                    Popular categories
                  </h6>
                  <div className="tf-collapse-content">
                    <ul className="ft-menu-list">
                      <li>
                        <Link to={`/shop-default`} className="link">
                          Laptops &amp; Computers
                        </Link>
                      </li>
                      <li>
                        <Link to={`/shop-default`} className="link">
                          Cameras &amp; Photography
                        </Link>
                      </li>
                      <li>
                        <Link to={`/shop-default`} className="link">
                          Smart Phones &amp; Tablets
                        </Link>
                      </li>
                      <li>
                        <Link to={`/shop-default`} className="link">
                          Video Games &amp; Consoles
                        </Link>
                      </li>
                      <li>
                        <Link to={`/shop-default`} className="link">
                          TV &amp; Audio
                        </Link>
                      </li>
                      <li>
                        <Link to={`/shop-default`} className="link">
                          Gadgets
                        </Link>
                      </li>
                      <li>
                        <Link to={`/shop-default`} className="link">
                          Waterproof Headphones
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="footer-col-block">
                  <h6 className="ft-heading footer-heading-mobile fw-semibold">
                    Customer Care
                  </h6>
                  <div className="tf-collapse-content">
                    <ul className="ft-menu-list">
                      <li>
                        <Link to={`/my-account`} className="link">
                          My Account
                        </Link>
                      </li>
                      <li>
                        <Link to={`/track-your-order`} className="link">
                          Track your Order
                        </Link>
                      </li>
                      <li>
                        <Link to={`/contact`} className="link">
                          Customer Service
                        </Link>
                      </li>
                      <li>
                        <Link to={`/privacy`} className="link">
                          Returns/Exchange
                        </Link>
                      </li>
                      <li>
                        <Link to={`/faq`} className="link">
                          FAQs
                        </Link>
                      </li>
                      <li>
                        <Link to={`/contact`} className="link">
                          Product Support
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="footer-col-block type-sp-2">
                  <h6 className="ft-heading footer-heading-mobile fw-semibold">
                    Contact
                  </h6>
                  <div className="tf-collapse-content">
                    <ul className="ft-menu-list ft-contact-list">
                      <li>
                        <span className="icon">
                          <i className="icon-location" />
                        </span>
                        <a href="#" className="link">
                          8500 Lorem Street Chicago, IL 55030 Dolor sit amet
                        </a>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="icon-phone" />
                        </span>
                        <a href="#" className="product-title">
                          <span className="product-title text-primary">
                            +8(800) 123 4567
                          </span>
                        </a>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="icon-direction" />
                        </span>
                        <a href="#" className="">
                          <span className="text-primary">
                            onsus@support.com
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="ft-body-center bg-gray">
          <div className={`container${fullWidth ? "-full" : ""}`}>
            <div className="ft-center justify-content-xxl-between">
              <p className="notice text-white justify-content-xxl-between">
                <span className="main-title fw-semibold">
                  <img alt="" src="/images/mail.svg" width={24} height={21} />
                  10% Off Your First Order
                </span>
                <span className="body-text-3">
                  Be the first to know about offers, new products and discounted
                  products
                </span>
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendEmail(e);
                }}
                className="form-newsletter"
              >
                <div
                  className={`tfSubscribeMsg  footer-sub-element ${
                    showMessage ? "active" : ""
                  }`}
                >
                  {success ? (
                    <p style={{ color: "rgb(52, 168, 83)" }}>
                      You have successfully subscribed.
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>Something went wrong</p>
                  )}
                </div>
                <div className="subscribe-content">
                  <fieldset className="email">
                    <input
                      type="email"
                      name="email"
                      className="subscribe-email type-fs-2"
                      placeholder="Enter your email address"
                      tabIndex={0}
                      aria-required="true"
                      required=""
                    />
                  </fieldset>
                  <div className="button-submit">
                    <button
                      className="subscribe-button tf-btn btn-large hover-shine"
                      type="submit"
                    >
                      <span className="body-md-2 fw-semibold text-white">
                        Subscribe
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> */}
        <div className="ft-body-bottom">
          <div className={`container${fullWidth ? "-full" : ""}`}>
            <div className="ft-bottom">
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="icon-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/">
                    <i className="icon-x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="icon-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">
                    <i className="icon-linkin" />
                  </a>
                </li>
                <li>
                  <a href="https://web.whatsapp.com/">
                    <i className="icon-whatapp" />
                  </a>
                </li>
              </ul>
              <ul className="ft-menu-list-2 body-text-3">
                <li>
                  <Link
                    to={`/blog-grid`}
                    className="title-sidebar link fw-bold"
                  >
                    New arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/blog-grid`}
                    className="title-sidebar link fw-bold"
                  >
                    Best sale
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/blog-grid`}
                    className="title-sidebar link fw-bold"
                  >
                    Value of the day
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/blog-grid`}
                    className="title-sidebar link fw-bold"
                  >
                    Top 100 offers
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/blog-grid`}
                    className="title-sidebar link fw-bold"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/blog-grid`}
                    className="title-sidebar link fw-bold"
                  >
                    <i className="icon-fire" /> 50% OFF
                  </Link>
                </li>
              </ul>
              <p className="nocopy caption text-center">
                <span className="fw-medium">Onsus.</span>© 2025. All right
                reserved - Designed by ThemesFlat
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
