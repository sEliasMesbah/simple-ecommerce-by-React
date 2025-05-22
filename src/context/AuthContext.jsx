import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = async (name, password) => {
    // بررسی اولیه خالی نبودن فیلدها
    if (!name.trim() || !password.trim()) {
      console.warn("نام کاربری یا رمز عبور وارد نشده است.");
      return false;
    }

    try {
      const res = await axios.get(
        `http://localhost:3001/users?name=${encodeURIComponent(name)}&password=${encodeURIComponent(password)}`
      );

      if (res.data.length > 0) {
        const loggedInUser = res.data[0];
        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        localStorage.setItem("userId", loggedInUser.id);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error("Login error:", err);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
