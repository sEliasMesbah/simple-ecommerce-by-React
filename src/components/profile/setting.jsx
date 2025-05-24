import { Link } from "react-router-dom";

export default function Setting() {
  return (
    <div className="setting-container">
      <ul>
        <li>Setting</li>
        <li className="LogOut-btn">
          <Link to="/login">Log Out</Link>
        </li>
      </ul>
    </div>
  );
}
