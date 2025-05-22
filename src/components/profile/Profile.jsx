import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="header shadow header-fixed border-0">
        <div className="container">
          <div className="header-content d-flex justify-content-between align-items-center">
            <div className="left-content">
              <Link to="/" className="back-btn" aria-label="Back to Home">
                <i className="icon feather icon-chevron-left"></i>
              </Link>
            </div>
            <div className="mid-content">
              <h6 className="title">Profile</h6>
            </div>
            <div className="right-content">
              {/* اگر گزینه More قرار است کار خاصی کند، این لینک را اصلاح کن */}
              <Link to="/profile" aria-label="More options">
                <i className="icon feather icon-more-vertical"></i>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="page-content space-top">
        <div className="container">
          <div className="profile-area">
            {/* Main Profile */}
            <div className="main-profile d-flex align-items-center mb-4">
              <div className="media media-60 me-3 rounded-circle overflow-hidden">
                <img
                  id="profile-img"
                  src={user?.profileImage || "/images/user-profile.jpg"}
                  alt="Profile"
                  style={{
                    cursor: "pointer",
                    maxWidth: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="profile-detail flex-grow-1">
                <h6 className="name mb-0">{user?.name || "Guest"}</h6>
                <small className="font-12 text-muted">ID: {user?.id || "-"}</small>
              </div>
              <Link to="/EditProfile" className="edit-profile" aria-label="Edit Profile">
                <i className="icon feather icon-edit-2"></i>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="content-box mb-4">
              <ul className="row g-2">
                <li className="col-6">
                  <Link to="/OrderPage" className="d-flex flex-column align-items-center text-center">
                    <div className="dz-icon-box mb-1">
                      <i className="icon feather icon-package"></i>
                    </div>
                    <span>Orders</span>
                  </Link>
                </li>
                <li className="col-6">
                  <Link to="/WishListPage" className="d-flex flex-column align-items-center text-center">
                    <div className="dz-icon-box mb-1">
                      <i className="icon feather icon-heart"></i>
                    </div>
                    <span>Wishlist</span>
                  </Link>
                </li>
                <li className="col-6">
                  <Link to="/coupon" className="d-flex flex-column align-items-center text-center">
                    <div className="dz-icon-box mb-1">
                      <i className="icon feather icon-gift"></i>
                    </div>
                    <span>Coupons</span>
                  </Link>
                </li>
                <li className="col-6">
                  <Link to="/help" className="d-flex flex-column align-items-center text-center">
                    <div className="dz-icon-box mb-1">
                      <i className="icon feather icon-headphones"></i>
                    </div>
                    <span>Help Center</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account Settings */}
            <div className="title-bar mb-3">
              <h6 className="title mb-0 font-w700">Account Settings</h6>
            </div>

            <div className="dz-list style-1">
              <ul>
                <li>
                  <Link to="/EditProfile" className="item-content item-link d-flex align-items-center">
                    <div className="dz-icon me-3">
                      <i className="icon feather icon-user"></i>
                    </div>
                    <span className="title">Edit Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to="/address" className="item-content item-link d-flex align-items-center">
                    <div className="dz-icon me-3">
                      <i className="icon feather icon-map-pin"></i>
                    </div>
                    <span className="title">Saved Addresses</span>
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="item-content item-link d-flex align-items-center btn btn-link p-0"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasLang"
                    aria-controls="offcanvasLang"
                    aria-label="Select Language"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="dz-icon me-3">
                      <i className="icon feather icon-type"></i>
                    </div>
                    <span className="title select-lang">Select Language</span>
                  </button>
                </li>
                <li>
                  {/* فرض کردم Notification Setting در حال حاضر لینک ندارد */}
                  <button
                    type="button"
                    className="item-content item-link d-flex align-items-center btn btn-link p-0 position-relative"
                    aria-label="Notification Settings"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="dz-icon me-3">
                      <i className="icon feather icon-bell"></i>
                    </div>
                    <span className="title">Notification Setting</span>
                    <div className="badge badge-primary position-absolute end-0 me-3">5</div>
                  </button>
                </li>
                <li>
                  <Link to="/welcome" className="item-content item-link d-flex align-items-center">
                    <div className="dz-icon me-3">
                      <i className="icon feather icon-log-out"></i>
                    </div>
                    <span className="title">Log Out</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Menubar */}
      <nav className="menubar-area footer-fixed rounded-0">
        <div className="toolbar-inner menubar-nav d-flex justify-content-around">
          <Link to="/home" className="nav-link active" aria-current="page">
            <i className="icon feather icon-home"></i>
            <span>Home</span>
          </Link>
          <Link to="/categori" className="nav-link">
            <i className="icon feather icon-grid"></i>
            <span>Categories</span>
          </Link>
          <Link to="/CartPage" className="nav-link cart-handle position-relative">
            <div className="hexad-menu">
              <img src="/images/menu-shape-dark.svg" className="shape-dark" alt="" />
              <img src="/images/menu-shape-light.svg" className="shape-light" alt="" />
              <i className="icon feather icon-shopping-bag"></i>
              {/* اینجا اگر می‌خوای تعداد کالاهای سبد رو نشون بدی، می‌تونی Badge اضافه کنی */}
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
      </nav>

      {/* Language Selection Offcanvas */}
      <div
        className="offcanvas offcanvas-bottom m-3 rounded"
        tabIndex="-1"
        id="offcanvasLang"
        aria-labelledby="offcanvasLangLabel"
      >
        <div className="offcanvas-header border-0 pb-0">
          <h5 className="offcanvas-title" id="offcanvasLangLabel">
            Language
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="offcanvas-body small">
          <div className="dz-list">
            <ul className="mb-2 confirm-lang list-unstyled">
              {[
                { lang: "indian", label: "Indian", flag: "/images/flags/india.svg" },
                { lang: "English", label: "English", flag: "/images/flags/united-states.svg" },
                { lang: "German", label: "German", flag: "/images/flags/germany.svg" },
                { lang: "franch", label: "French", flag: "/images/flags/france.svg" },
              ].map(({ lang, label, flag }) => (
                <li key={lang}>
                  <button
                    type="button"
                    className="btn d-flex align-items-center w-100 btn-light"
                    aria-label={`Select language ${label}`}
                  >
                    <img
                      className="me-2 rounded"
                      src={flag}
                      alt={`${label} Flag`}
                      width="20"
                      height="15"
                      loading="lazy"
                    />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
