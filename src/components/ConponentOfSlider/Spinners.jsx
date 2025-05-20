import { Link } from "react-router-dom";

export default function Spinners(){
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
						<h6 className="title">Spinners</h6>
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
			<div className="card dz-card style-1" style={{backgroundimage:" url('assets/images/bg-shape.png');"}}>				
				<div className="card-body">
					<div className="dz-media dz-flex-box">
						<img src="/images/bootstrap-logo.png" alt=""/>
					</div>
					<div className="dz-content">
						<h5 className="card-title">Bootstrap Elements</h5>
						<Link to="/contentArea"  className="element-name scroll">Spinners style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">Default Spinner</h5>
                        </div>
                        <div className="card-body">
                            <div className="spinner-border" role="status">
							  <span className="visually-hidden">Loading...</span>
							</div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">Colors spinner</h5>
                        </div>
                        <div className="card-body">
                            <div className="spinner-border text-primary" role="status">
							  <span className="visually-hidden">Loading...</span>
							</div>
							<div className="spinner-border text-secondary" role="status">
							  <span className="visually-hidden">Loading...</span>
							</div>
							<div className="spinner-border text-success" role="status">
							  <span className="visually-hidden">Loading...</span>
							</div>
							<div className="spinner-border text-danger" role="status">
							  <span className="visually-hidden">Loading...</span>
							</div>
							<div className="spinner-border text-warning" role="status">
							  <span className="visually-hidden">Loading...</span>
							</div>
							<div className="spinner-border text-info" role="status">
							  <span className="visually-hidden">Loading...</span>
							</div>
							<div className="spinner-border text-light" role="status">
							  <span className="visually-hidden">Loading...</span>
							</div>
							<div className="spinner-border text-dark" role="status">
							  <span className="visually-hidden">Loading...</span>
							</div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">Growing Color spinner</h5>
                        </div>
                        <div className="card-body">
                            <div className="dz-spinner">
                                <div className="spinner-grow me-2 mb-2 text-primary" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow me-2 mb-2 text-secondary" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow me-2 mb-2 text-success" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow me-2 mb-2 text-danger" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow me-2 mb-2 text-warning" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow me-2 mb-2 text-info" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow me-2 mb-2 text-light" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow me-2 mb-2 text-dark" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">Buttons spinner</h5>
                        </div>
                        <div className="card-body">
                            <div className="dz-spinner d-flex align-items-center flex-wrap">
                                <button className="btn btn-primary me-2 mb-3" type="button" disabled="">
                                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                  <span className="sr-only">Loading...</span>
                                </button>
                                <button className="btn btn-primary me-2 mb-3" type="button" disabled="">
                                  <span className="spinner-border me-3 spinner-border-sm" role="status" aria-hidden="true"></span>
                                  Loading...
                                </button>
                                <div className="me-2 mb-2 d-flex align-items-center">
                                  <span className="spinner-border me-3 spinner-border-sm" role="status" aria-hidden="true"></span>
                                  Loading...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="title">Spinner Small Size</h5>
                        </div>
                        <div className="card-body">
                            <div className="dz-spinner m-b10">
                                <div className="spinner-border spinner-border-sm me-2 mb-2 text-primary" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border spinner-border-sm me-2 mb-2 text-secondary" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border spinner-border-sm me-2 mb-2 text-success" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border spinner-border-sm me-2 mb-2 text-danger" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border spinner-border-sm me-2 mb-2 text-warning" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border spinner-border-sm me-2 mb-2 text-info" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border spinner-border-sm me-2 mb-2 text-light" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border spinner-border-sm me-2 mb-2 text-dark" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>  
                            </div>
                            <div className="dz-spinner m-t10 p-t10 border-top">
                                <div className="spinner-grow spinner-grow-sm me-2 mt-2 text-primary" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow spinner-grow-sm me-2 mt-2 text-secondary" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow spinner-grow-sm me-2 mt-2 text-success" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow spinner-grow-sm me-2 mt-2 text-danger" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow spinner-grow-sm me-2 mt-2 text-warning" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow spinner-grow-sm me-2 mt-2 text-info" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow spinner-grow-sm me-2 mt-2 text-light" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow spinner-grow-sm me-2 mt-2 text-dark" role="status">
                                  <span className="sr-only">Loading...</span>
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