import { Link } from "react-router-dom";

export default function Dropdown(){
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
						<h6 className="title">Dropdowns</h6>
					</div>
					<div className="mid-content">
					</div>
					<div className="right-content">
						<Link to="/search"className="search-icon">
							<i className="icon feather icon-more-vertical-"></i>
						</Link>
					</div>
				</div>
			</div>
		</header>
	
	<div className="page-content space-top dropdown-area">
		<div className="container">
			<div className="card dz-card style-1" style={{backgroundimage:" url('assets/images/bg-shape.png');"}}>				
				<div className="card-body">
					<div className="dz-media dz-flex-box">
						<img src="/images/bootstrap-logo.png" alt=""/>
					</div>
					<div className="dz-content">
						<h5 className="card-title">Bootstrap Elements</h5>
						<Link to="/contentArea" className="element-name scroll">Dropdowns style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Basic Dropdown</h5>
                            <p className="m-0 subtitle">A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined list
                            </p>
                        </div>
                        <div className="card-body">
                            <div className="basic-dropdown">
                                <div className="dropdown">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown button
                                    </button>
                                    <div className="dropdown-menu" >
                                        <Link to ="#"className="dropdown-item">Link 1</Link>
                                        <Link to="#" className="dropdown-item" >Link 2</Link>
                                        <Link to="#" className="dropdown-item" >Link 3</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Dropdown Divider</h5>
                            <p className="m-0 subtitle">The
                                <code>.dropdown-divider</code> className is used to separate links inside the dropdown menu with a thin horizontal border
                            </p>
                        </div>
                        <div className="card-body">
                            <div className="basic-dropdown">
                                <div className="dropdown">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown button
                                    </button>
                                    <div className="dropdown-menu">
                                    <Link to ="#"className="dropdown-item">Link 1</Link>
                                        <Link to="#" className="dropdown-item" >Link 2</Link>
                                        <Link to="#" className="dropdown-item" >Link 3</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to="#" className="dropdown-item">Another link</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header d-block">
                            <h4 className="card-title">Dropdown Header</h4>
                            <p className="m-0 subtitle">The
                                <code>.dropdown-header</code> className is used to add headers inside the dropdown menu
                            </p>
                        </div>
                        <div className="card-body">

                            <div className="basic-dropdown">
                                <div className="dropdown">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                        Dropdown button
                                    </button>
                                    <div className="dropdown-menu">
                                        <h5 className="dropdown-header">Dropdown header</h5>
                                        <Link to ="#"className="dropdown-item">Link 1</Link>
                                        <Link to="#" className="dropdown-item" >Link 2</Link>
                                        <Link to="#" className="dropdown-item" >Link 3</Link>
                                        <h5 className="dropdown-header">Dropdown header</h5>
                                        <Link to="#" className="dropdown-item">Another link</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Disable and Active items</h5>
                            <p className="m-0 subtitle">The
                                <code>.dropdown-header</code> className is used to add headers inside the dropdown menu
                            </p>
                        </div>
                        <div className="card-body">

                            <div className="basic-dropdown">
                                <div className="dropdown">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                        Dropdown button
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link to="/" className="dropdown-item" >Normal</Link>
                                        <Link to="/" className="dropdown-item active" >Active</Link>
                                        <Link to="/" className="dropdown-item disabled" >Disabled</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Button Dropdowns</h5>
                        </div>
                        <div className="card-body">
							<div className="button-dropdown">
								<div className="btn-group mb-1">
									<button type="button" className="btn btn-primary">Primary</button>
									<button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
									</button>
									<div className="dropdown-menu">
										<a className="dropdown-item" href="javascript:void(0);">Action</a>
										<a className="dropdown-item" href="javascript:void(0);">Another action</a>
										<a className="dropdown-item" href="javascript:void(0);">Something else here</a>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item" href="javascript:void(0);">Separated link</a>
									</div>
								</div>
								<div className="btn-group mb-1">
									<button type="button" className="btn btn-secondary">Secondary</button>
									<button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
									</button>
									<div className="dropdown-menu">
										<Link to="/" className="dropdown-item" >Action</Link>
										<Link to="/" className="dropdown-item" >Another action</Link>
										<Link to="/"className="dropdown-item" >Something else here</Link>
										<div className="dropdown-divider"></div>
										<Link to="/" className="dropdown-item">Separated link</Link>
									</div>
								</div>

								<div className="btn-group mb-1">
									<button type="button" className="btn btn-success">Success</button>
									<button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
									</button>
									<div className="dropdown-menu">
                                    <Link to="/" className="dropdown-item" >Action</Link>
										<Link to="/" className="dropdown-item" >Another action</Link>
										<Link to="/"className="dropdown-item" >Something else here</Link>
										<div className="dropdown-divider"></div>
                                        <Link to="/" className="dropdown-item">Separated link</Link>

									</div>
								</div>

								<div className="btn-group mb-1">
									<button type="button" className="btn btn-info">Info</button>
									<button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
									</button>
									<div className="dropdown-menu">
                                    <Link to="/" className="dropdown-item" >Action</Link>
										<Link to="/" className="dropdown-item" >Another action</Link>
										<Link to="/"className="dropdown-item" >Something else here</Link>
										<div className="dropdown-divider"></div>
                                        <Link to="/" className="dropdown-item">Separated link</Link>

									</div>
								</div>

								<div className="btn-group mb-1">
									<button type="button" className="btn btn-warning">Warning</button>
									<button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
									</button>
									<div className="dropdown-menu">
                                    <Link to="/" className="dropdown-item" >Action</Link>
										<Link to="/" className="dropdown-item" >Another action</Link>
										<Link to="/"className="dropdown-item" >Something else here</Link>
										<div className="dropdown-divider"></div>
                                        <Link to="/" className="dropdown-item">Separated link</Link>

									</div>
								</div>

								<div className="btn-group mb-1">
									<button type="button" className="btn btn-danger">Danger</button>
									<button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
									</button>
									<div className="dropdown-menu">
                                    <Link to="/" className="dropdown-item" >Action</Link>
										<Link to="/" className="dropdown-item" >Another action</Link>
										<Link to="/"className="dropdown-item" >Something else here</Link>
										<div className="dropdown-divider"></div>
                                        <Link to="/" className="dropdown-item">Separated link</Link>

									</div>
								</div>
							</div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Dropup</h5>
                            <p className="m-0 subtitle">The
                                <code>.dropup</code> className makes the dropdown menu expand upwards instead of downwards
                            </p>
                        </div>
                        <div className="card-body">

                            <div className="basic-dropdown">
                                
                                <div className="btn-group dropup mb-1">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropup
                                    </button>
                                    <div className="dropdown-menu" >
                                        <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 1</Link>
                                        <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 2</Link>
                                        <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 3</Link>
                                    </div>
                                </div>

                             
                                <div className="btn-group dropup mb-1">
                                    <button type="button" className="btn btn-primary">
                                        Split dropup
                                    </button>
                                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu" >
                                    <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 1</Link>
                                        <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 2</Link>
                                        <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 3</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Dropright </h5>
                            <p className="m-0 subtitle">Trigger dropdown menus at the right of the elements by adding
                                <code>.dropend</code> to the parent element</p>
                        </div>
                        <div className="card-body">

                            <div className="basic-dropdown">
                            
                                <div className="btn-group dropend mb-1">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                        Dropright
                                    </button>
                                    <div className="dropdown-menu">
                                    <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 1</Link>
                                        <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 2</Link>
                                        <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 3</Link>
                                        </div>
                                </div>

                              
                                <div className="btn-group dropend mb-1">
                                    <button type="button" className="btn btn-primary">
                                        Split dropright
                                    </button>
                                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
                                        <span className="sr-only">Toggle Dropright</span>
                                    </button>
                                    <div className="dropdown-menu">
                                    <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 1</Link>
                                        <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 2</Link>
                                        <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 3</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="col-12">
                    <div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">dropstart </h5>
                            <p className="m-0 subtitle">Trigger dropdown menus at the right of the elements by adding
                                <code>.dropstart </code> to the parent element</p>
                        </div>
                        <div className="card-body">

                            <div className="basic-dropdown text-end">
                                
                                <div className="btn-group dropstart mb-1">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                        dropstart
                                    </button>
                                    <div className="dropdown-menu">
                                    <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 1</Link>
                                        <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 2</Link>
                                        <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 3</Link>
                                    </div>
                                </div>

                                
                                <div className="btn-group mb-1">
                                    <div className="btn-group dropstart " role="group">
                                        <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
                                            <span className="sr-only">Toggle dropstart</span>
                                        </button>
                                        <div className="dropdown-menu">
                                        <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 1</Link>
                                        <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 2</Link>
                                        <Link to="/" className="dropdown-item" href="javascript:void(0);">Link 3</Link>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-primary">
                                        Split dropstart
                                    </button>
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