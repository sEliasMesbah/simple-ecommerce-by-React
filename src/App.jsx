import MenuBar from "./components/MenuBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./utils/Routes";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <BrowserRouter>
      <UserProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
