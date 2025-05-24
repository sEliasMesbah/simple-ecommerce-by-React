import { useLocation, Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";

export default function Layout() {
  const location = useLocation();

  // مسیرهایی که در آنها نمی‌خواهیم MenuBar نمایش داده شود
  const hideMenu = ["/", "/login", "/register"].includes(location.pathname);

  return (
    <div className="relative">
      {!hideMenu && (
        <div className="relative z-10">
          <MenuBar />
        </div>
      )}

      {/* محتوای صفحات */}
      <main className="relative z-0">
        <Outlet />
      </main>
    </div>
  );
}
