import React from "react";
import line from "../images/welcomeBonus/line.png";
import arrow from "../images/welcomeBonus/arrow.png";

const WelcomeBonus = ({
  image,
  line1,
  line2,
  line3,
  type,
  checked,
  onClick,
  bgImg
}) => {
  return (
    <div className="welcomeBonus" onClick={onClick}>
      <img className="welcomeBonus__bg" src={bgImg} alt="bg" />
      <div className="welcomeBonus__content">
        <div className="welcomeBonus__image">
          <img src={image} alt="treasure" />
        </div>
        <div className="welcomeBonus__textContent">
          <p className="welcomeBonus__textContent--item welcomeBonus__textContent--item--highlighted">
            {line1}
          </p>
          <p className="welcomeBonus__textContent--item">{line2}</p>
          <p className="welcomeBonus__textContent--item">{line3}</p>
        </div>
        <div className="welcomeBonus__actions">
          {type === "arrow" ? (
            <div className="welcomeBonus__actions--wrapper">
              <div className="welcomeBonus__actions--img">
                <img src={line} alt="line" />
              </div>
              <div className="welcomeBonus__actions--arrow">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          ) : (
            <label htmlFor="welcomeBonus">
              <input
                className="welcomeBonus__actions--checkbox"
                type="checkbox"
                readOnly={true}
                checked={checked}
                id="welcomeBonus"
              />
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeBonus;
