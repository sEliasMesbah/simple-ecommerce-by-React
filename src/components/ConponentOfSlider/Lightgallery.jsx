import { Link } from "react-router-dom";

export default function Lightgallery(){
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
						<h6 className="title">LightGallery</h6>
					</div>
					<div className="mid-content">
					</div>
					<div className="right-content">
						<Link to="/search"  className="search-icon">
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
						<Link to="/contentArea" className="element-name scroll">LightGallery style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">LightGallery</h5>
						</div>
						<div className="card-body">
							<div className="dz-lightgallery row g-2" id="lightgallery">
								<Link to="/images/popular/pic1.png" className="col-12" >
									<img src="/images/popular/pic1.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic2.png" className="col-6" >
									<img src="/images/popular/pic2.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic3.png" className="col-6" >
									<img src="/images/popular/pic3.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic4.png" className="col-4">
									<img src="/images/popular/pic4.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic1.png" className="col-4">
									<img src="/images/popular/pic1.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic2.png" className="col-4">
									<img src="/images/popular/pic2.png" alt="image"/>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">LightGallery With 2 Grid</h5>
						</div>
						<div className="card-body">
							<div className="dz-lightgallery row g-2" id="lightgallery-2">
								<Link to="/images/popular/pic1.png" className="col-6">
									<img src="/images/popular/pic1.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic2.png" className="col-6" >
									<img src="/images/popular/pic2.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic3.png" className="col-6">
									<img src="/images/popular/pic3.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic4.png" className="col-6">
									<img src="/images/popular/pic4.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic1.png" className="col-6" >
									<img src="/images/popular/pic1.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic2.png" className="col-6" >
									<img src="/images/popular/pic2.png" alt="image"/>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">LightGallery With 3 Grid</h5>
						</div>
						<div className="card-body">
							<div className="dz-lightgallery row g-2" id="lightgallery-3">
								<Link to="/images/popular/pic1.png" className="col-4" >
									<img src="/images/popular/pic1.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic2.png" className="col-4">
									<img src="/images/popular/pic2.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic3.png" className="col-4" >
									<img src="/images/popular/pic3.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic4.png" className="col-4">
									<img src="/images/popular/pic4.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic1.png" className="col-4" >
									<img src="/images/popular/pic1.png" alt="image"/>
								</Link>
								<Link to="/images/popular/pic2.png" className="col-4">
									<img src="/images/popular/pic2.png" alt="image"/>
								</Link>
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