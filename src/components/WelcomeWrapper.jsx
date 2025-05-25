import React from "react";
import { useNavigate } from "react-router-dom";
import Welcome from "../public/Welcome";
// مسیر رو با توجه به ساختار پروژه‌ات تنظیم کن

export default function WelcomeWrapper() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/home");
  };

  return <Welcome onStart={handleStart} />;
}
