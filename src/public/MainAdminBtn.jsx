import { Link, useLocation } from 'react-router-dom';
import BtnIcon from "../components/public/BtnIcon";
import SocialIcons from "../components/public/socialIcons";
import { isAdmin } from "../utils/auth";
const MainAdminBtn = () => {
  const location = useLocation();
  if (!isAdmin()) return null;

  return (
    <div className="fixed-admin-btn">
      {location.pathname === '/home' && (
        <Link to="/admin">
          <BtnIcon 
            icon={<SocialIcons admin size="25px" />}
            background="#3498db"
            color="#fff"
          />
        </Link>
      )}

      {location.pathname === '/admin' && (
        <Link to="/home">
          <BtnIcon 
            icon={<SocialIcons home size="25px" />}
            background="#2ecc71"
            color="#fff"
          />
        </Link>
      )}
    </div>
  );
};

export default MainAdminBtn;