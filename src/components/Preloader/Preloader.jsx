import { useEffect, useRef, useState } from "react";
// import "./Preloader.css";

export default function Preloader({ onFinish }) {
  const videoRef = useRef(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const minDuration = 2000;
    const start = Date.now();

    const handleLoaded = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(minDuration - elapsed, 0);

      setTimeout(() => {
        setShow(false);
        setTimeout(() => {
          onFinish();
        }, 500); // wait for fade out transition
      }, remaining);
    };

    const video = videoRef.current;
    if (video) {
      video.oncanplaythrough = handleLoaded;
    }

    return () => {
      if (video) {
        video.oncanplaythrough = null;
      }
    };
  }, [onFinish]);

  return (
    <div className={`preloader-wrapper ${show ? "visible" : "hidden"}`}>
      <video
        ref={videoRef}
        src="/f.mp4"
        autoPlay
        muted
        playsInline
        className="preloader-video"
      />
    </div>
  );
}
