import { Link } from "react-router-dom";

export default function Card1(){
    return<>
    <div className="page-wrapper">
		<header className="header shadow header-fixed border-0 onepage">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/"  className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">Cards</h6>
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
			<div className="card dz-card style-1" style={{backgroundimage:" url('assets/images/bg-shape.png');"}}>				
				<div className="card-body">
					<div className="dz-media dz-flex-box">
						<img src="/images/bootstrap-logo.png" alt=""/>
					</div>
					<div className="dz-content">
						<h5 className="card-title">Bootstrap Elements</h5>
						<Link to="/contentArea" className="element-name scroll">Cards style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
					<div className="card">
						<img src="/images/popular/pic1.png" className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<Link to="/" className="btn btn-primary">Go somewhere</Link>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
						<img src="/images/popular/pic2.png" className="card-img-top" alt="..."/>
						<div className="card-body">
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
						<img src="/images/popular/pic3.png" className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">An item</li>
							<li className="list-group-item">A second item</li>
							<li className="list-group-item">A third item</li>
						</ul>
						<div className="card-body">
							<Link to="/" className="card-link">Card link</Link>
							<Link to="/" className="card-link">Another link</Link>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
                        <div className="card-header border-0 pb-0">
                            <h5 className="card-title">Card title</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff <br/> sections. The bedding was hardly able to cover it and seemed ready to
                                slide off any moment.
                            </p>
                        </div>
                        <div className="card-footer border-0 pt-0">
                            <p className="card-text d-inline">Card footer</p>
                            <Link to="/" className="card-link float-end">Card link</Link>
                        </div>
                    </div>
				</div>
				<div className="col-12">
					<div className="card card-full">
                        <div className="card-header">
                            <h5 className="card-title">Card Title</h5>
                        </div>
                        <div className="card-body">

                            <p className="card-text">This is a wider card with supporting text and below as a natural lead-in to the additional content. This content</p>
                            <Link to="/" className="btn btn-primary">Go somewhere</Link>
                        </div>
                        <div className="card-footer">
                            <p className="card-text text-dark">Last updateed 3 min ago</p>
                        </div>
                    </div>
				</div>
				<div className="col-12">
					<div className="card text-center">
                        <div className="card-header">
                            <h5 className="card-title">Card Title</h5>
                        </div>
                        <div className="card-body">

                            <p className="card-text">This is a wider card with supporting text and below as a natural lead-in to the additional content. This content</p>
                            <Link to="/" className="btn btn-primary">Go somewhere</Link>

                        </div>
                        <div className="card-footer">
                            <p className="card-text text-dark">Last updateed 3 min ago</p>
                        </div>
                    </div>
				</div>
				<div className="col-12">
					<div className="card text-center">
					  <div className="card-header">
						<h5 className="card-title">Featured</h5>
					  </div>
					  <div className="card-body">
						<h5 className="card-title">Special title treatment</h5>
						<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link to="/" className="btn btn-primary">Go somewhere</Link>

					  </div>
					  <div className="card-footer text-body-secondary">
						2 days ago
					  </div>
					</div>
				</div>	
			</div>
		</div>
	</div>
	
</div>  
    </>
}