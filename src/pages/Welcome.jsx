import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./Login";

export default function Welcome() {
  return (
    <>
      <div className="page-wrapper">
        {/* <!-- splash -->         */}
        <div className="loader-screen" id="splashscreen">
          <div className="main-screen">
            <div className="loader">
              <img
                src="assets/images/preloader/cart.svg"
                className="wow bounceInLeft"
                alt=""
              />
            </div>
            <div className="title">
              <span
                className="wow zoomInUp"
                data-wow-duration="page-error-404.html"
                data-wow-delay="1s"
              >
                W
              </span>
              <span
                className="wow zoomInUp"
                data-wow-duration="page-error-404.html"
                data-wow-delay="1s"
              >
                3
              </span>
              <span
                className="wow zoomInUp"
                data-wow-duration="page-error-404.html"
                data-wow-delay="1s"
              >
                C
              </span>
              <span
                className="wow zoomInUp"
                data-wow-duration="page-error-404.html"
                data-wow-delay="1s"
              >
                A
              </span>
              <span
                className="wow zoomInUp"
                data-wow-duration="page-error-404.html"
                data-wow-delay="1s"
              >
                R
              </span>
              <span
                className="wow zoomInUp"
                data-wow-duration="page-error-404.html"
                data-wow-delay="1s"
              >
                T
              </span>
            </div>
          </div>
        </div>
        {/* <!-- splash--> */}

        {/* <!-- Welcome Start --> */}
        <div className="content-body">
          <div
            className="welcome-area bg-image"
            style={{
              backgroundImage: "url('assets/images/onboarding/bg.jpg')",
            }}
          >
            <div className="welcome-inner">
              <div className="swiper get-started">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="slide-info">
                      <div className="started">
                        <h3 className="title font-w700">
                          Welcome to W3Cart- Your Shopping Partner
                        </h3>
                        <p>
                          Join us now and embark on a fulfilling shopping
                          adventure with W3Cart. Enjoy a seamless and secure
                          shopping journey with us.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide-info">
                      <div className="started">
                        <h3 className="title font-w700">
                          Enter the World of Online Shopping
                        </h3>
                        <p>
                          Explore curated collections, exclusive deals, and
                          seasonal specials to make your shopping experience
                          truly unforgettable.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slide-info">
                      <div className="started">
                        <h3 className="title font-w700">
                          Start Your Shopping Journey Now
                        </h3>
                        <p>
                          Start exploring now and let your shopping desires take
                          flight. Find the perfect items that resonate with your
                          style and needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-btn">
                  <div className="swiper-pagination style-1 flex-1"></div>
                </div>
              </div>
            </div>
            <div className="bottom-btn container">
              <Link to="/login" className="btn btn-primary w-100">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
