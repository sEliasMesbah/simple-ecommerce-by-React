import { useState } from "react";
import Header from "./components/home/HomeHeader";
import MenuBar from "./components/MenuBar";
import SideBar from "./components/home/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Routes from "./utils/Routes";
import Main from "./components/home/Main";
import HomePage from "./components/home/HomePage";
import CategoriMain from "./components/Categories/CategoriMain";
import CategoriPage from "./components/Categories/CategoriPage";
import Profile from "./components/profile/Profile";
import WishListPage from "./components/Wishlist/WishListPage";
import EditProfile from "./components/profile/EditProfile";
import CartPage from "./components/cart/CartPage";
import OrderPage from "./components/profile/order/OrderPage";
import Coupon from "./components/profile/coupon/Coupon";
import Login from "./public/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categori" element={<CategoriPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/WishListPage" element={<WishListPage />} />
          <Route path="/OrderPage" element={<OrderPage />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
