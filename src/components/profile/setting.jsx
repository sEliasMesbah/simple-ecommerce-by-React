import { Link } from "react-router-dom";
import React from 'react';
export default function Setting() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('www.sargarme.com');
      alert('متن با موفقیت کپی شد!');
    } catch (err) {
      alert('خطا در کپی کردن متن: ' + err);
    }
    return <button >کپی لینک</button>;
  };

  return (
    <div className="setting-container">
      <ul>
        <li>Setting
          <Link to="">
            <i style={{ color: 'var(--primary)', padding: '0 10px' }} class="fa fa-cog" aria-hidden="true"></i>

          </Link>
        </li>

        <li className="LogOut-btn">
          <Link to="/login">Log Out
            <i style={{ color: 'var(--primary)', padding: '0 10px' }} class="fa fa-sign-out" aria-hidden="true"></i>

          </Link>
        </li>

        <li className="copyBtn">
          <Link to="" onClick={handleCopy}>Copy Link
            <i style={{ color: 'var(--primary)', padding: '0 10px' }} class="fa fa-clone" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}
