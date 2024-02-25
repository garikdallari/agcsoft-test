import React from "react";
import QuantityBadge from "./QuantityBadge";

const NavItem = ({ bgColor, text, image, quantity }) => {
  return (
    <div className="navItem" style={{ backgroundColor: bgColor }}>
      <div className="navItem-logo">
        <img className="navItem-logo--img" src={image} alt="img" />
        {quantity && <QuantityBadge quantity={3} />}
      </div>
      <div className="navItem-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default NavItem;
