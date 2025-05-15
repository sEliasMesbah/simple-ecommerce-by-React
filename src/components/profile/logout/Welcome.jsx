export default function Welcome() {
    return <>
        <div className="page-wrapper">
            <div className="content-body">
                <div className="welcome-area bg-image" style={{backgroundImage: "url(/images/onboarding/bg.jpg)"}}>
                    <div className="welcome-inner">
                        <div className="swiper get-started">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="slide-info">
                                        <div className="started">
                                            <h3 className="title font-w700">Welcome to W3Cart- Your Shopping Partner</h3>
                                            <p>Join us now and embark on a fulfilling shopping adventure with W3Cart. Enjoy a seamless and secure shopping journey with us.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="slide-info">
                                        <div className="started">
                                            <h3 className="title font-w700">Enter the World of Online Shopping</h3>
                                            <p>Explore curated collections, exclusive deals, and seasonal specials to make your shopping experience truly unforgettable.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="slide-info">
                                        <div className="started">
                                            <h3 className="title font-w700">Start Your Shopping Journey Now</h3>
                                            <p>Start exploring now and let your shopping desires take flight. Find the perfect items that resonate with your style and needs.</p>
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
                        <a href="login.html" className="btn btn-primary w-100">Get Started</a>
                    </div>
                </div>
            </div> 
        </div>
    </>
}