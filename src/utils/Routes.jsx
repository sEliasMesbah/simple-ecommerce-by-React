import { Route, Routes } from "react-router-dom";
import CategoriPage from "../components/Categories/CategoriPage";
import WishListPage from "../components/Wishlist/WishListPage";
import CartPage from "../components/cart/CartPage";
import HomePage from "../components/home/HomePage";
import ProductDetails from "../components/product/ProductDetails";
import EditProfile from "../components/profile/EditProfile";
import FAQ from "../components/profile/HelpCenter/Help";
import Profile from "../components/profile/Profile";
import Address from "../components/profile/address/Address";
import CheckOut from "../components/profile/address/checkout";
import Coupon from "../components/profile/coupon/Coupon";
import OrderPage from "../components/profile/order/OrderPage";
import Layout from "../pages/Layout";
import ForgetPassword from "../public/ForgetPassword";
import Login from "../public/Login";
import Register from "../public/Register";
import Welcome from "../public/Welcome";

// Import all UI components used below
import ComponentPage from "../components/ComponentPage";
import Accordion from "../components/ui/Accordion";
import Alert from "../components/ui/Alert";
import Avatar from "../components/ui/Avatar";
import Badge from "../components/ui/Badge";
import Breadcrumb from "../components/ui/Breadcrumb";
import Button from "../components/ui/Button";
import ButtonGroup from "../components/ui/ButtonGroup";
import Card1 from "../components/ui/Card1";
import Collapse from "../components/ui/Collapse";
import Divider from "../components/ui/Divider";
import Dropdown from "../components/ui/Dropdown";
import Inputs1 from "../components/ui/Inputs1";
import Lightgallery from "../components/ui/Lightgallery";
import ListGroup from "../components/ui/ListGroup";
import Offcanvas from "../components/ui/Offcanvas";
import Pagination from "../components/ui/Pagination";
import Placeholder from "../components/ui/Placeholder";
import Popover from "../components/ui/Popover";
import Progress from "../components/ui/Progress";
import Radio from "../components/ui/Radio";
import Scrollspy from "../components/ui/Scrollspy";
import Spinners from "../components/ui/Spinners";
import Stepper from "../components/ui/Stepper";
import Tab from "../components/ui/Tab";
import Timeline from "../components/ui/Timeline";
import Toast from "../components/ui/Toast";
import Typography from "../components/ui/Typography";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
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
        <Route path="/ComponentPage" element={<ComponentPage />} />
        <Route path="/ui-accordion" element={<Accordion />} />
        <Route path="/ui-alert" element={<Alert />} />
        <Route path="/ui-avatar" element={<Avatar />} />
        <Route path="/ui-badge" element={<Badge />} />
        <Route path="/ui-breadcrumb" element={<Breadcrumb />} />
        <Route path="/ui-button" element={<Button />} />
        <Route path="/ui-button-group" element={<ButtonGroup />} />
        <Route path="/ui-card" element={<Card1 />} />
        <Route path="/ui-inputs" element={<Inputs1 />} />
        <Route path="/ui-dropdown" element={<Dropdown />} />
        <Route path="/ui-collapse" element={<Collapse />} />
        <Route path="/ui-radio" element={<Radio />} />
        <Route path="/ui-timeline" element={<Timeline />} />
        <Route path="/ui-list-group" element={<ListGroup />} />
        <Route path="/ui-tab" element={<Tab />} />
        <Route path="/ui-divider" element={<Divider />} />
        <Route path="/ui-stepper" element={<Stepper />} />
        <Route path="/ui-offcanva" element={<Offcanvas />} />
        <Route path="/ui-pagination" element={<Pagination />} />
        <Route path="/ui-placeholder" element={<Placeholder />} />
        <Route path="/ui-progress" element={<Progress />} />
        <Route path="/ui-popover" element={<Popover />} />
        <Route path="/ui-scrollspy" element={<Scrollspy />} />
        <Route path="/ui-spinners" element={<Spinners />} />
        <Route path="/ui-toast" element={<Toast />} />
        <Route path="/ui-typography" element={<Typography />} />
        <Route path="/ui-lightgallery" element={<Lightgallery />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
