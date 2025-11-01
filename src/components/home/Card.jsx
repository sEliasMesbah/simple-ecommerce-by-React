import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; // مسیر درست رو بزار

const getDiscountedPrice = (price, offer) => {
	return Math.floor(price * (1 - offer / 100));
};

export default function Card({ data }) {
	const { user } = useContext(AuthContext);
	const [liked, setLiked] = useState(false);

	useEffect(() => {
		if (!user) {
		  setLiked(false);  // وقتی کاربر لاگ اوت کرد، liked رو صفر کن
		  return;
		}
	  
		fetch(`http://localhost:3001/wishlists/${user.id}`)
		  .then(res => res.json())
		  .then(wishlist => {
			const exists = wishlist.items?.some(item => item.id === data.id);
			setLiked(exists);
		  })
		  .catch(() => setLiked(false));
	  }, [user, data.id]);

	const toggleLike = async (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (!user) {
			alert("Please log in to add to favorites.");
			return;
		}

		try {
			let wishlist;
			let res = await fetch(`http://localhost:3001/wishlists/${user.id}`);

			if (res.status === 404) {
				const newWishlist = {
					id: user.id,
					userId: user.id,
					items: []
				};

				const postRes = await fetch(`http://localhost:3001/wishlists`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newWishlist),
				});

				if (!postRes.ok) {
					alert("Problem creating wishlist");
					return;
				}

				wishlist = newWishlist;
			} else if (res.ok) {
				wishlist = await res.json();
			} else {
				alert("Error retrieving wishlist");
				return;
			}

			let updatedItems = [];
			if (liked) {
				updatedItems = wishlist.items.filter(item => item.id !== data.id);
			} else {
				updatedItems = [...(wishlist.items || []), {
					id: data.id,
					name: data.name,
					url: data.images[0],
					describe: data.description || "",
					offerprice: getDiscountedPrice(data.price, data.offer),
					price: data.price
				}];
			}

			const patchRes = await fetch(`http://localhost:3001/wishlists/${user.id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ items: updatedItems })
			});

			if (patchRes.ok) setLiked(!liked);
			else alert("Error updating wishlist");
		} catch (err) {
			console.error(err);
			alert("Error connecting to server");
		}
	};

	return (
		<div className="col-6">
			<div className="shop-card">
				<div className="dz-media" style={{ maxHeight: "370px", display: "flex", position: "relative" }}>
					<Link to={`/product/${data.id}`} style={{ width: "100%" }}>
						<img
							src={data.images[0]}
							alt={data.name}
							style={{ maxHeight: "100%", margin: "0 auto", display: "block", width: "auto", padding: "36px 0 0" }}
						/>
					</Link>

					<button
						onClick={toggleLike}
						className="item-bookmark btn btn-link p-0 position-absolute top-0 end-0 m-2"
						style={{ border: "none", background: "transparent", cursor: "pointer" }}
						title={liked ? "Remove from wishlist" : "Add to wishlist"}
						aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill={liked ? "red" : "none"}
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="feather feather-heart"
						>
							<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
						</svg>
					</button>
				</div>

				<div className="dz-content">
					<span className="font-12">{data.category?.name}</span>
					<h6
						className="title"
						style={{
							display: "-webkit-box",
							WebkitLineClamp: "2",
							WebkitLineBreak: "2",
							WebkitBoxOrient: "vertical",
							overflow: "hidden",
							lineHeight: "1.17",
							fontSize: "0.9rem"
						}}
					>
						<Link to={`/product/${data.id}`}>{data.name}</Link>
					</h6>
					<h6 className="price d-flex gap-3">
						{data.offer ? (
							<>
								<h6 className="price">
									${getDiscountedPrice(data.price, data.offer).toLocaleString()}
									<del>${data.price}</del>
								</h6>
							</>
						) : (
							<>
								<span>${data.price}</span>
							</>
						)}
					</h6>
				</div>

				{data.offer ? (
					<div className="product-tag" dir="ltr">
						<span className="badge badge-secondary">{data.offer}% Off</span>
					</div>
				) : null}
			</div>
		</div>
	);
}
