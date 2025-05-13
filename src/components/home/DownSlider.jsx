import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

export default function DownSlider() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 💡 واکشی داده‌ها
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // ⬇️ دریافت محصولات
      const productsRes = await fetch('http://localhost:3001/products');
      if (!productsRes.ok) throw new Error('خطا در دریافت محصولات');
      const productsData = await productsRes.json();

      // ⬇️ دریافت دسته‌بندی‌ها
      const categoriesRes = await fetch('http://localhost:3001/categories');
      if (!categoriesRes.ok) throw new Error('خطا در دریافت دسته‌بندی‌ها');
      const categoriesData = await categoriesRes.json();

      // ⬇️ ساخت Map از دسته‌بندی‌ها برای دسترسی سریع
      const categoryMap = new Map(categoriesData.map(cat => [cat.id, cat]));

      // ⬇️ اضافه کردن دسته‌بندی به هر محصول
      const mergedProducts = productsData
        .filter(product => product.offer > 0)
        .map(product => ({
          ...product,
          category: categoryMap.get(product.categoryId) || null
        }));

      setProducts(mergedProducts);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🧮 محاسبه قیمت تخفیف‌خورده
  const getDiscountedPrice = (price, offer) => {
    return Math.floor(price * (1 - offer / 100));
  };

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
          onClick={fetchData}
        >
          🔁 تلاش مجدد
        </button>
      </div>
    );
  }

  return (
    <div className="swiper trending-swiper p-lr15">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={15}
        slidesPerView={2.23}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} style={{ width: '443px' }}>
            <div className="shop-card style-2">
              <div className="dz-media">
                <a href={`product/${product?.id}`}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    style={{ height: '381px', objectFit: 'cover' }}
                  />
                </a>
                <div className="product-tag">
                  <span className="review me-2">
                    <i className="fa-solid fa-star"></i>4.5
                  </span>
                  <span className="total" dir='rtl'>{product?.offer}% تخفیف</span>
                </div>
              </div>

                <div className="dz-content" dir='rtl'>
                    {/* نام دسته‌بندی */}
                    {product.category && (
                        <span className='font-12'>
                            {product.category?.name}
                        </span>
                    )}

                    {/* عنوان محصول */}
                    <h6 
                        title={`${product.name}`}
                        className="title"
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontSize: "0.9rem",
                            fontWeight: "600",
                        }}
                    >
                        <a
                            href={`product/${product.id}`}
                        >
                            {product.name}
                        </a>
                    </h6>

                    {/* قیمت و تخفیف */}
                    <h6 className="price">
                        <span>{getDiscountedPrice(product.price, product.offer).toLocaleString()} تومان </span>
                        <del>{product.price.toLocaleString()} تومان</del>
                    </h6>
                </div>
                </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}