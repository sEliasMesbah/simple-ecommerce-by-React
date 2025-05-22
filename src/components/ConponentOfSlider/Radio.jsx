import { Link } from "react-router-dom";

export default function Radio(){
    return<>
    <div className="page-wrapper">
		<header className="header shadow header-fixed border-0 onepage">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/" className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">Radio</h6>
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
						<Link to="/contentArea" className="element-name scroll">Radio style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Square Radio</h5>
                        </div>
                        <div className="card-body">
                            <div className="radio square-radio">
                                <label className="radio-label">Radio button 01
                                    <input type="radio" checked="checked" name="radio1"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio-label">Radio button 02
                                    <input type="radio" name="radio1"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio-label">Radio button 03
                                    <input type="radio" name="radio1"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio-label">Radio button 04
                                    <input type="radio" name="radio1"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
				</div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Circle Radio</h5>
                        </div>
                        <div className="card-body">
                            <div className="radio circle-radio">
                                <label className="radio-label">Radio button 01
                                    <input type="radio" checked="checked" name="radio2"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio-label">Radio button 02
                                    <input type="radio" name="radio2"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio-label">Radio button 03
                                    <input type="radio" name="radio2"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio-label">Radio button 04
                                    <input type="radio" name="radio2"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Circle Radio 2</h5>
                        </div>
                        <div className="card-body">
                            <div className="radio circle-radio style-1">
                                <label className="radio-label">Radio button 01
                                    <input type="radio" checked="checked" name="radio3"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio-label">Radio button 02
                                    <input type="radio" name="radio3"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio-label">Radio button 03
                                    <input type="radio" name="radio3"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio-label">Radio button 04
                                    <input type="radio" name="radio3"/>
                                    <span className="checkmark"></span>
                                </label>
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