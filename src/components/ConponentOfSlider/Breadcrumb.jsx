import { Link } from "react-router-dom";

export default function Breadcrumb(){
    return<>
    <div className="page-wrapper">
    

	<div id="preloader">
		<div className="loader">
			<div className="load-circle"><div></div><div></div></div>
		</div>
	</div>
  
		<header className="header shadow header-fixed border-0 onepage">
			<div className="px-3">
				<div className="header-content">
					<div className="left-content">
						<Link to="/" className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">Breadcrumb</h6>
					</div>
					<div className="mid-content">
					</div>
					<div className="right-content">
						< Link to="/search" className="search-icon">
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
						<Link to="/contentArea" className="element-name scroll">Breadcrumb style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>

		
			<div className="row" id="contentArea">

				<div className="col-12 mb-3">
					<div className="px-3">
						<h6>Breadcrumb</h6>
					</div>
					<div className="breadcrumb-wrapper dz-breadcrumb">
						<div className="px-3">
							<nav style={{bsbreadcrumbdivider:" '>';"}} aria-label="breadcrumb">
								<ol className="breadcrumb mb-0 py-2 px-1">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item"><a href="#">Elements</a></li>
									<li className="breadcrumb-item active" aria-current="page">Breadcrumb</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="col-12 mb-3">
					<div className="px-3">
						<h6>Breadcrumb style 2</h6>
					</div>
					<div className="breadcrumb-wrapper dz-breadcrumb">
						<div className="px-3">
							<nav style={{bsbreadcrumbdivider:" '~';"}} aria-label="breadcrumb">
								<ol className="breadcrumb mb-0 py-2 px-1">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item"><a href="#">Elements</a></li>
									<li className="breadcrumb-item active" aria-current="page">Breadcrumb</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="col-12 mb-3">
					<div className="px-3">
						<h6>Breadcrumb style 3</h6>
					</div>
					<div className="breadcrumb-wrapper dz-breadcrumb style-3" style={{backgroundimage: "url('assets/images/offer/bg1.png');"}}>
						<div className="px-3">
							<nav style={{bsbreadcrumbdivider: "'>';"}} aria-label="breadcrumb">
								<ol className="breadcrumb mb-0 py-2 px-1">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item"><a href="#">Elements</a></li>
									<li className="breadcrumb-item active" aria-current="page">Breadcrumb</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="col-12 mb-3">
					<div className="px-3">
						<h6>Breadcrumb Color</h6>
					</div>
					<div className="breadcrumb-wrapper dz-breadcrumb bg-primary">
						<div className="px-3">
							<nav style={{bsbreadcrumbdivider:" '>';"}} aria-label="breadcrumb">
								<ol className="breadcrumb mb-0 py-2 px-1">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item"><a href="#">Elements</a></li>
									<li className="breadcrumb-item active" aria-current="page">Breadcrumb</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="col-12 mb-3">
					<div className="breadcrumb-wrapper dz-breadcrumb my-1 bg-secondary">
						<div className="px-3">
							<nav style={{bsbreadcrumbdivider:" '>';"}} aria-label="breadcrumb">
								<ol className="breadcrumb mb-0 py-2 px-1">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item"><a href="#">Elements</a></li>
									<li className="breadcrumb-item active" aria-current="page">Breadcrumb</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="col-12 mb-3">
					<div className="breadcrumb-wrapper dz-breadcrumb my-1 bg-success">
						<div className="px-3">
							<nav style={{bsbreadcrumbdivider:" '>';"}} aria-label="breadcrumb">
								<ol className="breadcrumb mb-0 py-2 px-1">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item"><a href="#">Elements</a></li>
									<li className="breadcrumb-item active" aria-current="page">Breadcrumb</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="col-12 mb-3">
					<div className="breadcrumb-wrapper dz-breadcrumb my-1 bg-danger">
						<div className="px-3">
							<nav style={{bsbreadcrumbdivider:" '>';"}} aria-label="breadcrumb">
								<ol className="breadcrumb mb-0 py-2 px-1">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item"><a href="#">Elements</a></li>
									<li className="breadcrumb-item active" aria-current="page">Breadcrumb</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="col-12 mb-3">
					<div className="breadcrumb-wrapper dz-breadcrumb my-1 bg-info">
						<div className="px-3">
							<nav style={{bsbreadcrumbdivider:" '>';"}} aria-label="breadcrumb">
								<ol className="breadcrumb mb-0 py-2 px-1">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item"><a href="#">Elements</a></li>
									<li className="breadcrumb-item active" aria-current="page">Breadcrumb</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="col-12 mb-3">
					<div className="breadcrumb-wrapper dz-breadcrumb my-1 bg-warning">
						<div className="px-3">
							<nav style={{bsbreadcrumbdivider:" '>';"}} aria-label="breadcrumb">
								<ol className="breadcrumb mb-0 py-2 px-1">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item"><a href="#">Elements</a></li>
									<li className="breadcrumb-item active" aria-current="page">Breadcrumb</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="col-12 mb-3">
					<div className="breadcrumb-wrapper dz-breadcrumb bg-dark">
						<div className="px-3">
							<nav style={{bsbreadcrumbdivider:" '>';"}} aria-label="breadcrumb">
								<ol className="breadcrumb mb-0 py-2 px-1">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item"><a href="#">Elements</a></li>
									<li className="breadcrumb-item active" aria-current="page">Breadcrumb</li>
								</ol>
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