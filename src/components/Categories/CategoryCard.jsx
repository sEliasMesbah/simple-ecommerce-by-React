export default function CategoriCard(props) {
    return (
        <>
            <div className="col-12 m-b15">
                <div className="dz-category-card">
                    <div
                        className="category-image"
                        style={{ backgroundImage: `url(${props.data.url})` }}
                    ></div>
                    <div className="category-content">
                        <h3 className="title">{props.data.title}</h3>
                        <p>{props.data.number} item</p>
                        <div className="shop-btn">
                            <a href="product.html" className="btn btn-primary btn-sm">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}