import { Link } from "react-router-dom";

export default function Coupon() {
    return <>
    <div class="page-wrapper">

		<header class="header shadow header-fixed border-0">
			<div class="container">
				<div class="header-content">
					<div class="left-content">
						<a href="javascript:void(0);">
							<Link to="/profile" class="back-btn">
							<i class="icon feather icon-chevron-left"></i>
							</Link>
						</a>
						<h6 class="title">My Coupons</h6>
					</div>
					<div class="mid-content">
					</div>
					<div class="right-content">
					</div>
				</div>
			</div>
		</header>

	<div class="page-content space-top">
		<div class="container">
			<div class="dz-offer-coupon">
				<div class="offer">
					<h6>20%</h6>
					<span>Off</span>
				</div>
				<div class="offer-content">
					<span>Home Decor</span>
					<p>On minimum purchase of Rs. 1,999</p>
				</div>	
			</div>
			<div class="dz-offer-coupon">
				<div class="offer">
					<h6>50%</h6>
					<span>Off</span>
				</div>
				<div class="offer-content">
					<span>Home Furnishing</span>
					<p>On minimum purchase of Rs. 3,999</p>
				</div>	
			</div>
			<div class="dz-offer-coupon">
				<div class="offer">
					<h6>25%</h6>
					<span>Off</span>
				</div>
				<div class="offer-content">
					<span>Mobile Accessories</span>
					<p>On minimum purchase of Rs. 999</p>
				</div>	
			</div>
			<div class="title-bar mt-4">
				<h6 class="title mb-0">Discount on your sale</h6>
			</div>
			<div class="swiper offer-swiper mb-3">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<div class="dz-media">
							<img src="/images/offer/offer3.png" />
						</div>
					</div>
					<div class="swiper-slide">
						<div class="dz-media">
							<img src="/images/offer/offer2.png" />
						</div>
					</div>
					<div class="swiper-slide">
						<div class="dz-media">
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