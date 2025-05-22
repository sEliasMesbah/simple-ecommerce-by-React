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
import Welcome from "./public/Welcome";
import ComponentHeader from "./components/ConponentOfSlider/ComponentHeader";
import ComponentPage from "./components/ConponentOfSlider/ComponentPage";
// import UiAvatar from "./components/ConponentOfSlider/Ui-Avatar";
import UiAccordion from "./components/ConponentOfSlider/Accordion";
import Accordion from "./components/ConponentOfSlider/Accordion";

import Alert from "./components/ConponentOfSlider/Alert";
import Badge from "./components/ConponentOfSlider/Badge";
import Breadcrumb from "./components/ConponentOfSlider/Breadcrumb";
import Button from "./components/ConponentOfSlider/Button";
import ButtonGroup from "./components/ConponentOfSlider/ButtonGroup";
import Card1 from "./components/ConponentOfSlider/Card1";
import Inputs1 from "./components/ConponentOfSlider/Inputs1";
import Dropdown from "./components/ConponentOfSlider/Dropdown";
import Collapse from "./components/ConponentOfSlider/Collapse";
import Radio from "./components/ConponentOfSlider/Radio";
import ListGroup from "./components/ConponentOfSlider/ListGroup";
import Divider from "./components/ConponentOfSlider/Divider";
import Stepper from "./components/ConponentOfSlider/Stepper";
import Offcanvas from "./components/ConponentOfSlider/Offcanvas";
import Pagination from "./components/ConponentOfSlider/Pagination";
import Placeholder from "./components/ConponentOfSlider/Placeholder";
import Progress from "./components/ConponentOfSlider/Progress";
import Popover from "./components/ConponentOfSlider/Popover";
import Scrollspy from "./components/ConponentOfSlider/Scrollspy";
import Spinners from "./components/ConponentOfSlider/Spinners";
import Lightgallery from "./components/ConponentOfSlider/Lightgallery";
import Avatar from "./components/ConponentOfSlider/ui-avatar";
import Timeline from "./components/ConponentOfSlider/Timeline";
import Tab from "./components/ConponentOfSlider/Tab";
import Toast from "./components/ConponentOfSlider/Toast";
import Typography from "./components/ConponentOfSlider/Typography";


function App() {
  return (
    <>
     
      <BrowserRouter>
        <MenuBar />
        <Routes>
         
     


          <Route path="/OrderPage" element={<OrderPage />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/help" element={<FAQ/>} />
          <Route path="/address" element={<Address/>} />
          <Route path="/checkout" element={<CheckOut/>} />
          

        </Routes>
      </BrowserRouter>
    </>
   
  );
  
}

export default App;
