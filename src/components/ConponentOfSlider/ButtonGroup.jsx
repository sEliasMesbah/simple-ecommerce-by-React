import { Link } from "react-router-dom";

export default function ButtonGroup(){
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
						<h5 className="title">Button group</h5>
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
	
	<div className="page-content space-top">
		<div className="container">
			<div className="card dz-card style-1" style={{backgroundimage: "url('assets/images/bg-shape.png');"}}>				
				<div className="card-body">
					<div className="dz-media dz-flex-box">
						<img src="/images/bootstrap-logo.png" alt=""/>
					</div>
					<div className="dz-content">
						<h5 className="card-title">Bootstrap Elements</h5>
						<Link to="/contentArea" className="element-name scroll">Button group style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			

			<div className="row" id="contentArea">	

				
				<div className="col-12">	
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Button Group</h5>
						</div>	
						<div className="card-body">
							<div className="btn-group">
								<button type="button" className="btn btn-primary">Left</button>
								<button type="button" className="btn btn-primary">Middle</button>
								<button type="button" className="btn btn-primary">Right</button>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-12">	
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Button Sizing</h5>
						</div>	
						<div className="card-body">
							<div className="btn-group mb-2 btn-group-lg">
								<button className="btn btn-primary" type="button">Left</button>
								<button className="btn btn-primary" type="button">Middle</button>
								<button className="btn btn-primary" type="button">Right</button>
							</div>
							<div className="btn-group mb-2">
								<button className="btn btn-primary" type="button">Left</button>
								<button className="btn btn-primary" type="button">Middle</button>
								<button className="btn btn-primary" type="button">Right</button>
							</div>
							<div className="btn-group mb-2 btn-group-sm">
								<button className="btn btn-primary" type="button">Left</button>
								<button className="btn btn-primary" type="button">Middle</button>
								<button className="btn btn-primary" type="button">Right</button>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-12">	
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Button Nesting</h5>
						</div>	
						<div className="card-body">
							<div className="btn-group">
								<button type="button" className="btn btn-primary">1</button>
								<button type="button" className="btn btn-primary">2</button>
								<div className="btn-group">
									<button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Dropdown</button>
									<div className="dropdown-menu"><Link to="/" className="dropdown-item" >Dropdown link</Link>
										<Link to="/" className="dropdown-item">Dropdown link</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-12">	
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Vertical Dropdown Variation</h5>
						</div>	
						<div className="card-body">
							<div aria-label="Vertical button group" role="group" className="btn-group-vertical">
								<button className="btn btn-primary" type="button">Button</button>
								<button className="btn btn-primary" type="button">Button</button>
								<div role="group" className="btn-group">
									<button data-bs-toggle="dropdown" className="btn btn-primary dropdown-toggle" type="button" aria-expanded="false">Dropdown</button>
									<div className="dropdown-menu" ><Link to="/" className="dropdown-item">Dropdown link</Link>
										<Link to="/" className="dropdown-item">Dropdown link</Link>
									</div>
								</div>
								<button className="btn btn-primary" type="button">Button</button>
								<button className="btn btn-primary" type="button">Button</button>
								<div role="group" className="btn-group">
									<button data-bs-toggle="dropdown" className="btn btn-primary dropdown-toggle" type="button">Dropdown</button>
									<div className="dropdown-menu"><Link to="/" className="dropdown-item">Dropdown link</Link>
										<Link to="/" className="dropdown-item">Dropdown link</Link>
									</div>
								</div>
								<div role="group" className="btn-group">
									<button data-bs-toggle="dropdown" className="btn btn-primary dropdown-toggle" type="button">Dropdown</button>
									<div className="dropdown-menu"><Link to="/" className="dropdown-item">Dropdown link</Link>
										<Link to="/" className="dropdown-item">Dropdown link</Link>
									</div>
								</div>
								<div role="group" className="btn-group">
									<button data-bs-toggle="dropdown" className="btn btn-primary dropdown-toggle" type="button">Dropdown</button>
									<div className="dropdown-menu"><Link to="/" className="dropdown-item">Dropdown link</Link>
										<Link to="/" className="dropdown-item">Dropdown link</Link>
									</div>
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