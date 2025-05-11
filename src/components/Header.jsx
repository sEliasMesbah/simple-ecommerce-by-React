export default function Header({ onToggleSidebar }) {
	return (
	  <header className="header shadow header-fixed border-0">
		<div className="container">
		  <div className="header-content">
			<div className="left-content">

				<i className="icon feather icon-menu cursor openside menu-toggler" onClick={onToggleSidebar}></i>
			</div>
			<div className="mid-content header-logo">
			  <span href="index.html">
				<img className="logo app-logo" src="/images/logos/light/logo1.svg" alt="logo" />
			  </span>
			</div>
			<div className="right-content">
			  <a href="search.html" className="search-icon">
				<i className="icon feather icon-search"></i>
			  </a>
			</div>
		  </div>
		</div>
	  </header>
	);
  }