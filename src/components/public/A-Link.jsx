import { Link } from "react-router-dom";

export default function ALink({ text, icon, className, onClick }) {
  return (
    <Link to="/" className={`btn btn-primary ${className}`} onClick={onClick}>
      {icon && <i className={`icon feather icon-${icon}`}></i>}
      {text}
    </Link>
  );
}
