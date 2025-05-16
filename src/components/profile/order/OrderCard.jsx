const OrderCard = ({ title, quantity, price, status, description, image, style,cls}) => {
    return (<>
        {/* <div className="col-12">
            <div className="card dz-card style-2">
                <div className="card-body d-flex align-items-center">
                    <div className="dz-media me-3">
                        <img src={image} alt={title} style={style} className="img-fluid rounded" width={80} />
                    </div>
                    <div className="dz-content flex-grow-1">
                        <h6 className="title mb-1">{title}</h6>
                        <p className="mb-1"> x{quantity}</p>
                        <p className="mb-1">Price: ${price}</p>
                        <p className="mb-1">Status: <strong>{status}</strong></p>
                        <small className="text-muted">{description}</small>
                    </div>
                </div>
            </div>
        </div> */}
        <div className="col-12">
            <div className="dz-order">
                <div className="order-info">
                    <div className="pe-2">
                        <span className="productId">#12451245</span>
                        <h6 className="title"><a href="product-detail.html">{title}</a></h6>
                    </div>
                    <div className="media media-70">
                        <img src={image} />
                    </div>
                </div>
                <div className="order-detail">
                    <span>GREY Variant</span>
                    <div className="d-flex gap-5">
                        <span className="quantity">{quantity}x</span>
                        <h5 className="price">${price}</h5>
                    </div>
                </div>
                <div className="status">
                    <a href="javascript:void(0);" className={cls}>{status}</a>
                    <p className="mb-0 description">{description}</p>
                </div>
            </div>
        </div>
    </>

    );
};

export default OrderCard;
