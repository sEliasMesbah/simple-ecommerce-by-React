import Header from "./HomeHeader";
import SideBar from "./SideBar";
import Main from "./Main";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`home-page-wrapper fade-in ${isVisible ? "visible" : ""}`}>
      <Header onToggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
      {isSidebarOpen && (
        <div
          className="overlay"
          onClick={closeSidebar}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 999,
          }}
        />
      )}
      <Main />
    </div>
  );
}
