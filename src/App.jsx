import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoriMain from "./components/Categories/CategoriMain"; // Assuming this is your category page
import MenuBar from "./components/MenuBar";
import WishListPage from "./components/Wishlist/WishListPage";
import CartPage from "./components/cart/CartPage";
import HomePage from "./components/home/HomePage";
import FAQ from "./components/profile/HelpCenter/Help";
import Profile from "./components/profile/Profile";
import Address from "./components/profile/address/Address";
import CheckOut from "./components/profile/address/checkout";
import Coupon from "./components/profile/coupon/Coupon";
import OrderPage from "./components/profile/order/OrderPage";
import ForgetPassword from "./public/ForgetPassword";
import Login from "./public/Login";
import Register from "./public/Register";
import Welcome from "./public/Welcome";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/help" element={<FAQ />} />
        <Route path="/address" element={<Address />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category" element={<CategoriMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
