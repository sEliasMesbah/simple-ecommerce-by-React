import { Link } from "react-router-dom";

export default function Avatar(){
    return<>
    <div className="page-wrapper">
		<header className="header shadow header-fixed border-0 onepage">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/" className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">Avatar</h6>
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
						<Link to="/contentArea" className="element-name scroll">Avatar style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Default avatar</h5>	
						</div>
						<div className="card-body">
							<ul className="dz-avatar">
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/1.jpg"/>	
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/2.jpg"/>	
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/3.jpg"/>	
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/4.jpg"/>	
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/5.jpg"/>	
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Avatar size</h5>	
						</div>
						<div className="card-body">
							<ul className="dz-avatar">
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/1.jpg"/>	
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-40">
										<img src="/images/avatar/2.jpg"/>	
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-45">
										<img src="/images/avatar/3.jpg"/>	
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-50">
										<img src="/images/avatar/4.jpg"/>	
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-55">
										<img src="/images/avatar/5.jpg"/>	
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Avatar list</h5>	
						</div>
						<div className="card-body">
							<ul className="dz-avatar list-stacked">
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/1.jpg"/>	
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/2.jpg"/>	
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/3.jpg"/>	
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/4.jpg"/>	
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/5.jpg"/>	
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Avatar Status</h5>	
						</div>
						<div className="card-body">
							<ul className="dz-avatar list-status">
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/1.jpg"/>	
										<span className="list-status bg-primary"></span>
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/2.jpg"/>	
										<span className="list-status bg-secondary"></span>
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/3.jpg"/>	
										<span className="list-status bg-danger"></span>
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/4.jpg"/>	
										<span className="list-status bg-info"></span>
									</div>
								</li>
								<li className="avatar-list">
									<div className="media media-35">
										<img src="/images/avatar/5.jpg"/>	
										<span className="list-status bg-success"></span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</div>  
    </>
}