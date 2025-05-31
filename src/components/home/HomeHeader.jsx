import { Link } from "react-router-dom";
import { isAdmin } from "../../utils/auth";
import BtnIcon from "../public/BtnIcon";
import SocialIcons from "../public/socialIcons";
export default function Header({ onToggleSidebar }) {
	return (
	  <header className="header shadow header-fixed border-0">
		<div className="container">
		  <div className="header-content">
			<div className="left-content">

				<i className="icon feather icon-menu cursor openside menu-toggler" onClick={onToggleSidebar}></i>
			</div>
			<div className="mid-content header-logo">
			  <Link to="/">
				<img className="logo app-logo" src="/images/logos/light/logo1.svg" alt="logo" />
			  </Link>
			</div>
			<div className="right-content">
			  <Link to="/search" className="search-icon">
				<i className="icon feather icon-search"></i>
			  </Link>
			</div>
		  </div>
		</div>
	  </header>
	);
  }