import { Link } from "react-router-dom";

export default function Offcanvas(){
    return<>
    <div className="page-wrapper">
		<header className="header shadow header-fixed border-0 onepage">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/" className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">Offcanvas</h6>
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
			<div 
				className="card dz-card style-1" 
				style={{backgroundImage: "url('/images/bg-shape.png')"}}
			>		
				<div className="card-body">
					<div className="dz-media dz-flex-box">
						<img src="/images/bootstrap-logo.png" alt=""/>
					</div>
					<div className="dz-content">
						<h5 className="card-title">Bootstrap Elements</h5>
						<Link to="/contentArea" className="element-name scroll">Offcanvas style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Bootstrap Modal</h5>
                        </div>
                        <div className="card-body">						
						
							<button className="btn btn-primary btn-block mb-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top offcanvas</button>
							<div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
								<div className="offcanvas-header">	
									<h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
									<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="icon feather icon-x"></i></button>
								</div>
								<div className="offcanvas-body">
									Toggle top offcanvas
								</div>
							</div>							
						
							<button className="btn btn-primary btn-block mb-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">Toggle left offcanvas</button>
							<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
							  <div className="offcanvas-header">
								<h5 className="offcanvas-title" id="offcanvasLeftLabel">Offcanvas left</h5>
								<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="icon feather icon-x"></i></button>
							  </div>
							  <div className="offcanvas-body">
								Toggle left offcanvas
							  </div>
							</div>
							
							<button className="btn btn-primary btn-block mb-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>
							<div className="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
							  <div className="offcanvas-header">
								<h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
								<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="icon feather icon-x"></i></button>
							  </div>
							  <div className="offcanvas-body small">
								Toggle bottom offcanvas
							  </div>
							</div>
							
							<button className="btn btn-primary btn-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
							<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
							  <div className="offcanvas-header">
								<h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
								<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="icon feather icon-x"></i></button>
							  </div>
							  <div className="offcanvas-body">
								Toggle right offcanvas
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