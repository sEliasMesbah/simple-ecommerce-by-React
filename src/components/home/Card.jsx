import { Link } from "react-router-dom";
const getDiscountedPrice = (price, offer) => {
	return Math.floor(price * (1 - offer / 100));
};
export default function Card(props){
    return <>
		<div className="col-6 col-md-4" style={{direction:"rtl"}}>
			<div className="shop-card">
				<div className="dz-media">
					<Link to={`/product/${props.data?.id}`}>
						<img src={props.data?.images[0]} alt="image" />	
					</Link>
					<a className="item-bookmark">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
					</a>
				</div>
				<div className="dz-content">
					<span className="font-12">{props.data?.category?.name}</span>
					<h6
						className="title"
						style={{
							display: '-webkit-box',
							height:"33px",
							WebkitLineClamp: '2',
							WebkitLineBreak: '2',
							WebkitBoxOrient: 'vertical',
							overflow: 'hidden',
							lineHeight: '1.17',
							fontWeight: '600',
							fontSize: '0.9rem'
						}}
					>
						<Link to={`/product/${props.data?.id}`}>{props.data?.name}</Link>
					</h6>
					<h6 className="price d-flex gap-3">
						{/* <span>{props.data?.price.toLocaleString()} هزارتومان</span>
						{props.data?.offer ? <del>{props.data?.price.toLocaleString()}</del> : ""} */}
						{
							props.data?.offer ? (
								<>
									<span>
										{getDiscountedPrice(props.data?.price, props.data?.offer).toLocaleString()}
										<span> تومان </span>
									</span>
									<del>{props.data?.price.toLocaleString()}</del>
								</>
							) : (
								<>
									<span>{props.data?.price.toLocaleString()} تومان </span>
								</>
							)
						}
					</h6>
				</div>
				{
				props.data.offer ? <div className="product-tag" dir="ltr">
						<span className="badge badge-secondary">{props.data.offer}% Off</span>
					</div> : ""
				}
			</div>
		</div>
    </>
}