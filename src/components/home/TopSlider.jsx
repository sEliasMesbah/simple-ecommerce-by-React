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
          Try again 🔁
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
            loading...
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
          400: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        loop={true}
        // autoplay={{delay: 4000,disableOnInteraction: false,}}
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
              className="relative text-white flex items-end banner-bg"
              title={`${product?.name}`}
              style={{
                backgroundImage: `url(${product.banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                height: '100%',
                position: 'relative',
                margin:'0',
                padding:'10px'
              }}
            >
                <div className="banner-content bg-black/60 p-2 rounded">
                  <span style={{color:"#0D775E",fontWeight: "600"}}>#FASHION DAY</span>
                  <h2  className="offer">{product.offer}% Off</h2>
                  <p className='text-sm'>{product?.name.slice(0, 23)}...</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary btn-sm m-0 margin"
                  >
                    Shop Now
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
          right: '6px',
          left: "inherit !important",
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