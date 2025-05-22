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
