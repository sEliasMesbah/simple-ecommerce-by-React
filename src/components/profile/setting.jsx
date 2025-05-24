import { Link } from "react-router-dom";

export default function Setting() {
  return (
    <div className="setting-container">
      <ul>
        <li>Setting
          <Link>
            <i style={{ color: 'var(--primary)', padding: '0 10px' }} class="fa fa-cog" aria-hidden="true"></i>
            
          </Link>
        </li>

        <li className="LogOut-btn">
          <Link to="/login">Log Out
            <i style={{ color: 'var(--primary)', padding: '0 10px' }} class="fa fa-sign-out" aria-hidden="true"></i>
            
          </Link>
        </li>
      </ul>
    </div>
  );
}
