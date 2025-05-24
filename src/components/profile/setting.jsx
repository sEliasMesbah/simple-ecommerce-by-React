import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import React from "react";

export default function Setting() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();                // پاک کردن اطلاعات کاربر
    navigate("/login");      // هدایت به صفحه لاگین
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("www.sargarme.com");
      alert("متن با موفقیت کپی شد!");
    } catch (err) {
      alert("خطا در کپی کردن متن: " + err);
    }
  };

  return (
    <div className="setting-dropdown">
      <ul>
        <li>
          Setting
          <i style={{ color: 'var(--primary)', padding: '0 10px' }} className="fa fa-cog" />
        </li>

        <li className="LogOut-btn">
          <button
            onClick={handleLogout}
            style={{ background: "none", border: "none", cursor: "pointer", color: "inherit" }}
          >
            Log Out
            <i className="fa fa-sign-out" style={{ color: 'var(--primary)', padding: '0 10px' }} />
          </button>
        </li>

        <li className="copyBtn">
          <button
            onClick={handleCopy}
            style={{ background: "none", border: "none", cursor: "pointer", color: "inherit" }}
          >
            Copy Link
            <i className="fa fa-clone" style={{ color: 'var(--primary)', padding: '0 10px' }} />
          </button>
        </li>
      </ul>
    </div>
  );
}
