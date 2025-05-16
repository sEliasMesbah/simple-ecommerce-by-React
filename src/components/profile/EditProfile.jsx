import { Link } from "react-router-dom";

export default function EditProfile() {
    return <>
        <div className="page-wrapper">

            <header className="header shadow header-fixed border-0">
                <div className="container">
                    <div className="header-content">
                        <div className="left-content">
                            <Link to="/Profile" className="back-btn">
                                <i className="icon feather icon-chevron-left"></i>
                            </Link>
                            <h6 className="title">Edit Profile</h6>
                        </div>
                        <div className="mid-content">
                        </div>
                        <div className="right-content">
                        </div>
                    </div>
                </div>
            </header>
            <div className="page-content space-top">
                <div className="container">
                    <div className="mb-3">
                        <label className="form-label" for="phone">Mobile Number</label>
                        <input type="tel" id="phone" className="form-control" value="0123456789" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="name">Full Name</label>
                        <input type="text" id="name" className="form-control" value="John Doe" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="email">Email</label>
                        <input type="email" id="email" className="form-control" value="Example@gmail.com" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="address">Location</label>
                        <input type="text" id="address" className="form-control" value="LH-12, East Wally USA" />
                    </div>
                </div>
            </div>
            <div className="footer fixed">
                <div className="container">
                    <Link to="/Profile" className="btn btn-primary w-100" >
                        Save
                    </Link>
                </div>
            </div>
        </div>

    </>
}