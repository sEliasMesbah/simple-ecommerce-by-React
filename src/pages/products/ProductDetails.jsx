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
      alert("Please log in to add the product to your favorites.");
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
          alert("Problem creating wishlist");
          return;
        }

        wishlist = newWishlist;
      } else if (res.ok) {
        wishlist = await res.json();
      } else {
        alert("Error retrieving wishlist");
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
      else alert("Error updating wishlist");
    } catch (err) {
      console.error(err);
      alert("Error communicating with the server");
    }
  };

  const handleAddToCart = async () => {
    if (!user) {
      alert("You must be logged in to add to cart.");
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

        setMessage("Cart created and product added.");
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

        setMessage("Product added to cart.");
      }

      setShowQuantity(true);
      setCartCount(1);
      setCartItem({
        id: product.id,
        quantity: cartCount,
      });
    } catch (err) {
      console.error(err);
      alert("Error adding to cart");
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
        setMessage(newQuantity > 0 ? "Cart count updated." : "Product removed from cart.");
      }
    } catch {
      alert("Error updating shopping cart");
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
    <>
      <Header liked={liked} toggleLike={toggleLike}/>
      <section className="product-details pt-5 pm-5 mb-5">
        <div className="container py-5">
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/home"> Home </Link></li>
              {category && (
                <li className="breadcrumb-item">
                  <Link to={`/category/${category.id}`}>{category.name}</Link>
                </li>
              )}
              <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
            </ol>
          </nav>

          {/* تصاویر محصول */}
          <div className="product-image-wrapper mb-4">
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
              <img src={image} alt={`${product.name} ${index + 1}`} className="img-fluid rounded shadow w-100" />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="thumbs-swiper"
        >
          {product.images && product.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`thumb ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


          {/* اطلاعات محصول */}
          <div className="product-info text-center">
            <Link to={`/category/${category.id}`}>{category.name}</Link>
            <h1 className="fw-bold mb-3">{product.name}</h1>
            <p className="text-muted mb-3">{product.description}</p>

            
          </div>
        </div>
      </section>
      <div className="footer f0 fixed bg-white border-top">
        <div className="container py-2">
          <div className="total-cart">
            <div className="price-area">
              <span>Price</span>
              <h3 className="price">
                {product.offer ? (
                  <>
                    <h6 className="price">
                      ${getDiscountedPrice(product.price, product.offer).toLocaleString()}
                      <del>${product.price}</del>
                    </h6>
                  </>
                ) : (
                  <>
                    <span>${product.price}</span>
                  </>
                )}
              </h3>
            </div>
            <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
              {message && <p className="text-success" style={{margin: "0"}}>{message}</p>}
              {showQuantity ? (
                <div className="cart-quantity my-2 d-flex justify-content-center align-items-center gap-3">
                  <button className="btn btn-outline-danger" onClick={() => updateCartQuantity(cartCount - 1)}>-</button>
                  <span>{cartCount}</span>
                  <button className="btn btn-outline-success" onClick={() => updateCartQuantity(cartCount + 1)}>+</button>
                  <button className="btn btn-outline-secondary" onClick={removeFromCart}>Delete</button>
                </div>
              ) : (
                <button className="btn btn-primary mb-1" onClick={handleAddToCart} style={{marginBottom: "0px!important"}}> Add to Cart </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Header = ({ liked, toggleLike }) => {
  return (
    <header className="header shadow header-fixed border-0" style={{ position: "fixed", top: "0" }}>
      <div className="container">
        <div className="header-content">
          <div className="left-content">
            <Link to="/home" className="back-btn">
              <i className="icon feather icon-chevron-left"></i>
            </Link>
          </div>
          <div className="mid-content">
            <h6 className="title">Product Detail</h6>
          </div>
          <div className="right-content">
            <button
              onClick={toggleLike}
              className="item-bookmark btn btn-link p-0"
              style={{ border: "none", background: "transparent", cursor: "pointer" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={liked ? "red" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProductDetails;
