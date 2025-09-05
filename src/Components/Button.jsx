  import React from "react";

const Button = ({ text, color, padding, showCircle, onClick, textColor }) => {
  return (
    <button
      className="flex items-center justify-center rounded-full text-sm leading-4 text-center duration-300 ease-linear  font-medium shadow-md transition hover:opacity-80 cursor-pointer"
      style={{
        backgroundColor: color || "#BB00C9", 
        padding: padding || "16px 24px",
        color: textColor || "white",
      }}
      onClick={onClick}
    >
      {showCircle && (
        <span className="w-3.5 h-3.5 bg-white rounded-full mr-2"></span>
      )}
      {text}
    </button>
  );
};

  export default Button;
