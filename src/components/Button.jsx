import React, { useState } from "react";

const Button = ({ text, className, bgImg, type, styles, hoverBg }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <button
      className={`button ${className}`}
      type={type || "button"}
      style={{ ...styles }}
      onTouchStart={() => setHovering(true)}
      onTouchEnd={() => setHovering(false)}
      onMouseEnter={
        window.innerWidth > 1024 ? () => setHovering(true) : () => {}
      }
      onMouseLeave={
        window.innerWidth > 1024 ? () => setHovering(false) : () => {}
      }
    >
      <img
        className="button__bgImg"
        src={hoverBg && hovering ? hoverBg : bgImg || bgImg}
        alt="button"
      />
      <span className="button__text">{text}</span>
    </button>
  );
};

export default Button;
