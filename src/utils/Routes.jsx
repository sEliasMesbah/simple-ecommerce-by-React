import { Routes as Router, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
import Layout from "../pages/Layout";
import { AddressProvider } from "../components/profile/address/AddressContext";

import Accordion from "../components/ConponentOfSlider/Accordion";
import Alert from "../components/ConponentOfSlider/Alert";
import Badge from "../components/ConponentOfSlider/Badge";
import Breadcrumb from "../components/ConponentOfSlider/Breadcrumb";
import Button from "../components/ConponentOfSlider/Button";
import ButtonGroup from "../components/ConponentOfSlider/ButtonGroup";
import Card1 from "../components/ConponentOfSlider/Card1";
import Collapse from "../components/ConponentOfSlider/Collapse";
import ComponentPage from "../components/ConponentOfSlider/ComponentPage";
import DAaccordion from "../components/ConponentOfSlider/DAccordion";
import Divider from "../components/ConponentOfSlider/Divider";
import Dropdown from "../components/ConponentOfSlider/Dropdown";
import Inputs1 from "../components/ConponentOfSlider/Inputs1";
import Lightgallery from "../components/ConponentOfSlider/Lightgallery";
import ListGroup from "../components/ConponentOfSlider/ListGroup";
import Offcanvas from "../components/ConponentOfSlider/Offcanvas";
import Pagination from "../components/ConponentOfSlider/Pagination";
import Placeholder from "../components/ConponentOfSlider/Placeholder";
import Popover from "../components/ConponentOfSlider/Popover";
import Progress from "../components/ConponentOfSlider/Progress";
import Radio from "../components/ConponentOfSlider/Radio";
import Scrollspy from "../components/ConponentOfSlider/Scrollspy";
import Spinners from "../components/ConponentOfSlider/Spinners";
import Stepper from "../components/ConponentOfSlider/Stepper";
import Tab from "../components/ConponentOfSlider/Tab";
import Timeline from "../components/ConponentOfSlider/Timeline";
import Toast from "../components/ConponentOfSlider/Toast";
import Typography from "../components/ConponentOfSlider/Typography";
import Avatar from "../components/ConponentOfSlider/ui-avatar";
import WelcomeWrapper from "../components/WelcomeWrapper";

const Routes = () => {
  const location = useLocation();

  return (
    <Layout>
      <AddressProvider>
        <AnimatePresence mode="wait" initial={false}>
          <Router location={location} key={location.pathname}>
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

            {/* more route */}
            <Route path="/components" element={<ComponentPage />} />

            <Route path="/ui-accordion" element={<Accordion />} />
            <Route path="/ui-alert" element={<Alert />} />
            <Route path="/ui-badge" element={<Badge />} />
            <Route path="/ui-breadcrumb" element={<Breadcrumb />} />
            <Route path="/ui-button" element={<Button />} />
            <Route path="/ui-button-group" element={<ButtonGroup />} />
            <Route path="/ui-card1" element={<Card1 />} />
            <Route path="/ui-collapse" element={<Collapse />} />
            <Route path="/ui-divider" element={<Divider />} />
            <Route path="/ui-dropdown" element={<Dropdown />} />
            <Route path="/ui-inputs1" element={<Inputs1 />} />
            <Route path="/ui-lightgallery" element={<Lightgallery />} />
            <Route path="/ui-list-group" element={<ListGroup />} />
            <Route path="/ui-offcanvas" element={<Offcanvas />} />
            <Route path="/ui-pagination" element={<Pagination />} />
            <Route path="/ui-placeholder" element={<Placeholder />} />
            <Route path="/ui-popover" element={<Popover />} />
            <Route path="/ui-progress" element={<Progress />} />
            <Route path="/ui-radio" element={<Radio />} />
            <Route path="/ui-scrollspy" element={<Scrollspy />} />
            <Route path="/ui-spinners" element={<Spinners />} />
            <Route path="/ui-stepper" element={<Stepper />} />
            <Route path="/ui-tab" element={<Tab />} />
            <Route path="/ui-timeline" element={<Timeline />} />
            <Route path="/ui-toast" element={<Toast />} />
            <Route path="/ui-typography" element={<Typography />} />
            <Route path="/ui-avatar" element={<Avatar />} />
          </Router>
        </AnimatePresence>
      </AddressProvider>
    </Layout>
  );
};

export default Routes;
