import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { AuthContext } from '../../context/AuthContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false);
  const [showQuantity, setShowQuantity] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [message, setMessage] = useState('');
  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const productResponse = await axios.get(`http://localhost:3001/products/${id}`);
        setProduct(productResponse.data);

        if (productResponse.data.categoryId) {
          const categoryResponse = await axios.get(
            `http://localhost:3001/categories/${productResponse.data.categoryId}`
          );
          setCategory(categoryResponse.data);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
    setShowQuantity(false);
    setCartCount(1);
    setCartItem(null);
  }, [id]);

  useEffect(() => {
    if (!user || !product) {
      setLiked(false);
      setCartItem(null);
      setShowQuantity(false);
      setCartCount(1);
      return;
    }

    fetch(`http://localhost:3001/wishlists/${user.id}`)
      .then(res => res.json())
      .then(wishlist => {
        const exists = wishlist.items?.some(item => item.id === product.id);
        setLiked(exists);
      })
      .catch(() => setLiked(false));
  }, [user, product?.id]);

  useEffect(() => {
    if (!user || !product) {
      setCartItem(null);
      setShowQuantity(false);
      setCartCount(1);
      return;
    }

    const fetchCartItem = async () => {
      try {
        const res = await fetch(`http://localhost:3001/carts/${user.id}`);
        if (res.ok) {
          const cart = await res.json();
          const existingItem = cart.items.find(item => item.id === product.id);
          if (existingItem) {
            setCartItem(existingItem);
            setShowQuantity(true);
            setCartCount(existingItem.quantity);
          } else {
            setCartItem(null);
            setShowQuantity(false);
            setCartCount(1);
          }
        } else {
          setCartItem(null);
          setShowQuantity(false);
          setCartCount(1);
        }
      } catch {
        setCartItem(null);
        setShowQuantity(false);
        setCartCount(1);
      }
    };

    fetchCartItem();
  }, [user, product]);

  const getDiscountedPrice = (price, offer) => {
    return Math.floor(price * (1 - offer / 100));
  };

  const toggleLike = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      alert("لطفا وارد شوید تا بتوانید محصول را به علاقه‌مندی‌ها اضافه کنید.");
      return;
    }

    try {
      let wishlist;
      let res = await fetch(`http://localhost:3001/wishlists/${user.id}`);

      if (res.status === 404) {
        const newWishlist = {
          id: user.id,
          userId: user.id,
          items: []
        };

        const postRes = await fetch(`http://localhost:3001/wishlists`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newWishlist),
        });

        if (!postRes.ok) {
          alert("مشکل در ایجاد لیست علاقه‌مندی‌ها");
          return;
        }

        wishlist = newWishlist;
      } else if (res.ok) {
        wishlist = await res.json();
      } else {
        alert("خطا در دریافت لیست علاقه‌مندی‌ها");
        return;
      }

      let updatedItems = [];
      if (liked) {
        updatedItems = wishlist.items.filter(item => item.id !== product.id);
      } else {
        updatedItems = [...(wishlist.items || []), {
          id: product.id,
          name: product.name,
          url: product.images[0],
          describe: product.description || "",
          offerprice: getDiscountedPrice(product.price, product.offer),
          price: product.price
        }];
      }

      const patchRes = await fetch(`http://localhost:3001/wishlists/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: updatedItems })
      });

      if (patchRes.ok) setLiked(!liked);
      else alert("خطا در به‌روزرسانی لیست علاقه‌مندی‌ها");
    } catch (err) {
      console.error(err);
      alert("خطا در ارتباط با سرور");
    }
  };

  const handleAddToCart = async () => {
    if (!user) {
      alert("برای افزودن به سبد خرید باید وارد شوید.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3001/carts/${user.id}`);
      let cart;

      if (res.status === 404) {
        cart = {
          id: user.id,
          items: [
            {
              id: product.id,
              name: product.name,
              describe: product.description || "",
              price: product.price,
              offerprice: getDiscountedPrice(product.price, product.offer),
              url: product.images[0],
              quantity: cartCount,
            },
          ],
        };

        await fetch(`http://localhost:3001/carts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cart),
        });

        setMessage("سبد خرید ساخته شد و محصول اضافه شد.");
      } else {
        cart = await res.json();

        const existingItem = cart.items.find(item => item.id === product.id);

        if (existingItem) {
          existingItem.quantity += cartCount;
        } else {
          cart.items.push({
            id: product.id,
            name: product.name,
            describe: product.description || "",
            price: product.price,
            offerprice: getDiscountedPrice(product.price, product.offer),
            url: product.images[0],
            quantity: cartCount,
          });
        }

        await fetch(`http://localhost:3001/carts/${user.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: cart.items }),
        });

        setMessage("محصول به سبد خرید اضافه شد.");
      }

      setShowQuantity(true);
      setCartCount(1);
      setCartItem({
        id: product.id,
        quantity: cartCount,
      });
    } catch (err) {
      console.error(err);
      alert("خطا در افزودن به سبد خرید");
    }
  };

  const updateCartQuantity = async (newQuantity) => {
    if (!user || !product) return;

    try {
      const res = await fetch(`http://localhost:3001/carts/${user.id}`);
      if (!res.ok) return;

      const cart = await res.json();
      let updatedItems = cart.items.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      updatedItems = updatedItems.filter(item => item.quantity > 0);

      const patchRes = await fetch(`http://localhost:3001/carts/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: updatedItems }),
      });

      if (patchRes.ok) {
        setCartCount(newQuantity > 0 ? newQuantity : 1);
        setShowQuantity(newQuantity > 0);
        setCartItem(newQuantity > 0 ? updatedItems.find(i => i.id === product.id) : null);
        setMessage(newQuantity > 0 ? "تعداد سبد خرید به‌روزرسانی شد." : "محصول از سبد حذف شد.");
      }
    } catch {
      alert("خطا در به‌روزرسانی سبد خرید");
    }
  };

  const removeFromCart = () => {
    updateCartQuantity(0);
  };

  if (loading) {
    return (
      <div className="container py-4">
        <div className="text-center">در حال بارگذاری محصول...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container py-4">
        <div className="text-center text-danger">
          خطا در بارگذاری محصول. لطفا دوباره تلاش کنید.
        </div>
      </div>
    );
  }

  return (
    <section className="product-details py-4">
      <div className="container">
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">خانه</Link>
            </li>
            {category && (
              <li className="breadcrumb-item">
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </li>
            )}
            <li className="breadcrumb-item active" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="row">
          <aside className="col-md-6">
            <Swiper
              style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
              loop={true}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Thumbs]}
              className="main-swiper"
            >
              {product.images && product.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`${product.name} ${index + 1}`} className="img-fluid" />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
              className="thumbs-swiper mt-3"
            >
              {product.images && product.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="img-fluid" />
                </SwiperSlide>
              ))}
            </Swiper>
          </aside>

          <aside className="col-md-6">
            <h1>{product.name}</h1>
            <p className="text-muted mb-1">{product.description}</p>

            <div className="price mb-3">
              {product.offer > 0 ? (
                <>
                  <span className="text-danger fw-bold fs-4">
                    {getDiscountedPrice(product.price, product.offer).toLocaleString()} تومان
                  </span>
                  <del className="text-muted me-2">{product.price.toLocaleString()} تومان</del>
                </>
              ) : (
                <span className="fw-bold fs-4">{product.price.toLocaleString()} تومان</span>
              )}
            </div>

            {showQuantity && (
              <div className="cart-quantity mb-3 d-flex align-items-center gap-3">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => updateCartQuantity(cartCount - 1)}
                  aria-label="کاهش تعداد"
                >
                  -
                </button>
                <span>{cartCount}</span>
                <button
                  className="btn btn-outline-success"
                  onClick={() => updateCartQuantity(cartCount + 1)}
                  aria-label="افزایش تعداد"
                >
                  +
                </button>

                <button
                  className="btn btn-outline-secondary ms-3"
                  onClick={removeFromCart}
                  aria-label="حذف از سبد خرید"
                >
                  حذف
                </button>
              </div>
            )}

            {!showQuantity && (
              <button className="btn btn-primary" onClick={handleAddToCart}>
                افزودن به سبد خرید
              </button>
            )}

            {message && <p className="mt-2 text-success">{message}</p>}

            <button
              className={`btn btn-outline-danger mt-3 ${liked ? 'liked' : ''}`}
              onClick={toggleLike}
              aria-pressed={liked}
              aria-label={liked ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
            >
              {liked ? "♥" : "♡"} علاقه‌مندی
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
