export default function Card(props){
    return<>
                    <div className="col-6">
						<div className="shop-card">
							<div className="dz-media">
								<a >
									<img src={props.data.url} alt="image" />	
								</a>
								<a className="item-bookmark">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
								</a>
							</div>
							<div className="dz-content">
								<span className="font-12">{props.data.name}</span>
								<h6 className="title"><a href="product-detail.html">{props.data.describe}</a></h6>
								<h6 className="price">{props.data.offerprice}<del>{props.data.price}</del></h6>
							</div>
							<div className="product-tag">
								<span className="badge badge-secondary">{props.data.off}</span>
							</div>
						</div>
					</div>
    </>
}