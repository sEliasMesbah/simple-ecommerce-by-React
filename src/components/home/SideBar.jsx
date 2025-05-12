import React from "react";

export default function SideBar({ isOpen }) {
  return (
    <div
      className={`sidebar ${isOpen ? "show" : ""}`}
      style={{ backgroundImage: "url('images/background/bg3.png')" }}
    >
      <a href="profile.html" className="author-box">
        <div className="dz-media">
          <img src="images/user-profile.jpg" alt="author-image" />
        </div>
        <div className="dz-info">
          <h5 className="name">John Doe</h5>
          <span>example@gmail.com</span>
        </div>
      </a>

      <ul className="nav navbar-nav">
        <li>
          <a className="nav-link active" href="index.html">
            <span className="dz-icon">
              <i className="icon feather icon-home"></i>
            </span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a className="nav-link active" href="index.html">
            <span className="dz-icon">
              <i className="icon feather icon-grid"></i>
            </span>
            <span>Components</span>
          </a>
        </li>
        <li>
          <a className="nav-link active" href="index.html">
            <span className="dz-icon">
              <i className="icon feather icon-grid"></i>
            </span>
            <span>Pages</span>
          </a>
        </li>
        <li>
          <a className="nav-link active" href="index.html">
            <span className="dz-icon">
              <i className="icon feather icon-list"></i>
            </span>
            <span>Featured</span>
          </a>
        </li>
        <li>
          <a className="nav-link active" href="index.html">
            <span className="dz-icon">
              <i className="icon feather icon-heart"></i>
            </span>
            <span>Wishlist</span>
          </a>
        </li>
        <li>
          <a className="nav-link active" href="index.html">
            <span className="dz-icon">
              <i className="icon feather icon-repeat"></i>
            </span>
            <span>Orders</span>
          </a>
        </li>
        <li>
          <a className="nav-link active" href="index.html">
            <span className="dz-icon">
              <i className="icon feather icon-shopping-cart"></i>
            </span>
            <span>My Cart</span>
          </a>
        </li>
        <li>
          <a className="nav-link active" href="index.html">
            <span className="dz-icon">
              <i className="icon feather icon-user"></i>
            </span>
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a className="nav-link active" href="index.html">
            <span className="dz-icon">
              <i className="icon feather icon-log-out"></i>
            </span>
            <span>Logout</span>
          </a>
        </li>
        {/* بقیه آیتم‌ها همینطور ادامه دارن */}
      </ul>

      <div className="sidebar-bottom">
        <ul className="app-setting">
          <li className="nav-color pb-2">
            <a
              href="#"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
            >
              <span className="dz-icon">{/* SVG از قبل درسته */}</span>
              <span>Color Theme</span>
              <div className="color-active ms-auto">
                <span>Active</span>
                <div className="current-color"></div>
              </div>
            </a>
          </li>

          <li>
            <a className="mode" href="#">
              <span className="dz-icon">
                <i className="icon feather icon-moon"></i>
              </span>
              <span>Dark Mode</span>
              <div className="custom-switch">
                <input
                  type="checkbox"
                  className="switch-input theme-btn"
                  id="toggle-dark-menu"
                />
                <label
                  className="custom-switch-label"
                  htmlFor="toggle-dark-menu"
                ></label>
              </div>
            </a>
          </li>
        </ul>

        <div className="app-info">
          <h6 className="name">W3Cart Fashion Store</h6>
          <span className="ver-info">App Version 1.0</span>
        </div>
      </div>
    </div>
  );
}
