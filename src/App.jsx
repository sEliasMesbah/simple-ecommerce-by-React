import MenuBar from "./components/MenuBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./utils/Routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
