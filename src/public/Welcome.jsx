import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Welcome({ onStart }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const slideData = [
    {
      title: 'Welcome to W3Cart- Your Shopping Partner',
      description: 'Join us now and embark on a fulfilling shopping adventure with W3Cart. Enjoy a seamless and secure shopping journey with us.',
    },
    {
      title: 'Enter the World of Online Shopping',
      description: 'Explore curated collections, exclusive deals, and seasonal specials to make your shopping experience truly unforgettable.',
    },
    {
      title: 'Start Your Shopping Journey Now',
      description: 'Start exploring now and let your shopping desires take flight. Find the perfect items that resonate with your style and needs.',
    },
  ];

  // ✅ اگر قبلاً دیده بود، بفرستش صفحه /home
  useEffect(() => {
    const seen = localStorage.getItem('onboardingCompleted');
    if (seen === 'true') {
      navigate('/home');
    }
  }, [navigate]);

  // ✅ وقتی fadeOut شد، بعد از 600ms برو به /home
  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        localStorage.setItem('onboardingCompleted', 'true');
        onStart?.(); // در صورت نیاز
        navigate('/home');
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [fadeOut, navigate, onStart]);

  const handleStart = () => {
    setFadeOut(true);
  };

  return (
    <div className={`page-wrapper ${fadeOut ? "fade-out" : ""}`}>
      <div className="content-body">
        <div
          className="welcome-area bg-image"
          style={{ backgroundImage: "url(/images/onboarding/bg.jpg)", zIndex: "999999" }}
        >
          <div className="welcome-inner">
            <div className="swiper get-started noselect">
              <Swiper
                modules={[Pagination]}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                loop={false}
                spaceBetween={30}
                slidesPerView={1}
                autoHeight={true}
                direction="horizontal"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              >
                {slideData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="slide-info">
                      <div className="started">
                        <h3 className="title font-w700">{slide.title}</h3>
                        <p>{slide.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-btn">
                <div className="swiper-pagination style-1 flex-1 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal horizontal-pagination"></div>
              </div>
            </div>
          </div>

          <div className="bottom-btn container">
            <button
              onClick={handleStart}
              className="btn btn-primary w-100"
              disabled={activeIndex !== slideData.length - 1}
            >
              {activeIndex === slideData.length - 1 ? 'Get Started' : 'Swipe to Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
