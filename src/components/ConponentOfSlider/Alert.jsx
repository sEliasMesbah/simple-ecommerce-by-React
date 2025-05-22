import { Link } from "react-router-dom";
export default function Alert(){
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
						<h6 className="title">Alerts</h6>
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
			<div className="card dz-card style-1" style="background-image: url('assets/images/bg-shape.png');">				
				<div className="card-body">
					<div className="dz-media dz-flex-box">
						<img src="/images/bootstrap-logo.png" alt=""/>
					</div>
					<div className="dz-content">
						<h5 className="card-title">Bootstrap Elements</h5>
						<Link to="/contentArea" className="element-name scroll">Alerts style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Default Alert</h5>
						</div>	
						<div className="card-body">
							<div className="alert alert-primary alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
								<strong>Welcome!</strong> Message has been sent.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
								<span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
							<div className="alert alert-secondary alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
								<strong>Done!</strong> Your profile photo updated.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
								<span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
							<div className="alert alert-success alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>	
								<strong>Success!</strong> Message has been sent.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i className="icon feather icon-x"></i></span>
								
								</button>
							</div>
							<div className="alert alert-info alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
								<strong>Info!</strong> You have got 5 new email.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
							<div className="alert alert-warning alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
								<strong>Warning!</strong> Something went wrong. Please check.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
								<span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
							<div className="alert alert-danger alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
								<strong>Error!</strong> Message sending failed.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
							<div className="alert alert-dark alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
								<strong>Error!</strong> You successfully read this important alert message.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
								<span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
							<div className="alert alert-light alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
								<strong>Error!</strong> You successfully read this message..
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
								<span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
						</div>	
					</div>
				</div>
				
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Solid Color Alerts</h5>
						</div>	
						<div className="card-body">
							<div className="alert alert-primary solid alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
								<strong>Welcome!</strong> Message has been sent.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
								<span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
							<div className="alert alert-secondary solid alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
								<strong>Done!</strong> Your profile photo updated.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
								<span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
							<div className="alert alert-success solid alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
								<strong>Success!</strong> Message has been sent.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
								<span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
							<div className="alert alert-info solid alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
								<strong>Info!</strong> You have got 5 new email.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
								<span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
							<div className="alert alert-warning solid alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
								<strong>Warning!</strong> Something went wrong. Please check.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
								<span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
							<div className="alert alert-danger solid alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="24 " height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
								<strong>Error!</strong> Message sending failed.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
							<div className="alert alert-dark solid alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
								<strong>Error!</strong> You successfully read this important alert message.
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
							<div className="alert alert-light solid alert-dismissible fade show">
								<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="me-2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
								<strong>Error!</strong> You successfully read this message..
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i className="icon feather icon-x"></i></span>
								</button>
							</div>
						</div>	
					</div>
				</div>
				
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Alerts Alt</h5>
						</div>	
						<div className="card-body">
							<div className="alert alert-primary alert-dismissible alert-alt fade show">
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i className="icon feather icon-x"></i></span>
								</button>
								<strong>Success!</strong> Message has been sent.
							</div>
							<div className="alert alert-secondary alert-dismissible alert-alt fade show">
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i className="icon feather icon-x"></i></span>
								</button>
								<strong>Success!</strong> Message has been sent.
							</div>
							<div className="alert alert-success alert-dismissible alert-alt fade show">
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i className="icon feather icon-x"></i></span>
								</button>
								<strong>Success!</strong> Message has been sent.
							</div>
							<div className="alert alert-info alert-dismissible alert-alt fade show">
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i className="icon feather icon-x"></i></span>
								</button>
								<strong>Info!</strong> You have got 5 new email.
							</div>
							<div className="alert alert-warning alert-dismissible alert-alt fade show">
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i className="icon feather icon-x"></i></span>
								</button>
								<strong>Warning!</strong> Something went wrong. Please check.
							</div>
							<div className="alert alert-danger alert-dismissible alert-alt fade show">
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i className="icon feather icon-x"></i></span>
								</button>
								<strong>Error!</strong> Message Sending failed.
							</div>
							<div className="alert alert-dark alert-dismissible alert-alt fade show">
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i className="icon feather icon-x"></i></span>
								</button>
								<strong>Error!</strong> Message Sending failed.
							</div>
							<div className="alert alert-light alert-dismissible alert-alt fade show">
								<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="btn-close"><span><i className="icon feather icon-x"></i></span>
								</button>
								<strong>Error!</strong> Message Sending failed.
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