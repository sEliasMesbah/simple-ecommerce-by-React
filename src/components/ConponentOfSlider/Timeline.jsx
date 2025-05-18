import { Link } from "react-router-dom";

export default function Timeline(){
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
						<h6 className="title">Timeline</h6>
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
			<div className="card dz-card style-1" style={{backgroundimage:" url('assets/images/bg-shape.png');"}}>				
				<div className="card-body">
					<div className="dz-media dz-flex-box">
						<img src="/images/bootstrap-logo.png" alt=""/>
					</div>
					<div className="dz-content">
						<h5 className="card-title">Bootstrap Elements</h5>
						<Link to="/contentArea" className="element-name scroll">Timeline style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
                    <h5 className="title">Default Timeline</h5>
                    <ul className="dz-timeline">
                        <li className="timeline-item">
                            <p className="timeline-date">11 March 2020</p>
                            <h5 className="timeline-tilte">Some text goes here</h5>
                            <p className="timeline-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci.
                            </p>
                        </li>
                        <li className="timeline-item">
                            <p className="timeline-date">11 March 2020</p>
                            <h5 className="timeline-tilte">Some text goes here</h5>
                            <p className="timeline-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci.
                            </p>
                        </li>
                        <li className="timeline-item">
                            <p className="timeline-date">11 March 2020</p>
                            <h5 className="timeline-tilte">Some text goes here</h5>
                            <p className="timeline-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci.
                            </p>
                        </li>
                        <li className="timeline-item">
                            <p className="timeline-date">11 March 2020</p>
                            <h5 className="timeline-tilte">Some text goes here</h5>
                            <p className="timeline-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci.
                            </p>
                        </li>
                        <li className="timeline-item">
                            <p className="timeline-date">11 March 2020</p>
                            <h5 className="timeline-tilte">Some text goes here</h5>
                            <p className="timeline-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci.
                            </p>
                        </li>
                    </ul>
                </div>
				<div className="col-12">
                    <h5 className="title">Timeline Panel</h5>
                    <ul className="dz-timeline timeline-panel">
                        <li className="timeline-item light">
                            <p className="timeline-date">11 March 2020</p>
                            <h5 className="timeline-tilte">Some text goes here</h5>
                            <p className="timeline-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci.
                            </p>
                        </li>
                        <li className="timeline-item primary">
                            <p className="timeline-date">11 March 2020</p>
                            <h5 className="timeline-tilte">Some text goes here</h5>
                            <p className="timeline-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci.
                            </p>
                        </li>
                        <li className="timeline-item secondary">
                            <p className="timeline-date">11 March 2020</p>
                            <h5 className="timeline-tilte">Some text goes here</h5>
                            <p className="timeline-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci.
                            </p>
                        </li>
                        <li className="timeline-item success">
                            <p className="timeline-date">11 March 2020</p>
                            <h5 className="timeline-tilte">Some text goes here</h5>
                            <p className="timeline-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci.
                            </p>
                        </li>
                        <li className="timeline-item info">
                            <p className="timeline-date">11 March 2020</p>
                            <h5 className="timeline-tilte">Some text goes here</h5>
                            <p className="timeline-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci.
                            </p>
                        </li>
                        <li className="timeline-item warning">
                            <p className="timeline-date">11 March 2020</p>
                            <h5 className="timeline-tilte">Some text goes here</h5>
                            <p className="timeline-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci.
                            </p>
                        </li>
                        <li className="timeline-item danger">
                            <p className="timeline-date">11 March 2020</p>
                            <h5 className="timeline-tilte">Some text goes here</h5>
                            <p className="timeline-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci.
                            </p>
                        </li>
                    </ul>
                </div>
				<div className="col-12">
                    <h5 className="title">Timeline Number</h5>
                    <ul className="dz-timeline timeline-number">
                        <li className="timeline-item">
                            <div className="line-content-box">
                                <h5>Project Analysis</h5>
                                <p>We at Dream Spa provide various services to the nature of the clients. we can talk.</p>
                            </div>	
                            <div className="line-num">1</div>
                        </li>
                        <li className="timeline-item">
                            <div className="line-content-box">
                                <h5>Project Analysis</h5>
                                <p>We at Dream Spa provide various services to the nature of the clients. we can talk.</p>
                            </div>	
                            <div className="line-num">2</div>
                        </li>
                        <li className="timeline-item">
                            <div className="line-content-box">
                                <h5>Project Analysis</h5>
                                <p>We at Dream Spa provide various services to the nature of the clients. we can talk.</p>
                            </div>	
                            <div className="line-num">3</div>
                        </li>
                        <li className="timeline-item">
                            <div className="line-content-box media">
                                <img className="media-95 me-3" src="/images/avatar/7.jpg" alt="img"/>
                                <img className="media-95" src="/images/avatar/8.jpg" alt="img"/>
                            </div>	
                            <div className="line-num">4</div>
                        </li>
                        <li className="timeline-item">
                            <div className="line-content-box">
                                <h5>Project Analysis</h5>
                                <p>We at Dream Spa provide various services to the nature of the clients. we can talk.</p>
                            </div>	
                            <div className="line-num">5</div>
                        </li>
                    </ul>
                </div>
			</div>
		</div>
	</div>
	
</div>  
    </>
}