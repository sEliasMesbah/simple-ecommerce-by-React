import { Link } from "react-router-dom";

export default function Popover(){
    return<>
    <div className="page-wrapper">
		<header className="header shadow header-fixed border-0 onepage">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/"  className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">Popovers</h6>
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
	
	<div className="page-content space-top popover-area">
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
						<Link to="/contentArea" className="element-name scroll">Popovers style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">				
						<div className="card-header">
							<h5 className="card-title">Bootstrap Popover</h5>
						</div>
						<div className="card-body">
							<div className="bootstrap-popover-wrapper">
								<div className="bootstrap-popover d-inline-block">
									<button type="button" className="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." data-bs-original-title="Popover in Right">Top</button>
								</div>
								<div className="bootstrap-popover d-inline-block">
									<button type="button" className="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." data-bs-original-title="Popover in Left">Left</button>
								</div>
								<div className="bootstrap-popover d-inline-block">
									<button type="button" className="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." data-bs-original-title="Popover in Bottom">Bottom</button>
								</div>
								<div className="bootstrap-popover d-inline-block">
									<button type="button" className="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor." data-bs-original-title="Popover in Right">Right</button>
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