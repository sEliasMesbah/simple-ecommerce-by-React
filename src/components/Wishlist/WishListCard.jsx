import { Link } from "react-router-dom";

export default function WishListCard({ data, onRemove }) {
  return (
    <div className="col-6">
      <div className="shop-card">
        <div className="dz-media position-relative">
          <Link to={`/product/${data.id}`}>
            <img src={data.url} alt={data.name} />
          </Link>
          {/* دکمه حذف از لیست */}
          <button
            onClick={() => onRemove(data.id)}
            className="item-bookmark active btn btn-link p-0 position-absolute top-0 end-0 m-2"
            style={{ border: "none", background: "transparent" }}
            title="Remove from wishlist"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="red"
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
          <span className="font-12">{data.name}</span>
          <h6 className="title">
            <Link to={`/product-detail/${data.id}`}>{data.describe}</Link>
          </h6>
          <h6 className="price">
            {data.offerprice}$ <del>{data.price}</del>
          </h6>
        </div>
        <div className="product-tag">
          <span className="badge badge-primary">SALE</span>
        </div>
      </div>
    </div>
  );
}
