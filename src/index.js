import React from "react";
import ReactDOM from "react-dom/client";
// <<<<<<< HEAD
// =======
// import './index.css';
// >>>>>>> main
import App from "./App";
import { AuthProvider } from "./context/AuthContext"; // adjust path if needed
import reportWebVitals from "./reportWebVitals";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <ToastContainer
        position="bottom-right"
      />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
