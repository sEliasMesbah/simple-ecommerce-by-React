import { Link } from "react-router-dom";

export default function Typography(){
    return<>
    <div className="page-wrapper">
		<header className="header shadow header-fixed border-0 onepage">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/"  className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">Typography</h6>
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
						<Link to="/contentArea" className="element-name scroll">Typography style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
				<div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <div className="mb-4">
                                        <h4 className="card-title card-intro-title">Typography</h4>
                                        <p>Use tags <code>h1 to h6</code> for get desire heading.</p>
                                    </div>
                                    <div className="card-content">
                                        <h1 className="mb-3">h1. Bootstrap heading</h1>
                                        <h2 className="mb-3">h2. Bootstrap heading</h2>
                                        <h3 className="mb-3">h3. Bootstrap heading</h3>
                                        <h4 className="mb-3">h4. Bootstrap heading</h4>
                                        <h5 className="mb-3">h5. Bootstrap heading</h5>
                                        <h6 className="mb-3">h6. Bootstrap heading</h6>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-4">
                                        <h4 className="card-title card-intro-title">Paragraph with justify</h4>
                                        <p>Use tags <code>text-justify</code> for get desire paragraph.
                                        </p>
                                    </div>
                                    <div className="card-content">
                                        <p className="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-4">
                                        <h4 className="card-title card-intro-title">Alignment text</h4>
                                        <p>Use tags <code>text-start, text-center, text-end</code> for get desire text.</p>
                                    </div>
                                    <div className="card-content">
                                        <p className="text-start">Left aligned text on all viewport sizes.</p>
                                        <p className="text-center">Center aligned text on all viewport sizes.</p>
                                        <p className="text-end">Right aligned text on all viewport sizes.</p>
                                    </div>
                                </div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
                        <div className="card-body">
							<div className="row">
                                <div className="col-12">
                                    <div className="mb-4">
                                        <h4 className="card-title card-intro-title">View port text</h4>
                                        <p>Use tags <code>text-sm-start, text-md-start, text-lg-start, text-xl-start</code> for get desire text.</p>
                                    </div>
                                    <div className="card-content">
                                        <p className="text-sm-start">Left aligned text on viewports sized SM (small) or wider.</p>
                                        <p className="text-md-start">Left aligned text on viewports sized MD (medium) or wider.</p>
                                        <p className="text-lg-start">Left aligned text on viewports sized LG (large) or wider.</p>
                                        <p className="text-xl-start">Left aligned text on viewports sized XL (extra-large) or wider.</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-4">
                                        <h4 className="card-title card-intro-title">Font weight and italics</h4>
                                        <p>Use tags <code>, fw-normal, fw-italic</code> for get desire text.</p>
                                    </div>
                                    <div className="card-content">
                                        <p className="fw-bold">Bold text.</p>
                                        <p className="fw-normal">Normal weight text.</p>
                                        <p className="fst-italic">Italic text.</p>
                                    </div>
                                </div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
                        <div className="card-body">
							<div className="row">
                                <div className="col-12">
                                    <div className="mb-4">
                                        <h4 className="card-title card-intro-title">Text colors</h4>
                                        <p>Use tags below className for get desire text.</p>
                                    </div>
                                    <div className="card-content">
                                        <p className="text-muted">This is an example of muted text. Add className<code>text-muted</code></p>
                                        <p className="text-primary">This is an example of primary text. Add className<code>text-primary</code></p>
                                        <p className="text-success">This is an example of success text. Add className<code>text-success</code></p>
                                        <p className="text-info">This is an example of info text. Add className<code>text-info</code></p>
                                        <p className="text-warning">This is an example of warning text. Add className<code>text-warning</code></p>
                                        <p className="text-danger">This is an example of danger text. Add className<code>text-danger</code></p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-4">
                                        <h4 className="card-title card-intro-title">Address</h4>
                                        <p>Use <code>address</code> for get desire address.</p>
                                    </div>
                                    <div className="card-content">
                                        <address>
                                            <strong>Twitter, Inc.</strong>
                                            <br/>795 Folsom Ave, Suite 600<br/>San Francisco, CA 94107<br/><abbr title="Phone">P:</abbr>(123) 456-7890
                                        </address>
                                        <address>
                                            <strong>George Belly</strong>
                                            <br/>
                                            <Link to="/../cdn-cgi/l/email-protection#785b"><span className="__cf_email__" data-cfemail="345d5a525b74514c55594458511a575b59">[email&nbsp;protected]</span></Link>
                                        </address>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-4">
                                        <h4 className="card-title card-intro-title">Blockquotes</h4>
                                        <p>Use <code>blockquote</code> for get desire address.</p>
                                    </div>
                                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</blockquote>
                                    <blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p> 
                                        <small> - Someone famous in <cite title="Source Title">Source Title</cite></small>
                                    </blockquote>
                                </div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
                        <div className="card-body">
							<div className="row">
                                <div className="col-12 mb-3">
                                    <div className="mb-4">
                                        <h4 className="card-title card-intro-title mb-1">Ol Listing</h4>
                                        <p>Use tags <code>ol &gt; li</code> for get desire ol list.</p>
                                    </div>
                                    <ol className="list-style">
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Consectetur adipiscing elit</li>
                                        <li>Integer molestie lorem at massa</li>
                                    </ol>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="mb-4">
                                        <h4 className="card-title card-intro-title mb-1">Ul Listing</h4>
                                        <p>Use tags <code>ul &gt; li</code> for get desire ol list.</p>
                                    </div>
                                    <ul className="list-style">
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Consectetur adipiscing elit</li>
                                        <li>Integer molestie lorem at massa</li>
                                    </ul>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="mb-4">
                                        <h4 className="card-title card-intro-title mb-1">Description Text</h4>
                                        <p>Use tags <code>dl &gt; dt</code> for get desire ol list.</p>
                                        </div>
                                    <dl>
                                        <dt>Standard Description List</dt>
                                        <dd>Description Text</dd>
                                        <dt>Description List Title</dt>
                                        <dd>Description List Text</dd>
                                    </dl>
                                </div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="card">
                        <div className="card-body">
							<div className="row">
                                <div className="col-12 mb-3">
                                    <div className="mb-4">
                                        <h4 className="card-title card-intro-title mb-1">Fancy Listing 1</h4>
                                        <p>Use className <code>list-icons</code> to ul for get desire ol list.</p>
                                    </div>
                                    <ul className="list-icons">
                                        <li><span className="align-middle me-2"><i className="ti-angle-right"></i></span> Lorem ipsum dolor sit amet</li>
                                        <li><span className="align-middle me-2"><i className="ti-angle-right"></i></span> Consectetur adipiscing elit</li>
                                        <li><span className="align-middle me-2"><i className="ti-angle-right"></i></span> Integer molestie lorem at massa</li>
                                    </ul>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="mb-4">
                                        <h4 className="card-title card-intro-title mb-1">Fancy Listing with href</h4>
                                        <p>Use className <code>list-icons</code> to ul for get desire ol list.</p>
                                    </div>
                                    <ul className="list-icons">
                                        <li><Link to="/"><span className="align-middle me-2"><i className="fa fa-check text-info"></i></span> Lorem ipsum dolor sit amet</Link></li>
                                        <li><Link to="/"><span className="align-middle me-2"><i className="fa fa-check text-info"></i></span>Consectetur adipiscing elit</Link></li>
                                        <li><Link to="/"><span className="align-middle me-2"><i className="fa fa-check text-info"></i></span>Integer molestie lorem at massa</Link></li>
                                    </ul>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="mb-4">
                                        <h4 className="card-title card-intro-title mb-1">Fancy Listing with href</h4>
                                        <p>Use className <code>list-icons</code> to ul for get desire ol list.</p>
                                    </div>
                                    <ul className="list-icons">
                                        <li><Link to="/" ><span className="align-middle me-2"><i className="fa fa-chevron-right"></i></span> Lorem ipsum dolor sit amet</Link></li>
                                        <li><Link to="/"><span className="align-middle me-2"><i className="fa fa-chevron-right"></i></span>Consectetur adipiscing elit</Link></li>
                                        <li><Link to="/"><span className="align-middle me-2"><i className="fa fa-chevron-right"></i></span>Integer molestie lorem at massa</Link></li>
                                    </ul>
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