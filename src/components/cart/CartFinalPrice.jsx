export default function CartFinalPrice({ total }) {
	const taxRate = 0.005;
	const deliveryRate = 0.008;

	const taxAmount = total * taxRate;
	const deliveryFee = total * deliveryRate;
	const finalTotal = total + taxAmount + deliveryFee;

	return (
		<div className="footer fixed bg-white border-top distance">
			<div className="container py-2">
				<div className="total-cart">
					<div className="price-area">
						<h3 className="price text-secondary">${finalTotal.toFixed(2)}</h3>
						<h6>View price details</h6>
					</div>
					<a href="checkout.html" className="btn btn-primary">Checkout</a>
				</div>
			</div>
		</div>
	);
}
