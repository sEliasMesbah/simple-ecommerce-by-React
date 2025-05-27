import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brandsLoading, setBrandsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (user) {
        try {
          const res = await fetch(`http://localhost:3001/wishlists/${user.id}`);
          if (res.ok) {
            const wishlist = await res.json();
            setLikedProducts(wishlist.items.map(item => item.id));
          }
        } catch (err) {
          console.error('Error fetching wishlist:', err);
        }
      }
    };
    fetchWishlist();
  }, [user]);

  // Fetch products from json-server
  useEffect(() => {
        const fetchBrands = async () => {
        try {
        const response = await axios.get('http://localhost:3001/brands');
        setBrands(response.data);
        setBrandsLoading(false);
        } catch (error) {
        console.error('Error fetching brands:', error);
        setBrandsLoading(false);
        }
    };
    fetchBrands();
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];

    // Brand filter
    if (selectedBrands.length > 0) {
        result = result.filter(product => 
            selectedBrands.includes(product.brandId) // فرض میکنیم محصولات با brandId به برندها لینک میشوند
        );
    }

    // Discount filter
    if (selectedDiscounts.length > 0) {
        result = result.filter(product =>
            selectedDiscounts.some(discount => product.offer >= parseInt(discount))
        );
    }


    // Sorting
    switch (sortBy) {
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'discount':
        result.sort((a, b) => b.offer - a.offer);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [selectedBrands, selectedDiscounts, sortBy, products]);

    const handleBrandChange = (brandId) => {
        setSelectedBrands(prev => 
            prev.includes(brandId) 
            ? prev.filter(b => b !== brandId) 
            : [...prev, brandId]
        );
    };

  const handleDiscountChange = (discount) => {
    setSelectedDiscounts(prev =>
      prev.includes(discount)
        ? prev.filter(d => d !== discount)
        : [...prev, discount]
    );
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
  };

    const getDiscountedPrice = (price, offer) => {
        return Math.floor(price * (1 - offer / 100));
    };

  const toggleLike = async (product, e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      alert("Please log in to add to favorites.");
      return;
    }

    try {
      let wishlist;
      let res = await fetch(`http://localhost:3001/wishlists/${user.id}`);

      if (res.status === 404) {
        const newWishlist = {
          id: user.id,
          userId: user.id,
          items: []
        };

        const postRes = await fetch(`http://localhost:3001/wishlists`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newWishlist),
        });

        if (!postRes.ok) throw new Error("Problem creating wishlist");
        wishlist = newWishlist;
      } else if (res.ok) {
        wishlist = await res.json();
      } else {
        throw new Error("Error retrieving wishlist");
      }

      const isLiked = likedProducts.includes(product.id);
      let updatedItems = [];

      if (isLiked) {
        updatedItems = wishlist.items.filter(item => item.id !== product.id);
        setLikedProducts(prev => prev.filter(id => id !== product.id));
      } else {
        const newItem = {
          id: product.id,
          name: product.name,
          url: product.images[0],
          price: product.price,
          offerprice: product.price * (1 - product.offer/100)
        };
        updatedItems = [...wishlist.items, newItem];
        setLikedProducts(prev => [...prev, product.id]);
      }

      const patchRes = await fetch(`http://localhost:3001/wishlists/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: updatedItems })
      });

      if (!patchRes.ok) throw new Error("Error updating wishlist");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="wrapper">
      <header className="header shadow header-fixed border-0">
        <div className="container">
          <div className="header-content">
            <div className="left-content">
              <Link to="/" className="back-btn">
                <i className="icon feather icon-chevron-left"></i>
              </Link>
              <h6 className="title">Products</h6>
            </div>
          </div>
        </div>
      </header>

      <div className="page-content space-top" style={{ paddingBottom: "6rem" }}>
        <div className="container p-0">
          <div className="swiper filter-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <button 
                  className="filter-btn"
                  data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvasBottom1"
                >
                  <i className="icon feather icon-sliders"></i>  
                  <span>Sort By</span>
                  <i className="icon feather icon-chevron-down"></i>
                </button>                                    
              </div>
              <div className="swiper-slide">
                <button 
                  className="filter-btn"
                  data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvasBottom2"
                >
                  <i className="icon feather icon-filter"></i>  
                  <span>Brand</span>
                </button>                                    
              </div>
              <div className="swiper-slide">
                <button 
                  className="filter-btn"
                  data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvasBottom3"
                >
                  <span>Discount</span>
                  <i className="icon feather icon-chevron-down"></i>
                </button>                                    
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row g-3">
              {filteredProducts.map(product => (
                <Link to={`/product/${product.id}`} key={product.id} className="col-6">
                  <div className="shop-card">
                    <div className="dz-media">
                      <img src={product.images[0]} alt={product.name} />
                      <button
                        onClick={(e) => toggleLike(product, e)}
                        className="item-bookmark btn btn-link p-0 position-absolute top-0 end-0 m-2"
                        style={{ border: "none", background: "transparent", cursor: "pointer" }}
                        title={likedProducts.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                        aria-label={likedProducts.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                    >
                        <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={likedProducts.includes(product.id) ? "red" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                        >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    </div>
                    <div className="dz-content">
                      <h6 className="title mb-1">
                        <Link to={`/product/${product.id}`}>
                          {product.name}
                        </Link>
                      </h6>
                        <span className="font-12 brand-tag">
                            {brands.find(b => b.id === product.brandId)?.name || 'Unknown Brand'}
                        </span>
                      <h6 className="price mb-2">
                        {product.offer ? (
							<>
								<h6 className="price">
									${getDiscountedPrice(product.price, product.offer).toLocaleString()}
									<del>${product.price}</del>
								</h6>
							</>
						) : (
							<>
								<span>${product.price}</span>
							</>
						)}
                      </h6>
                      {/* {product.offer > 0 && (
                        <div className="badge bg-danger">
                          {product.offer}% OFF
                        </div>
                      )} */}
                        <div className="dz-review-meta">
                            <h6 className="review">
                                4.5
                                <i className="fa-solid fa-star ms-1" />
                                <span>(265 Review)</span>
                            </h6>
                        </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sort By Offcanvas */}
      <div className="offcanvas offcanvas-bottom dz-filter-canvas" id="offcanvasBottom1">
        <div className="offcanvas-header border-0">
          <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="offcanvas"
          >
            <i className="icon feather icon-x"></i>
          </button>
          <h6 className="offcanvas-title">Sort By</h6>
        </div>
        <div className="offcanvas-body">
          {['price-high-low', 'price-low-high', 'discount'].map((sortType) => (
            <div key={sortType} className="form-check">
              <label className="form-check-label">
                {sortType.replace(/-/g, ' ').toUpperCase()}
              </label>
              <input
                type="radio"
                className="form-check-input"
                checked={sortBy === sortType}
                onChange={() => handleSortChange(sortType)}
              />
            </div>
          ))}
        </div>
      </div>

        {/* Brand Filter Offcanvas */}
        <div className="offcanvas offcanvas-bottom dz-filter-canvas" id="offcanvasBottom2">
        <div className="offcanvas-header border-0">
            <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="offcanvas"
            >
            <i className="icon feather icon-x"></i>
            </button>
            <h6 className="offcanvas-title">Brands</h6>
        </div>
        <div className="offcanvas-body">
            {brandsLoading ? (
            <div>Loading brands...</div>
            ) : (
            brands.map(brand => (
                <div key={brand.id} className="form-check">
                <label className="form-check-label">
                    {brand.name}
                </label>
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={selectedBrands.includes(brand.id)}
                    onChange={() => handleBrandChange(brand.id)}
                />
                </div>
            ))
            )}
        </div>
        </div>

      {/* Discount Filter Offcanvas */}
      <div className="offcanvas offcanvas-bottom dz-filter-canvas" id="offcanvasBottom3">
        <div className="offcanvas-header border-0">
          <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="offcanvas"
          >
            <i className="icon feather icon-x"></i>
          </button>
          <h6 className="offcanvas-title">Discount</h6>
        </div>
        <div className="offcanvas-body">
          {[10, 20, 30, 40, 50, 60, 70].map(discount => (
            <div key={discount} className="form-check">
              <label className="form-check-label">
                {discount}% or more
              </label>
              <input
                type="checkbox"
                className="form-check-input"
                checked={selectedDiscounts.includes(discount.toString())}
                onChange={() => handleDiscountChange(discount.toString())}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;