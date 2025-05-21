import { Link, useNavigate } from "react-router-dom";
import Input from "../components/public/Input";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, password, confirm_password } = formData;

    if (!name || !password || !confirm_password) {
      setError("لطفاً همه فیلدها را پر کنید.");
      return;
    }

    if (password !== confirm_password) {
      setError("رمز و تکرار آن با هم مطابقت ندارند.");
      return;
    }

    try {
      const existingUser = await axios.get(
        `http://localhost:3001/users?name=${name}`
      );
      if (existingUser.data.length) {
        setError("این نام کاربری قبلاً ثبت شده است.");
        return;
      }

      await axios.post("http://localhost:3001/users", {
        name,
        password,
      });

      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("خطایی در ثبت‌نام رخ داد.");
    }
  };

  return (
    <div className="page-content">
      <div className="account-box">
        <div className="container">
          <div className="logo-area">
            <img
              className="logo-dark"
              src="/images/logos/light/logo1.svg"
              alt=""
            />
            <img
              className="logo-light"
              src="/images/logos/light/logo1.svg"
              alt=""
            />
          </div>
          <div className="section-head text-center pt-0">
            <h2>Create your account</h2>
            <p>Create an account to continue!</p>
          </div>
          <div className="account-area">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <Input
                  label="Username"
                  id="name"
                  type="text"
                  placeholder="Type Username Here"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <Input
                label="Password"
                id="password"
                type="password"
                placeholder="Type Password Here"
                value={formData.password}
                onChange={handleChange}
              />
              <Input
                label="Confirm Password"
                id="confirm_password"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                onChange={handleChange}
              />

              {error && (
                <p className="text-danger text-center mt-3">{error}</p>
              )}

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Checked-1"
                  required
                />
                <label className="form-check-label" htmlFor="Checked-1">
                  I agree to all Terms, Privacy Policy and fees
                </label>
              </div>

              <button
                type="submit"
                className="btn bg-primary mb-3 text gear w-100"
              >
                Register
              </button>

              <div className="text-primary">
                <span>Already have an account? </span>
                <Link
                  to="/login"
                  className="text-primary gear3"
                  style={{ fontWeight: "600" }}
                >
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
