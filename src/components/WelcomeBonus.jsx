import React, { useState } from "react";
import line from "../images/welcomeBonus/line.png";
import arrow from "../images/welcomeBonus/arrow.png";

const Bonus = ({ data, clickHandler, type, id }) => {
  const [checked, setChecked] = useState(false);
  const handleClick = (e) => {
    if (type === "arrow") return;
    setChecked(!checked);
    clickHandler(e);
  };
  return (
    <div className="welcomeBonus" onClick={handleClick}>
      <img className="welcomeBonus__bg" src={data.bgUrl} alt="bg" />
      <div className="welcomeBonus__content">
        <div className="welcomeBonus__image">
          <img src={data.imgUrl} alt="bonusImg" />
        </div>
        <div className="welcomeBonus__textContent">
          <p className="welcomeBonus__textContent--item welcomeBonus__textContent--item--highlighted">
            {data.line1}
          </p>
          <p className="welcomeBonus__textContent--item">{data.line2}</p>
          <p className="welcomeBonus__textContent--item">{data.line3}</p>
        </div>
        <div className="welcomeBonus__actions">
          {type === "arrow" ? (
            <div
              className="welcomeBonus__actions--wrapper"
              onClick={clickHandler}
            >
              <div className="welcomeBonus__actions--img">
                <img src={line} alt="line" />
              </div>
              <div className="welcomeBonus__actions--arrow">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          ) : (
            <input
              id={id}
              className="welcomeBonus__actions--checkbox"
              type="checkbox"
              checked={checked}
              readOnly={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Bonus;
