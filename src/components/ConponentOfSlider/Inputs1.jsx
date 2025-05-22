import { Link } from "react-router-dom";

export default function Inputs1(){
return<>
<div className="page-wrapper">
		<header className="header shadow header-fixed border-0 onepage">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/" className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">Inputs</h6>
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
						<Link to="/contentArea" className="element-name scroll">Inputs style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">classNameic Input</h5>
						</div>
						<div className="card-body">
							<div className="mb-2">
								<input type="text" className="form-control" placeholder="Enter Username"/>								
							</div>
							<div className="mb-2">
								<input type="email" className="form-control" placeholder="Enter Email"/>
							</div>
							<div className="mb-2 input-group input-group-icon">
								<input type="password" id="password" className="form-control dz-password" placeholder="Type Password Here"/>
								<span className="input-group-text show-pass"> 
									<i className="icon feather icon-eye-off eye-close"></i>
									<i className="icon feather icon-eye eye-open"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Input With Icon</h5>
						</div>
						<div className="card-body">
							<div className="mb-2 input-group input-group-icon">
								<span className="input-group-text">
									<div className="input-icon">
										<i className="icon feather icon-user"></i>
									</div>
								</span>
								<input type="text" className="form-control" placeholder="Enter Username"/>								
							</div>
							<div className="mb-2 input-group input-group-icon">
								<span className="input-group-text">
									<div className="input-icon">
										<i className="icon feather icon-mail"></i>
									</div>
								</span>
								<input type="email" className="form-control" placeholder="Enter Email"/>
							</div>
							<div className="mb-2 input-group input-group-icon">
								<span className="input-group-text">
									<div className="input-icon">
										<i className="icon feather icon-lock"></i>
									</div>
								</span>
								<input type="password" id="password" className="form-control dz-password" placeholder="Type Password Here"/>
								<span className="input-group-text show-pass"> 
									<i className="icon feather icon-eye-off eye-close"></i>
									<i className="icon feather icon-eye eye-open"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Input With different sizes</h5>
						</div>
						<div className="card-body">
							<div className="mb-2 input-lg">
								<input type="text" className="form-control" placeholder="Enter Username"/>								
							</div>
							<div className="mb-2">
								<input type="email" className="form-control" placeholder="Enter Email"/>
							</div>
							<div className="mb-2 input-group input-group-icon input-sm">
								<input type="password" id="password" className="form-control dz-password" placeholder="Type Password Here"/>
								<span className="input-group-text show-pass"> 
									<i className="icon feather icon-eye-off eye-close"></i>
									<i className="icon feather icon-eye eye-open"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Rounded Input</h5>
						</div>
						<div className="card-body">
							<div className="mb-2 input-rounded">
								<input type="text" className="form-control" placeholder="Enter Username"/>								
							</div>
							<div className="mb-2 input-rounded">
								<input type="email" className="form-control" placeholder="Enter Email"/>
							</div>
							<div className="mb-2 input-group input-group-icon input-rounded">
								<input type="password" id="password" className="form-control dz-password" placeholder="Type Password Here"/>
								<span className="input-group-text show-pass"> 
									<i className="icon feather icon-eye-off eye-close"></i>
									<i className="icon feather icon-eye eye-open"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Border Input</h5>
						</div>
						<div className="card-body">
							<div className="mb-2 input-group input-group-icon input-mini">
								<span className="input-group-text">
									<div className="input-icon">
										<i className="icon feather icon-user"></i>
									</div>
								</span>
								<input type="text" className="form-control" placeholder="Enter Username"/>								
							</div>
							<div className="mb-2 input-group input-group-icon input-mini">
								<span className="input-group-text">
									<div className="input-icon">
										<i className="icon feather icon-mail"></i>
									</div>
								</span>
								<input type="email" className="form-control" placeholder="Enter Email"/>
							</div>
							<div className="mb-2 input-group input-group-icon input-mini">
								<span className="input-group-text">
									<div className="input-icon">
										<i className="icon feather icon-lock"></i>
									</div>
								</span>
								<input type="password" id="password" className="form-control dz-password" placeholder="Type Password Here"/>
								<span className="input-group-text show-pass"> 
									<i className="icon feather icon-eye-off eye-close"></i>
									<i className="icon feather icon-eye eye-open"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Range Slider</h5>
						</div>
						<div className="card-body">
							<label for="customRange2" className="form-label">Example range</label>
							<input type="range" className="form-range" min="0" max="20" id="customRange2"/>
							<div className="extra-padding mb-5">
                                <div className="slider-pips">
                                    <div className="slider" id="slider-pips"></div>
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