import { Link } from "react-router-dom";

export default function Stepper(){

    return<>
    <div className="page-wrapper">
		<header className="header shadow header-fixed border-0 onepage">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/"  className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">Stepper</h6>
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
						<Link to="/contentArea"  className="element-name scroll">Stepper style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Default Steppers</h5>    
						</div>
						<div className="card-body row g-3">
							<div className="col-6">
								<div className="dz-stepper border-1">
									<small>Default Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper border-1 rounded-stepper">
									<small>Default Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper border-1 stepper-fill">
									<small>Fill Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper border-1 rounded-stepper stepper-fill">
									<small>Fill Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper border-1 small-stepper">
									<small>Small Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper border-1 rounded-stepper small-stepper">
									<small>Small Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper border-1 stepper-fill small-stepper">
									<small>Small Fill Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper border-1 rounded-stepper stepper-fill small-stepper">
									<small>Small Fill Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper border-1 large">
									<small>large Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper border-1 rounded-stepper large">
									<small>large Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper border-1 large stepper-fill large">
									<small>Large Fill Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper border-1 rounded-stepper large stepper-fill large">
									<small>Large Fill Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Different Size Steppers</h5>    
						</div>
						<div className="card-body row g-3">
							<div className="col-6">
								<div className="dz-stepper border-2">
									<small>Default Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper rounded-stepper border-2">
									<small>Default Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper stepper-fill border-2">
									<small>Fill Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper rounded-stepper stepper-fill border-2">
									<small>Fill Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper small-stepper border-2">
									<small>Small Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper rounded-stepper small-stepper border-2">
									<small>Small Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper stepper-fill small-stepper border-2">
									<small>Small Fill Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper rounded-stepper stepper-fill small-stepper border-2">
									<small>Small Fill Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper large border-2">
									<small>large Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper rounded-stepper large border-2">
									<small>large Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper large stepper-fill large border-2">
									<small>Large Fill Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper rounded-stepper large stepper-fill large border-2">
									<small>Large Fill Stepper</small>
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
						</div>
					</div>	
				</div>
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Different Color Steppers</h5>    
						</div>
						<div className="card-body row g-3">
							<div className="col-6">
								<div className="dz-stepper danger">
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper info rounded-stepper">
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper secondary">
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper yellow rounded-stepper">
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper warning">
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper green rounded-stepper small-stepper col-6">
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper success">
									<input className="stepper" type="text" value="0" name="demo3"/>
								</div>
							</div>
							<div className="col-6">
								<div className="dz-stepper dark rounded-stepper">
									<input className="stepper" type="text" value="0" name="demo3"/>
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