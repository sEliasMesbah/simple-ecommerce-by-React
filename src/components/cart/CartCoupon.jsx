export default function CartCoupon(){
    return<>
    <h6 className="mb-1" style={{fontSize : "12px"}}>Have a coupon code ? enter here</h6>
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