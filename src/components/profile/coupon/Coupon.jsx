import { Link } from "react-router-dom";

export default function Coupon() {
    return <>
    <div className="page-wrapper">

		<header className="header shadow header-fixed border-0">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<a href="javascript:void(0);">
							<Link to="/profile" className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
							</Link>
						</a>
						<h6 className="title">My Coupons</h6>
					</div>
					<div className="mid-content">
					</div>
					<div className="right-content">
					</div>
				</div>
			</div>
		</header>

	<div className="page-content space-top">
		<div className="container">
			<div className="dz-offer-coupon">
				<div className="offer">
					<h6>20%</h6>
					<span>Off</span>
				</div>
				<div className="offer-content">
					<span>Home Decor</span>
					<p>On minimum purchase of Rs. 1,999</p>
				</div>	
			</div>
			<div className="dz-offer-coupon">
				<div className="offer">
					<h6>50%</h6>
					<span>Off</span>
				</div>
				<div className="offer-content">
					<span>Home Furnishing</span>
					<p>On minimum purchase of Rs. 3,999</p>
				</div>	
			</div>
			<div className="dz-offer-coupon">
				<div className="offer">
					<h6>25%</h6>
					<span>Off</span>
				</div>
				<div className="offer-content">
					<span>Mobile Accessories</span>
					<p>On minimum purchase of Rs. 999</p>
				</div>	
			</div>
			<div className="title-bar mt-4">
				<h6 className="title mb-0">Discount on your sale</h6>
			</div>
			<div className="swiper offer-swiper mb-3">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div className="dz-media">
							<img src="/images/offer/offer3.png" />
						</div>
					</div>
					<div className="swiper-slide">
						<div className="dz-media">
							<img src="/images/offer/offer2.png" />
						</div>
					</div>
					<div className="swiper-slide">
						<div className="dz-media">
							<img src="/images/offer/offer1.png" />
						</div>
					</div>	
				</div>	
			</div>	
		</div>	
	</div>

</div>  
    </>
}