import { useState } from "react";
import { useParams } from "react-router-dom";
import CreateRef from "../tools/CreateRef";

export default function Input({
  id,
  label,
  type = "text",
  placeholder,
  ...props
}) {
  const params = useParams();
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="mb-3" style={{ position: "relative" }}>
      {label && (
        <label className="form-label" htmlFor={id}>
          {label}
          {props.required && <span>*</span>}
        </label>
      )}
      <input
        id={id}
        className={"form-control " + (props.classInput || "")}
        type={inputType}
        placeholder={placeholder}
        {...props}
        ref={CreateRef(props.refItem)}
      />
      {isPassword && (
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          style={{
            position: "absolute",
            right: "10px",
            top: label ? "15px" : "8px",
            cursor: "pointer",
            userSelect: "none",
            color: "#0D775E",
            background: "transparent",
            border: "none",
            padding: 0,
            display: "flex",
            alignItems: "center",
            height: "100%",
            fontSize: "1.2rem",
          }}
          title={showPassword ? "مخفی کردن پسورد" : "نمایش پسورد"}
        >
          {showPassword ? (
            <i className="icon feather icon-eye eye-open"></i>
          ) : (
            <i className="icon feather icon-eye-off eye-close"></i>
          )}
        </span>
      )}
    </div>
  );
}
