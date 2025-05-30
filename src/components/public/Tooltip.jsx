import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './css/Tooltip.css';

const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    // Clear any pending exit animations
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsExiting(false);
    setIsVisible(true);
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const offset = 10; // فاصله از ماوس
    
    setCoords({
      x: mouseX,
      y: mouseY,
    });
  };

  const handleMouseLeave = () => {
    setIsExiting(true);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
    }, 200); // مدت انیمیشن خروج
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // محاسبه موقعیت تولتیپ بر اساس جهت
  const getPositionStyle = () => {
    const style = { 
      position: 'fixed',
      zIndex: 9999,
      opacity: 0 // برای انیمیشن استفاده می‌شود
    };
    
    switch(position) {
      case 'top':
        style.top = coords.y - 40;
        style.left = coords.x;
        style.transform = 'translateX(-50%)';
        break;
      case 'bottom':
        style.top = coords.y + 20;
        style.left = coords.x;
        style.transform = 'translateX(-50%)';
        break;
      case 'left':
        style.top = coords.y;
        style.left = coords.x - 10;
        style.transform = 'translate(-100%, -50%)';
        break;
      case 'right':
        style.top = coords.y;
        style.left = coords.x + 10;
        style.transform = 'translateY(-50%)';
        break;
      default:
        style.top = coords.y - 40;
        style.left = coords.x;
        style.transform = 'translateX(-50%)';
    }
    
    return style;
  };

  // محاسبه کلاس پیکان بر اساس جهت
  const getArrowClass = () => {
    switch(position) {
      case 'top': return 'tooltip-arrow-top';
      case 'bottom': return 'tooltip-arrow-bottom';
      case 'left': return 'tooltip-arrow-left';
      case 'right': return 'tooltip-arrow-right';
      default: return 'tooltip-arrow-top';
    }
  };

  return (
    <div
      ref={containerRef}
      className="tooltip-wrapper wh-100"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', position: 'relative' }}
    >
      {children}

      {(isVisible || isExiting) &&
        ReactDOM.createPortal(
          <div
            className={`tooltip-container ${isExiting ? 'tooltip-exit' : 'tooltip-enter'}`}
            style={getPositionStyle()}
          >
            <div className={`tooltip-arrow ${getArrowClass()}`} />
            <div className="tooltip-inner"><span>{content}</span></div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Tooltip;