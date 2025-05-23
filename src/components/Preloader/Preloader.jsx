import React, { useEffect } from "react";
// import "./Preloader.css";

export default function Preloader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="preloader-wrapper">
      <video
        src="f.mp4"
        autoPlay
        muted
        className="preloader-video"
      />
    </div>
  );
}
