import { Link } from "react-router-dom";

export default function Progress(){
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
						<h6 className="title">Progress</h6>
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
						<Link to="/contentArea"className="element-name scroll">Progress style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
                    <div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Default Progress bars</h5>
						</div>
                        <div className="card-body">
                            <div className="progress">
                                <div className="progress-bar primary" style={{width:" 60%;" }}role="progressbar">
                                    <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Striped Progress bar</h5>
                        </div>
                        <div className="card-body">
                            <div className="progress">
                                <div className="progress-bar info progress-bar-striped" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:" 85%;"}} role="progressbar">
                                    <span className="sr-only">85% Complete (success)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Colored Progress bar</h5>
                        </div>
                        <div className="card-body">
                            <div className="progress mt-3">
                                <div className="progress-bar danger" style={{width:" 60%;"}} role="progressbar">
                                    <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div className="progress mt-3">
                                <div className="progress-bar info" style={{width:" 40%;"}} role="progressbar">
                                    <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div className="progress mt-3">
                                <div className="progress-bar success" style={{width:" 20%;"}} role="progressbar">
                                    <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div className="progress mt-3">
                                <div className="progress-bar primary" style={{width:" 30%;"}} role="progressbar">
                                    <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div className="progress mt-3">
                                <div className="progress-bar warning" style={{width: "80%;"}} role="progressbar">
                                    <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Different bar sizes </h5>
                        </div>
                        <div className="card-body">
                            <div className="progress mt-3" style={{height:"6px;"}}>
                                <div className="progress-bar danger" style={{width: "60%", height:"6px;"}} role="progressbar">
                                    <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div className="progress mt-3" style={{height:"8px;"}}>
                                <div className="progress-bar info" style={{width:" 40%;", height:"8px;"}} role="progressbar">
                                    <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div className="progress mt-3" style={{height:"10px;"}}>
                                <div className="progress-bar success" style={{width: "20%", height:"10px;"}} role="progressbar">
                                    <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div className="progress mt-3" style={{height:"12px;"}}>
                                <div className="progress-bar primary" style={{width: "30%;", height:"12px;"}} role="progressbar">
                                    <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div className="progress mt-3" style={{height:"14px;"}}>
                                <div className="progress-bar warning" style={{width:" 80%;", height:"14px;"}} role="progressbar">
                                    <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Skill Bars</h5>
                        </div>
                        <div className="card-body">
                            <h6>Photoshop
                                <span className="pull-end">85%</span>
                            </h6>
                            <div className="progress ">
                                <div className="progress-bar bg-danger progress-animated border-0" style={{width:" 85%;"}} role="progressbar">
                                    <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <h6 className="mt-4">Code editor
                                <span className="pull-end">90%</span>
                            </h6>
                            <div className="progress">
                                <div className="progress-bar bg-info progress-animated border-0" style={{width:" 90%;"}} role="progressbar">
                                    <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <h6 className="mt-4">Illustrator
                                <span className="pull-end">65%</span>
                            </h6>
                            <div className="progress">
                                <div className="progress-bar bg-success progress-animated border-0" style={{width: "65%;"}} role="progressbar">
                                    <span className="sr-only">60% Complete</span>
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