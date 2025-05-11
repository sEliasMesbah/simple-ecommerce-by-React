import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Header() {
  return (
    <>
     <header className="header shadow header-fixed border-0">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<a href="javascript:void(0);" className="menu-toggler">
							<i className="icon feather icon-menu"></i>
						</a>
					</div>
					<div className="mid-content header-logo">
						<a href="index.html">
							<img className="logo app-logo" src="/images/logos/light/logo1.svg" alt="logo" />
							{/* <!-- <img className="logo-dark" src="assets/images/svg/logo.svg" alt="logo">
							<img className="logo-light" src="assets/images/svg/logo-white.svg" alt="logo"> --> */}
						</a>
					</div>
					<div className="right-content">
						<a href="search.html" className="search-icon">
							<i className="icon feather icon-search"></i>
						</a>
					</div>
				</div>
			</div>
		</header>
    </>
  );
}