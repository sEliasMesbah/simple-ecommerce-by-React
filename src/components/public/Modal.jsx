import React, { useState, useEffect, useRef } from 'react';
import './css/Modal.css';

const Modal = ({ 
  title, 
  button = "Open Modal", 
  buttonType = "default",
  buttonClass = "",
  buttonIcon,
  children,
  headerSticky = false, // برای هدر چسبنده
  buttonSticky = false, // برای دکمه چسبنده
  buttonPosition = "bottom", // موقعیت دکمه: top, bottom, left, right
  buttonOffset = "20px" // فاصله از لبه
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  
  const openModal = () => {
    setIsOpen(true);
    
    // افزودن کلاس zindex0 به عناصر مورد نظر
    const headerElements = document.querySelectorAll('.header, .f0');
    headerElements.forEach(el => {
      el.classList.add('zindex0');
    });

    setTimeout(() => {
      setShowModal(true);
      document.body.classList.add('modal-open');
    }, 10);
  };

  const closeModal = () => {
    setShowModal(false);
    
    // حذف کلاس zindex0 از عناصر مورد نظر
    const headerElements = document.querySelectorAll('.header, .f0');
    headerElements.forEach(el => {
      el.classList.remove('zindex0');
    });

    document.body.classList.remove('modal-open');
    setTimeout(() => setIsOpen(false), 300);
  };

  // بستن مدال با کلیک روی backdrop
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  // بستن مدال با کلید Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleBackdropClick);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleBackdropClick);
    };
  }, [isOpen]);

  // تابع برای ایجاد کلاس‌های دکمه بر اساس نوع
  const getButtonClasses = () => {
    let classes = "btn";
    
    switch(buttonType) {
      case "circle":
        classes += " rounded-circle p-0 d-flex align-items-center justify-content-center";
        break;
      case "outline":
        classes += " btn-outline-primary";
        break;
      case "link":
        classes += " btn-link";
        break;
      default:
        classes += " btn-primary";
    }
    
    return `${classes} ${buttonClass}`;
  };

  // استایل برای دکمه‌های دایره‌ای
  const circleButtonStyle = buttonType === "circle" ? { 
    width: 'fit-content', 
    height: 'fit-content' 
  } : {};

  // استایل برای دکمه چسبنده
  const stickyButtonStyle = buttonSticky ? {
    position: 'sticky',
    ...(buttonPosition === 'top' && { top: buttonOffset }),
    ...(buttonPosition === 'bottom' && { bottom: buttonOffset }),
    ...(buttonPosition === 'left' && { left: buttonOffset }),
    ...(buttonPosition === 'right' && { right: buttonOffset }),
    zIndex: 1000
  } : {};

  return (
    <>
      {/* دکمه بازکننده مدال با قابلیت sticky */}
      <button
        className={getButtonClasses()}
        onClick={openModal}
        style={{
          ...circleButtonStyle,
          ...stickyButtonStyle
        }}
        aria-label={buttonType === "circle" ? button : undefined}
      >
        {buttonIcon || (buttonType !== "circle" && button)}
      </button>

      {/* مدال */}
      {isOpen && (
        <div 
          className={`modal fade${showModal ? ' show' : ''}`}
          style={{ 
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}
          tabIndex="-1"
          aria-hidden="true"
        >
          <div 
            className="modal-dialog modal-dialog-centered"
            ref={modalRef}
            style={{width: "min(100%, 800px)"}}
          >
            <div className="modal-content" style={{ maxHeight: '70vh', }}>
              {/* هدر با قابلیت sticky */}
              <div className={`modal-header ${headerSticky ? 'sticky-top bg-white' : ''}`}
                   style={headerSticky ? { 
                      position: 'sticky',
                      top: 0,
                      zIndex: 1020,
                      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                   } : {}}>
                <h5 className="modal-title">{title}</h5>
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <svg width="20px" height="20px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <path d="M 20,4 3,21 33,50 3,80 20,97 49,67 79,97 95,80 65,50 95,20 80,4 50,34 z"/>
                  </svg>
                </button>
              </div>
              
              {/* بدنه مدال با قابلیت اسکرول */}
              <div className="modal-body" style={{ overflowY: 'auto' }}>
                {children}
              </div>
              
              {/* <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  بستن
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
      
      {/* پس‌زمینه مشکی */}
      {isOpen && (
        <div 
          className={`modal-backdrop fade${showModal ? ' show' : ''}`}
          style={{
            opacity: showModal ? 0.5 : 0,
            transition: 'opacity 0.3s ease'
          }}
        ></div>
      )}
    </>
  );
};

export default Modal;