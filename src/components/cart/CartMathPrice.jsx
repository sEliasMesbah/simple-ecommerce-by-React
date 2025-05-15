export default function CartMathPrice({ total }) {
	// نرخ‌ها به درصد
	const taxRate = 0.005;
	const deliveryRate = 0.008;

	// محاسبه‌ها
	const taxAmount = total * taxRate;
	const deliveryFee = total * deliveryRate;
	const finalTotal = total + taxAmount + deliveryFee;

	return (
		<>
			<div className="view-cart mb-2">
				<ul>
					<li>
						<span className="name">Price :</span>
						<span className="text-secondary font-w500">${total.toFixed(2)}</span>
					</li>
					<li>
						<span className="name">Tax :</span>
						<span className="text-secondary font-w500">0.5% (${taxAmount.toFixed(2)})</span>
					</li>
					<li>
						<span className="name">Delivery Fee :</span>
						<span className="text-secondary font-w500">0.8% (${deliveryFee.toFixed(2)})</span>
					</li>
					<div className="divider divider-dashed mt-0"></div>
					<li>
						<span className="name">Total :</span>
						<h4 className="price">${finalTotal.toFixed(2)}</h4>
					</li>
				</ul>
			</div>
		</>
	);
}
