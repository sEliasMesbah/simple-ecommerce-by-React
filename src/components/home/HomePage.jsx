import Header from "./HomeHeader";
import SideBar from "./SideBar";
import Main from "./Main";
import { useState } from "react";
import MenuBar from "../MenuBar";

export default function HomePage(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);
    return<>
            <Header onToggleSidebar={toggleSidebar} />
        <SideBar isOpen={isSidebarOpen} />
        {isSidebarOpen && (
          <div
            className="overlay"
            onClick={closeSidebar}
          ></div>
        )}
        <Main />
        {/* <MenuBar /> */}
    </>
}