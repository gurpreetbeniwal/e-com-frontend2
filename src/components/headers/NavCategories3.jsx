import React, { useEffect, useRef, useState } from "react";

export default function NavCategories3({ styleClass = "" }) {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const navRef = useRef(null);
  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(false); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={navRef} className={`nav-category-wrap ${styleClass}`}>
      <div
        onClick={() => setActiveDropdown((pre) => !pre)}
        className={`nav-title btn-active text-white link ${
          activeDropdown ? "active" : ""
        } `}
      >
        <i className="icon-menu-dots fs-20" />
        <h6 className="title fw-semibold">All Categories</h6>
      </div>
      <nav
        className={`category-menu active-item  ${
          activeDropdown ? "active" : ""
        }`}
      >
        <div className="menu-category-menu-container">
          <ul id="primary-menu" className="megamenu">
            <li className="menu-item">
              <a href="#">
                <i className="icon-clothing fs-20" />
                <span>Apparel</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <span className="icon">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1739_24868)">
                      <mask
                        id="mask0_1739_24868"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                      >
                        <path
                          d="M19.4999 19.5V0.500059H0.5V19.5H19.4999Z"
                          fill="white"
                          stroke="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1739_24868)">
                        <path
                          d="M17.5037 10.9552C17.5037 15.6269 13.7165 19.4141 9.04482 19.4141C4.37311 19.4141 0.585938 15.6269 0.585938 10.9552C0.585938 6.28348 4.37311 2.49634 9.04482 2.49634"
                          stroke="black"
                          strokeMiterlimit={10}
                        />
                        <path
                          d="M10.336 10.9553C10.336 11.6694 9.75791 12.2483 9.04483 12.2483C8.33171 12.2483 7.75366 11.6694 7.75366 10.9553C7.75366 10.2412 8.33171 9.66232 9.04483 9.66232C9.75791 9.66232 10.336 10.2412 10.336 10.9553Z"
                          stroke="black"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.6223 10.9551C14.6223 7.82548 12.2025 5.35873 9.03296 5.35873L9.04491 0.585891C14.5859 0.585891 19.4141 4.94236 19.4141 10.9551H14.6223Z"
                          stroke="black"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.5154 10.9552C12.5154 12.8813 10.9562 14.4426 9.03282 14.4426C7.10939 14.4426 5.55017 12.8813 5.55017 10.9552C5.55017 9.02913 7.10939 7.46777 9.03282 7.46777C10.9562 7.46777 12.5154 9.02913 12.5154 10.9552Z"
                          stroke="black"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.0448 16.6132V17.3433"
                          stroke="black"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.6283 10.9551H3.35837"
                          stroke="black"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.50122 15.3274L5.01747 14.8111"
                          stroke="black"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.1156 14.8111L13.6318 15.3274"
                          stroke="black"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.16481 6.86035L4.64856 6.3441"
                          stroke="black"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1739_24868">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span>Automotive parts</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <i className="icon-beauti fs-20" />
                <span>Beauty &amp; personal care</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <i className="icon-computer fs-20" />
                <span>Consumer Electronics</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <i className="icon-sofa fs-20" />
                <span>Furniture</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <i className="icon-computer-wifi fs-20" />
                <span>Home products</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <i className="icon-machine fs-20" />
                <span>Machinery</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <i className="icon-jewelry fs-20" />
                <span>Timepieces, jewelry &amp; eyewear</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <i className="icon-tool fs-20" />
                <span>Tool &amp; hardware</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="#">
                <i className="icon-best-seller fs-20" />
                <span>Bestseller</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
