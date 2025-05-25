import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "boat earbuds",
    "mobile phones",
  ]);
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() === "") return;
    setRecentSearches((prev) => [...prev, searchQuery]);
    localStorage.setItem(
      "recentSearches",
      JSON.stringify([...recentSearches, searchQuery])
    );
    setSearchQuery("");
    setSuggestions([]);
  };

  const fetchSuggestions = async (query) => {
  if (query.trim() === "") {
    setSuggestions([]);
    return;
  }

  try {
    setLoadingSuggestions(true);
    const response = await axios.get("http://localhost:3001/products");
    const products = response.data;

    // فقط فیلتر کن بعد از ۲ ثانیه و نشون بده
    setTimeout(() => {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
      setLoadingSuggestions(false);
    }, 2000);
  } catch (error) {
    console.error("خطا در دریافت محصولات:", error);
    setLoadingSuggestions(false);
  }
};


  const debouncedFetchSuggestions = debounce(fetchSuggestions, 2000);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedFetchSuggestions(query);
  };

  return (
    <div>
      <header className="header header-fixed">
        <div className="container">
          <div className="header-content">
            <div className="input-group search-input">
              {loadingSuggestions ? (
                <div
                  className="custom-swiper-container d-flex"
                  style={{
                    transform: "scale(0.5)",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <a className="search-icon" onClick={handleSearch}>
                  <i className="icon feather icon-search"></i>
                </a>
              )}
              <input
                type="search"
                placeholder="Search here..."
                className="form-control main-in"
                value={searchQuery}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="page-content space-top p-b50">
        <div className="container">
          {suggestions.length > 0 && (
            <div className="recent-search-list suggestions-list">
              <ul>
                {suggestions.map((product) => (
                  <li key={product.id}>
                    <Link
                      to={`/product/${product.id}`}
                      className="search-content"
                    >
                      <i className="icon feather icon-search me-2"></i>
                      <img
                        src={`${product?.images[0]}`}
                        style={{ width: "20px", marginRight: "10px" }}
                      />
                      <span>{product.name}</span>
                      <i className="icon feather icon-arrow-up-left"></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="recent-search-list">
            <ul>
              {recentSearches.map((search, index) => (
                <li key={index}>
                  <a href={`/product/${search}`} className="search-content">
                    <i className="icon feather icon-clock me-2"></i>
                    <span>{search}</span>
                    <i className="icon feather icon-arrow-up-left"></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer f0 fixed bg-white">
        <div className="container">
          <a
            className="btn btn-outline-primary back-btn btn-block"
            onClick={() => navigate(-1)}
          >
            GO Back!
          </a>
        </div>
      </div>
    </div>
  );
}