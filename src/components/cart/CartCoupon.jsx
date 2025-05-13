export default function CartCoupon(){
    return<>
    <p className="mb-1">Have a coupon code ? enter here</p>
    <div className="coupon-bx">
				<div className="icon icon-left">
					<i className="icon feather icon-scissors"></i>
				</div>
				<input type="text" className="form-control" placeholder="Enter Your Offer Code" />
				<div className="icon icon-right">
					<i className="icon feather icon-chevron-right"></i>
				</div>
			</div>
    </>
}