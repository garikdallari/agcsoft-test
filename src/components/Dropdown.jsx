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
    <div className="heroForm__inputs--dropdown dropdown">
      <div
        className={`dropdown__btn  ${isActive ? "active" : ""}`}
        onClick={(e) => {
          if (!isOtherDropdownActive) {
            setIsActive(!isActive);
          }
        }}
      >
        <span className="dropdown__btn--value">{selected || defaultValue}</span>
        <span className={`dropdown__btn--arrow ${isActive ? "rotate" : ""}`}>
          <img className="dropdown__btn--arrow--img" src={down} alt="arrowdown" />
        </span>
      </div>
      {isActive && (
        <div className="dropdown__content">
          {data.map((el) => (
            <div
              key={el.value + Math.random()}
              className="dropdown__content--item"
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
