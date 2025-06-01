import { createContext, useContext, useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = async (name, password) => {
    if (!name.trim() || !password.trim()) {
      console.warn("نام کاربری یا رمز عبور وارد نشده است.");
      return false;
    }

    try {
      // فقط نام کاربری رو می‌فرستیم
      const res = await axios.get(
        `http://localhost:3001/users?name=${encodeURIComponent(name)}`
      );

      if (res.data.length > 0) {
        const loggedInUser = res.data[0];

        // مقایسه پسورد با هش شده
        const isMatch = bcrypt.compareSync(password, loggedInUser.password);
        if (!isMatch) {
          return false;
        }

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

// برای حل مشکل ایمپورت مستقیم:
export { AuthContext };
