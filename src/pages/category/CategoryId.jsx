import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
 import Card from "../../components/home/Card";

const CategoryId = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // دریافت اطلاعات دسته‌بندی
        const categoryResponse = await axios.get(
          `http://localhost:3001/categories/${categoryId}`
        );
        setCategory(categoryResponse.data);

        // دریافت همه محصولات
        const productsResponse = await axios.get(
          "http://localhost:3001/products"
        );
        
        // فیلتر محصولات بر اساس categoryId
        const filteredProducts = productsResponse.data.filter(
          product => product.categoryId === categoryId
        );
        
        setProducts(filteredProducts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  if (loading) {
    return <div className="container py-4">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container py-4 text-danger">
        Error: {error}
      </div>
    );
  }

  if (!category) {
    return (
      <div className="container py-4 text-danger">
        Category not found
      </div>
    );
  }

  return (
    <>
        <Header title={"Category"+` ${category.name} `} />
        <div className="container pt-5">
            <h1 className="my-4 pt-2">{category.name}</h1>
            
            <div className="row g-3">
                {products.length === 0 ? (
                <div className="col-12 text-center py-4">
                    No products found in this category
                </div>
                ) : (
                products.map(product => (
                    <Card 
                        key={product.id} 
                        data={{ 
                            ...product,
                            category // اضافه کردن اطلاعات دسته‌بندی به داده
                        }} 
                    />
                ))
                )}
            </div>
        </div>
    </>
  );
};
export const Header = ({title}) => {
  return (
    <header className="header shadow header-fixed border-0" style={{ position: "fixed", top: "0" }}>
      <div className="container">
        <div className="header-content">
          <div className="left-content">
            <Link to="/home" className="back-btn">
              <i className="icon feather icon-chevron-left"></i>
            </Link>
          </div>
          <div className="mid-content">
            <h6 className="title">{title}</h6>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CategoryId;