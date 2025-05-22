import { useState, useEffect, Children } from "react";
import axios from "axios";
import CategoriCard from "./CategoryCard";
import Skeleton from "../public/Skeleton";

export default function CategoryMain() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    function fetchCategoriesAndProducts() {
        setLoading(true);
        setError(null);

        Promise.all([
            axios.get("http://localhost:3001/categories"),
            axios.get("http://localhost:3001/products")
        ])
        .then(([catRes, prodRes]) => {
            const categoriesData = catRes.data;
            const productsData = prodRes.data;
            const updatedCategories = categoriesData.map(category => {
                const count = productsData.filter(p => p.categoryId === category.id).length;
                return { ...category, count };
            });
            setCategories(updatedCategories);
            setLoading(false);
        })
        .catch(err => {
            console.error("Error fetching data", err);
            setError(`${err}`);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchCategoriesAndProducts();
    }, []);

    if (error) {
        return (
            <Banner>
                <div className="col-12 m-b15">
                    <div className="dz-category-card skeleton-wrapper">
                        <div
                            className="category-image"
                            style={{ backgroundImage: `linear-gradient(150deg,rgba(255, 255, 255, 0.5), transparent 100%), url("https://img.freepik.com/free-photo/red-warning-alert-risk-danger-sign-icon-symbol-illustration-isolated-red-background-3d-rendering_56104-1222.jpg")` }}>
                            <Skeleton
                                type="rect"
                                height="100%"
                                width="100%"
                                color="rgba(130, 130, 130, 0.2)"
                                highlight="rgba(255, 0, 0, 0.397)"
                                borderRadius="0"
                            />
                        </div>
                        <div className="category-content">
                            <h3 className="title text-danger">{error}</h3>
                            <div className="shop-btn">
                                <button className="btn btn-danger mt-2" onClick={fetchCategoriesAndProducts}>
                                    Try again 🔁
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Banner>
        );
    }

    if (loading) {
        return (
            <Banner>
                {Array.from({ length: 4 }).map((_, index) => (
                    <div className="col-12 m-b15" key={index}>
                        <div className="dz-category-card skeleton-wrapper">
                            <div className="category-image">
                                <Skeleton
                                    type="rect"
                                    height="100%"
                                    width="100%"
                                    color="rgba(130, 130, 130, 0.2)"
                                    highlight="rgba(130, 130, 130, 0.1)"
                                    borderRadius="0"
                                    style={{
                                        background: `linear-gradient(150deg,
                                            rgba(255, 255, 255, 0.15),
                                            transparent 100%)`
                                    }}
                                />
                            </div>
                            <div className="category-content">
                                <Skeleton
                                    type="text"
                                    width="60%"
                                    height="28px"
                                    style={{ marginBottom: "15px" }}
                                    color="#cfcfcf"
                                />
                                <Skeleton
                                    type="text"
                                    width="40%"
                                    height="18px"
                                    style={{ marginBottom: "20px" }}
                                    color="#cfcfcf"
                                />
                                <div className="shop-btn">
                                    <Skeleton
                                        type="rect"
                                        width="100px"
                                        height="34px"
                                        borderRadius="20px"
                                        color="#cfcfcf"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Banner>
        );
    }

    return (
        <Banner>
            {categories.map((data) => (
                <CategoriCard key={data.id} data={data} />
            ))}
        </Banner>
    );
}

export function Banner({ children }) {
    return (
        <div className="page-content space-top p-b60">
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    );
}
