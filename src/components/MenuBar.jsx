import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState, useRef } from "react";

export default function MenuBar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const observerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [showIndicator, setShowIndicator] = useState(true);

  // اضافه کردن useEffect برای آپدیت indicator با تغییر مسیر
  useEffect(() => {
    if (location.pathname === "/CartPage") {
      setShowIndicator(false);
    } else {
      setShowIndicator(true);
      updateIndicatorPosition();
    }
  }, [location.pathname]);

  // تابع آپدیت موقعیت indicator
  const updateIndicatorPosition = () => {
    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  };

  useEffect(() => {
    // بررسی اولیه از localStorage یا theme system
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme = localStorage.getItem("theme");
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDarkMode(shouldBeDark);
    document.body.classList.toggle("dark-mode", shouldBeDark);

    // نظارت بر تغییرات کلاس‌ها با MutationObserver
    observerRef.current = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains("dark-mode"));
    });

    observerRef.current.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // اضافه کردن event listener برای resize
    window.addEventListener("resize", updateIndicatorPosition);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener("resize", updateIndicatorPosition);
    };
  }, []);

  const handleNavigation = (path) => {
    try {
      if (user) {
        navigate(path);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Navigation failed:", error);
    }
  };

  const isWishlistActive = location.pathname === "/wishlist";

  return (
    <div className="menubar-area footer-fixed rounded-0">
      <div className="toolbar-inner menubar-nav">
        <div className="width">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={updateIndicatorPosition}
          >
            <div className="icon-wrapper">
              <i className="icon feather icon-home"></i>
              <span>Home</span>
            </div>
          </NavLink>
        </div>
        <div className="width">
          <NavLink
            to="/category"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={updateIndicatorPosition}
          >
            <div className="icon-wrapper">
              <i className="icon feather icon-grid"></i>
              <span>Categories</span>
            </div>
          </NavLink>
        </div>

        <button
          className="nav-link cart-handle cart-button"
          onClick={() => {
            handleNavigation("/CartPage");
            setShowIndicator(false);
          }}
          aria-label="Shopping Cart"
        >
          <div className="hexad-menu">
            <img
              src="images/menu-shape-dark.svg"
              className="shape-dark"
              alt="Dark theme menu shape"
            />
            <img
              src="images/menu-shape-light.svg"
              className="shape-light"
              alt="Light theme menu shape"
            />
            <i className="icon feather icon-shopping-bag"></i>
          </div>
        </button>

        <div className="width">
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={updateIndicatorPosition}
          >
            <div className="icon-wrapper">
              <i className="icon feather icon-heart"></i>
              <span>Wishlist</span>
            </div>
          </NavLink>
        </div>

        <div className="width">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={updateIndicatorPosition}
          >
            <div className="icon-wrapper">
              <i className="icon feather icon-user"></i>
              <span>Profile</span>
            </div>
          </NavLink>
        </div>

        {showIndicator && (
          <div className="indicator" style={indicatorStyle}></div>
        )}
      </div>
    </div>
  );
}
