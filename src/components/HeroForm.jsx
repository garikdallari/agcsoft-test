import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Button from "./Button";
import WelcomeBonus from "./WelcomeBonus";
import formBtnBg from "../images/buttonBgs/yellowBtn.png";
import btnHoverBg from "../images/buttonBgs/buttonHover.png";
import { bonusData, countries, currencies } from "../utils";

const HeroForm = () => {
  const [selectedBonus, setSelectedBonus] = useState(bonusData[0]);
  const [bonusMenuOpen, setBonusMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [countryDropDownActive, setCountryDropdownActive] = useState(false);
  const [currencyDropDownActive, setCurrencyDropdownActive] = useState(false);

  const openBonusMenuHandler = () => {
    setBonusMenuOpen(!bonusMenuOpen);
  };

  const chooseBonusHandler = (e) => {
    const { id } = e.currentTarget.querySelector('.welcomeBonus__actions--checkbox');
    const chosenElement = bonusData.find((el) => el.id === id);
    setSelectedBonus(chosenElement);
    setTimeout(() => setBonusMenuOpen(!bonusMenuOpen), 250);
  };

  return (
    <div>
      {!bonusMenuOpen ? (
        <form className="heroForm" onSubmit={(e) => e.preventDefault()}>
          <div className="heroForm__bonus">
            <WelcomeBonus
              type="arrow"
              data={selectedBonus}
              clickHandler={openBonusMenuHandler}
            />
          </div>
          <div className="heroForm__inputs">
            <Dropdown
              selected={selectedCountry}
              isOtherDropdownActive={currencyDropDownActive}
              setSelected={setSelectedCountry}
              isActive={countryDropDownActive}
              setIsActive={setCountryDropdownActive}
              data={countries}
              defaultValue="Country"
            />
            <Dropdown
              selected={selectedCurrency}
              isOtherDropdownActive={countryDropDownActive}
              setSelected={setSelectedCurrency}
              isActive={currencyDropDownActive}
              setIsActive={setCurrencyDropdownActive}
              data={currencies}
              defaultValue="EUR"
            />
          </div>
          <Button
            text="Start with your 100% bonus"
            className="heroForm__button"
            bgImg={formBtnBg}
            hoverBg={btnHoverBg}
            type="submit"
          />
        </form>
      ) : (
        <div className="heroForm__chooseBonus">
          {bonusData.map((element) => (
            <WelcomeBonus
              id={element.id}
              type="select"
              key={element.id}
              data={element}
              clickHandler={chooseBonusHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroForm;
