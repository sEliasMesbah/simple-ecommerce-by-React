import { Link } from "react-router-dom";
import React from "react";

export default function Setting() {
  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('http://localhost:3000');
      alert("The link of the site is copied succesfully!");
    } catch (err) {
      alert("خطا در کپی کردن آدرس سایت: " + err);
    }
  };


  return (
    <div
      className="setting-dropdown">
      <ul>
        <li>
          Contact
          <Link to="/contact" style={{ float: "right", color: "var(--primary)" }}>
            <i class="fa fa-address-book" aria-hidden="true"
              style={{ fontSize: "16px", color: "var(--primary)" }}
            >
            </i>
          </Link>
        </li>

        <li
          className="LogOut-btn"
          style={{
            padding: "10px 20px",
            borderBottom: "1px solid #eee",
            transition: '.5s',
            fontSize: '1rem',

          }}
        >
          <Link
            to="/login"
            style={{
              color: "#333",
              textDecoration: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Log Out
            <i
              className="fa fa-sign-out"
              aria-hidden="true"
              style={{
                color: "var(--primary)", fontSize: "16px"

              }}
            ></i>
          </Link>
        </li>

        <li className="copyBtn" style={{ padding: "10px 20px", transition: '.5s' }}>
          <Link
            to="#"
            onClick={handleCopy}
            style={{
              color: "#333",
              textDecoration: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              fontSize: '1rem'
            }}
          >
            Copy Link
            <i
              className="fa fa-clone"
              aria-hidden="true"
              style={{ color: "var(--primary)", fontSize: "16px" }}
            ></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}
