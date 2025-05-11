import { useState } from "react";
import Header from "./components/home/Header";
import SideBar from "./components/home/SideBar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <Header onToggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} />
      {isSidebarOpen && (
        <div
          className="overlay"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
}

export default App;