import { Link } from "react-router-dom";
import Input from "../public/Input";

export default function EditProfile() {
  return (
    <>
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
              <div className="mid-content"></div>
              <div className="right-content"></div>
            </div>
          </div>
        </header>
        <div className="page-content space-top">
          <div className="container">
            <Input
              label="Mobile Number"
              id="phone"
              type="tel"
              value="123456789"
            />
            <Input label="Full Name" id="name" value="John Doe" />
            <Input
              label="Email"
              id="eamil"
              type="email"
              value="Example@gmail.com"
              required={true}
            />
            <Input
              label="Location"
              id="loc"
              type="email"
              value="LH-12, East Wally USA"
              required={true}
            />
          </div>
        </div>
        <div className="footer fixed">
          <div className="container">
            <Link to="/Profile" className="btn btn-primary w-100">
              Save
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
