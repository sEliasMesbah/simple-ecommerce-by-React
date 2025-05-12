import { Link } from "react-router-dom";

export default function Profile() {
    return <>
        <div className="page-wrapper">
            <header className="header shadow header-fixed border-0">
                <div className="container">
                    <div className="header-content">
                        <div className="left-content">
                            <a href="javascript:void(0);" className="back-btn">
                                <i className="icon feather icon-chevron-left"></i>
                            </a>
                        </div>
                        <div className="mid-content">
                            <h6 className="title">Profile</h6>
                        </div>
                        <div className="right-content">
                            <a href="javascript:void(0);">

                                <i className="icon feather icon-more-vertical-"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="page-content space-top">
                <div className="container">
                    <div className="profile-area">
                        <div className="main-profile">
                            <div className="media media-60 me-3 rounded-circle">
                                <img src="assets/images/user-profile.jpg" alt="profile-image" />
                            </div>
                            <div className="profile-detail">
                                <h6 className="name">Thomas Djono</h6>
                                <span className="font-12">ID 02123141</span>
                            </div>
                            <Link to="/EditProfile" className="edit-profile">
                                <i className="icon feather icon-edit-2"></i>
                            
                            </Link>
            
                        </div>
                        <div className="content-box">
                            <ul className="row g-2">
                                <li className="col-6">
                                    <a href="order.html">
                                        <div className="dz-icon-box">
                                            <i className="icon feather icon-package"></i>
                                        </div>
                                        <span>Order</span>
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="wishlist.html">
                                        <div className="dz-icon-box">
                                            <i className="icon feather icon-heart"></i>
                                        </div>
                                        <span>Wishlist</span>
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="coupon.html">
                                        <div className="dz-icon-box">
                                            <i className="icon feather icon-gift"></i>
                                        </div>
                                        <span>Coupons</span>
                                    </a>
                                </li>
                                <li className="col-6">
                                    <a href="javascript:void(0);">
                                        <div className="dz-icon-box">
                                            <i className="icon feather icon-headphones"></i>
                                        </div>
                                        <span>Help Center</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="title-bar">
                            <h6 className="title mb-0 font-w700">Account Settings</h6>
                        </div>
                        <div className="dz-list style-1">
                            <ul>
                                <li>
                                    <Link to="/EditProfile" className="item-content item-link" >
                                        <div className="dz-icon">
                                            <i className="icon feather icon-user"></i>
                                        </div>
                                        <div className="dz-inner">
                                            <span className="title">Edit Profile</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <a href="address.html" className="item-content item-link">
                                        <div className="dz-icon">
                                            <i className="icon feather icon-map-pin"></i>
                                        </div>
                                        <div className="dz-inner">
                                            <span className="title">Saved Addresses</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="item-content item-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLang" aria-controls="offcanvasLang">
                                        <div className="dz-icon">
                                            <i className="icon feather icon-type"></i>
                                        </div>
                                        <div className="dz-inner">
                                            <span className="title select-lang">Select Language</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="item-content item-link">
                                        <div className="dz-icon">
                                            <i className="icon feather icon-bell"></i>
                                        </div>
                                        <div className="dz-inner me-2">
                                            <span className="title">Notification Setting</span>
                                        </div>
                                        <div className="badge badge-primary">5</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="welcome.html" className="item-content item-link">
                                        <div className="dz-icon">
                                            <i className="icon feather icon-log-out"></i>
                                        </div>
                                        <div className="dz-inner">
                                            <span className="title">Log Out</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menubar-area footer-fixed rounded-0">
                <div className="toolbar-inner menubar-nav">
                    <Link to="/" className="nav-link active">
                        <i className="icon feather icon-home"></i>
                        <span>Home</span>
                    </Link>
                    <Link to="/categori" className="nav-link">
                        <i className="icon feather icon-grid"></i>
                        <span>Categories</span>
                    </Link>
                    <a href="cart.html" className="nav-link cart-handle">
                        <div className="hexad-menu">
                            <img src="assets/images/menu-shape-dark.svg" className="shape-dark" alt="" />
                            <img src="assets/images/menu-shape-light.svg" className="shape-light" alt="" />
                            <i className="icon feather icon-shopping-bag"></i>
                        </div>
                    </a>
                    <a href="wishlist.html" className="nav-link">
                        <i className="icon feather icon-heart"></i>
                        <span>Wishlist</span>
                    </a>
                    <Link to="/profile" className="nav-link">
                        <i className="icon feather icon-user"></i>
                        <span>Profile</span>
                    </Link>
                </div>
            </div>
            <div className="offcanvas offcanvas-bottom m-3 rounded" tabindex="-1" id="offcanvasLang">
                <div className="offcanvas-header border-0 pb-0">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Language</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="offcanvas-body small">
                    <div className="dz-list">
                        <ul className="mb-2 confirm-lang">
                            <li data-lang="indian">
                                <a href="javascript:void(0);" className="item-content py-2 item-link">
                                    <div className="media media-30 me-3">
                                        <img src="assets/images/flags/india.svg" alt="/" />
                                    </div>
                                    <div className="dz-inner">
                                        <span className="title">Indian</span>
                                    </div>
                                </a>
                            </li>
                            <li data-lang="English">
                                <a href="javascript:void(0);" className="item-content py-2 item-link">
                                    <div className="media media-30 me-3">
                                        <img src="assets/images/flags/united-states.svg" alt="/" />
                                    </div>
                                    <div className="dz-inner">
                                        <span className="title">English</span>
                                    </div>
                                </a>
                            </li>
                            <li data-lang="German">
                                <a href="javascript:void(0);" className="item-content py-2 item-link">
                                    <div className="media media-30 me-3">
                                        <img src="assets/images/flags/germany.svg" alt="/" />
                                    </div>
                                    <div className="dz-inner">
                                        <span className="title">German</span>
                                    </div>
                                </a>
                            </li>
                            <li data-lang="Italian">
                                <a href="javascript:void(0);" className="item-content py-2 item-link">
                                    <div className="media media-30 me-3">
                                        <img src="assets/images/flags/italy.svg" alt="/" />
                                    </div>
                                    <div className="dz-inner">
                                        <span className="title">Italian</span>
                                    </div>
                                </a>
                            </li>
                            <li className="border-0" data-lang="Spainsh">
                                <a href="javascript:void(0);" className="item-content py-2 item-link">
                                    <div className="media media-30 me-3">
                                        <img src="assets/images/flags/spain.svg" alt="/" />
                                    </div>
                                    <div className="dz-inner">
                                        <span className="title">Spainsh</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </>
}