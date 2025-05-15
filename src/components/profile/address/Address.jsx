import { Link } from "react-router-dom";

export default function Address() {
    return <>
        <div class="page-wrapper">

            <header class="header shadow header-fixed border-0">
                <div class="container">
                    <div class="header-content">
                        <div class="left-content">
                            <Link to="/profile" class="back-btn">
                                <i class="icon feather icon-chevron-left"></i>
                            </Link>
                            <h6 class="title">Address</h6>
                        </div>
                        <div class="mid-content">
                        </div>
                        <div class="right-content">
                        </div>
                    </div>
                </div>
            </header>

            <div class="page-content space-top p-b80">
                <div class="container">
                    <Link to='/checkout' class="btn btn-outline-primary btn-block mb-3">
                        + Add New Address
                    </Link>
                    <h6 class="title">Default Address</h6>
                    <div class="card address-card">
                        <div class="card-header border-0">
                            <span class="name text-secondary font-w500">Tushar</span>
                            <div class="badge badge-primary">OFFICE</div>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>Mokshita dairy near bsnl circle</li>
                                <li>Rk puram</li>
                                <li>Kota -324009</li>
                                <li>Rajasthan</li>
                            </ul>
                            <span>Mobile: 0123456789</span>
                        </div>
                        <div class="card-footer">
                            <a class="footer-link text-danger" href="javascript:void(0);">Remove</a>
                            <a class="footer-link" href="javascript:void(0);">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}