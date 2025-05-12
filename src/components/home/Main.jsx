import SideBar from "./SideBar";
import TopSwiper from "./TopSlider";
import TopCategory from "./TopCategory";
import TitleBar from "./TitleBar";
import ProductCards from "./ProductCards";
import DownSlider from "./DownSlider";

export default function Main() {
  return (
    <>
      <div className="page-content space-top p-b80">
        <div className="container p-0">
          <TopSwiper />
          <TopCategory />
          <TitleBar title={"Most Popular"}/>
          <ProductCards />
          <TitleBar title={"Trending Now"}/>
          <DownSlider />
        </div>
      </div>
    </>
  );
}
