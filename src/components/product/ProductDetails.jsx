import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { AuthContext } from '../../context/AuthContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState('#24262B');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false);

  // تعداد پیش فرض 1، و باکس تعداد فقط بعد از افزودن ظاهر میشه
  const [showQuantity, setShowQuantity] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [message, setMessage] = useState('');

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
  }, [id]);

  const getDiscountedPrice = (price, offer) => {
    return Math.floor(price * (1 - offer / 100));
  };

  useEffect(() => {
    if (!user || !product) {
      setLiked(false);
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

  const toggleLike = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      alert("Please log in to add to favorites.");
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
      alert("Error connecting to server");
    }
  };

  const handleAddToCart = async () => {
    if (!user) {
      alert("برای افزودن به سبد خرید باید وارد شوید.");
      return;
    }

    try {
      // دریافت سبد خرید کاربر
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
              size: selectedSize,
              color: selectedColor,
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

        const existingItem = cart.items.find(item =>
          item.id === product.id &&
          item.size === selectedSize &&
          item.color === selectedColor
        );

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
            size: selectedSize,
            color: selectedColor,
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
    } catch (err) {
      console.error(err);
      alert("خطا در افزودن به سبد خرید");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <Base
      rightHeaderContent={
        <button
          onClick={toggleLike}
          className="item-bookmark btn btn-link p-0"
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer"
          }}
          title={liked ? "Remove from wishlist" : "Add to wishlist"}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill={liked ? "red" : "none"}
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-heart"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      }
    >
      <div className="container p-0 pb-4">
        <div className="dz-product-preview">
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            className="product-detail-swiper-2"
          >
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="dz-media">
                  <img src={img} alt={`Product ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={13}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="product-detail-swiper"
          >
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="dz-media">
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="container">
          <div className="dz-product-detail">
            <div className="detail-content">
              <span className="brand-tag">{category?.name}</span>
              <h5>{product.name}</h5>
            </div>

            <div className="dz-review-meta mb-3">
              <h4 className="price">
                {
                  product?.offer ? (
                    <>
                      <h6 className="price">${getDiscountedPrice(product.price, product.offer).toLocaleString()}
                        <del>${product.price}</del>
                      </h6>
                    </>
                  ) : (
                    <>
                      <span>${product.price}</span>
                    </>
                  )
                }
              </h4>
              <h6 className="review">
                <i className="fa-solid fa-star me-1"></i>
                4.5 <span>(2.6k review)</span>
              </h6>
            </div>

            {/* Size Selection */}
            <div className="d-flex align-items-center mb-4">
              <h6 className="mb-0 me-4">Size:</h6>
              <div className="btn-group product-size mb-0">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <React.Fragment key={size}>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnsize1"
                      id={`btnradio1${size}`}
                      checked={selectedSize === size}
                      onChange={() => setSelectedSize(size)}
                    />
                    <label className="btn" htmlFor={`btnradio1${size}`}>
                      {size}
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="meta-content d-flex align-items-center">
              <h6 className="mb-0 me-4">Color:</h6>
              <div className="btn-group product-color mb-0">
                {['#24262B', '#A7A8AA', '#27292D', '#6B6C6E'].map((color) => (
                  <React.Fragment key={color}>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btncolor1"
                      id={`btncolor1${color.replace('#', '')}`}
                      checked={selectedColor === color}
                      onChange={() => setSelectedColor(color)}
                    />
                    <label
                      className="btn"
                      htmlFor={`btncolor1${color.replace('#', '')}`}
                      style={{ backgroundColor: color }}
                    ></label>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Add to Cart and Quantity */}
            <div className="mt-4">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddToCart}
              >
                افزودن به سبد خرید
              </button>

              {showQuantity && (
                <div className="input-group quantity mt-3" style={{ maxWidth: '130px' }}>
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setCartCount(prev => Math.max(1, prev - 1))}
                  >-</button>

                  <input
                    type="number"
                    className="form-control"
                    value={cartCount}
                    min={1}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (!isNaN(val) && val >= 1) setCartCount(val);
                    }}
                  />

                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setCartCount(prev => prev + 1)}
                  >+</button>
                </div>
              )}

              {message && <p className="text-success mt-2">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default ProductDetails;
export function Base({ children, rightHeaderContent }) {
  return (
    <>
      <header className="header shadow header-fixed border-0"
        style={{
          position: "fixed"
        }}
      >
        <div className="container">
          <div className="header-content">
            <div className="left-content">
              <Link to={"/home"} className="back-btn">
                <i className="icon feather icon-chevron-left" />
              </Link>
            </div>
            <div className="mid-content">
              <h6 className="title">Product Detail</h6>
            </div>
            <div className="right-content">
              {rightHeaderContent}
            </div>
          </div>
        </div>
      </header>
      <div className='mt-5 pt-3 pb-5'>
        {children}
      </div>
    </>
  )
}
