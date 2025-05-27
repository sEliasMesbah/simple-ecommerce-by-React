import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";
import Skeleton from "../public/Skeleton";
export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [hasSearchResults, setHasSearchResults] = useState(true);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [invisibleSuggestions, setInvisibleSuggestions] = useState(false);

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
      setInvisibleSuggestions(false);
      return;
    }

    try {
      setInvisibleSuggestions(true);
      setLoadingSuggestions(true);
      
      // شروع همزمان دو فرآیند
      const [response] = await Promise.all([
        axios.get("http://localhost:3001/products"),
        new Promise(resolve => setTimeout(resolve, 2000)) // تایمر ثابت ۲ ثانیه
      ]);
      
      // فیلتر کردن پس از دریافت داده
      const filtered = response.data.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      if (filtered.length === 0) {
        setHasSearchResults(false); // اگر هیچ محصولی یافت نشد، state را false می‌کنیم
      } else {
        setHasSearchResults(true); // در غیر این صورت، true
      }
      
      setSuggestions(filtered);
    } catch (error) {
      console.error("خطا در دریافت محصولات:", error);
    } finally {
      setLoadingSuggestions(false);
    }
  };


  const debouncedFetchSuggestions = debounce(fetchSuggestions, 2000);

  const handleInputChange = (e) => {
    setInvisibleSuggestions(false);
    const query = e.target.value;
    setSearchQuery(query);
    fetchSuggestions(query);
  };
  const handleKeyDown = (event) => {
    setInvisibleSuggestions(false);
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  function textSendToSearch(text) {
    setSearchQuery(text);
    fetchSuggestions(text);
  }
  const handleDeleteSearch = (itemToDelete) => {
    const updatedSearches = recentSearches.filter(searchItem => searchItem !== itemToDelete);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
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
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="page-content space-top p-b50">
        <div className="container">
          {invisibleSuggestions && (
            <div className="recent-search-list suggestions-list">
              <ul>
                {loadingSuggestions ? (
                  // حالت لودینگ
                  Array(5).fill().map((_, index) => (
                    <li key={index}>
                      <div className="search-content">
                        <Skeleton type="circle" width="20px" height="20px" color="#dbdbdb" style={{ marginRight: "10px" }} />
                        <Skeleton width="20px" height="20px" color="#dbdbdb" style={{ marginRight: "10px" }} />
                        <Skeleton type="rect" width="60%" height="20px" color="#dbdbdb" style={{ marginRight: "10px" }} />
                        <Skeleton type="circle" width="20px" height="20px" color="#dbdbdb" />
                      </div>
                    </li>
                  ))
                ) : (
                  // حالت نمایش نتایج
                  suggestions.length === 0 ? (
                    <li className="no-results">
                      <Skeleton
                        type="rect"
                        width="100%"
                        height="24px"
                        color="#ffcccc"
                        highlight="#ff6666"
                        borderRadius="4px"
                        style={{display: "inline-flex", alignItems: "center", justifyContent: "center", height: "50px"}}
                      >
                        <span>× No products found related to "{searchQuery}". Do more searches. ×</span>
                      </Skeleton>
                    </li>
                  ) : (
                    suggestions.map((product) => (
                      <li key={product.id}>
                        <Link
                          to={`/product/${product.id}`}
                          className="search-content"
                        >
                          <i className="icon feather icon-search me-2"></i>
                          <img
                            src={product?.images?.[0] || '/default-image.png'}
                            style={{ width: "20px", marginRight: "10px" }}
                            alt={product.name}
                          />
                          <span>{product.name}</span>
                          <i className="icon feather icon-arrow-up-left"></i>
                        </Link>
                      </li>
                    ))
                  )
                )}
              </ul>
            </div>
          )}
          <div className="recent-search-list">
            <ul>
              {recentSearches.map((search, index) => (
                <li key={index}>
                  <span className="search-content" title={`Text insertion search " ${search} "`} onClick={() => textSendToSearch(search)}>
                    <i className="icon feather icon-clock me-2"></i>
                    <span>{search}</span>
                    <div>
                      <i
                        className="icon feather icon-delete"
                        style={{ marginRight: "20px" }}
                        title={`remove as search " ${search} "`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleDeleteSearch(search);
                        }}
                      ></i>
                      <i className="icon feather icon-arrow-up-left"></i>
                    </div>
                  </span>
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