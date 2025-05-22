// components/Layout.jsx
import { useLocation } from "react-router-dom";
import MenuBar from "../components/MenuBar";

export default function Layout({ children }) {
  const location = useLocation();

  // مسیرهایی که نباید MenuBar نمایش داده بشه
  const hideMenu = ["/", "/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideMenu && <MenuBar />}
      {children}
    </>
  );
}
