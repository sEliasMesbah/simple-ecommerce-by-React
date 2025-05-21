import MenuBar from "./components/MenuBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./utils/Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuBar />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
