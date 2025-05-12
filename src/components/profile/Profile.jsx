export default function Profile() {
    return <>
        <div class="page-wrapper">
            <div id="preloader">
            </div>
            <header class="header shadow header-fixed border-0">
                <div class="container">
                    <div class="header-content">
                        <div class="left-content">
                            <a href="javascript:void(0);" class="back-btn">
                                <i class="icon feather icon-chevron-left"></i>
                            </a>
                        </div>
                        <div class="mid-content">
                            <h6 class="title">Profile</h6>
                        </div>
                        <div class="right-content">
                            <a href="javascript:void(0);">
                                <i class="icon feather icon-more-vertical-"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div class="page-content space-top">
                <div class="container">
                    <div class="profile-area">
                        <div class="main-profile">
                            <div class="media media-60 me-3 rounded-circle">
                                <img src="assets/images/user-profile.jpg" alt="profile-image" />
                            </div>
                            <div class="profile-detail">
                                <h6 class="name">Thomas Djono</h6>
                                <span class="font-12">ID 02123141</span>
                            </div>
                            <a href="edit-profile.html" class="edit-profile">
                                <i class="icon feather icon-edit-2"></i>
                            </a>
                        </div>
                        <div class="content-box">
                            <ul class="row g-2">
                                <li class="col-6">
                                    <a href="order.html">
                                        <div class="dz-icon-box">
                                            <i class="icon feather icon-package"></i>
                                        </div>
                                        <span>Order</span>
                                    </a>
                                </li>
                                <li class="col-6">
                                    <a href="wishlist.html">
                                        <div class="dz-icon-box">
                                            <i class="icon feather icon-heart"></i>
                                        </div>
                                        <span>Wishlist</span>
                                    </a>
                                </li>
                                <li class="col-6">
                                    <a href="coupon.html">
                                        <div class="dz-icon-box">
                                            <i class="icon feather icon-gift"></i>
                                        </div>
                                        <span>Coupons</span>
                                    </a>
                                </li>
                                <li class="col-6">
                                    <a href="javascript:void(0);">
                                        <div class="dz-icon-box">
                                            <i class="icon feather icon-headphones"></i>
                                        </div>
                                        <span>Help Center</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="title-bar">
                            <h6 class="title mb-0 font-w700">Account Settings</h6>
                        </div>
                        <div class="dz-list style-1">
                            <ul>
                                <li>
                                    <a href="edit-profile.html" class="item-content item-link">
                                        <div class="dz-icon">
                                            <i class="icon feather icon-user"></i>
                                        </div>
                                        <div class="dz-inner">
                                            <span class="title">Edit Profile</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="address.html" class="item-content item-link">
                                        <div class="dz-icon">
                                            <i class="icon feather icon-map-pin"></i>
                                        </div>
                                        <div class="dz-inner">
                                            <span class="title">Saved Addresses</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="item-content item-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLang" aria-controls="offcanvasLang">
                                        <div class="dz-icon">
                                            <i class="icon feather icon-type"></i>
                                        </div>
                                        <div class="dz-inner">
                                            <span class="title select-lang">Select Language</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="item-content item-link">
                                        <div class="dz-icon">
                                            <i class="icon feather icon-bell"></i>
                                        </div>
                                        <div class="dz-inner me-2">
                                            <span class="title">Notification Setting</span>
                                        </div>
                                        <div class="badge badge-primary">5</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="welcome.html" class="item-content item-link">
                                        <div class="dz-icon">
                                            <i class="icon feather icon-log-out"></i>
                                        </div>
                                        <div class="dz-inner">
                                            <span class="title">Log Out</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menubar-area footer-fixed rounded-0">
                <div class="toolbar-inner menubar-nav">
                    <a href="index.html" class="nav-link">
                        <i class="icon feather icon-home"></i>
                        <span>Home</span>
                    </a>
                    <a href="category.html" class="nav-link">
                        <i class="icon feather icon-grid"></i>
                        <span>Categories</span>
                    </a>
                    <a href="cart.html" class="nav-link cart-handle">
                        <div class="hexad-menu">
                            <img src="assets/images/menu-shape-dark.svg" class="shape-dark" alt="" />
                            <img src="assets/images/menu-shape-light.svg" class="shape-light" alt="" />
                            <i class="icon feather icon-shopping-bag"></i>
                        </div>
                    </a>
                    <a href="wishlist.html" class="nav-link">
                        <i class="icon feather icon-heart"></i>
                        <span>Wishlist</span>
                    </a>
                    <a href="profile.html" class="nav-link active">
                        <i class="icon feather icon-user"></i>
                        <span>Profile</span>
                    </a>
                </div>
            </div>
            <div class="offcanvas offcanvas-bottom m-3 rounded" tabindex="-1" id="offcanvasLang">
                <div class="offcanvas-header border-0 pb-0">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Language</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="offcanvas-body small">
                    <div class="dz-list">
                        <ul class="mb-2 confirm-lang">
                            <li data-lang="indian">
                                <a href="javascript:void(0);" class="item-content py-2 item-link">
                                    <div class="media media-30 me-3">
                                        <img src="assets/images/flags/india.svg" alt="/" />
                                    </div>
                                    <div class="dz-inner">
                                        <span class="title">Indian</span>
                                    </div>
                                </a>
                            </li>
                            <li data-lang="English">
                                <a href="javascript:void(0);" class="item-content py-2 item-link">
                                    <div class="media media-30 me-3">
                                        <img src="assets/images/flags/united-states.svg" alt="/" />
                                    </div>
                                    <div class="dz-inner">
                                        <span class="title">English</span>
                                    </div>
                                </a>
                            </li>
                            <li data-lang="German">
                                <a href="javascript:void(0);" class="item-content py-2 item-link">
                                    <div class="media media-30 me-3">
                                        <img src="assets/images/flags/germany.svg" alt="/" />
                                    </div>
                                    <div class="dz-inner">
                                        <span class="title">German</span>
                                    </div>
                                </a>
                            </li>
                            <li data-lang="Italian">
                                <a href="javascript:void(0);" class="item-content py-2 item-link">
                                    <div class="media media-30 me-3">
                                        <img src="assets/images/flags/italy.svg" alt="/" />
                                    </div>
                                    <div class="dz-inner">
                                        <span class="title">Italian</span>
                                    </div>
                                </a>
                            </li>
                            <li class="border-0" data-lang="Spainsh">
                                <a href="javascript:void(0);" class="item-content py-2 item-link">
                                    <div class="media media-30 me-3">
                                        <img src="assets/images/flags/spain.svg" alt="/" />
                                    </div>
                                    <div class="dz-inner">
                                        <span class="title">Spainsh</span>
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