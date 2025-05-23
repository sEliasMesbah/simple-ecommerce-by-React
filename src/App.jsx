import MenuBar from "./components/MenuBar";
import { useState } from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import Preloader from './components/Preloader/Preloader';
import Welcome from "./public/Welcome";
import { AuthProvider } from "./context/AuthContext";
import Routes from "./utils/Routes"; // این باید صفحه‌های داخلی سایتت باشن مثل Home، Product، etc.

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
          <Route path="/" element={<Welcome />} />
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
