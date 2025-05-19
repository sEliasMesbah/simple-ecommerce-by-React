import { Link } from "react-router-dom";
import Input from "../components/public/Input";

export default function Login() {
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
              <h2>Welcome back!</h2>
              <p>Welcome back you've been missed!</p>
            </div>
            <div className="account-area">
              <form>
                <Input
                  label="Username"
                  id="name"
                  type="text"
                  placeholder="Type Username Here"
                />
                <div>
                  <Input
                    label="Password"
                    id="password"
                    type="password"
                    placeholder="Type Password Here"
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Link to="/forgetPassword" className="btn-link text-primary">
                    Forgot password?
                  </Link>
                  <Link to="/forgetPassword" className="btn-link text-primary">
                    Reset Here
                  </Link>
                </div>
                <Link to="/" className="btn btn-primary mb-3 w-100 gear">
                  Login
                </Link>
                <Link to="/register" className="btn-link text-center mb-3 mt-4">
                  Don’t have an account?
                </Link>
                <Link
                  to="/register"
                  className="btn mb-3 btn-outline-primary text-primary w-100 gear2"
                >
                  Register Now
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
