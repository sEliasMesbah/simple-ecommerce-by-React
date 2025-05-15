import { Link } from "react-router-dom";

export default function Address() {
    return <>
        <div className="page-wrapper">

            <header className="header shadow header-fixed border-0">
                <div className="container">
                    <div className="header-content">
                        <div className="left-content">
                            <Link to="/profile" className="back-btn">
                                <i className="icon feather icon-chevron-left"></i>
                            </Link>
                            <h6 className="title">Address</h6>
                        </div>
                        <div className="mid-content">
                        </div>
                        <div className="right-content">
                        </div>
                    </div>
                </div>
            </header>

            <div className="page-content space-top p-b80">
                <div className="container">
                    <Link to='/checkout' className="btn btn-outline-primary btn-block mb-3">
                        + Add New Address
                    </Link>
                    <h6 className="title">Default Address</h6>
                    <div className="card address-card">
                        <div className="card-header border-0">
                            <span className="name text-secondary font-w500">Tushar</span>
                            <div className="badge badge-primary">OFFICE</div>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>Mokshita dairy near bsnl circle</li>
                                <li>Rk puram</li>
                                <li>Kota -324009</li>
                                <li>Rajasthan</li>
                            </ul>
                            <span>Mobile: 0123456789</span>
                        </div>
                        <div className="card-footer">
                            <a className="footer-link text-danger" href="javascript:void(0);">Remove</a>
                            <a className="footer-link" href="javascript:void(0);">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}