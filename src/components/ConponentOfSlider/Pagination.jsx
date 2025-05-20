import { Link } from "react-router-dom";

export default function Pagination(){
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
						<h6 className="title">Pagination</h6>
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
	
	<div className="page-content space-top pagination-area">
		<div className="container">
			<div className="card dz-card style-1" style={{backgroundimage: "url('assets/images/bg-shape.png');"}}>				
				<div className="card-body">
					<div className="dz-media dz-flex-box">
						<img src="/images/bootstrap-logo.png" alt=""/>
					</div>
					<div className="dz-content">
						<h5 className="card-title">Bootstrap Elements</h5>
						<Link to="/contentArea" className="element-name scroll">Pagination style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">				
						<div className="card-header">
							<h5 className="card-title">Default Pagination</h5>
						</div>
						<div className="card-body">
							<nav aria-label="Page navigation example">
							  <ul className="pagination">
								<li className="page-item"><Link to="#" className="page-link" >Previous</Link></li>
								<li className="page-item"><Link to="#" className="page-link" >1</Link></li>
								<li className="page-item"><Link to="#" className="page-link" >2</Link></li>
								<li className="page-item"><Link to="#" className="page-link" >3</Link></li>
								<li className="page-item"><Link to="#" className="page-link" >Next</Link></li>
							  </ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">				
						<div className="card-header">
							<h5 className="card-title">Working with icons</h5>
						</div>
						<div className="card-body">
							<nav aria-label="Page navigation example">
							  <ul className="pagination">
								<li className="page-item">
								  <Link to="/#" className="page-link"  aria-label="Previous">
									<span aria-hidden="true"><i className="icon feather icon-chevron-left"></i></span>
								  </Link>
								</li>
								<li className="page-item"><Link to="#" className="page-link" >1</Link></li>
								<li className="page-item"><Link to="#" className="page-link" >2</Link></li>
								<li className="page-item"><Link to="#" className="page-link" >3</Link></li>
								<li className="page-item">
								  <Link to="/#" className="page-link"  aria-label="Next">
									<span aria-hidden="true"><i className="icon feather icon-chevron-right"></i></span>
								  </Link>
								</li>
							  </ul>
							</nav>
							<nav>
								<ul className="pagination pagination-sm pagination-gutter">
									<li className="page-item page-indicator">
										<Link to="/" className="page-link" >
											<i className="icon feather icon-chevron-left"></i>	
										</Link>
									</li>
									<li className="page-item active"><a className="page-link" href="javascript:void(0)">1</a>
									</li>
									<li className="page-item"><Link to="/" className="page-link" >2</Link></li>
								<li className="page-item"><Link to="/" className="page-link" >3</Link></li>
								<li className="page-item"><Link to="/" className="page-link" >4</Link></li>
									<li className="page-item page-indicator">
										<Link to="/" className="page-link">
											<i className="icon feather icon-chevron-right"></i>
										</Link>
									</li>
								</ul>
							</nav>
							<nav>
								<ul className="pagination pagination-xs pagination-gutter">
									<li className="page-item page-indicator">
										<Link to="/" className="page-link" >
											<i className="icon feather icon-chevron-left"></i>
										</Link>
									</li>
									<li className="page-item active"><a className="page-link" href="javascript:void(0)">1</a>
									</li>
									<li className="page-item"><Link to="/" className="page-link" >2</Link></li>
								<li className="page-item"><Link to="/" className="page-link" >3</Link></li>
								<li className="page-item"><Link to="/" className="page-link" >4</Link></li>	
                                <li className="page-item page-indicator">
										<Link to="/" className="page-link" >
											<i className="icon feather icon-chevron-right"></i>
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">				
						<div className="card-header">
							<h5 className="card-title">Pagination Color</h5>
						</div>
						<div className="card-body">
							<nav>
								<ul className="pagination pagination-gutter pagination-primary no-bg">
									<li className="page-item page-indicator">
										<Link to="/" className="page-link">
											<i className="icon feather icon-chevron-left"></i></Link>
									</li>
									<li className="page-item "><a className="page-link" href="javascript:void(0)">1</a>
									</li>
									<li className="page-item"><Link to="/" className="page-link" >2</Link></li>
								<li className="page-item"><Link to="/" className="page-link" >3</Link></li>
								<li className="page-item"><Link to="/" className="page-link" >4</Link></li>
									<li className="page-item page-indicator">
										<Link to="/" className="page-link" >
											<i className="icon feather icon-chevron-right"></i></Link>
									</li>
								</ul>
							</nav>
							
							<nav>
								<ul className="pagination pagination-gutter pagination-danger">
									<li className="page-item page-indicator">
										<Link to="/" className="page-link" >
											<i className="icon feather icon-chevron-left"></i></Link>
									</li>
									<li className="page-item active"><a className="page-link" href="javascript:void(0)">1</a>
									</li>
									<li className="page-item"><Link to="/" className="page-link" >2</Link></li>
								<li className="page-item"><Link to="/" className="page-link" >3</Link></li>
								<li className="page-item"><Link to="/" className="page-link" >4</Link></li>
									<li className="page-item page-indicator">
										<Link to="/" className="page-link">
											<i className="icon feather icon-chevron-right"></i></Link>
									</li>
								</ul>
							</nav>
							
							<nav>
								<ul className="pagination pagination-sm pagination-gutter pagination-info">
									<li className="page-item page-indicator">
                                    <Link to="/" className="page-link">
											<i className="icon feather icon-chevron-right"></i></Link>
									</li>
									<li className="page-item active"><a className="page-link" href="javascript:void(0)">1</a>
									</li>
                                    <li className="page-item"><Link to="/" className="page-link" >2</Link></li>
								<li className="page-item"><Link to="/" className="page-link" >3</Link></li>
								<li className="page-item"><Link to="/" className="page-link" >4</Link></li>
									<li className="page-item page-indicator">
                                    <Link to="/" className="page-link">
											<i className="icon feather icon-chevron-right"></i></Link>
									</li>
								</ul>
							</nav>
							
							<nav>
								<ul className="pagination pagination-xs pagination-gutter  pagination-warning">
									<li className="page-item page-indicator">
                                    <Link to="/" className="page-link">
											<i className="icon feather icon-chevron-right"></i></Link>
									</li>
									<li className="page-item active"><a className="page-link" href="javascript:void(0)">1</a>
									</li>
									<li className="page-item"><Link to="/" className="page-link" >2</Link></li>
								<li className="page-item"><Link to="/" className="page-link" >3</Link></li>
								<li className="page-item"><Link to="/" className="page-link" >4</Link></li>
									<li className="page-item page-indicator">
                                    <Link to="/" className="page-link">
											<i className="icon feather icon-chevron-right"></i></Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>  
    </>
}