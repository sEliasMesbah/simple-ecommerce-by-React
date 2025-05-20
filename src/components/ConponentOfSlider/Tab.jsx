import { Link } from "react-router-dom";

export default function Tab(){
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
						<h6 className="title">Tabs</h6>
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
	
	<div className="page-content space-top element-area">
		<div className="container">
			<div className="card dz-card style-1" style={{backgroundimage: "url('assets/images/bg-shape.png');"}}>				
				<div className="card-body">
					<div className="dz-media dz-flex-box">
						<img src="/images/bootstrap-logo.png" alt=""/>
					</div>
					<div className="dz-content">
						<h5 className="card-title">Bootstrap Elements</h5>
						<Link to="/contentArea" className="element-name scroll">Tabs style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">				
						<div className="card-header">
                            <h5 className="card-title">Default Tab</h5>
                        </div>
                        <div className="card-body">
							
							<div className="default-tab">
								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item" role="presentation">
										<Link to="/#home" className="nav-link active" data-bs-toggle="tab"  aria-selected="true" role="tab"><i className="icon feather icon-home me-2"></i> Home</Link>
									</li>
									<li className="nav-item" role="presentation">
										<Link to="/#profile" className="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab" tabindex="-1"><i className="icon feather icon-user me-2"></i>Profile</Link>
									</li>
									<li className="nav-item" role="presentation">
										<Link to="/#contact" className="nav-link" data-bs-toggle="tab"  aria-selected="false" role="tab" tabindex="-1"><i className="icon feather icon-phone-call me-2"></i> Contact</Link>
									</li>
									<li className="nav-item" role="presentation">
										<Link to="/#message" className="nav-link" data-bs-toggle="tab"  aria-selected="false" role="tab" tabindex="-1"><i className="icon feather icon-mail me-2"></i>Message</Link>
									</li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane fade active show" id="home" role="tabpanel">
										<div className="pt-4">
											<h6>This is home title</h6>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
											</p>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
											</p>
										</div>
									</div>
									<div className="tab-pane fade" id="profile" role="tabpanel">
										<div className="pt-4">
											<h6>This is profile title</h6>
											<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
											</p>
											<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
											</p>
										</div>
									</div>
									<div className="tab-pane fade" id="contact" role="tabpanel">
										<div className="pt-4">
											<h6>This is contact title</h6>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
											</p>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
											</p>
										</div>
									</div>
									<div className="tab-pane fade" id="message" role="tabpanel">
										<div className="pt-4">
											<h6>This is message title</h6>
											<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
											</p>
											<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">				
						<div className="card-header">
                            <h5 className="card-title">Custom Tab 1</h5>
                        </div>
                        <div className="card-body">
							
							<div className="custom-tab-1">
								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item" role="presentation">
										<Link to="/#home1" className="nav-link" data-bs-toggle="tab"  aria-selected="false" role="tab" tabindex="-1"><i className="icon feather icon-home me-2"></i>Home</Link>
									</li>
									<li className="nav-item" role="presentation">
										<Link to="/#profile1" className="nav-link active" data-bs-toggle="tab"  aria-selected="true" role="tab"><i className="icon feather icon-user me-2"></i>Profile</Link>
									</li>
									<li className="nav-item" role="presentation">
										<Link to="/#contact1" className="nav-link" data-bs-toggle="tab"  aria-selected="false" role="tab" tabindex="-1"><i className="icon feather icon-phone-call me-2"></i> Contact</Link>
									</li>
									<li className="nav-item" role="presentation">
										<Link to="/#message1" className="nav-link" data-bs-toggle="tab"  aria-selected="false" role="tab" tabindex="-1"><i className="icon feather icon-mail me-2"></i>Message</Link>
									</li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane fade" id="home1" role="tabpanel">
										<div className="pt-4">
											<h6>This is home title</h6>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
											</p>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
											</p>
										</div>
									</div>
									<div className="tab-pane fade active show" id="profile1" role="tabpanel">
										<div className="pt-4">
											<h6>This is profile title</h6>
											<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
											</p>
											<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
											</p>
										</div>
									</div>
									<div className="tab-pane fade" id="contact1" role="tabpanel">
										<div className="pt-4">
											<h4>This is contact title</h4>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
											</p>
											<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
											</p>
										</div>
									</div>
									<div className="tab-pane fade" id="message1" role="tabpanel">
										<div className="pt-4">
											<h4>This is message title</h4>
											<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
											</p>
											<p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">				
						<div className="card-header">
                            <h5 className="card-title">Nav Pills Tabs</h5>
                        </div>
                        <div className="card-body">
							<ul className="nav nav-pills mb-3 light" role="tablist">
								<li className="nav-item" role="presentation">
									<button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls=		"pills-home" aria-selected="true">Home</button>
								</li>
								<li className="nav-item" role="presentation">
									<button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
								</li>
								<li className="nav-item" role="presentation">
									<button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
								</li>
								<li className="nav-item" role="presentation">
									<button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
								</li>
							</ul>
							<div className="tab-content" id="pills-tabContent">
								<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
									<div>
										<h6>This is home title</h6>
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
										</p>
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
										</p>
									</div>
								</div>
								<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
									<div>
										<h6>This is home title</h6>
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
										</p>
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
										</p>
									</div>
								</div>
								<div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
									<div>
										<h6>This is home title</h6>
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
										</p>
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
										</p>
									</div>
								</div>
								<div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
									<div>
										<h6>This is home title</h6>
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
										</p>
										<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
										</p>
									</div>
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