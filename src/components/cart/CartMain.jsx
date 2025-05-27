import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const CartMain = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    if (!user) {
      setCart(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3001/carts/${user.id}`);
      if (res.ok) {
        const data = await res.json();
        setCart(data);
      } else {
        setCart({ id: user.id, items: [] });
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setCart(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  const updateQuantity = async (index, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedItems = [...cart.items];
    updatedItems[index].quantity = newQuantity;

    try {
      await fetch(`http://localhost:3001/carts/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: updatedItems }),
      });
      setCart(prev => ({ ...prev, items: updatedItems }));
    } catch (err) {
      alert("خطا در به‌روزرسانی تعداد");
    }
  };

  const removeItem = async (index) => {
    const updatedItems = [...cart.items];
    updatedItems.splice(index, 1);

    try {
      await fetch(`http://localhost:3001/carts/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: updatedItems }),
      });
      setCart(prev => ({ ...prev, items: updatedItems }));
    } catch (err) {
      alert("خطا در حذف محصول");
    }
  };

  if (loading) return <div>Loading...</div>;

  if (!cart || !cart.items.length) return <div>سبد خرید شما خالی است.</div>;

  return (
    <div className="container p-0 pb-4">
      <h4 className="mb-4">سبد خرید شما</h4>
      {cart.items.map((item, index) => (
        <div
          key={`${item.id}-${item.size}-${item.color}`}
          className="card cart-item mb-3"
          onClick={() => navigate(`/products/${item.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <div className="row g-0 align-items-center">
            <div className="col-4 col-md-2">
              <img src={item.url} alt={item.name} className="img-fluid" />
            </div>
            <div className="col-8 col-md-5">
              <h6>{item.name}</h6>
              <p className="mb-1">{item.describe}</p>
              <small>سایز: {item.size} - رنگ: <span style={{backgroundColor: item.color, padding: '0 8px', borderRadius: '4px'}}></span></small>
            </div>
            <div className="col-12 col-md-3 d-flex align-items-center">
              <div className="input-group quantity" style={{ maxWidth: '120px' }}>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const newQuantity = item.quantity - 1;
                    if (newQuantity < 1) {
                      removeItem(index);
                    } else {
                      updateQuantity(index, newQuantity);
                    }
                  }}
                >-</button>
                <input
                  type="number"
                  className="form-control"
                  value={item.quantity}
                  min={1}
                  onClick={e => e.stopPropagation()}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val) && val > 0) updateQuantity(index, val);
                  }}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateQuantity(index, item.quantity + 1);
                  }}
                >+</button>
              </div>
            </div>
            <div className="col-12 col-md-2 text-end">
              <div>
                <span className="fw-bold fs-6">
                  ${item.offerprice?.toLocaleString() || item.price?.toLocaleString()}
                </span>
              </div>
              <button
                className="btn btn-danger btn-sm mt-2"
                onClick={(e) => {
                  e.stopPropagation();
                  removeItem(index);
                }}
              >حذف</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartMain;
