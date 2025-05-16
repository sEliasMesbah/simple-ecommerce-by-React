import { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "./OrderCard";
import { Link } from "react-router-dom";

const OrderPage = () => {
    const [images, setImages] = useState([]);
    const [activeTab, setActiveTab] = useState("All");


    // محاسبه قیمت تخفیف‌خورده
    const getDiscountedPrice = (price, offer) => {
        return Math.floor(price * (1 - offer / 100));
    };

    // const finalPrice = getDiscountedPrice(images.products.price, images.products.offer);
    // console.log(finalPrice); // خروجی: 170000

    // تب‌های قابل انتخاب
    const tabs = ["All", "On Delivery", "Completed", "Canceled"];

    // اطلاعات کارت‌ها (ثابت)
    const orders = [
        {
            title: "Brown Women Shirts by Coklat Cloth ",
            quantity: 1,
            price: 47.6,
            status: "Completed",
            description: "Order Received by [Louis Simatupang]",
            class: "btn btn-sm btn-success light me-4"
        },
        {
            title: "Women Sleep Suits by Femall Clothings",
            quantity: 2,
            price: 47.6,
            status: "Canceled",
            description: "Reach on payment due date",
            class: "btn btn-sm btn-info light me-4"
        },
        {
            title: "Red Candy Handy Bag with Random Accessories",
            quantity: 1,
            price: 50.6,
            status: "On Delivery",
            description: "On the way by Courir [H. Stefanus]",
            class: "btn btn-sm btn-success light me-4"
        },
        {
            title: "Women Sleep Suits by Femall Clothings",
            quantity: 1,
            price: 47.6,
            status: "Completed",
            description: "Order Received by [Louis Simatupang]",
            class: "btn btn-sm btn-danger light me-4"
        }
    ];

    useEffect(() => {
        axios.get("http://localhost:3001/products")
            .then(res => setImages(res.data))
            .catch(err => console.error("Error fetching images:", err));
    }, []);

    // فیلتر کارت‌ها براساس تب فعال
    const filteredOrders = activeTab === "All"
        ? orders
        : orders.filter(order => order.status === activeTab);

    return (
        <>
            <header style={{ padding: "0px 10px" }} className="header shadow header-fixed border-0">
                <div className="container">
                    <div className="header-content">
                        <div className="left-content">
                            <Link to="/profile" className="back-btn">
                                <i className="icon feather icon-chevron-left"></i>
                            </Link>
                            <h6 className="title">Orders</h6>
                        </div>
                        <div className="mid-content">
                        </div>
                        <div className="right-content">
                            <a href="search.html" className="search-icon">
                                <i className="icon feather icon-search"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <div style={{ marginBottom: "60px" }} className="page-wrapper">
                <div className="page-content space-top">
                    <div className="container p-0">
                        <div className="dz-tab style-1 ">
                            {/* تب‌ها */}
                            <ul className="nav nav-tabs   tab-slide-effect" role="tablist">
                                {tabs.map((tab, idx) => (
                                    <li
                                        key={idx}
                                        role="presentation"
                                        className={`nav-item ${activeTab === tab ? "active-tab" : ""}`}
                                    >
                                        <button
                                            className={`nav-link ${activeTab === tab ? "active" : ""}`}
                                            onClick={() => setActiveTab(tab)}
                                            type="button"
                                            role="tab"
                                        >
                                            {tab}
                                        </button>
                                    </li>
                                ))}
                            </ul>


                            {/* محتوای کارت‌ها */}
                            <div className="tab-content">
                                <div className="tab-pane fade active show">
                                    <div className="row">
                                        {filteredOrders.map((order, index) => (
                                            <OrderCard
                                                key={index}
                                                title={order.title}
                                                quantity={order.quantity}
                                                price={images[index]?.price}
                                                offerPrice={(getDiscountedPrice(images[index]?.price, images[index]?.offer))}
                                                status={order.status}
                                                cls={order.class}
                                                description={order.description}
                                                image={images[index]?.images?.[0] || "default.jpg"}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderPage;
