import React from "react";
import "./css/Skeleton.css"; // فایل استایل جداگانه

const Skeleton = ({
  type = "rect",
  width = "100%",
  height = "20px",
  borderRadius = "4px",
  color = "#eee",
  highlight = "#f5f5f5",
  duration = "1.5s",
  style,
  className = "",
  children
}) => {
  const skeletonStyle = {
    width,
    height,
    borderRadius: type === "circle" ? "50%" : borderRadius,
    "--base-color": color,
    "--highlight-color": highlight,
    "--animation-duration": duration,
    ...style
  };

  return (
    <div
      className={`skeleton-loader ${className}`}
      style={skeletonStyle}
      aria-label="Loading..."
    >
      {children}
    </div>
  );
};

export default Skeleton;