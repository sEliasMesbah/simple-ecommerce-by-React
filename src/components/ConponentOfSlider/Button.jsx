import { Link } from "react-router-dom";

export default function Button(){
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
						<Link to="/" className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">Buttons</h6>
					</div>
					<div className="mid-content">
					</div>
					<div className="right-content">
						<Link to="/search" className="search-icon">
							<i className="icon feather icon-more-vertical-"></i>
						</Link>
					</div>
				</div>
			</div>
		</header>
	
	<div className="page-content space-top btn-page">
		<div className="container">
			<div className="card dz-card style-1" style={{backgroundimage:" url('assets/images/bg-shape.png');"}}>				
				<div className="card-body">
					<div className="dz-media dz-flex-box">
						<img src="/images/bootstrap-logo.png" alt=""/>
					</div>
					<div className="dz-content">
						<h5 className="card-title">Bootstrap Elements</h5>
						<Link to="/contentArea" className="element-name scroll">Buttons style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			
			<div className="row" id="contentArea">
	
	
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Buttons</h5>
						</div>	
						<div className="card-body">
							<button type="button" className="btn btn-primary">Primary</button>
							<button type="button" className="btn btn-secondary">Secondary</button>
							<button type="button" className="btn btn-success">Success</button>
							<button type="button" className="btn btn-danger">Danger</button>
							<button type="button" className="btn btn-warning">Warning</button>
							<button type="button" className="btn btn-info">Info</button>
							<button type="button" className="btn btn-light">Light</button>
							<button type="button" className="btn btn-dark">Dark</button>
						</div>
					</div>
				</div>
				
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Buttons With Icon</h5>
						</div>	
						<div className="card-body">
							<button type="button" className="btn btn-primary"><i className="fa-brands fa-accusoft me-2"></i>Primary</button>
							<button type="button" className="btn btn-secondary"><i className="fa-solid fa-table-cells-large me-2"></i>Secondary</button>
							<button type="button" className="btn btn-success"><i className="fa-solid fa-gear me-2"></i>Success</button>
							<button type="button" className="btn btn-danger"><i className="fa-solid fa-circle-exclamation me-2"></i>Danger</button>
							<button type="button" className="btn btn-warning"><i className="fa-solid fa-image me-2"></i>Warning</button>
							<button type="button" className="btn btn-info"><i className="fa-solid fa-phone-volume me-2"></i>Info</button>
							<button type="button" className="btn btn-light"><i className="fa-solid fa-lock me-2"></i>Light</button>
							<button type="button" className="btn btn-dark"><i className="fa-solid fa-circle-play me-2"></i>Dark</button>
						</div>
					</div>
				</div>
			
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Buttons Light</h5>
						</div>	
						<div className="card-body">
							<button type="button" className="btn light btn-primary">Primary</button>
							<button type="button" className="btn light btn-secondary">Secondary</button>
							<button type="button" className="btn light btn-success">Success</button>
							<button type="button" className="btn light btn-danger">Danger</button>
							<button type="button" className="btn light btn-warning">Warning</button>
							<button type="button" className="btn light btn-info">Info</button>
							<button type="button" className="btn light btn-light">Light</button>
							<button type="button" className="btn light btn-dark">Dark</button>
						</div>
					</div>
				</div>
				
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Outline Buttons</h5>
						</div>	
						<div className="card-body">
							<button type="button" className="btn btn-outline-primary">Primary</button>
							<button type="button" className="btn btn-outline-secondary">Secondary</button>
							<button type="button" className="btn btn-outline-success">Success</button>
							<button type="button" className="btn btn-outline-danger">Danger</button>
							<button type="button" className="btn btn-outline-warning">Warning</button>
							<button type="button" className="btn btn-outline-info">Info</button>
							<button type="button" className="btn btn-outline-light">Light</button>
							<button type="button" className="btn btn-outline-dark">Dark</button>
						</div>
					</div>
				</div>
				
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Dropdown Button</h5>
						</div>	
						<div className="card-body">
							<div className="btn-group" role="group">
								<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
								<div className="dropdown-menu" >
									<Link to="/" className="dropdown-item" >Dropdown link</Link>
									<Link to="/" className="dropdown-item" >Dropdown link</Link>
								</div>
							</div>
							<div className="btn-group" role="group">
								<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
								<div className="dropdown-menu" >
								<Link to="/" className="dropdown-item" >Dropdown link</Link>
									<Link to="/" className="dropdown-item" >Dropdown link</Link>
								</div>
							</div>
							<div className="btn-group" role="group">
								<button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
								<div className="dropdown-menu" >
                                <Link to="/" className="dropdown-item" >Dropdown link</Link>
									<Link to="/" className="dropdown-item" >Dropdown link</Link>
								</div>
							</div>
							<div className="btn-group" role="group">
								<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
								<div className="dropdown-menu" >
                                <Link to="/" className="dropdown-item" >Dropdown link</Link>
									<Link to="/" className="dropdown-item" >Dropdown link</Link>
								</div>
							</div>
							<div className="btn-group" role="group">
								<button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown">Danger</button>
								<div className="dropdown-menu">
                                <Link to="/" className="dropdown-item" >Dropdown link</Link>
									<Link to="/" className="dropdown-item" >Dropdown link</Link>
								</div>
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