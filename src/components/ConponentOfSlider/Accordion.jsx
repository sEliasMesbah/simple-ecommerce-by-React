import { useEffect } from "react"
import { Link } from "react-router-dom"
import DAccordion from "../ConponentOfSlider/DAccordion"
export default function Accordion(){
	
    return<>
    <div className="page-wrapper">
    
	
		<header className="header shadow header-fixed border-0 onepage">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/" className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">Accordion</h6>
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

	<div className="page-content space-top">
		<div className="container">
	<div className="card dz-card style-1" style={{backgroundimage:" url('/images/bg-shape.png');"}}>				
				<div className="card-body">
					<div className="dz-media dz-flex-box">
						<img src="/images/bootstrap-logo.png" alt=""/>
					</div>
					<div className="dz-content">
						<h5 className="card-title">Bootstrap Elements</h5>
						<Link className="element-name scroll">Accordion style</Link>
					</div>
					<span className="version">BS - v5.3</span>
				</div>
			</div>
			
			<div className="row" id="contentArea">
			
				<div className="col-12">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Default Accordion</h5>
						</div>	
						<div className="card-body">
							<div className="accordion accordion-primary" id="accordion-one">
								<DAccordion>
								<div className="accordion-item">
							 
							 <div className="accordion-header" id="headingOne"  data-bs-target="#collapseOne" aria-controls="collapseOne" aria-expanded="true" role="button">
								   <span className="accordion-header-icon"></span>
								 <span className="accordion-header-text">Accordion Header One</span>
								 <span className="accordion-header-indicator"></span>
							   </div>
							   <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion-one">
								 <div className="accordion-body-text">
									Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
								 </div>
							   </div>
							
							   
							 </div>
								</DAccordion>
							 <DAccordion>
							 <div className="accordion-item">
						
						<div className="accordion-header collapsed " id="headingTwo" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-controls="collapseTwo" role="button" aria-expanded="true">
							  <span className="accordion-header-text">Accordion Header Two</span>
							 <span className="accordion-header-indicator"></span>
							</div>
							<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion-one">
							  <div className="accordion-body-text">
								 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
							  </div>
							</div>
						
						  </div>
							 </DAccordion>
							 <DAccordion>
							 <div className="accordion-item">
							
							<div className="accordion-header collapsed " id="headingThree" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-controls="collapseThree" role="button" aria-expanded="true">
								  <span className="accordion-header-text">Accordion Header Three</span>
								  <span className="accordion-header-indicator"></span>
								</div>
								<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion-one">
								  <div className="accordion-body-text">
									 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
								  </div>
								</div>
							
							  </div>
							 </DAccordion>
							 
							
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