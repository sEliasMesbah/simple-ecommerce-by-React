import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SideBar({ isOpen }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#007bff");

  // بارگذاری تم و رنگ ذخیره‌شده در زمان لود
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

  // اعمال رنگ دلخواه
  const applyCustomColor = (color) => {
    document.documentElement.style.setProperty("--user-color", color);
    document.body.classList.add("custom-theme");
  };

  // تغییر رنگ توسط کاربر
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setSelectedColor(newColor);
    localStorage.setItem("themeColor", newColor);
    applyCustomColor(newColor);
  };

  // تغییر دارک مود
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

  return (
    <div
      className={`sidebar ${isOpen ? "show" : ""}`}
      style={{ backgroundImage: "url('images/background/bg3.png')" }}
    >
      <a href="profile.html" className="author-box">
        <div className="dz-media">
          <img src="images/user-profile.jpg" alt="author" />
        </div>
        <div className="dz-info">
          <h5 className="name">John Doe</h5>
          <span>example@gmail.com</span>
        </div>
      </a>

      <ul className="nav navbar-nav dark-icon-black">
        <li><Link to="/" className="nav-link active"><i className="feather icon-home"></i> Home</Link></li>
        <li><Link to="/wishlist" className="nav-link active"><i className="feather icon-heart"></i> Wishlist</Link></li>
        <li><Link to="/OrderPage" className="nav-link active"><i className="feather icon-repeat"></i> Orders</Link></li>
        <li><Link to="/profile" className="nav-link active"><i className="feather icon-user"></i> Profile</Link></li>
        <li><Link to="/welcome" className="nav-link active"><i className="feather icon-log-out"></i> Logout</Link></li>
      </ul>

      <div className="sidebar-bottom">
        <ul className="app-setting">
          {/* انتخاب رنگ */}
          <li className="nav-color pb-2">
            <label htmlFor="colorPicker" className="d-flex align-items-center" style={{ cursor: "pointer" }}>
              <span className="dz-icon"><i className="feather icon-droplet"></i></span>
              <span>Color Theme</span>
              <input
                type="color"
                id="colorPicker"
                value={selectedColor}
                onChange={handleColorChange}
                style={{ marginLeft: "auto", width: "40px", height: "30px", border: "none", background: "none" }}
              />
            </label>
          </li>

          {/* دارک مود */}
          <li>
            <div className="mode d-flex align-items-center" style={{ cursor: "pointer" }}>
              <span className="dz-icon"><i className="feather icon-moon"></i></span>
              <span>Dark Mode</span>
              <div className="custom-switch ms-auto">
                <input
                  type="checkbox"
                  className="switch-input"
                  id="toggle-dark-menu"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <label className="custom-switch-label" htmlFor="toggle-dark-menu"></label>
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
