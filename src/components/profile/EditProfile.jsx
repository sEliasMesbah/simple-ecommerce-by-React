import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../public/Input";
import { useAuth } from "../../context/AuthContext"; // مسیر دقیق کانتکست رو درست وارد کن

export default function EditProfile() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  // اگر userId رو از localStorage نمی‌گیریم، از user کانتکست استفاده می‌کنیم
  const userId = user?.id || localStorage.getItem("userId");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }

    setLoading(true);
    fetch(`http://localhost:3001/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user data");
        return res.json();
      })
      .then((data) => {
        setFormData({
          name: data.name || "",
          phone: data.phone || "",
          email: data.email || "",
          location: data.location || "",
        });
        setError("");
      })
      .catch((err) => {
        console.error("Error loading user data:", err);
        setError("خطا در بارگذاری اطلاعات کاربر");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSave = () => {
    setSaving(true);
    setError("");

    if (!formData.email || !formData.name) {
      setError("لطفا نام و ایمیل را وارد کنید.");
      setSaving(false);
      return;
    }

    const updatedUser = {
      ...formData,
      id: userId,
    };

    fetch(`http://localhost:3001/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update user");
        return res.json();
      })
      .then((data) => {
        alert("پروفایل با موفقیت بروز شد!");
        // آپدیت کانتکست هم اینجا:
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("userId", data.id);
        navigate("/profile");
      })
      .catch((err) => {
        console.error("Error updating profile:", err);
        setError("خطا در ذخیره‌سازی پروفایل: " + err.message);
      })
      .finally(() => {
        setSaving(false);
      });
  };

  if (loading) {
    return <div className="container mt-5 text-center">در حال بارگذاری اطلاعات...</div>;
  }

  return (
    <>
      <div className="page-wrapper">
        <header className="header shadow header-fixed border-0">
          <div className="container">
            <div className="header-content">
              <div className="left-content">
                <Link to="/profile" className="back-btn">
                  <i className="icon feather icon-chevron-left"></i>
                </Link>
                <h6 className="title">ویرایش پروفایل</h6>
              </div>
              <div className="mid-content"></div>
              <div className="right-content"></div>
            </div>
          </div>
        </header>
        <div className="page-content space-top">
          <div className="container">
            {error && <p className="text-danger text-center">{error}</p>}
            <Input
              label="شماره موبایل"
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              label="نام کامل"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              label="ایمیل"
              id="email"
              type="email"
              value={formData.email}
              required={true}
              onChange={handleChange}
            />
            <Input
              label="موقعیت"
              id="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="footer fixed">
          <div className="container">
            <button
              onClick={handleSave}
              className="btn btn-primary w-100"
              type="button"
              disabled={saving}
            >
              {saving ? "در حال ذخیره..." : "ذخیره"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
