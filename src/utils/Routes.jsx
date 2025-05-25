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

const Routes = () => {
  return (
    <Layout>
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
         <Route path="/" element={<HomePage />} />
          <Route path="/categori" element={<CategoriPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/WishListPage" element={<WishListPage />} />
          <Route path="/ComponentPage" element={<ComponentPage/>}/>
        <Route path="/ui-accordion" element={<Accordion/>}/>
        <Route path="/ui-alert" element={<Alert/>}/>
        <Route path="/ui-avatar" element={<Avatar/>}/>
        <Route path="/ui-badge" element={<Badge/>}/>
        <Route path="/ui-breadcrumb" element={<Breadcrumb/>}/>
        <Route path="/ui-button" element={<Button/>}/>
        <Route path="/ui-button-group" element={<ButtonGroup/>}/>
        <Route path="/ui-card" element={<Card1/>}/>
        <Route path="/ui-inputs" element={<Inputs1/>}/>
        <Route path="/ui-dropdown" element={<Dropdown/>}/>
        <Route path="/ui-collapse" element={<Collapse/>}/>
        <Route path="/ui-radio" element={<Radio/>}/>
        <Route path="/ui-timeline" element={<Timeline/>}/>
        <Route path="/ui-list-group" element={<ListGroup/>}/>
        <Route path="/ui-tab" element={<Tab/>}/>
        <Route path="/ui-divider" element={<Divider/>}/>
        <Route path="/ui-stepper" element={<Stepper/>}/>
        <Route path="/ui-offcanva" element={<Offcanvas/>}/>
        <Route path="/ui-pagination" element={<Pagination/>}/>
        <Route path="/ui-placeholder" element={<Placeholder/>}/>
        <Route path="/ui-progress" element={<Progress/>}/>
        <Route path="/ui-popover" element={<Popover/>}/>
        <Route path="/ui-scrollspy" element={<Scrollspy/>}/>
        <Route path="/ui-spinners" element={<Spinners/>}/>
        <Route path="/ui-toast" element={<Toast/>}/>
        <Route path="/ui-typography" element={<Typography/>}/>
        <Route path="/ui-lightgallery" element={<Lightgallery/>}/>
      </Router>
    </Layout>
  );
};

export default Routes;
