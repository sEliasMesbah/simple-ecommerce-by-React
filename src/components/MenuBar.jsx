import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

export default function MenuBar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // بررسی اولیه
    setIsDarkMode(document.body.classList.contains("dark-mode"));

    // نظارت بر تغییرات کلاس‌ها با MutationObserver
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains("dark-mode"));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const handleWishlistClick = () => {
    if (user) {
      navigate("/wishlist");
    } else {
      navigate("/login");
    }
  };

  const isWishlistActive = location.pathname === "/wishlist";

  return (
    <div className="menubar-area footer-fixed rounded-0">
      <div className="toolbar-inner menubar-nav">
        <div className="width">
          <NavLink to="/home" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
            <div className="icon-wrapper">
              <i className="icon feather icon-home"></i>
              <span>Home</span>
            </div>
          </NavLink>
        </div>
        <div className="width">
          <NavLink to="/category" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
            <div className="icon-wrapper">
              <i className="icon feather icon-grid"></i>
              <span>Categories</span>
            </div>
          </NavLink>
        </div>

        {/* دکمه سبد خرید بدون تغییر */}
        <button
          className="nav-link cart-handle"
          onClick={() => {
            if (user) navigate("/CartPage");
            else navigate("/login");
          }}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            pointerEvents: "auto",
            zIndex: "10000",
          }}
        >
          <div className="hexad-menu">
            <img src="images/menu-shape-dark.svg" className="shape-dark" alt="" />
            <img src="images/menu-shape-light.svg" className="shape-light" alt="" />
            <i className="icon feather icon-shopping-bag"></i>
          </div>
        </button>

        <div className="width">
          <button
            className={"nav-link" + (isWishlistActive ? " active" : "") + (isDarkMode ? " dark" : "")}
            onClick={handleWishlistClick}
            style={{ border: "none" }}
          >
            <div className="icon-wrapper">
              <i className="icon feather icon-heart"></i>
              <span>Wishlist</span>
            </div>
          </button>
        </div>

        <div className="width">
          <NavLink to="/profile" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
            <div className="icon-wrapper">
              <i className="icon feather icon-user"></i>
              <span>Profile</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
