import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
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
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
