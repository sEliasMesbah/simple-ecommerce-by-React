import { useState } from "react";
import Header from "./components/home/HomeHeader";
import MenuBar from "./components/MenuBar";
import SideBar from "./components/home/SideBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./utils/Routes";
import Main from "./components/home/Main";
import HomePage from "./components/home/HomePage";
import CategoriMain from "./components/Categories/CategoriMain";
import CategoriPage from "./components/Categories/CategoriPage";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes/>
        {/* برای صفحه هوم که علی الحساب کامنت شده تا بقیه صفحات تکمیل شه */}
        {/* <HomePage /> */}
        <CategoriPage />
        <MenuBar />
      </BrowserRouter>
    </>
  );
}

export default App;