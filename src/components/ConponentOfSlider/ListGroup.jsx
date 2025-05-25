import { Link } from "react-router-dom";

export default function ListGroup(){
    return<>
    <div className="page-wrapper">
		<header className="header shadow header-fixed border-0 onepage">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/"  className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">List group</h6>
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
						<Link to="/contentArea" className="element-name scroll">List group style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Basic List Group</h5>
                        </div>
                        <div className="card-body">
							<ul className="list-group">
								<li className="list-group-item">An item</li>
								<li className="list-group-item">A second item</li>
								<li className="list-group-item">A third item</li>
								<li className="list-group-item">A fourth item</li>
								<li className="list-group-item">And a fifth one</li>
							</ul>
                        </div>
                    </div>
				</div>
				<div className="col-12">
					<div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">List Active Items</h5>
                        </div>
                        <div className="card-body">
							<ul className="list-group">
								<li className="list-group-item active" aria-current="true">An active item</li>
								<li className="list-group-item">A second item</li>
								<li className="list-group-item">A third item</li>
								<li className="list-group-item">A fourth item</li>
								<li className="list-group-item">And a fifth one</li>
							</ul>
                        </div>
                    </div>
				</div>
				<div className="col-12">
					<div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">List Disabled Items</h5>
                        </div>
                        <div className="card-body">
							<ul className="list-group">
								<li className="list-group-item disabled" aria-disabled="true">A disabled item</li>
								<li className="list-group-item">A second item</li>
								<li className="list-group-item">A third item</li>
								<li className="list-group-item">A fourth item</li>
								<li className="list-group-item">And a fifth one</li>
							</ul>
                        </div>
                    </div>
				</div>
				<div className="col-12">
					<div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Links and buttons</h5>
                        </div>
                        <div className="card-body">
							<div className="list-group">
								<Link to="#" className="list-group-item list-group-item-action active" aria-current="true">
									The current link item
								</Link>
								<Link to="#" className="list-group-item list-group-item-action">A second link item</Link>
								<Link to="#" className="list-group-item list-group-item-action">A third link item</Link>
								<Link to="#"  className="list-group-item list-group-item-action">A fourth link item</Link>
								<Link to="#" className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</Link>
							</div>
                        </div>
                    </div>
				</div>
				<div className="col-12">
					<div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Flush</h5>
                        </div>
                        <div className="card-body">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">An item</li>
								<li className="list-group-item">A second item</li>
								<li className="list-group-item">A third item</li>
								<li className="list-group-item">A fourth item</li>
								<li className="list-group-item">And a fifth one</li>
							</ul>
                        </div>
                    </div>
				</div>
				<div className="col-12">
					<div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Custom Content</h5>
                        </div>
                        <div className="card-body">
							<div className="list-group">
								<Link to="#" className="list-group-item list-group-item-action active" aria-current="true">
									<div className="d-flex w-100 justify-content-between">
										<h6 className="mb-1">List group item heading</h6>
										<small>3 days ago</small>
									</div>
									<p className="mb-1">Some placeholder content in a paragraph.</p>
									<small>And some small print.</small>
								</Link>
								<Link to="#" className="list-group-item list-group-item-action">
									<div className="d-flex w-100 justify-content-between">
										<h6 className="mb-1">List group item heading</h6>
										<small className="text-body-secondary">3 days ago</small>
									</div>
									<p className="mb-1">Some placeholder content in a paragraph.</p>
									<small className="text-body-secondary">And some muted small print.</small>
								</Link> 
								<Link to="#" className="list-group-item list-group-item-action">
									<div className="d-flex w-100 justify-content-between">
									  <h6 className="mb-1">List group item heading</h6>
									  <small className="text-body-secondary">3 days ago</small>
									</div>
									<p className="mb-1">Some placeholder content in a paragraph.</p>
									<small className="text-body-secondary">And some muted small print.</small>
								</Link>
							</div>
                        </div>
                    </div>
				</div>
				<div className="col-12">
					<div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">With badges </h5>
                        </div>
                        <div className="card-body">
							<ul className="list-group">
								<li className="list-group-item d-flex justify-content-between align-items-center">
									A list item
									<span className="badge bg-primary rounded-pill">14</span>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center">
									A second list item
									<span className="badge bg-primary rounded-pill">2</span>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center">
									A third list item
									<span className="badge bg-primary rounded-pill">1</span>
								</li>
							</ul>
                        </div>
                    </div>
				</div>
				<div className="col-12">
					<div className="card">
                        <div className="card-header d-block">
                            <h5 className="card-title">Variants</h5>
                        </div>
                        <div className="card-body">
							<ul className="list-group">
								<li className="list-group-item">A simple default list group item</li>
								<li className="list-group-item list-group-item-primary">A simple primary list group item</li>
								<li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
								<li className="list-group-item list-group-item-success">A simple success list group item</li>
								<li className="list-group-item list-group-item-danger">A simple danger list group item</li>
								<li className="list-group-item list-group-item-warning">A simple warning list group item</li>
								<li className="list-group-item list-group-item-info">A simple info list group item</li>
								<li className="list-group-item list-group-item-light">A simple light list group item</li>
								<li className="list-group-item list-group-item-dark">A simple dark list group item</li>
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