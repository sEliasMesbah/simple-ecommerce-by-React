import { Link } from "react-router-dom";
import React from "react";

export default function Setting() {
  const handleCopy = async (e) => {
    e.preventDefault(); // جلوگیری از رفرش صفحه
    try {
      await navigator.clipboard.writeText("www.sargarme.com");
      alert("متن با موفقیت کپی شد!");
    } catch (err) {
      alert("خطا در کپی کردن متن: " + err);
    }
  };

  return (
    <div
      className="setting-dropdown"
      style={{
        position: "absolute",
        top: "calc(100% + 8px)", // فاصله کمی پایین‌تر از دکمه
        right: 0,
        width: "220px",
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        borderRadius: "6px",
        padding: "10px 0",
        zIndex: 1000,


      }}
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li
          style={{
            padding: "10px 20px",
            borderBottom: "1px solid #eee",
            fontWeight: "bold",
            color: "#333",
            transition: '.5s'

          }}
        >
          Setting
          <Link to="#" style={{ float: "right", color: "var(--primary)"  }}>
            <i
              className="fa fa-cog"
              aria-hidden="true"
              style={{ fontSize: "16px" , color: "var(--primary)"  }}
            ></i>
          </Link>
        </li>

        <li
          className="LogOut-btn"
          style={{
            padding: "10px 20px",
            borderBottom: "1px solid #eee",
            transition:'.5s'

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
              style={{ color: "var(--primary)", fontSize: "16px"  
               }}
            ></i>
          </Link>
        </li>

        <li className="copyBtn" style={{ padding: "10px 20px" , transition:'.5s' }}>
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
