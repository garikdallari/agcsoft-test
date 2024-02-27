import React from "react";
import QuantityBadge from "./QuantityBadge";

const MenuItem = ({ element }) => {
  return (
    <div className="menu__list--item">
      <div className="menu__list--item--img">
        {element.badge && (
          <QuantityBadge
            styles={{
              top: "-6px",
              right: "-4px",
              fontSize: "10px",
            }}
            quantity={element.badge}
          />
        )}
        <img src={element.icon} alt="icon" />
      </div>
      <p className="menu__list--item--text">{element.title}</p>
    </div>
  );
};

export default MenuItem;
