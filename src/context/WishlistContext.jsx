import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext'; // فرض بر این است که این کانتکست قبلا ساخته شده

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const { user } = useContext(AuthContext); // اطلاعات کاربر لاگین شده
  const [likedProducts, setLikedProducts] = useState([]);

  // کلید ذخیره‌سازی در localStorage بر اساس یوزر
  const storageKey = user ? `wishlist_${user.id}` : 'wishlist_guest';

  // بارگذاری داده‌ها از localStorage وقتی کاربر تغییر کرد یا صفحه لود شد
  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(storageKey);
      setLikedProducts(saved ? JSON.parse(saved) : []);
    } else {
      setLikedProducts([]);
    }
  }, [user]);

  // تابع تغییر وضعیت لایک
  const toggleLike = (productId) => {
    if (!user) {
      alert('برای اضافه کردن به علاقه‌مندی‌ها باید وارد شوید.');
      return;
    }

    setLikedProducts((prev) => {
      let updated;
      if (prev.includes(productId)) {
        updated = prev.filter((id) => id !== productId);
      } else {
        updated = [...prev, productId];
      }
      localStorage.setItem(storageKey, JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <WishlistContext.Provider value={{ likedProducts, toggleLike }}>
      {children}
    </WishlistContext.Provider>
  );
}

// هوک کمکی برای استفاده ساده‌تر
export function useWishlist() {
  return useContext(WishlistContext);
}
