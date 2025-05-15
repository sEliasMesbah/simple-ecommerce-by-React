import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function ProductCards() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);

      // ⬇️ دریافت تمام محصولات
      const productsRes = await fetch('http://localhost:3001/products');
      if (!productsRes.ok) throw new Error('خطا در دریافت محصولات');
      const productsData = await productsRes.json();

      // ⬇️ دریافت تمام کتگوری‌ها
      const categoriesRes = await fetch('http://localhost:3001/categories');
      if (!categoriesRes.ok) throw new Error('خطا در دریافت کتگوری‌ها');
      const categoriesData = await categoriesRes.json();

      // ⬇️ ساخت Map از کتگوری‌ها برای دسترسی سریع
      const categoryMap = new Map(categoriesData.map(cat => [cat.id, cat]));

      // ⬇️ اضافه کردن داده‌ی category به هر محصول
      const mergedProducts = productsData
        .map(product => ({
          ...product,
          category: categoryMap.get(product.categoryId) || null
        }));

      setProducts(mergedProducts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  if (loading) {
    return (
        <div
            className="text-center my-5 d-flex"
            style={{
                position: 'relative',
                width: '100%',
                height: '160px',
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column"
            }}
        >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
        <div
            className="text-center my-5 d-flex"
            style={{
                position: 'relative',
                width: '100%',
                height: '160px',
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column"
            }}
        >
            <div className="alert alert-danger">{error}</div>
            <button className="btn btn-outline-danger" onClick={fetchAllData}>
             Try Again 🔁
            </button>
        </div>
    );
  }

  return (
    <div className="container">
      <div className="row g-3">
        {products.map((product) => (
            <Card data={product} />
        ))}
      </div>
    </div>
  );
}