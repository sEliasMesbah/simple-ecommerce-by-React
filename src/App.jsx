import { useState } from "react";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import SideBar from "./components/SideBar";

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
      <MenuBar />
    </>
  );
}

export default App;