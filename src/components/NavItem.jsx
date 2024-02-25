import React from "react";
import QuantityBadge from "./QuantityBadge";

const NavItem = ({ bgColor, text, image, quantity }) => {
  return (
    <div className="navItem" style={{ backgroundColor: bgColor }}>
      <div className="navItem__logo">
        <img className="navItem__logo--img" src={image} alt="img" />
        {quantity && <QuantityBadge quantity={3} />}
      </div>
      <div className="navItem__content">
        <p className="navItem__content--text">{text}</p>
      </div>
    </div>
  );
};

export default NavItem;
