import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message is sent! Thanks.");
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      maxWidth: "900px",
      margin: "40px auto",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      borderRadius: "12px",
      overflow: "hidden",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#fff"
    }}>
      <div style={{flex: "1", backgroundColor: "#0077cc", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img 
          src="/assets/images/ContactUs/1.jpeg" 
          alt="Electronics" 
          style={{width: "100%", height: "100%", objectFit: "cover"}} 
        />
      </div>


      <div style={{flex: "1", padding: "40px"}}>
        <h2 style={{color: "#0077cc", marginBottom: "25px", fontWeight: "700", fontSize: "28px"}}>
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "18px"}}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "14px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1.5px solid #ccc",
              transition: "border-color 0.3s",
              outline: "none"
            }}
            onFocus={e => (e.target.style.borderColor = "#0077cc")}
            onBlur={e => (e.target.style.borderColor = "#ccc")}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "14px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1.5px solid #ccc",
              transition: "border-color 0.3s",
              outline: "none"
            }}
            onFocus={e => (e.target.style.borderColor = "#0077cc")}
            onBlur={e => (e.target.style.borderColor = "#ccc")}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            style={{
              padding: "14px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1.5px solid #ccc",
              transition: "border-color 0.3s",
              outline: "none"
            }}
            onFocus={e => (e.target.style.borderColor = "#0077cc")}
            onBlur={e => (e.target.style.borderColor = "#ccc")}
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              padding: "14px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1.5px solid #ccc",
              resize: "vertical",
              transition: "border-color 0.3s",
              outline: "none"
            }}
            onFocus={e => (e.target.style.borderColor = "#0077cc")}
            onBlur={e => (e.target.style.borderColor = "#ccc")}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: "#0077cc",
              color: "#fff",
              padding: "14px",
              fontSize: "18px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
              transition: "background-color 0.3s"
            }}
            onMouseEnter={e => (e.target.style.backgroundColor = "#005fa3")}
            onMouseLeave={e => (e.target.style.backgroundColor = "#0077cc")}
          >
            Send
          </button>
        </form>

        {/* اطلاعات تماس */}
        <div style={{marginTop: "30px", color: "#444", fontSize: "16px", lineHeight: "1.6"}}>
          <p>📞 Phone : 0123456789</p>
          <p>✉️ Email: info@example.com</p>
          <p>📍 Address :  LosAngels</p>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div style={{marginTop: "30px"}}>
          <h3 style={{color: "#0077cc", marginBottom: "12px"}}>Follow Us In Social Media</h3>
          <div style={{display: "flex", gap: "15px"}}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{color: "#E1306C", fontSize: "24px", textDecoration: "none"}}>
              📸 Instagram
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" style={{color: "#0088cc", fontSize: "24px", textDecoration: "none"}}>
              💬 Telegram
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" style={{color: "#0077b5", fontSize: "24px", textDecoration: "none"}}>
              🔗 Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
