import React from "react";
import down from "../images/down.png";
import { countries } from "../utils";

const Dropdown = ({
  selected,
  setSelected,
  isActive,
  setIsActive,
  isOtherDropdownActive,
}) => {

  return (
    <div className="heroForm-inputs--dropdown dropdown">
      <div
        className="dropdown-btn"
        onClick={(e) => {
          if (!isOtherDropdownActive) {
            setIsActive(!isActive);
          }
        }}
      >
        {selected || "Country"}
        <span className={`dropdown-btn--arrow ${isActive ? "rotate" : ""}`}>
          <img src={down} alt="arrowdown" />
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {countries.map((country) => (
            <div
              key={country}
              className="dropdown-content--item"
              onClick={() => {
                setSelected(country);
                setIsActive(false);
              }}
            >
              {country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
