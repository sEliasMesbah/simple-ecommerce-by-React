import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CartCard from "./CartCard";
import CartCoupon from "./CartCoupon";
import CartFinalPrice from "./CartFinalPrice";
import CartMathPrice from "./CartMathPrice";

export default function CartMain() {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // دریافت سبد خرید از سرور
  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:3001/carts/${user.id}`)
      .then((res) => {
        if (res.status === 404) {
          setCartItems([]);
          setLoading(false);
          return;
        }
        return res.json();
      })
      .then((cart) => {
        if (cart && cart.items) setCartItems(cart.items);
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در دریافت سبد خرید:", err);
        setLoading(false);
      });
  }, [user]);

  // تغییر تعداد کالا (افزایش/کاهش) و حذف آیتم اگر تعداد صفر شد
  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0);
      
      // ذخیره در سرور
      fetch(`http://localhost:3001/carts/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: updatedItems }),
      }).catch((err) => console.error("خطا در ذخیره سبد:", err));

      return updatedItems;
    });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.offerprice * item.quantity,
    0
  );

  if (!user) {
    return (
      <div className="text-center mt-5">
        لطفاً ابتدا وارد حساب کاربری شوید.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center mt-5">
        در حال بارگذاری سبد خرید...
      </div>
    );
  }

  return (
    <div className="page-content space-top p-b50">
      <div className="container">
        {/* بخش وضعیت کاربر */}
        <div className="user-status m-b15">
          <div className="d-flex align-items-center">
            <div className="media media-35 rounded-circle me-2">
              <img src="/images/user.png" alt="User" />
            </div>
            <h6 className="mb-0 font-14 font-w400">تحویل به: {user.name}</h6>
          </div>
          <h6 className="mb-0 font-14 font-w500 text-primary">
            <a href="#!" className="d-flex align-items-center">
              آدرس ثبت‌شده
              <i className="icon feather icon-chevron-down font-16"></i>
            </a>
          </h6>
        </div>

        {/* لیست کالاها */}
        {cartItems.length === 0 && (
          <div className="text-center p-4">سبد خرید شما خالی است.</div>
        )}

        {cartItems.map((item) => (
          <CartCard
            key={`${item.id}-${item.color}-${item.size}`}
            data={item}
            onQuantityChange={updateQuantity}
          />
        ))}

        {/* کد تخفیف */}
        <CartCoupon />

        {/* قیمت محاسباتی و نهایی */}
        <CartMathPrice total={totalPrice} />
        <br />
        <br />
        <br />
        <CartFinalPrice total={totalPrice} />
      </div>
    </div>
  );
}
