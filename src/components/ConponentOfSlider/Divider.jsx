import { Link } from "react-router-dom";

export default function Divider(){
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
						<h6 className="title">Divider</h6>
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
						<Link to="/contentArea" className="element-name scroll">Divider style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="dz-title mb-0">Icon Divider</h5>
                        </div>
                        <div className="card-body">
                            <div className="divider border-primary inner-divider left mt-3"><i className="fa-solid fa-house-crack"></i></div>
                            <div className="divider border-warning inner-divider mt-3"><i className="fa-solid fa-heart"></i></div>
                            <div className="divider border-danger inner-divider right mt-3"><i className="fa-solid fa-user"></i></div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="dz-title mb-0">Text Divider</h5>
                        </div>
                        <div className="card-body">
                            <div className="divider border-primary inner-divider left mb-0"><span>Primary</span></div>
                            <div className="divider border-success inner-divider mb-0"><span>success</span></div>
                            <div className="divider border-warning inner-divider right mb-0"><span>Warning</span></div>
                            <div className="divider border-primary inner-divider right transparent mb-0"><span>Primary</span></div>
                            <div className="divider border-success inner-divider transparent mb-0"><span>success</span></div>
                            <div className="divider border-warning inner-divider left transparent mb-0"><span>Warning</span></div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="dz-title mb-0">Solid Divider</h5>
                        </div>
                        <div className="card-body">
                            <div className="divider"></div>
                            <div className="divider border-primary"></div>
                            <div className="divider border-secondary"></div>
                            <div className="divider border-success"></div>
                            <div className="divider border-danger"></div>
                            <div className="divider border-info"></div>
                            <div className="divider border-warning"></div>
                            <div className="divider border-light"></div>
                            <div className="divider border-dark mb-0"></div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="dz-title mb-0">Dashed Divider</h5>
                        </div>
                        <div className="card-body">
                            <div className="divider divider-dashed"></div>
                            <div className="divider divider-dashed border-primary"></div>
                            <div className="divider divider-dashed border-secondary"></div>
                            <div className="divider divider-dashed border-success"></div>
                            <div className="divider divider-dashed border-danger"></div>
                            <div className="divider divider-dashed border-info"></div>
                            <div className="divider divider-dashed border-warning"></div>
                            <div className="divider divider-dashed border-light"></div>
                            <div className="divider divider-dashed border-dark mb-0"></div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="dz-title mb-0">Dotted Divider</h5>
                        </div>
                        <div className="card-body">
                            <div className="divider divider-dotted"></div>
                            <div className="divider divider-dotted border-primary"></div>
                            <div className="divider divider-dotted border-secondary"></div>
                            <div className="divider divider-dotted border-success"></div>
                            <div className="divider divider-dotted border-danger"></div>
                            <div className="divider divider-dotted border-info"></div>
                            <div className="divider divider-dotted border-warning"></div>
                            <div className="divider divider-dotted border-light"></div>
                            <div className="divider divider-dotted border-dark mb-0"></div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	</div>

</div>  
    </>
}