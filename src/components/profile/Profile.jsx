import { Link } from "react-router-dom";

export default function Profile() {
    return <>
        <div class="page-wrapper">
            <header class="header shadow header-fixed border-0">
                <div class="container">
                    <div class="header-content">
                        <div class="left-content">
                            <Link to="/" class="back-btn">
                                <i class="icon feather icon-chevron-left"></i>
                            </Link>
                        </div>
                        <div className="mid-content">
                            <h6 className="title">Profile</h6>
                        </div>
                        <div className="right-content">

                            <Link to="/profile">
                                <i className="icon feather icon-more-vertical-"></i>
                            </Link>

                        </div>
                    </div>
                </div>
            </header>

            <div class="page-content space-top">
                <div class="container">
                    <div class="profile-area">
                        <div class="main-profile">
                            <div class="media media-60 me-3 rounded-circle">
                                <img id="profile-img" src="/images/user-profile.jpg" alt="profile-image" style={{
                                    cursor: "pointer", maxWidth: "100px",
                                    borderRadius: "50%"
                                }} />
                                <div id="imgModal" class="img-modal">
                                    <span class="close">&times;</span>
                                    <img class="img-modal-content" id="modal-img" />
                                </div>

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
                                    <Link to="/OrderPage">
                                        <div className="dz-icon-box">
                                            <i className="icon feather icon-package"></i>
                                        </div>
                                        <span>Order</span>
                                    </Link>
                                </li>
                                <li className="col-6">
                                    <Link to="/WishListPage">
                                        <div className="dz-icon-box">
                                            <i className="icon feather icon-heart"></i>
                                        </div>
                                        <span>Wishlist</span>
                                    </Link>

                                </li>
                                <li className="col-6">
                                    <Link to="/coupon">
                                        <div className="dz-icon-box">
                                            <i className="icon feather icon-gift"></i>
                                        </div>
                                        <span>Coupons</span>
                                    </Link>
                                </li>
                                <li className="col-6">
                                    <Link to="/help">

                                        <div className="dz-icon-box">
                                            <i className="icon feather icon-headphones"></i>
                                        </div>
                                        <span>Help Center</span>

                                    </Link>
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

                                    <Link to="/address" className="item-content item-link">
                                        <div className="dz-icon">
                                            <i className="icon feather icon-map-pin"></i>
                                        </div>
                                        <div className="dz-inner">
                                            <span className="title">Saved Addresses</span>
                                        </div>
                                    </Link>

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
                                    <Link to="/welcome" className="item-content item-link">
                                        <div className="dz-icon">
                                            <i className="icon feather icon-log-out"></i>
                                        </div>
                                        <div className="dz-inner">
                                            <span className="title">Log Out</span>
                                        </div>
                                    </Link>
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

                    <Link to="/CartPage" className="nav-link cart-handle">
                        <div className="hexad-menu">
                            <img src="/images/menu-shape-dark.svg" className="shape-dark" alt="" />
                            <img src="/images/menu-shape-light.svg" className="shape-light" alt="" />
                            <i className="icon feather icon-shopping-bag"></i>
                        </div>
                    </Link>

                    <Link to="/WishListPage" className="nav-link">
                        <i className="icon feather icon-heart"></i>
                        <span>Wishlist</span>
                    </Link>
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
                                        <img src="/images/flags/india.svg" alt="/" />
                                    </div>
                                    <div className="dz-inner">
                                        <span className="title">Indian</span>
                                    </div>
                                </a>
                            </li>
                            <li data-lang="English">
                                <a href="javascript:void(0);" className="item-content py-2 item-link">
                                    <div className="media media-30 me-3">
                                        <img src="/images/flags/united-states.svg" alt="/" />
                                    </div>
                                    <div className="dz-inner">
                                        <span className="title">English</span>
                                    </div>
                                </a>
                            </li>
                            <li data-lang="German">
                                <a href="javascript:void(0);" className="item-content py-2 item-link">
                                    <div className="media media-30 me-3">
                                        <img src="/images/flags/germany.svg" alt="/" />
                                    </div>
                                    <div className="dz-inner">
                                        <span className="title">German</span>
                                    </div>
                                </a>
                            </li>
                            <li data-lang="Italian">
                                <a href="javascript:void(0);" className="item-content py-2 item-link">
                                    <div className="media media-30 me-3">
                                        <img src="/images/flags/italy.svg" alt="/" />
                                    </div>
                                    <div className="dz-inner">
                                        <span className="title">Italian</span>
                                    </div>
                                </a>
                            </li>
                            <li className="border-0" data-lang="Spainsh">
                                <a href="javascript:void(0);" className="item-content py-2 item-link">
                                    <div className="media media-30 me-3">
                                        <img src="/images/flags/spain.svg" alt="/" />
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