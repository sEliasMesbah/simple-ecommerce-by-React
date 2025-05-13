import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Register from "./Welcome";

export default function Login() {
  return (
    <>
      <div className="page-wrapper">
        {/* <!-- Preloader --> */}
        <div id="preloader">
          <div className="loader">
            <div className="load-circle">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        {/* <!-- Preloader end--> */}

        {/* <!-- Page Content --> */}
        <div className="page-content">
          <div className="account-box">
            <div className="container">
              <div className="logo-area">
                <img
                  className="logo-dark"
                  src="assets/images/logo.png"
                  alt=""
                />
                <img
                  className="logo-light"
                  src="assets/images/logo-white.png"
                  alt=""
                />
              </div>
              <div className="section-head text-center pt-0">
                <h2>Welcome back!</h2>
                <p>Welcome back you've been missed!</p>
              </div>
              <div className="account-area">
                <form>
                  <div className="mb-3">
                    <label className="form-label" for="name">
                      Username
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Type Username Here"
                    />
                  </div>
                  <div>
                    <label className="form-label" for="password">
                      Password
                    </label>
                    <div className="mb-3 input-group input-group-icon">
                      <input
                        type="password"
                        id="password"
                        className="form-control dz-password"
                        placeholder="Type Password Here"
                      />
                      <span className="input-group-text show-pass">
                        <i className="icon feather icon-eye-off eye-close"></i>
                        <i className="icon feather icon-eye eye-open"></i>
                      </span>
                    </div>
                  </div>
                  <Link className="btn btn-primary w-100" to="/register">
                    Login
                  </Link>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Link className="btn-link" to="/forgot-password">
                      Forgot password?
                    </Link>
                    <Link className="btn-link" to="/reset-password">
                      Reset here
                    </Link>
                  </div>
                  <Link
                    className="btn-link text-center mb-3 text-dark"
                    to="/register"
                  >
                    Don’t have an account?
                  </Link>
                  <Link
                    className="btn mb-3 btn-outline-primary w-100"
                    to="/register"
                  >
                    Register now
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Page Content End --> */}
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
          {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
