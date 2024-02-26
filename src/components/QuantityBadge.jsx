import React from "react";

const QuantityBadge = ({ quantity, styles }) => {
  return (
    <div className="quantityBadge" style={{ ...styles }}>
      {quantity}
    </div>
  );
};

export default QuantityBadge;
