import { Routes as Router, Route } from "react-router-dom";
import HomePage from "../components/home/HomePage";
import CategoriPage from "../components/Categories/CategoriPage";
import Profile from "../components/profile/Profile";
import WishListPage from "../components/Wishlist/WishListPage";
import EditProfile from "../components/profile/EditProfile";
import CartPage from "../components/cart/CartPage";
import OrderPage from "../components/profile/order/OrderPage";
import Coupon from "../components/profile/coupon/Coupon";
import Login from "../public/Login";
import Welcome from "../public/Welcome";
import Register from "../public/Register";
import ForgetPassword from "../public/ForgetPassword";
import FAQ from "../components/profile/HelpCenter/Help";
import Address from "../components/profile/address/Address";
import CheckOut from "../components/profile/address/checkout";
import ProductDetails from "../components/product/ProductDetails";
import Layout from "../pages/Layout"; // اضافه‌شده
import { AddressProvider } from "../components/profile/address/AddressContext";

const Routes = () => {
  return (
    <Layout>
      <AddressProvider>

        <Router>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/categori" element={<CategoriPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/WishListPage" element={<WishListPage />} />
          <Route path="/OrderPage" element={<OrderPage />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/help" element={<FAQ />} />
          <Route path="/address" element={<Address />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Router>
      </AddressProvider>
    </Layout>
  );
};

export default Routes;