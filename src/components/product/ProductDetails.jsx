import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState('#24262B');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch Product Data
        const productResponse = await axios.get(`http://localhost:3001/products/${id}`);
        setProduct(productResponse.data);

        // Fetch Category Data using categoryId
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
  }, [id]);
  const getDiscountedPrice = (price, offer) => {
    return Math.floor(price * (1 - offer / 100));
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <Base>
      <div className="container p-0 pb-4">
        <div className="dz-product-preview">
          {/* Main Swiper */}
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

          {/* Thumbnail Swiper */}
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
              <span className="brand-tag">{category.name}</span>
              <h5>{product.name}</h5>
            </div>
            
            <div className="dz-review-meta mb-3">
              <h4 className="price">
                {
                  product?.offer ? (
                    <>
                      <h6 className="price">${getDiscountedPrice(product?.price, product?.offer).toLocaleString()}
                        <del>${product?.price}</del>
                      </h6>
                    </>
                  ) : (
                    <>
                      <span>${product?.price}</span>
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
              <div className="d-flex align-items-center color-filter">
                {[
                  '#24262B',
                  '#8CB2D1',
                  '#0D775E',
                  '#C7D1CF',
                ].map((color, index) => (
                  <div className="form-check" key={color}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id={`radioNoLabel${index + 1}`}
                      value={color}
                      checked={selectedColor === color}
                      onChange={(e) => setSelectedColor(e.target.value)}
                    />
                    <span style={{ backgroundColor: color }}></span>
                  </div>
                ))}
              </div>
            </div>

            <h6>Description:</h6>
            <p>{product.description || 'No description available'}</p>
          </div>
        </div>
      </div>
      <div className="footer fixed f0 bg-white border-top">
        <div className="container py-2">
          <div className="total-cart">
            <div className="price-area">
              <span>Price</span>
              <h3 className="price">
                {
                  product?.offer ? (
                    <>
                      <h6 className="price">${getDiscountedPrice(product?.price, product?.offer).toLocaleString()}
                        <del>${product?.price}</del>
                      </h6>
                    </>
                  ) : (
                    <>
                      <span>${product?.price}</span>
                    </>
                  )
                }
              </h3>
            </div>
            <a href="cart.html" className="btn btn-primary">
              Add Cart
            </a>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default ProductDetails;
export function Base({children}) {
  return(
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
              <a className="item-bookmark">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-heart"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </a>
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