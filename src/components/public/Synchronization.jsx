import React, { useState, useRef, useEffect, useCallback } from 'react';
import "./css/Synchronization.css";
// آیتم سوایپر
export const SwiperItem = ({ children, className, style }) => {
  return (
    <div
      className={`swiper-item flex-shrink-0 bg-light rounded d-flex flex-column justify-content-center align-items-center text-center fw-bold text-secondary shadow-sm me-3 ${className || ''}`}
      style={{
        width: 'auto',
        height: '100%',
        aspectRatio: "0.89/1",
        // overflow: "hidden",
        ...style 
    }}
    >
      {children}
    </div>
  );
};

// آیکون فلش SVG
const ArrowButton = ({ direction = 'left', onClick, disabled, hidden }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`btn btn-light rounded-circle shadow position-absolute top-50 translate-middle-y ${direction === 'left' ? 'prev ms-2' : 'next me-2'} ${hidden ? 'd-none' : ''}`}
    style={{ zIndex: 2 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi"
      viewBox="0 0 16 16"
    >
      {direction === 'left' ? (
        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
      ) : (
        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
      )}
    </svg>
  </button>
);

// کامپوننت اصلی سوایپر
const Synchronization = ({
  children,
  title,
  scrollAmount = 200,
  containerClass = 'container bg-white rounded shadow-sm',
  wrapperClass = 'd-flex overflow-auto swiper-wrapper p-2 position-relative h100px',
  itemClass = '',
}) => {
  const swiperWrapperRef = useRef(null);
  const [isPrevVisible, setIsPrevVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(true);

  const updateButtonStates = useCallback(() => {
    const wrapper = swiperWrapperRef.current;
    if (wrapper) {
      const { scrollLeft, scrollWidth, clientWidth } = wrapper;
      setIsPrevVisible(scrollLeft > 5);
      setIsNextVisible(scrollLeft < scrollWidth - clientWidth - 5);
    }
  }, []);

  useEffect(() => {
    const wrapper = swiperWrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('scroll', updateButtonStates);
      window.addEventListener('resize', updateButtonStates);
      updateButtonStates();

      return () => {
        wrapper.removeEventListener('scroll', updateButtonStates);
        window.removeEventListener('resize', updateButtonStates);
      };
    }
  }, [updateButtonStates]);

  const handleScroll = (dir) => {
    if (swiperWrapperRef.current) {
      swiperWrapperRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const childrenArray = React.Children.toArray(children);

  if (childrenArray.length === 0) {
    return (
      <div className={containerClass}>
        <p className="text-center text-muted">آیتمی برای نمایش وجود ندارد.</p>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      {title && <h2 className="h5 mb-3">{title}</h2>}

      <div className="position-relative">
        <ArrowButton
          direction="left"
          onClick={() => handleScroll('left')}
          disabled={!isPrevVisible}
          hidden={!isPrevVisible}
        />
        <ArrowButton
          direction="right"
          onClick={() => handleScroll('right')}
          disabled={!isNextVisible}
          hidden={!isNextVisible}
        />

        <div
          ref={swiperWrapperRef}
          className={wrapperClass}
          style={{
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {childrenArray.map((child, index) =>
            React.isValidElement(child) ? (
              React.cloneElement(child, {
                className: `${child.props.className || ''} ${itemClass}`,
                key: `swiper-item-${index}`,
              })
            ) : (
              <React.Fragment key={`swiper-item-${index}`}>{child}</React.Fragment>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Synchronization;