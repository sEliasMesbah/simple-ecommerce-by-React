import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Setting({ onClose }) {
  const { logout } = useAuth();
  const navigate = useNavigate(); // اینجا از هوک استفاده می‌کنیم

  const handleLogout = () => {
    logout();      // اول لاگ اوت
    onClose();     // بعد منو رو ببند
    navigate("/login");  // سپس ریدایرکت کن
  };

  return (
    <div className="setting-dropdown">
      <ul>
        <li>
          <button onClick={handleLogout}>Log Out</button>
        </li>
      </ul>
    </div>
  );
}
