import { useState } from "react";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import SideBar from "./components/SideBar";
import Main from "./components/home/Main";
import { BrowserRouter } from "react-router-dom";
import Routes from "./utils/Routes";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <BrowserRouter>
        <Routes/>

        <Header onToggleSidebar={toggleSidebar} />
        <SideBar isOpen={isSidebarOpen} />
        {isSidebarOpen && (
          <div
            className="overlay"
            onClick={closeSidebar}
          ></div>
        )}
        <MenuBar />
      </BrowserRouter>
    </>
  );
}

export default App;