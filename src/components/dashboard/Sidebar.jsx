import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../../api"; // Make sure the path to your api.js is correct

// The navigation items for the sidebar



const navItems = [
  { label: "Dashboard", href: "/my-account" },
  { label: "Orders", href: "/my-account-orders" },
  { label: "Address", href: "/my-account-address" },
  { label: "Account Details", href: "/my-account-edit" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Logout", isLogout: true }, // Add a flag to identify the logout item
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

 
  const handleLogout = async () => {
    try {
      // Call the backend logout route
      await logout();

      // If the backend call is successful, remove the token from local storage
      localStorage.removeItem("authToken");
      toast.success("You have been logged out.");

      // Redirect the user to the homepage
      navigate("/");
    } catch (error) {
      // Even if the backend call fails (e.g., token expired),
      // we should still clear the token on the client side.
      console.error("Logout API call failed, but logging out client-side:", error);
      localStorage.removeItem("authToken");
      navigate("/");
    }
  };

  return (
    <>
      {navItems.map((item, index) => (
        <li key={index}>
          {/* --- If it's the logout button, render a clickable element --- */}
          {item.isLogout ? (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent the link from navigating
                handleLogout();
              }}
              className="my-account-nav-item"
            >
              {item.label}
            </a>
          ) : (
            /* --- Otherwise, render a standard NavLink --- */
            <>
              {pathname === item.href ? (
                <span className="my-account-nav-item active">{item.label}</span>
              ) : (
                <Link to={item.href} className="my-account-nav-item">
                  {item.label}
                </Link>
              )}
            </>
          )}
        </li>
      ))}
    </>
  );
}
