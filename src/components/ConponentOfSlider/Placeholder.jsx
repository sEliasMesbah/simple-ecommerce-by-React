import { Link } from "react-router-dom";

export default function Placeholder(){
    return<>
    <div className="page-wrapper">
		<header className="header shadow header-fixed border-0 onepage">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/" className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">Placeholder</h6>
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
						<Link to="/contentArea" className="element-name scroll">Placeholder style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card" aria-hidden="true">
						<img src="/images/popular/pic1.png" className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title placeholder-glow">
								<span className="placeholder col-6"></span>
							</h5>
							<p className="card-text placeholder-glow">
								<span className="placeholder col-7"></span>
								<span className="placeholder col-4"></span>
								<span className="placeholder col-4"></span>
								<span className="placeholder col-6"></span>
								<span className="placeholder col-8"></span>
							</p>
							<Link to="" className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></Link>
						</div>
					</div>
				</div>
				<div className="col-12">		
					<div className="card" aria-hidden="true">
						<img src="/images/popular/pic3.png" className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title placeholder-glow">
								<span className="placeholder col-6"></span>
							</h5>
							<p className="card-text placeholder-glow">
								<span className="placeholder col-8"></span>
								<span className="placeholder col-2"></span>
								<span className="placeholder col-6"></span>
								<span className="placeholder col-4"></span>
								<span className="placeholder col-5"></span>
							</p>
							<Link to="" className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></Link>
						</div>
					</div>
				</div>
				<div className="col-12">		
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Animation placeholder</h5>
						</div>
						<div className="card-body">
							<p className="placeholder-glow">
								<span className="placeholder col-12"></span>
							</p>

							<p className="placeholder-wave">
								<span className="placeholder col-12"></span>
							</p>
						</div>
					</div>
				</div>
				<div className="col-12">		
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Color placeholder</h5>
						</div>
						<div className="card-body">
							<span className="placeholder col-12"></span>
							<span className="placeholder col-12 bg-primary"></span>
							<span className="placeholder col-12 bg-secondary"></span>
							<span className="placeholder col-12 bg-success"></span>
							<span className="placeholder col-12 bg-danger"></span>
							<span className="placeholder col-12 bg-warning"></span>
							<span className="placeholder col-12 bg-info"></span>
							<span className="placeholder col-12 bg-light"></span>
							<span className="placeholder col-12 bg-dark"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>  
    </>
}