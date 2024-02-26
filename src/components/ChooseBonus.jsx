import React, { useState } from "react";
import WelcomeBonus from "./WelcomeBonus";
import welcomeBonusImg from "../images/welcomeBonus/welcomeBonus.png";
import firstDepBonus from "../images/welcomeBonus/firstDepBonus.png";
import noBonus from "../images/welcomeBonus/noBonus.png";

const ChooseBonus = () => {
  const [checkboxes, setCheckboxes] = useState({
    welcomebonus: false,
    firstdep: false,
    nobonus: false,
  });

  const handleClick = (checkbox) => {
    setCheckboxes({
      welcomebonus: checkbox === "welcomebonus" ? true : false,
      firstdep: checkbox === "firstdep" ? true : false,
      nobonus: checkbox === "nobonus" ? true : false,
    });
  };
  return (
    <div>
      <WelcomeBonus
        onClick={() => handleClick("welcomebonus")}
        image={welcomeBonusImg}
        line1="Welcome bonus"
        line2="100% up to €500"
        line3="+120 FreeSpins"
        className="red"
        checked={checkboxes.welcomebonus}
      />
      <WelcomeBonus
        onClick={() => handleClick("firstdep")}
        image={firstDepBonus}
        line1="First Deposit Bonus"
        line2="100% up to €500"
        line3="+120 FreeSpins"
        className="purple"
        checked={checkboxes.firstdep}
      />
      <WelcomeBonus
        onClick={() => handleClick("nobonus")}
        image={noBonus}
        line1="No Bonus"
        line2="I do not want"
        line3="a Welcome bonus"
        className="blue"
        checked={checkboxes.nobonus}
      />
    </div>
  );
};

export default ChooseBonus;
