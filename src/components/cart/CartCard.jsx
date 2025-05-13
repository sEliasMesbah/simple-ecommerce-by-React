export default function CartCard(props){
    return<>
        <div className="cart-box">
				<div className="dz-media">
					<img src="/images/product/pic8.jpg" alt="" />
				</div>
				<div className="cart-content">
					<h6 className="title mb-1"><a href="product-detail.html">{props.data.title}</a></h6>
					<span className="font-12 brand-tag">{props.data.describe}</span>
					<div className="cart-footer">
						<h6 className="price mb-0">{props.data.offerprice}<del>{props.data.price}</del></h6>
						<div className="dz-stepper style-2">
							<div className="input-group bootstrap-touchspin bootstrap-touchspin-injected"><span className="input-group-btn input-group-prepend"><button className="btn btn-primary bootstrap-touchspin-down" type="button">-</button></span><input readonly="" className="stepper form-control" type="text" value="0" name="demo3"/><span className="input-group-btn input-group-append"><button className="btn btn-primary bootstrap-touchspin-up" type="button">+</button></span></div>
						</div>
					</div>
				</div>
			</div>
    </>
}