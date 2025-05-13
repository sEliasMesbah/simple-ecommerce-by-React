import { Link } from "react-router-dom";

export default function MainProfile(){
    return<>
        <div className="page-content space-top">
            <div className="container">
            <div className="profile-area">
				<div className="main-profile">
					<div className="media media-60 me-3 rounded-circle">
						<img src="/images/user-profile.jpg" alt="profile-image" />
					</div>
					<div className="profile-detail">
						<h6 className="name">Thomas Djono</h6>
						<span className="font-12">ID 02123141</span>
					</div>
					<a href="edit-profile.html" className="edit-profile">
						<i className="icon feather icon-edit-2"></i>
					</a>
				</div>
				<div className="content-box">
					<ul className="row g-2">
						<li className="col-6">							
							<a href="order.html">
								<div className="dz-icon-box">
									<i className="icon feather icon-package"></i>
								</div>
								<span>Orders</span>
							</a>
						</li>
						
						<li className="col-6">							
							<Link to="/wishlist">
								<div className="dz-icon-box">
									<i className="icon feather icon-heart"></i>
								</div>
								<span>Wishlist</span>
							</Link>
						</li>
						<li className="col-6">							
							<a href="coupon.html">
								<div className="dz-icon-box">
									<i className="icon feather icon-gift"></i>
								</div>
								<span>Coupons</span>
							</a>
						</li>
						<li className="col-6">							
							<a href="javascript:void(0);">
								<div className="dz-icon-box">
									<i className="icon feather icon-headphones"></i>
								</div>
								<span>Help Center</span>
							</a>
						</li>
					</ul>
				</div>
				<div className="title-bar">
					<h6 className="title mb-0 font-w700">Account Settings</h6>
				</div>
				<div className="dz-list style-1">
					<ul>
						<li>
							<a href="edit-profile.html" className="item-content item-link">
								<div className="dz-icon">
									<i className="icon feather icon-user"></i>
								</div>
								<div className="dz-inner">
									<span className="title">Edit Profile</span>
								</div>
							</a>
						</li>
						<li>
							<a href="address.html" className="item-content item-link">
								<div className="dz-icon">
									<i className="icon feather icon-map-pin"></i>
								</div>
								<div className="dz-inner">
									<span className="title">Saved Addresses</span>
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:void(0);" className="item-content item-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLang" aria-controls="offcanvasLang">
								<div className="dz-icon">
									<i className="icon feather icon-type"></i>
								</div>
								<div className="dz-inner">
									<span className="title select-lang">Select Language</span>
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:void(0);" className="item-content item-link">
								<div className="dz-icon">
									<i className="icon feather icon-bell"></i>
								</div>
								<div className="dz-inner me-2">
									<span className="title">Notification Setting</span>
								</div>
								<div className="badge badge-primary">5</div>
							</a>
						</li>
						<li>
							<a href="welcome.html" className="item-content item-link">
								<div className="dz-icon">
									<i className="icon feather icon-log-out"></i>
								</div>
								<div className="dz-inner">
									<span className="title">Log Out</span>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
            </div>
        </div>
    </>
}