import { useEffect, useState } from "react";
import MenuBar from "../../components/MenuBar";
import CategoriHeader from "../../components/Categories/CategoriHeader";
import CategoriMain from "../../components/Categories/CategoriMain";

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
