import React from "react";
import line from "../images/welcomeBonus/line.png";
import arrow from "../images/welcomeBonus/arrow.png";

const WelcomeBonus = ({ image, line1, line2, line3, className, type }) => {
  const handleClick = (e) => {
    if (type === "arrow") return;
    const elements = document.querySelectorAll(".welcomeBonus");
    elements.forEach((el) => {
      if (el.classList.contains("checked")) {
        el.classList.remove("checked");
      }
    });

    e.currentTarget.classList.add("checked");
  };
  return (
    <div className={`welcomeBonus ${className}`} onClick={handleClick}>
      <div className="welcomeBonus-image">
        <img src={image} alt="treeasure" />
      </div>
      <div className="welcomeBonus-textContent">
        <p className="welcomeBonus-textContent--title">{line1}</p>
        <p>{line2}</p>
        <p>{line3}</p>
      </div>
      <div className="welcomeBonus-actions">
        {type === "arrow" ? (
          <div>
            <div>
              <img src={line} alt="line" />
            </div>
            <div className="welcomeBonus-actions--arrow">
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        ) : (
          <div className="welcomeBonus-actions--radio"></div>
        )}
      </div>
    </div>
  );
};

export default WelcomeBonus;
