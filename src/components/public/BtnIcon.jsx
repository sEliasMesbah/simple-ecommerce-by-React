import React from 'react';
import "./css/BtnIcon.css"; // 3. مطمئن شوید مسیر صحیح است

const BtnIcon = ({ 
  icon, 
  className = "", // 1. مقدار پیش‌فرض خالی
  size = "60px", 
  background = "#000", 
  color = "#fff" 
}) => {
  return (
    <button
      className={`BtnIcon ${className}`.trim()} // 1. حذف فضای اضافی
      style={{
        width: size,
        height: size,
        backgroundColor: background,
        color: color,
        display: "inline-flex", // 2. کمک به نمایش آیکون
        alignItems: "center",   // 2. وسط‌چین عمودی
        justifyContent: "center", // 2. وسط‌چین افقی
        border: "none",         // 2. حذف border پیش‌فرض
        cursor: "pointer",      // 2. تغییر نشانگر
        padding: 0              // 2. حذف padding پیش‌فرض
      }}
    >
      {icon}
    </button>
  );
};

export default BtnIcon;