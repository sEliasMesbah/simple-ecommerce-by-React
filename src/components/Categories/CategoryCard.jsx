import { Link } from "react-router-dom";

export default function CategoriCard(props) {
    return (
        <>
            <div className="col-12 m-b15">
                <div className="dz-category-card">
                    <div
                        className="category-image"
                        style={{ backgroundImage: `linear-gradient(150deg,rgba(255, 255, 255, 0.5), transparent 100%), url("${props.data.image}")` }}
                    ></div>
                    <div className="category-content">
                        <h3 className="title">{props.data.name}</h3>
                        <p>{props.data.count} item</p>
                        <div className="shop-btn">
                            <Link to={`/category/${props.data.id}`} className="btn btn-primary btn-sm">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}