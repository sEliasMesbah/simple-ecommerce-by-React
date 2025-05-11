import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

export default function CustomSwiper() {
  const slides = [
    {
      image: '/images/banner/pic1.png',
      title: '#FASHION DAY',
      offer: '35% Off',
      desc: 'Discover our latest Products',
      link: '/product.html',
    },
    {
      image: '/images/banner/pic3.png',
      title: '#WINTER SALE',
      offer: '35% Off',
      desc: 'Discover our latest Products',
      link: '/product.html',
    },
    {
      image: '/images/banner/pic1.png',
      title: '#FASHION DAY',
      offer: '35% Off',
      desc: 'Discover our latest Products',
      link: '/product.html',
    },    {
        image: '/images/banner/pic3.png',
        title: '#FASHION DAY',
        offer: '35% Off',
        desc: 'Discover our latest Products',
        link: '/product.html',
      },
  ];

  return (
    <div className="custom-swiper-container" style={{ position: 'relative', width: '100%', height: '160px' }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                position: 'relative',
                margin:'0',
                padding:'0'
              }}
              className="relative p-4 text-white flex items-end"
            >
              <div className="banner-content bg-black/60 p-3 rounded">
                <span className="font-medium text-sm">{slide.title}</span>
                <h2 className="text-xl font-bold">{slide.offer}</h2>
                <p className="text-sm">{slide.desc}</p>
                <a href={slide.link} className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination bullets (vertical, right side) */}
      <div
        className="swiper-pagination"
        style={{
          position: 'absolute',
          right: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0px',
        }}
      ></div>
    </div>
  );
}