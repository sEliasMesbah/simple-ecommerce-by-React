import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import { AuthProvider } from "./context/AuthContext";
import Routes from "./utils/Routes";
import AdminRoutes from "./utils/AdminRoutes";

import TrailCursor from "./components/TrailCursor"; // اضافه کن

import "./public/app.css"

import MainAdminBtn from "./public/MainAdminBtn";

function App() {
  const [preloading, setPreloading] = useState(true);

  const handlePreloaderFinish = () => {
    setPreloading(false);
  };

  if (preloading) {
    return <Preloader onFinish={handlePreloaderFinish} />;
  }

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          {/* <TrailCursor /> */}
          <Routes />
          <AdminRoutes />
          
          <MainAdminBtn />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
