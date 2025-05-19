import { Link } from "react-router-dom";
import Input from "../components/public/Input";
export default function Register() {
  return (
    <>
      <div className="page-content">
        <div className="account-box">
          <div className="container">
            <div className="logo-area">
              <img
                className="logo-dark"
                src="/images/logos/light/logo1.svg"
                alt=""
              />
              <img
                className="logo-light"
                src="/images/logos/light/logo1.svg"
                alt=""
              />
            </div>
            <div className="section-head text-center pt-0">
              <h2>Create your account</h2>
              <p>Create an account to continue!</p>
            </div>
            <div className="account-area">
              <form>
                <div className="mb-3">
                  <Input
                    label="username"
                    id="name"
                    type="text"
                    placeholder="Type Username Here"
                  />
                </div>
                <div>
                  <Input
                    label="Password"
                    id="password"
                    type="password"
                    placeholder="Type Password Here"
                  />
                </div>
                <div>
                  <Input
                    label="Password"
                    id="confirm_password"
                    type="password"
                    placeholder="Confirm Password "
                  />
                </div>
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Checked-1"
                  />
                  <label className="form-check-label" for="Checked-1">
                    I agree to all Terms, Privacy Policy and fees
                  </label>
                </div>
                <Link
                  to="/login"
                  className="btn bg-primary mb-3 text gear w-100"
                >
                  Register
                </Link>

                <div className="text-primary">
                  <span>Already have an account ? </span>
                  <Link
                    to="/login"
                    className="text-primary gear3"
                    style={{ fontWeight: "600" }}
                  >
                    Log in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
