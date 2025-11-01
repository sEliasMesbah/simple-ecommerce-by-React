// CartContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem('userId');

  // 📦 بارگذاری اولیه سبد از سرور
  useEffect(() => {
    const fetchCart = async () => {
      if (!userId) {
        setCartItems([]);
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`http://localhost:3001/carts/${userId}`);
        setCartItems(res.data.items || []);
        toast.info("Cart Update")
      } catch (err) {
        toast.error('Error loading cart');
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  // ➕ افزودن محصول به سبد
  const addToCart = async (product, quantity = 1) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    let updatedItems;
    if (existingItem) {
      updatedItems = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedItems = [...cartItems, { ...product, quantity }];
    }

    try {
      if (userId) {
        await axios.patch(`http://localhost:3000/carts/${userId}`, {
          items: updatedItems,
        });
      } else {
        const newUserId = `user_${Date.now()}`;
        localStorage.setItem('userId', newUserId);

        const newCart = { id: newUserId, items: updatedItems };
        await axios.post('http://localhost:3000/carts', newCart);
      }

      setCartItems(updatedItems);
    } catch (err) {
      setError('خطا در به‌روزرسانی سبد');
    }
  };

  // 🔄 بروزرسانی تعداد محصول
  const updateQuantity = async (id, quantity) => {
    const updated = cartItems
      .map(item => (item.id === id ? { ...item, quantity } : item))
      .filter(item => item.quantity > 0);

    try {
      if (userId) {
        await axios.patch(`http://localhost:3000/carts/${userId}`, {
          items: updated,
        });
      }

      setCartItems(updated);
    } catch (err) {
      setError('خطا در بروزرسانی تعداد');
    }
  };

  // ❓ گرفتن تعداد محصول خاص
  const getQuantity = (id) => {
    const item = cartItems.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  // 🧮 تعداد کل محصولات
  const getTotalItemsCount = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        getQuantity,
        getTotalItemsCount,
        loading,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);