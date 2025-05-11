import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const DownSlider = () => {
    const ProductCards = [
        {
            off: "32% off",
            star: "4.5",
            url: "/images/popular/pic3.png",
            name: "T-shirt",
            describe: "Men Black Grey Allover Printed Round Neck ...",
            price: "30.15",
            offerprice: "25.15",
        },
        {
            off: "35% off",
            star: "4.5",
            url: "/images/popular/pic1.png",
            name: "T-shirt",
            describe: "Men Black Grey Allover Printed Round Neck ...",
            price: "30.15",
            offerprice: "25.15",
        },
        {
            off: "38% off",
            star: "4.5",
            url: "/images/popular/pic4.png",
            name: "T-shirt",
            describe: "Men Black Grey Allover Printed Round Neck ...",
            price: "30.15",
            offerprice: "25.15",
        },
        {
            off: "39% off",
            star: "4.5",
            url: "/images/popular/pic3.png",
            name: "T-shirt",
            describe: "Men Black Grey Allover Printed Round Neck ...",
            price: "30.15",
            offerprice: "25.15",
        },
        {
            off: "sale",
            star: "4.5",
            url: "/images/popular/pic2.png",
            name: "T-shirt",
            describe: "Men Black Grey Allover Printed Round Neck ...",
            price: "30.15",
            offerprice: "25.15",
        },
    ];

    return (
        <div className="swiper trending-swiper p-lr15">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={15}
                slidesPerView={2.23}
                loop={true}
                autoplay={{ delay: 1350, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {ProductCards.map((product, index) => (
                    <SwiperSlide key={index} style={{width:"443px"}}>
                        <div className="shop-card style-2">
                            <div className="dz-media">
                                <a href="product-detail.html">
                                    <img src={product.url} alt="image" style={{height:"381px"}} />
                                </a>
                                <div className="product-tag">
                                    <span className="review me-2">
                                        <i className="fa-solid fa-star"></i>{product.star}
                                    </span>
                                    <span className="total">{product.off}</span>
                                </div>
                            </div>
                            <div className="dz-content">
                                <span className="font-12">{product.name}</span>
                                <h6 className="title">
                                    <a href="product-detail.html">{product.describe}</a>
                                </h6>
                                <h6 className="price">
                                    ${product.offerprice}<del>${product.price}</del>
                                </h6>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DownSlider;