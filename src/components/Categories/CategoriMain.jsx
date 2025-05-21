import { useState , useEffect, Children } from "react";
import axios from "axios";
import CategoriCard from "./CategoryCard"
import Skeleton from "../public/Skeleton";

export default function CategoryMain(){
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchCategoriesAndProducts = async () => {
        try {
            const catRes = await axios.get("http://localhost:3001/categories");
            const prodRes = await axios.get("http://localhost:3001/products");
            setTimeout(function(){
                const categoriesData = catRes.data;
                const productsData = prodRes.data;
                // محاسبه تعداد محصولات برای هر دسته
                const updatedCategories = categoriesData.map((category) => {
                    const count = productsData.filter(
                        (p) => p.categoryId === category.id
                    ).length;
                    return { ...category, count }; // اضافه کردن count به هر دسته
                });
    
                setCategories(updatedCategories);
                setLoading(false);
            },2000)


        } catch (err) {
            console.error("خطا در دریافت اطلاعات:", err);
            setLoading(false);
        }
        };

        fetchCategoriesAndProducts();
    }, []);
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

    return <>
        <Banner>
            {categories.map((data)=>(
                <CategoriCard data={data} />
            ))}
        </Banner>
    </>
}
export function Banner({children}) {
    return (
        <div className="page-content space-top p-b60">
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    )
}