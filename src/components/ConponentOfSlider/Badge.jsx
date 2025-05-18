import { Link } from "react-router-dom";

export default function Badge(){
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
						<h6 className="title">Badges</h6>
					</div>
					<div className="mid-content">
					</div>
					<div className="right-content">
						<Link to="/search"className="search-icon">
							<i className="icon feather icon-more-vertical-"></i>
						</Link>
					</div>
				</div>
			</div>
		</header>
	
	<div className="page-content space-top badge-demo">
		<div className="container">
			<div className="card dz-card style-1" style={{backgroundimage: "url('assets/images/bg-shape.png');"}}>				
				<div className="card-body">
					<div className="dz-media dz-flex-box">
						<img src="/images/bootstrap-logo.png" alt=""/>
					</div>
					<div className="dz-content">
						<h5 className="card-title">Bootstrap Elements</h5>
						<Link to="/contentArea"  className="element-name scroll">Badges style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
					
			<div className="row" id="contentArea">

				
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Badges</h5>
						</div>	
						<div className="card-body">
							<div className="bootstrap-badge">
								<span className="badge badge-primary">Primary</span>
								<span className="badge badge-secondary">Secondary</span>
								<span className="badge badge-success">Success</span>
								<span className="badge badge-danger">Danger</span>
								<span className="badge badge-warning">Warning</span>
								<span className="badge badge-info">Info</span>
								<span className="badge badge-light">Light</span>
								<span className="badge badge-dark">Dark</span>
							</div>
						</div>	
					</div>
				</div>
				
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Badges Light</h5>
						</div>	
						<div className="card-body">
							<div className="bootstrap-badge">
								<span className="badge light badge-primary">Primary</span>
								<span className="badge light badge-secondary">Secondary</span>
								<span className="badge light badge-success">Success</span>
								<span className="badge light badge-danger">Danger</span>
								<span className="badge light badge-warning">Warning</span>
								<span className="badge light badge-info">Info</span>
								<span className="badge light badge-light">Light</span>
								<span className="badge light badge-dark">Dark</span>
							</div>
							<div className="bootstrap-badge">
								<span className="badge light badge-primary">1</span>
								<span className="badge light badge-secondary">2</span>
								<span className="badge light badge-success">3</span>
								<span className="badge light badge-danger">4</span>
								<span className="badge light badge-warning">5</span>
								<span className="badge light badge-info">6</span>
								<span className="badge light badge-light">7</span>
								<span className="badge light badge-dark">8</span>
							</div>
						</div>	
					</div>
				</div>
				
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Badges Size</h5>
						</div>	
						<div className="card-body">
							<div className="bootstrap-badge">
								<span className="badge badge-xs badge-primary">xs</span>
								<span className="badge badge-sm badge-secondary">sm</span>
								<span className="badge badge-danger">md</span>
								<span className="badge badge-lg badge-success">lg</span>
								<span className="badge badge-xl badge-warning">xl</span>
							</div>
						</div>	
					</div>
				</div>
				
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Link Badge</h5>
						</div>	
						<div className="card-body">
							<div className="bootstrap-badge">
								<Link to="/"  className="badge badge-primary">Links</Link>
								<Link to="/"  className="badge badge-secondary">Links</Link>
								<Link to="/"  className="badge badge-success">Links</Link>
								<Link to="/"  className="badge badge-danger">Links</Link>
								< Link to="/"  className="badge badge-warning">Links</Link>
								<Link to="/"  className="badge badge-info">Links</Link>
								<Link to="/"  className="badge badge-light">Links</Link>
								<Link to="/" className="badge badge-dark">Links</Link>
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