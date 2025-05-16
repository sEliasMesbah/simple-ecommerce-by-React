export default function ForgetPassword() {
  return (
    <>
      <div className="page-content">
        <div className="account-box">
          <div className="container">
            <div className="logo-area">
              <img className="logo-dark" src="/images/logos/light/logo1.svg" alt="" />
              <img
                className="logo-light"
                src="/images/logos/light/logo1.svg"
                alt=""
              />
            </div>
            <div className="section-head text-center pt-0">
              <h2>Reset password</h2>
              <p>Enter your Email address to reset your password</p>
            </div>
            <div className="account-area">
              <form>
                <div className="mb-3 input-group input-group-icon">
                  <div className="input-group-text">
                    <div className="input-icon">
                      <i className="icon feather icon-mail"></i>
                    </div>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
