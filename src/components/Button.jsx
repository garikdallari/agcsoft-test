import React from "react";

const Button = ({ text, className, bgImg, type, styles }) => {
  return (
    <button
      className={`button ${className}`}
      type={type || "button"}
      style={{ ...styles }}
    >
      <img className="button__bgImg" src={bgImg} alt="button" />
      <span className="button__text">{text}</span>
    </button>
  );
};

export default Button;
