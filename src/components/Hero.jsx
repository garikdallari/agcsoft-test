import React, { useState } from "react";
import WelcomeBonus from "./WelcomeBonus";
import HeroForm from "./HeroForm";
import Fire from "./Fire";
import welcomeBonusImg from "../images/welcomeBonus/welcomeBonus.png";
import ChooseBonus from "./ChooseBonus";

const Hero = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      <Fire />
      <div className={`hero ${submitted ? "hero--submitted" : ""}`}>
        <div className="hero__title">
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
          <ChooseBonus />
        )}
      </div>
    </>
  );
};

export default Hero;
