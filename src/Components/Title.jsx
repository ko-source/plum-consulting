import React from "react";

const Title = ({ text, className = "" }) => {
  return (
    <h1 className={`heading-title ${className}`}>
      {text}
    </h1>
  );
};

export default Title;
