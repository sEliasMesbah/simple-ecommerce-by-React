import { Link } from "react-router-dom";

export default function MenuBar() {
	return <>
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
				<Link to="/CartPage" className="nav-link cart-handle">
					<div className="hexad-menu">
						<img src="images/menu-shape-dark.svg" className="shape-dark" alt="" />
						<img src="images/menu-shape-light.svg" className="shape-light" alt="" />
						<i className="icon feather icon-shopping-bag"></i>
					</div>
				</Link>
				<Link to="/wishlist" className="nav-link">
					<i className="icon feather icon-heart"></i>
					<span>Wishlist</span>
				</Link>
				<Link to="/profile" className="nav-link">
					<i className="icon feather icon-user"></i>
					<span>Profile</span>
				</Link>
			</div>
		</div>
	</>
}