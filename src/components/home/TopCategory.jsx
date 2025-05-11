import { Link } from "react-router-dom";
const categories = [
  { name: "All", path: "/" },
  { name: "Men", path: "/men" },
  { name: "T-Shirt", path: "/t-shirt" },
  { name: "Women", path: "/women" },
  { name: "Winter", path: "/winter" },
];

export default function TopCategory() {
  return (
    <div className="swiper category-swiper">
      <div className="swiper-wrap">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className="swiper-sliding"
            role="group"
            aria-label={`${index + 1} / ${categories.length}`}
          >
            <a to="/" className="category-btn">
              {category.name}
            </a>
          </div>
        ))}
      </div>
      <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
  );
}