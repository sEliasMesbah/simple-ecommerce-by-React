import { useEffect, useRef, useState } from "react";

export default function Preloader({ onFinish }) {
  const videoRef = useRef(null);
  const [show, setShow] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const minDuration = 200000;
    const start = Date.now();

    const handleLoaded = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(minDuration - elapsed, 0);

      setTimeout(() => {
        setShow(false);
        setTimeout(() => {
          setShouldRender(false);
          onFinish();
        }, 500); // مدت انیمیشن fade out
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

  if (!shouldRender) return null;

  return (
    <div className={`preloader-wrapper ${show ? "visible" : "hidden"}`}>
      <div className="videocutter">
      <video
        ref={videoRef}
        src="/f.mp4"
        autoPlay
        muted
        playsInline
        className="preloader-video"
        
      />
      </div>
    </div>
  );
}
