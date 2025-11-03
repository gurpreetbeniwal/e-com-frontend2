import React, { useEffect, useRef, useState } from "react";
const categories = [
  { rel: "", label: "All categories" },
  { rel: "apple-products", label: "Apple products" },
  { rel: "audio-equipments", label: "Audio Equipments" },
  { rel: "camera-video", label: "Camera & Video" },
  { rel: "game-room-furniture", label: "Game & Room Furniture" },
  { rel: "gaming-accessories", label: "Gaming Accessories" },
  { rel: "headphone", label: "Headphone" },
  { rel: "laptop-tablet", label: "Laptop & Tablet" },
  { rel: "server-workstation", label: "Server & Workstation" },
  { rel: "smartphone", label: "Smartphone" },
  { rel: "smartwatch", label: "Smartwatch" },
  { rel: "storage-digital-devices", label: "Storage & Digital Devices" },
  { rel: "tv-computer-screen", label: "TV & Computer Screen" },
];

export default function SearchForm({
  parentClass = "form-search-product style-2",
}) {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All categories");
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
    <form
      ref={navRef}
      onSubmit={(e) => e.preventDefault()}
      className={parentClass}
    >
      <div className={`select-category ${activeDropdown ? "active" : ""}`}>
        <div
          onClick={() => setActiveDropdown(true)}
          className="tf-select-custom"
        >
          {activeCategory}
        </div>
        <ul
          className="select-options"
          style={{ display: activeDropdown ? "block" : "none" }}
        >
          <div className="header-select-option">
            <span>Select Categories</span>
            <span
              className="close-option"
              onClick={() => setActiveDropdown(false)}
            >
              <i className="icon-close"></i>
            </span>
          </div>
          {categories.map((item, index) => (
            <li
              rel={item.rel}
              onClick={() => {
                setActiveCategory(item.label);
                setActiveDropdown(false);
              }}
              key={index}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <ul className="select-options">
          <li className="link" rel="">
            <span>All categories</span>
          </li>
          <li className="link" rel="apple-products">
            <span>Apple products</span>
          </li>
          <li className="link" rel="audio-equipments">
            <span>Audio Equipments</span>
          </li>
          <li className="link" rel="camera-video">
            <span>Camera &amp; Video</span>
          </li>
          <li className="link" rel="game-room-furniture">
            <span>Game &amp; Room Furniture</span>
          </li>
          <li className="link" rel="gaming-accessories">
            <span>Gaming Accessories</span>
          </li>
          <li className="link" rel="headphone">
            <span>Headphone</span>
          </li>
          <li className="link" rel="laptop-tablet">
            <span>Laptop &amp; Tablet</span>
          </li>
          <li className="link" rel="server-workstation">
            <span>Server &amp; Workstation</span>
          </li>
          <li className="link" rel="smartphone">
            <span>Smartphone</span>
          </li>
          <li className="link" rel="smartwatch">
            <span>Smartwatch</span>
          </li>
          <li className="link" rel="storage-digital-devices">
            <span>Storage &amp; Digital Devices</span>
          </li>
          <li className="link" rel="tv-computer-screen">
            <span>TV &amp; Computer Screen</span>
          </li>
        </ul>
      </div>
      <span className="br-line type-vertical bg-line"></span>
      <fieldset>
        <input type="text" placeholder="Search for products" />
      </fieldset>
      <button type="submit" className="btn-submit-form">
        <i className="icon-search"></i>
      </button>
    </form>
  );
}
