import { useEffect, useState } from "react";
import MenuBar from "../MenuBar";
import CategoriHeader from "./CategoriHeader";
import CategoriMain from "./CategoriMain";

export default function CategoriPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-wrapper ${isVisible ? "fade-in" : ""}`}>
      <CategoriHeader />
      <CategoriMain />
      {/* <MenuBar /> */}
    </div>
  );
}
