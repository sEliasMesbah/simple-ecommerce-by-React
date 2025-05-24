import { useLocation, Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";

export default function Layout() {
  const location = useLocation();

  const hideMenu = ["/", "/login", "/register"].includes(location.pathname);

  return (
    <>
      {/* منوبار با z-index بالا */}
      {!hideMenu && <MenuBar style={{ position: "relative", zIndex: 50 }} />}
      
      {/* محتوای اصلی زیر منوبار */}
      <main className="relative z-0">
        <Outlet />
      </main>
    </>
  );
}
