import CartCard from "./CartCard"
import CartCoupon from "./CartCoupon"
import CartFinalPrice from "./CartFinalPrice"
import CartMathPrice from "./CartMathPrice"

export default function CartMain(){
    var cartcards = [
        {
            title : "this is first test title",
            describe: "this is first test describe",
            price : "this is first test price",
            offerprice:"this is first test offerprice"
        },        {
            title : "this is second test title",
            describe: "this is second test describe",
            price : "this is second test price",
            offerprice:"this is second test offerprice"
        },        {
            title : "this is third test title",
            describe: "this is third test describe",
            price : "this is third test price",
            offerprice:"this is third test offerprice"
        },
    ]
    return<>
    <div className="page-content space-top p-b50">
        <div className="container">
        <div className="user-status m-b15">				
				<div className="d-flex align-items-center">
					<div className="media media-35 rounded-circle me-2">
						<img src="/images/user.png" alt="" />
					</div>
					<h6 className="mb-0 font-14 font-w400">Delivery to Tushar</h6>
				</div>
				<h6 className="mb-0 font-14 font-w500 text-primary">
					<a href="javascript:void(0);" className="d-flex align-items-center">Ram krishan, puram
						<i className="icon feather icon-chevron-down font-16"></i>
					</a>
				</h6>
			</div>    {
        cartcards.map((data)=>(
            <CartCard data={data} />
        ))
    }
    <CartCoupon />
    <CartMathPrice />
    <br />
    <br />
    <br />
    <br />
    <br />
    <CartFinalPrice />
        </div>
    </div>

    
    </>
}