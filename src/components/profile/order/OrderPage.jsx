import { Link } from "react-router-dom";

const OrderPage = () => {
    return <>
        <div className="page-wrapper">
            <header className="header shadow header-fixed border-0">
                <div className="container">
                    <div className="header-content">
                        <div className="left-content">
                            <Link to="/profile" className="back-btn">
                                <i className="icon feather icon-chevron-left"></i>
                            </Link>
                            <h6 className="title">Orders</h6>
                        </div>
                        <div className="mid-content">
                        </div>
                        <div className="right-content">
                            <a href="search.html" className="search-icon">
                                <i className="icon feather icon-search"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="page-content space-top">
                <div className="container p-0">
                    <div className="dz-tab style-1">
                        <div className="tab-slide-effect">
                            <ul className="nav nav-tabs" id="myTab2" role="tablist">
                                <li className="tab-active-indicator" style={{ width: "90.7188px", transform: "translateX(0px)" }}></li>
                                <li className="nav-item active" role="presentation">
                                    <button className="nav-link active" id="home-tab2" data-bs-toggle="tab" data-bs-target="#home-tab-pane2" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">All</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab2" data-bs-toggle="tab" data-bs-target="#profile-tab-pane2" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">On Delivery</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="content-tab2" data-bs-toggle="tab" data-bs-target="#contact-tab-pane2" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Completed</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="order-tab2" data-bs-toggle="tab" data-bs-target="#order-tab-pane2" type="button" role="tab" aria-controls="order-tab-pane" aria-selected="false">Completed</button>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content" id="myTabContent2">
                            <div className="tab-pane fade active show" id="home-tab-pane2" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="dz-order">
                                            <div className="order-info">
                                                <div className="pe-2">
                                                    <span className="productId">#12451245</span>
                                                    <h6 className="title"><a href="product-detail.html">Brown Women Shirts by Coklat Cloth</a></h6>
                                                </div>
                                                <div className="media media-70">
                                                    <img src="assets/images/popular/small/pic1.png" />
                                                </div>
                                            </div>
                                            <div className="order-detail">
                                                <span>GREY Variant</span>
                                                <div className="d-flex gap-5">
                                                    <span className="quantity">1x</span>
                                                    <h5 className="price">$47.6</h5>
                                                </div>
                                            </div>
                                            <div className="status">
                                                <a href="javascript:void(0);" className="btn btn-sm btn-success light me-4">Completed</a>
                                                <p className="mb-0 description">Order Received by [Louis Simatupang]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="dz-order">
                                            <div className="order-info">
                                                <div className="pe-2">
                                                    <span className="productId">#12451245</span>
                                                    <h6 className="title"><a href="product-detail.html">Women Sleep Suits by Femall Clothings</a></h6>
                                                </div>
                                                <div className="media media-70">
                                                    <img src="assets/images/popular/small/pic2.png" />
                                                </div>
                                            </div>
                                            <div className="order-detail">
                                                <span>GREY Variant</span>
                                                <div className="d-flex gap-5">
                                                    <span className="quantity">2x</span>
                                                    <h5 className="price">$47.6</h5>
                                                </div>
                                            </div>
                                            <div className="status">
                                                <a href="javascript:void(0);" className="btn btn-sm btn-danger light me-4">Canceled</a>
                                                <p className="mb-0 description">Reach on payment due date</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="dz-order">
                                            <div className="order-info">
                                                <div className="pe-2">
                                                    <span className="productId">#12451245</span>
                                                    <h6 className="title"><a href="product-detail.html">Red Candy Handy Bag with Random Accessories</a></h6>
                                                </div>
                                                <div className="media media-70">
                                                    <img src="assets/images/popular/small/pic3.png" />
                                                </div>
                                            </div>
                                            <div className="order-detail">
                                                <span>GREY Variant</span>
                                                <div className="d-flex gap-5">
                                                    <span className="quantity">1x</span>
                                                    <h5 className="price">$50.6</h5>
                                                </div>
                                            </div>
                                            <div className="status">
                                                <a href="javascript:void(0);" className="btn btn-sm btn-info light me-4">On Delivery</a>
                                                <p className="mb-0 description">On the way by Courir  [H. Stefanus]</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="dz-order">
                                            <div className="order-info">
                                                <div className="pe-2">
                                                    <span className="productId">#12451245</span>
                                                    <h6 className="title"><a href="product-detail.html">Women Sleep Suits by Femall Clothings</a></h6>
                                                </div>
                                                <div className="media media-70">
                                                    <img src="assets/images/popular/small/pic1.png" />
                                                </div>
                                            </div>
                                            <div className="order-detail">
                                                <span>GREY Variant</span>
                                                <div className="d-flex gap-5">
                                                    <span className="quantity">1x</span>
                                                    <h5 className="price">$47.6</h5>
                                                </div>
                                            </div>
                                            <div className="status">
                                                <a href="javascript:void(0);" className="btn btn-sm btn-success light me-4">Completed</a>
                                                <p className="mb-0 description">Order Received by [Louis Simatupang]</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile-tab-pane2" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="dz-order">
                                            <div className="order-info">
                                                <div className="pe-2">
                                                    <span className="productId">#12451245</span>
                                                    <h6 className="title"><a href="product-detail.html">Red Candy Handy Bag with Random Accessories</a></h6>
                                                </div>
                                                <div className="media media-70">
                                                    <img src="assets/images/popular/small/pic3.png" />
                                                </div>
                                            </div>
                                            <div className="order-detail">
                                                <span>GREY Variant</span>
                                                <div className="d-flex gap-5">
                                                    <span className="quantity">1x</span>
                                                    <h5 className="price">$50.6</h5>
                                                </div>
                                            </div>
                                            <div className="status">
                                                <a href="javascript:void(0);" className="btn btn-sm btn-info light me-4">On Delivery</a>
                                                <p className="mb-0 description">On the way by Courir  [H. Stefanus]</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="contact-tab-pane2" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="dz-order">
                                            <div className="order-info">
                                                <div className="pe-2">
                                                    <span className="productId">#12451245</span>
                                                    <h6 className="title"><a href="product-detail.html">Brown Women Shirts by Coklat Cloth</a></h6>
                                                </div>
                                                <div className="media media-70">
                                                    <img src="assets/images/popular/small/pic1.png" />
                                                </div>
                                            </div>
                                            <div className="order-detail">
                                                <span>GREY Variant</span>
                                                <div className="d-flex gap-5">
                                                    <span className="quantity">1x</span>
                                                    <h5 className="price">$47.6</h5>
                                                </div>
                                            </div>
                                            <div className="status">
                                                <a href="javascript:void(0);" className="btn btn-sm btn-success light me-4">Completed</a>
                                                <p className="mb-0 description">Order Received by [Louis Simatupang]</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="order-tab-pane2" role="tabpanel" aria-labelledby="order-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="dz-order">
                                            <div className="order-info">
                                                <div className="pe-2">
                                                    <span className="productId">#12451245</span>
                                                    <h6 className="title"><a href="product-detail.html">Women Sleep Suits by Femall Clothings</a></h6>
                                                </div>
                                                <div className="media media-70">
                                                    <img src="assets/images/popular/small/pic2.png" />
                                                </div>
                                            </div>
                                            <div className="order-detail">
                                                <span>GREY Variant</span>
                                                <div className="d-flex gap-5">
                                                    <span className="quantity">2x</span>
                                                    <h5 className="price">$47.6</h5>
                                                </div>
                                            </div>
                                            <div className="status">
                                                <a href="javascript:void(0);" className="btn btn-sm btn-danger light me-4">Canceled</a>
                                                <p className="mb-0 description">Reach on payment due date</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}
export default OrderPage;