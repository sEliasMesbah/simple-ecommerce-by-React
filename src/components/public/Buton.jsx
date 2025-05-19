export default function Button({ text, icon, className, onClick }) {
  return (
    <button className={`btn btn-primary ${className}`} onClick={onClick}>
      {icon && <i className={`icon feather icon-${icon}`}></i>}
      {text}
    </button>
  );
}
