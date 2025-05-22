import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // مسیر را درست تنظیم کن

export default function MenuBar() {
	const { user } = useAuth();
	const navigate = useNavigate();

	const handleWishlistClick = () => {
		if (user) {
			navigate("/wishlist");
		} else {
			navigate("/login");
		}
	};
	const handleCartClick = () => {
		if (user) {
			navigate("/CartPage");
		} else {
			navigate("/login");
		}
	};

	return (
		<div className="menubar-area footer-fixed rounded-0">
			<div className="toolbar-inner menubar-nav">
				<Link to="/home" className="nav-link active">
					<i className="icon feather icon-home"></i>
					<span>Home</span>
				</Link>
				<Link to="/categori" className="nav-link">
					<i className="icon feather icon-grid"></i>
					<span>Categories</span>
				</Link>
				<button
	className="nav-link cart-handle"
	onClick={handleCartClick}
	style={{
		background: "none",
		border: "none",
		padding: 0,
		pointerEvents: "auto", // این خط مهمه
		zIndex:"10000"
	}}
>
	<div className="hexad-menu">
		<img src="images/menu-shape-dark.svg" className="shape-dark" alt="" />
		<img src="images/menu-shape-light.svg" className="shape-light" alt="" />
		<i className="icon feather icon-shopping-bag"></i>
	</div>
</button>
				{/* دکمه ویش‌لیست با بررسی لاگین */}
				<button
					className="nav-link"
					onClick={handleWishlistClick}
					style={{ background: "none", border: "none", padding: 0 }}
				>
					<i className="icon feather icon-heart"></i>
					<span>Wishlist</span>
				</button>
				<Link to="/profile" className="nav-link">
					<i className="icon feather icon-user"></i>
					<span>Profile</span>
				</Link>
			</div>
		</div>
	);
}
