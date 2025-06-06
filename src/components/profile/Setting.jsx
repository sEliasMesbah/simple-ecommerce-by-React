import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Setting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // وقتی کامپوننت لود شد، وضعیت لاگین رو از localStorage می‌خوانیم
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleLogin = () => {
    // فرض می‌کنیم که کاربر لاگین شده و وضعیت رو ذخیره می‌کنیم
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    navigate("/login"); // به صفحه اصلی یا هر جای دیگه هدایت کن
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('http://localhost:3000');
      alert("آدرس سایت با موفقیت کپی شد!");
    } catch (err) {
      alert("خطا در کپی کردن آدرس سایت: " + err);
    }
  };

  return (
    <div className="setting-dropdown" style={{ width: "200px", border: "1px solid #ddd", padding: "10px", height: '205px' }}>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li
          style={{
            marginBottom: "10px",
            backgroundColor: "var(--primary)",
            width: "80%",
            marginLeft: "18px",
            borderRadius: "4px",
            color: "#fff",
            height: "45px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 15px",
          }}
        >
          <Link to="/contact" style={{ color: "#fff", textDecoration: "none", flex: 1 }}>
            Contact
          </Link>
          <i
            className="fa fa-address-book"
            aria-hidden="true"
            style={{ fontSize: "16px", color: "#fff" }}
          ></i>
        </li>

        <li style={{ marginBottom: "10px", backgroundColor: 'unset' }}>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "1rem",
                cursor: "pointer",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Log Out
              <i className="fa fa-sign-out" aria-hidden="true" />
            </button>
          ) : (
            <button
              onClick={handleLogin}
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "1rem",
                cursor: "pointer",
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Login
              <i className="fa fa-sign-in" aria-hidden="true" />
            </button>
          )}
        </li>

        <li>
          <button
            onClick={handleCopy}
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "1rem",
              cursor: "pointer",
              backgroundColor: "#2196f3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Copy Link
            <i className="fa fa-clone" aria-hidden="true" />
          </button>
        </li>
      </ul>
    </div>
  );
}
