import { Link } from "react-router-dom";

export default function Collapse(){
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
						<h6 className="title">Collapse</h6>
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
						<Link to="/contentArea" className="element-name scroll">Collapse style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Collapse</h5>
                        </div>
                        <div className="card-body">
							<div className="d-inline-flex gap-1 w-100">
								<button className="btn btn-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
									Button with data-bs-target
								</button>
							</div>
							<div className="collapse show" id="collapseExample">
								<div className="card-body">
									Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
								</div>
							</div>
                        </div>
                    </div>
				</div>
				<div className="col-12">
					<div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Collapse Horizontal</h5>
                        </div>
                        <div className="card-body">
							<div>
								<button className="btn btn-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
									Toggle width collapse
								</button>
							</div>
							<div className="collapse collapse-horizontal" id="collapseWidthExample">
								<div className="card-body" style={{width: "300px;"}}>
									This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
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