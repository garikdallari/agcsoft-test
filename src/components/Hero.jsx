import React, { useState } from "react";
import WelcomeBonus from "./WelcomeBonus";
import HeroForm from "./HeroForm";
import Fire from "./Fire";
import welcomeBonusImg from "../images/welcomeBonus/welcomeBonus.png";
import firstDepBonus from "../images/welcomeBonus/firstDepBonus.png";
import noBonus from "../images/welcomeBonus/noBonus.png";

const Hero = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      <Fire />
      <div className="hero">
        <div className="hero-title">
          <h4>DEPOSIT AND PLAY</h4>
        </div>
        {!submitted ? (
          <div>
            <WelcomeBonus
              image={welcomeBonusImg}
              line1="Welcome bonus"
              line2="100% up to €500"
              line3="+120 FreeSpins"
              className="red"
              type="arrow"
            />
            <HeroForm handleSubmit={handleSubmit} />
          </div>
        ) : (
          <div>
            <WelcomeBonus
              image={welcomeBonusImg}
              line1="Welcome bonus"
              line2="100% up to €500"
              line3="+120 FreeSpins"
              className="red"
            />
            <WelcomeBonus
              image={firstDepBonus}
              line1="First Deposit Bonus"
              line2="100% up to €500"
              line3="+120 FreeSpins"
              className="purple"
            />
            <WelcomeBonus
              image={noBonus}
              line1="No Bonus"
              line2="I do not want"
              line3="a Welcome bonus"
              className="blue"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
