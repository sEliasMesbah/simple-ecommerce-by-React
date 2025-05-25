import { useLocation, Outlet, matchPath } from "react-router-dom";
import MenuBar from "../components/MenuBar";

export default function Layout() {
  const location = useLocation();

  // لیست مسیرهایی که نباید MenuBar نمایش داده شود
  const hideMenuPaths = [
    "/",
    "/login",
    "/register",
    "/search",
    "/product/:id" // اضافه کردن مسیر داینامیک
  ];

  // بررسی تطابق مسیر فعلی با الگوها
  const hideMenu = hideMenuPaths.some((path) => 
    matchPath({ path, end: true }, location.pathname)
  );

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