import MenuBar from "./components/MenuBar";
import { useState } from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import WelcomeWrapper from "./components/WelcomeWrapper";
import { AuthProvider } from "./context/AuthContext";
import Routes from "./utils/Routes";

function App() {
  const [preloading, setPreloading] = useState(true);

  const handlePreloaderFinish = () => {
    setPreloading(false);
  };

  if (preloading) {
    return <Preloader onFinish={handlePreloaderFinish} />;
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <ReactRoutes>
          {/* فقط اینجا WelcomeWrapper رو بذار */}
          <Route path="/" element={<WelcomeWrapper />} />

          {/* بقیه سایت داخل Layout و MenuBar */}
          <Route
            path="/*"
            element={
              <>
                <MenuBar />
                <Routes />
              </>
            }
          />
        </ReactRoutes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
