import { useState } from "react"
import CartCard from "./CartCard"
import CartCoupon from "./CartCoupon"
import CartFinalPrice from "./CartFinalPrice"
import CartMathPrice from "./CartMathPrice"

export default function CartMain() {
	const [cartItems, setCartItems] = useState([
		{ id: 1, url: "/images/product/pic8.jpg", title: "this is first test title", describe: "this is first test describe", price: 350, offerprice: 315, quantity: 0 },
		{ id: 2, url: "/images/product/pic8.jpg", title: "this is second test title", describe: "this is second test describe", price: 180, offerprice: 160, quantity: 0 },
		{ id: 3, url: "/images/product/pic8.jpg", title: "this is third test title", describe: "this is third test describe", price: 300, offerprice: 269, quantity: 0 },
	]);

	// Handle quantity change
	const updateQuantity = (id, delta) => {
		const updatedItems = cartItems.map(item =>
			item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
		);
		setCartItems(updatedItems);
	};

	// Total price calculation
	const totalPrice = cartItems.reduce((total, item) => total + item.offerprice * item.quantity, 0);

	return (
		<>
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
							<a href="javascript:void(0);" className="d-flex align-items-center">
								Ram krishan, puram
								<i className="icon feather icon-chevron-down font-16"></i>
							</a>
						</h6>
					</div>

					{cartItems.map(item => (
						<CartCard key={item.id} data={item} onQuantityChange={updateQuantity} />
					))}

					<CartCoupon />
					<CartMathPrice total={totalPrice} />
					<br /><br /><br /><br /><br />
					<CartFinalPrice total={totalPrice} />
				</div>
			</div>
		</>
	);
}
