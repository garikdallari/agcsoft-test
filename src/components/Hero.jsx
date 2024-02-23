import React from "react";
import WelcomeBonus from "./WelcomeBonus";
import HeroForm from "./HeroForm";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-title">
        <h4>DEPOSIT AND PLAY</h4>
      </div>
      <WelcomeBonus />
      <HeroForm />
    </div>
  );
};

export default Hero;
