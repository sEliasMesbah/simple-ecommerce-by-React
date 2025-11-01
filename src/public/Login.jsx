import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/public/Input";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.password.trim()) {
      setError("لطفاً همه فیلدها را پر کنید.");
      return;
    }

    const success = await login(formData.name.trim(), formData.password.trim());

    if (success) {
      navigate("/home");
    } else {
      setError("نام کاربری یا رمز عبور اشتباه است.");
    }
  };

  return (
    <div className="page-content">
      <div className="account-box">
        <div className="container">
          <div className="logo-area">
            <img className="logo-dark" src="/images/logos/light/logo1.svg" alt="logo" />
            <img className="logo-light" src="/images/logos/light/logo1.svg" alt="logo" />
          </div>
          <div className="section-head text-center pt-0">
            <h2>Welcome back!</h2>
            <p>Welcome back you've been missed!</p>
          </div>
          <div className="account-area">
            <form onSubmit={handleSubmit}>
              <Input label="Username" id="name" type="text" placeholder="Type Username Here" value={formData.name} onChange={handleChange} />
              <Input label="Password" id="password" type="password" placeholder="Type Password Here" value={formData.password} onChange={handleChange} />
              {error && <p className="text-danger text-center mt-2">{error}</p>}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <Link to="/forgetPassword" className="btn-link text-primary">Forgot password?</Link>
                <Link to="/forgetPassword" className="btn-link text-primary">Reset Here</Link>
              </div>
              <button type="submit" className="btn btn-primary mb-3 w-100 gear">Login</button>
              <Link to="/register" className="btn-link text-center mb-3 mt-4">Don’t have an account?</Link>
              <Link to="/register" className="btn mb-3 btn-outline-primary text-primary w-100 gear2">Register Now</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
