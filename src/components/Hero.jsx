import HeroForm from "./HeroForm";
import Fire from "./Fire";

const Hero = () => {
  return (
    <div className="hero">
      <Fire />
      <div className="hero__wrapper">
        <div className="hero__title">
          <h4>DEPOSIT AND PLAY</h4>
        </div>
        <HeroForm />
      </div>
    </div>
  );
};

export default Hero;
