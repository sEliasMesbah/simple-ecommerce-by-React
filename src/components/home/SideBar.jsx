import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function SideBar({ isOpen, onClose }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#007bff");

  const { user, logout } = useAuth();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedColor = localStorage.getItem("themeColor");

    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }

    if (savedColor) {
      setSelectedColor(savedColor);
      applyCustomColor(savedColor);
    }
  }, []);

  const applyCustomColor = (color) => {
    document.documentElement.style.setProperty("--user-color", color);
    document.body.classList.add("custom-theme");
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);
    localStorage.setItem("themeColor", newColor);
    applyCustomColor(newColor);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.body.classList.add("theme-dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("theme-dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleNav = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      className={`sidebar ${isOpen ? "show" : ""}`}
      style={{ backgroundImage: "url('images/background/bg3.png')" }}
    >
      <NavLink to="/profile" className="author-box" onClick={handleNav}>
        <div className="dz-media">
          <img src="images/user-profile.jpg" alt="author" />
        </div>
        <div className="dz-info">
          <h5 className="name">{user ? user.name : "Guest"}</h5>
          <span>{user ? user.email : "Please login"}</span>
        </div>
      </NavLink>

      <ul className="nav navbar-nav dark-icon-black">
        <li>
          <NavLink to="/home" className="nav-NavLink" onClick={handleNav}>
            <span className="dz-icon">
              <i className="icon feather icon-home" />
            </span>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-NavLink" to="/components" onClick={handleNav}>
            <span className="dz-icon">
              <i className="icon feather icon-grid" />
            </span>
            <span>Components</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist" className="nav-NavLink" onClick={handleNav}>
            <span className="dz-icon">
              <i className="icon feather icon-heart" />
            </span>
            <span>Wishlist</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/OrderPage" className="nav-NavLink" onClick={handleNav}>
            <span className="dz-icon">
              <i className="icon feather icon-repeat" />
            </span>
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav-NavLink" onClick={handleNav}>
            <span className="dz-icon">
              <i className="icon feather icon-user" />
            </span>
            <span>Profile</span>
          </NavLink>
        </li>

        {user ? (
          <li onClick={handleLogout}>
            <NavLink className="nav-NavLink active" style={{ cursor: "pointer" }}>
              <span className="dz-icon">
                <i className="icon feather icon-log-out" />
              </span>
              <span>Logout</span>
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/login" className="nav-NavLink" onClick={handleNav}>
                <span className="dz-icon">
                  <i className="icon feather icon-log-in" />
                </span>
                <span>Login</span>
              </NavLink>
            </li>
          </>
        )}
      </ul>

      <div className="sidebar-bottom">
        <ul className="app-setting">
          <li className="nav-color pb-2">
            <label
              htmlFor="colorPicker"
              className="d-flex align-items-center"
              style={{ cursor: "pointer" }}
            >
              <span className="dz-icon">
                <i className="feather icon-droplet"></i>
              </span>
              <span>Color Theme</span>
              <input
                type="color"
                id="colorPicker"
                value={selectedColor}
                onChange={handleColorChange}
                style={{
                  marginLeft: "auto",
                  width: "40px",
                  height: "30px",
                  border: "none",
                  background: "none",
                }}
              />
            </label>
          </li>

          <li>
            <div
              className="mode d-flex align-items-center"
              style={{ cursor: "pointer" }}
            >
              <span className="dz-icon">
                <i className="feather icon-moon"></i>
              </span>
              <span>Dark Mode</span>
              <div className="custom-switch ms-auto">
                <input
                  type="checkbox"
                  className="switch-input"
                  id="toggle-dark-menu"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <label
                  className="custom-switch-label"
                  htmlFor="toggle-dark-menu"
                ></label>
              </div>
            </div>
          </li>
        </ul>

        <div className="app-info mt-3">
          <h6 className="name">W3Cart Fashion Store</h6>
          <span className="ver-info">App Version 1.0</span>
        </div>
      </div>
    </div>
  );
}
