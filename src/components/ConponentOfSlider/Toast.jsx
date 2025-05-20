import { Link } from "react-router-dom";

export default function Toast(){
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
						<h6 className="title">Toasts</h6>
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
						<Link to="/contentArea"  className="element-name scroll">Toasts style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Toast</h5>    
						</div>
						<div className="card-body">
							<div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3982" data-bs-autohide="false">
								<div className="toast-header">
									<svg className="text-primary" width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0       0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
									</svg>
									<strong className="me-auto ms-2">Bootstrap 5</strong>
									<small>11 min ago</small>
									<button className="btn btn-close position-relative p-1" type="button" data-bs-dismiss="toast" aria-label="Close">
										<i className="icon feather icon-x"></i>
									</button>
								</div>
								<div className="toast-body">Hello, world! This is a toast message.</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Toast</h5>    
						</div>
						<div className="card-body">
							<div className="card">
								<div className="card-header">
									<h5 className="card-title">Translucent Toast</h5>    
								</div>
								<div className="card-body bg-primary">
									<div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3000" data-bs-autohide="false">
										<div className="toast-header">
											<svg className="text-primary" width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
											  <path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
											</svg>
											<strong className="me-auto ms-2">Bootstrap 5</strong>
											<small>11 min ago</small>
											<button className="btn btn-close position-relative p-1" type="button" data-bs-dismiss="toast" aria-label="Close">
												<i className="icon feather icon-x"></i>
											</button>
										</div>
										<div className="toast-body">Hello, world! This is a toast message.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Different Color Toast</h5>    
						</div>
						<div className="card-body">
							<div className="toast style-1 fade mb-2 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3982" data-bs-autohide="false">
								<div className="toast-body">
									<svg className="text-primary" width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0       0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
									</svg>
									<div className="toast-content ms-3 me-2">
										<strong>Toast Default</strong>
										<small className="d-block">11 min ago</small>
									</div>
									<button className="btn btn-close position-absolute p-1" type="button" data-bs-dismiss="toast" aria-label="Close"><i className="icon feather icon-x"></i></button>                        
								</div>
							</div>
							
							<div className="toast style-1 fade toast-primary mb-2 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3982" data-bs-autohide="false">
								<div className="toast-body">
									<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0       0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
									</svg>
									<div className="toast-content ms-3 me-2">
										<strong>Toast Primary</strong>
										<small className="d-block">11 min ago</small>
									</div>
									<button className="btn btn-close position-absolute p-1" type="button" data-bs-dismiss="toast" aria-label="Close"><i className="icon feather icon-x"></i></button>                        
								</div>
							</div>
							
							<div className="toast style-1 fade toast-secondary mb-2 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3982" data-bs-autohide="false">
								<div className="toast-body">
									<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0       0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
									</svg>
									<div className="toast-content ms-3 me-2">
										<strong>Toast Secondary</strong>
										<small className="d-block">11 min ago</small>
									</div>
									<button className="btn btn-close position-absolute p-1" type="button" data-bs-dismiss="toast" aria-label="Close"><i className="icon feather icon-x"></i></button>                        
								</div>
							</div>
							
							<div className="toast style-1 fade toast-success mb-2 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3982" data-bs-autohide="false">
								<div className="toast-body">
									<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0       0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
									</svg>
									<div className="toast-content ms-3 me-2">
										<strong>Toast Success</strong>
										<small className="d-block">11 min ago</small>
									</div>
									<button className="btn btn-close position-absolute p-1" type="button" data-bs-dismiss="toast" aria-label="Close"><i className="icon feather icon-x"></i></button>                        
								</div>
							</div>
							
							<div className="toast style-1 fade toast-warning mb-2 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3982" data-bs-autohide="false">
								<div className="toast-body">
									<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0       0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
									</svg>
									<div className="toast-content ms-3 me-2">
										<strong>Toast Warning</strong>
										<small className="d-block">11 min ago</small>
									</div>
									<button className="btn btn-close position-absolute p-1" type="button" data-bs-dismiss="toast" aria-label="Close"><i className="icon feather icon-x"></i></button>                        
								</div>
							</div>
							
							<div className="toast style-1 fade toast-danger mb-2 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3982" data-bs-autohide="false">
								<div className="toast-body">
									<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0       0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
									</svg>
									<div className="toast-content ms-3 me-2">
										<strong>Toast Danger</strong>
										<small className="d-block">11 min ago</small>
									</div>
									<button className="btn btn-close position-absolute p-1" type="button" data-bs-dismiss="toast" aria-label="Close"><i className="icon feather icon-x"></i></button>                        
								</div>
							</div>
							
							<div className="toast style-1 fade toast-info mb-2 show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3982" data-bs-autohide="false">
								<div className="toast-body">
									<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0       0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
									</svg>
									<div className="toast-content ms-3 me-2">
										<strong>Toast Info</strong>
										<small className="d-block">11 min ago</small>
									</div>
									<button className="btn btn-close position-absolute p-1" type="button" data-bs-dismiss="toast" aria-label="Close"><i className="icon feather icon-x"></i></button>                        
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header">
						<h5 className="card-title">Live Toast</h5>    
					</div>
					<div className="card-body">
						<button type="button" className="btn btn-primary btn-block mb-3 dzToastBtn" id="toastbtn1">Show live toast</button>
						<div id="dzToast1" className="dzToastArea toast style-1 toast-primary dz-toast on-bottom fade hide" role="alert" aria-live="polite" aria-atomic="true">
							<div className="toast-body">
								<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0       0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
								</svg>
								<div className="toast-content ms-3 me-2">
									<strong>Toast Primary</strong>
									<small className="d-block">11 min ago</small>
								</div>
								<button className="btn btn-close position-absolute p-1" type="button" data-bs-dismiss="toast" aria-label="Close">
									<i className="icon feather icon-x"></i>
								</button>                         
							</div>
						</div>
						
						<button type="button" className="btn btn-secondary btn-block my-3 dzToastBtn" id="toastbtn2">Show live toast</button>
						<div id="dzToast2" className="dzToastArea toast style-1 toast-secondary dz-toast on-bottom" role="alert" aria-live="polite" aria-atomic="true">
							<div className="toast-body">
								<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0       0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
								</svg>
								<div className="toast-content ms-3 me-2">
									<strong>Toast Secondary</strong>
									<small className="d-block">11 min ago</small>
								</div>
								<button className="btn btn-close position-absolute p-1" type="button" data-bs-dismiss="toast" aria-label="Close">
									<i className="icon feather icon-x"></i>
								</button>                         
							</div>
						</div>
						
						<button type="button" className="btn btn-success btn-block my-3 dzToastBtn" id="toastbtn3">Show live toast</button>
						<div id="dzToast3" className="dzToastArea toast style-1 toast-success dz-toast on-bottom" role="alert" aria-live="polite" aria-atomic="true">
							<div className="toast-body">
								<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0       0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
								</svg>
								<div className="toast-content ms-3 me-2">
									<strong>Toast Success</strong>
									<small className="d-block">11 min ago</small>
								</div>
								<button className="btn btn-close position-absolute p-1" type="button" data-bs-dismiss="toast" aria-label="Close">
									<i className="icon feather icon-x"></i>
								</button>                         
							</div>
						</div>
						
						<button type="button" className="btn btn-warning btn-block my-3 dzToastBtn" id="toastbtn4">Show live toast</button>
						<div id="dzToast4" className="dzToastArea toast style-1 toast-warning dz-toast on-bottom" role="alert" aria-live="polite" aria-atomic="true">
							<div className="toast-body">
								<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0       0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
								</svg>
								<div className="toast-content ms-3 me-2">
									<strong>Toast Warning</strong>
									<small className="d-block">11 min ago</small>
								</div>
								<button className="btn btn-close position-absolute p-1" type="button" data-bs-dismiss="toast" aria-label="Close">
									<i className="icon feather icon-x"></i>
								</button>                         
							</div>
						</div>
						
						<button type="button" className="btn btn-danger btn-block my-3 dzToastBtn" id="toastbtn5">Show live toast</button>
						<div id="dzToast5" className="dzToastArea toast style-1 toast-danger dz-toast on-bottom" role="alert" aria-live="polite" aria-atomic="true">
							<div className="toast-body">
								<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0       0-4-41h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
								</svg>
								<div className="toast-content ms-3 me-2">
									<strong>Toast Danger</strong>
									<small className="d-block">11 min ago</small>
								</div>
								<button className="btn btn-close position-absolute p-1" type="button" data-bs-dismiss="toast" aria-label="Close">
									<i className="icon feather icon-x"></i>
								</button>                         
							</div>
						</div>
						
						<button type="button" className="btn btn-info btn-block my-3 dzToastBtn" id="toastbtn6">Show live toast</button>
						<div id="dzToast6" className="dzToastArea toast style-1 toast-info dz-toast on-bottom" role="alert" aria-live="polite" aria-atomic="true">
							<div className="toast-body">
								<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0       0-4-41h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path>
								</svg>
								<div className="toast-content ms-3 me-2">
									<strong>Toast Info</strong>
									<small className="d-block">11 min ago</small>
								</div>
								<button className="btn btn-close position-absolute p-1" type="button" data-bs-dismiss="toast" aria-label="Close">
									<i className="icon feather icon-x"></i>
								</button>                         
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