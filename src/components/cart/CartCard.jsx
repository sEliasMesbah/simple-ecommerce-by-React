import { useNavigate } from "react-router-dom";

export default function CartCard({ data, onQuantityChange }) {
	const navigate = useNavigate();

	const goToProduct = () => {
		navigate(`/product/${data.id}`);
	};

	return (
		<div className="cart-box" onClick={goToProduct} style={{ cursor: "pointer" }}>
			<div className="dz-media">
				<img src={data.url} alt="" />
			</div>
			<div className="cart-content">
				<h6 className="title mb-1">{data.title}</h6>
				<span className="font-12 brand-tag">{data.describe}</span>
				<div className="cart-footer">
					<h6 className="price mb-0">
						${data.offerprice} <del>${data.price}</del>
					</h6>
					<div className="dz-stepper style-2" onClick={(e) => e.stopPropagation()}>
						<div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
							<span className="input-group-btn input-group-prepend">
								<button
									className="btn btn-primary bootstrap-touchspin-down"
									type="button"
									onClick={() => onQuantityChange(data.id, -1)}
								>
									-
								</button>
							</span>
							<input
								readOnly
								className="stepper form-control"
								type="text"
								value={data.quantity}
							/>
							<span className="input-group-btn input-group-append">
								<button
									className="btn btn-primary bootstrap-touchspin-up"
									type="button"
									onClick={() => onQuantityChange(data.id, 1)}
								>
									+
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
