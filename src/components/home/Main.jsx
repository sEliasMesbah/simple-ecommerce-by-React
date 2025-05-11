import SideBar from "../SideBar";
import TopSwiper from "./TopSlider";
import TopCategory from "./TopCategory";

export default function Main() {
  return (
    <>
      <div className="page-content space-top p-b80">
        <div className="container p-0">
          <TopSwiper />
          <TopCategory />
        </div>
      </div>
    </>
  );
}
