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
    },{
        image: '/images/banner/pic4.png',
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
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        speed={500}
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
                padding:'10px'
              }}
              className="relative text-white flex items-end banner-bg"
            >
              <div className="banner-content bg-black/60 p-2 rounded">
                <span className="font-medium text-sm">{slide.title}</span>
                <h2 className="text-xl font-bold">{slide.offer}</h2>
                <p className="text-sm">{slide.desc}</p>
                <a href={slide.link} className="btn btn-primary btn-sm margin">
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