import { useEffect, useState } from "react";

export default function FadeWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fade-wrapper ${isVisible ? "fade-in" : ""}`}>
      {children}
    </div>
  );
}
