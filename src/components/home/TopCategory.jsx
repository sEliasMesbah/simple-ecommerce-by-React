import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TopCategory() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 💡 واکشی داده‌ها از API
  const fetchCategories = async () => {
    try {
      const res = await fetch('http://localhost:3001/categories');
      if (!res.ok) throw new Error('خطا در دریافت کتگوری‌ها');

      const data = await res.json();
      setCategories(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="text-center my-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">در حال بارگذاری...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="category-swiper-container">
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        pagination={{ clickable: true }}
        className="category-swiper"
      >
        {/* 📦 کتگوری "همه" */}
        <SwiperSlide>
          <Link to="/categori" className="category-btn w-100 h-100 d-block text-center">
            <strong> همه </strong>
          </Link>
        </SwiperSlide>

        {/* 🔄 نمایش کتگوری‌ها از API */}
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="category-btn w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center"
            ><strong>{category.name}</strong></Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
  );
}