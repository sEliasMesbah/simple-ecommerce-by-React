import { Link } from "react-router-dom";

export default function Scrollspy(){
    return<>
    <div className="page-wrapper">
    

	<div id="preloader">
		<div className="loader">
			<div className="load-circle"><div></div><div></div></div>
		</div>
	</div>
   
		<header className="header shadow header-fixed border-0 onepage">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/"  className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">Scrollspy</h6>
					</div>
					<div className="mid-content">
					</div>
					<div className="right-content">
						<Link to="/search"  className="search-icon">
							<i className="icon feather icon-more-vertical-"></i>
						</Link>
					</div>
				</div>
			</div>
		</header>
	
	<div className="page-content space-top">
		<div className="container">
			<div className="card dz-card style-1" style={{backgroundimage:" url('assets/images/bg-shape.png');"}}>				
				<div className="card-body">
					<div className="dz-media dz-flex-box">
						<img src="/images/bootstrap-logo.png" alt=""/>
					</div>
					<div className="dz-content">
						<h5 className="card-title">Bootstrap Elements</h5>
						<Link to="/contentArea" className="element-name scroll">Scrollspy style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Navbar Scrollspy</h5>
						</div>
						<div className="card-body">
							<nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3 rounded-sm">
								<ul className="nav nav-pills">
									<li className="nav-item">
										<Link to="/#scrollspyHeading1" className="nav-link" >First</Link>
									</li>
									<li className="nav-item">
										<Link to="/#scrollspyHeading2" className="nav-link" >Second</Link>
									</li>
									<li className="nav-item dropdown">
										<Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"  role="button" aria-expanded="false">Dropdown</Link>
										<ul className="dropdown-menu">
											<li><Link to="/#scrollspyHeading3" className="dropdown-item" >Third</Link></li>
											<li><Link to="/#scrollspyHeading4" className="dropdown-item" >Fourth</Link></li>
											<li><hr className="dropdown-divider"/></li>
											<li><Link to="/#scrollspyHeading5" className="dropdown-item" >Fifth</Link></li>
										</ul>
									</li>
								</ul>
							</nav>
							<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
								<h4 id="scrollspyHeading1">First heading</h4>
								<p>
									This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
								</p>
								<h4 id="scrollspyHeading2">Second heading</h4>
								<p>
									This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
								</p>
								<h4 id="scrollspyHeading3">Third heading</h4>
								<p>
									This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
								</p>
								<h4 id="scrollspyHeading4">Fourth heading</h4>
								<p>
									This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
								</p>
								<h4 id="scrollspyHeading5">Fifth heading</h4>
								<p>
									This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>  

    </>

}