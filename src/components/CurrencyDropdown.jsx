import React from "react";
import down from "../images/down.png";
import { currencies } from "../utils";

const CurrencyDropdown = ({
  selected,
  setSelected,
  isActive,
  setIsActive,
  isOtherDropdownActive,
}) => {

  return (
    <div className="heroForm-inputs--dropdown dropdown">
      <div
        className={`dropdown-btn  ${isActive ? "active" : ""}`}
        onClick={(e) => {
          if (!isOtherDropdownActive) {
            setIsActive(!isActive);
            setSelected("");
          }
        }}
      >
        {selected || "EUR"}
        <span className={`dropdown-btn--arrow ${isActive ? "rotate" : ""}`}>
          <img src={down} alt="arrowdown" />
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content dropdown-content--currency">
          {currencies.map((currency) => (
            <div
              key={currency + Math.random()}
              className="dropdown-content--item"
              onClick={() => {
                setSelected(currency.code);
                setIsActive(false);
              }}
            >
              {currency.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
