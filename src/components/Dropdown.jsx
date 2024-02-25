import React from "react";
import down from "../images/down.png";

const Dropdown = ({
  selected,
  setSelected,
  isActive,
  setIsActive,
  isOtherDropdownActive,
  data,
  defaultValue,
}) => {
  return (
    <div className="heroForm-inputs--dropdown dropdown">
      <div
        className={`dropdown-btn  ${isActive ? "active" : ""}`}
        onClick={(e) => {
          if (!isOtherDropdownActive) {
            setIsActive(!isActive);
          }
        }}
      >
        <span className="dropdown-btn--value">{selected || defaultValue}</span>
        <span className={`dropdown-btn--arrow ${isActive ? "rotate" : ""}`}>
          <img src={down} alt="arrowdown" />
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {data.map((el) => (
            <div
              key={el.value + Math.random()}
              className="dropdown-content--item"
              onClick={() => {
                setSelected(el.value);
                setIsActive(false);
              }}
            >
              {el.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
