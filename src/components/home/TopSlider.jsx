import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CustomSwiper() {
  const [offers, setOffers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get('http://localhost:3001/products');

      if (res?.data) {
        // فیلتر محصولات با تخفیف
        const filtered = res.data.filter((p) => p.offer && p.offer > 0);
        setOffers(filtered);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 💡 تابع برای محاسبه قیمت نهایی
  const getDiscountedPrice = (price, offer) => {
    return Math.floor(price * (1 - offer / 100));
  };

  if (error) {
    return (
      <div
        className="custom-swiper-container d-flex"
        style={{
          position: 'relative',
          width: '100%',
          height: '160px',
          alignItems:"center",
          justifyContent:"center",
          flexDirection:"column"
        }}
      >
        <div
          className="alert alert-danger"
          role="alert">
            {error.message}
        </div>
        <button
          className="btn btn-outline-danger"
          onClick={fetchProducts}
        >
          🔁 تلاش مجدد
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        className="custom-swiper-container d-flex"
        style={{
          position: 'relative',
          width: '100%',
          height: '160px',
          alignItems:"center",
          justifyContent:"center"
        }}
      >
        <div
          className="spinner-border text-primary"
          role="status"
        >
          <span
            className="visually-hidden"
          >
            در حال بارگذاری...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="custom-swiper-container" style={{ position: 'relative', width: '100%', height: '160px' }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        slidesPerGroup={1}
        breakpoints={{
          0:   { slidesPerView: 1 },
          400: { slidesPerView: 1 },
          639: { slidesPerView: 2 },
          995: { slidesPerView: 3 }
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={500}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        className="swiper-container"
      >
        {offers.map((product, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${product.images[0]})`,
                backgroundSize: 'auto 100%',
                backgroundPosition: 'center left',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                position: 'relative',
                margin: '0',
                padding: '10px',
                direction: 'rtl'
              }}
              className="position-relative flex items-end banner-bg"
              title={`${product?.name}`}
            >
              <span
                className="font-medium text-sm position-absolute rounded"
                style={{
                  bottom: '0.25rem',
                  left: '2rem',
                  background: 'rgba(13, 119, 94, 0.8)',
                  color: 'white',
                  padding: '2px 10px'
                }}
              >
                <strong>{product.offer}</strong> درصد تخفیف
              </span>
              <div
                className="banner-content bg-black/60 p-3 rounded flex-column list-item gap-2"
              >
                <div
                  style={{
                    display: '-webkit-box',
                    width: '150px',
                    WebkitLineClamp: '2',
                    WebkitLineBreak: '2',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: '1.17',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}
                >
                  {product?.name}
                </div>
                <h6
                  className="m-0 p-0"
                >
                  <span>
                    {getDiscountedPrice(product.price, product.offer).toLocaleString()} تومان
                  </span>
                  <br />
                  <del
                    style={{
                      color: '#999999',
                      fontWeight: '100'
                    }}
                  >
                    {product.price.toLocaleString()}
                  </del>
                </h6>
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-primary btn-sm m-0 margin"
                >
                  خرید محصول
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination bullets */}
      <div
        className="swiper-pagination"
        style={{
          position: 'absolute',
          right: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0px'
        }}
      >
      </div>
    </div>
  );
}