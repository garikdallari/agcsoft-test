import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { countries, currencies } from "../utils";

const HeroForm = ({ handleSubmit }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [countryDropDownActive, setCountryDropdownActive] = useState(false);
  const [currencyDropDownActive, setCurrencyDropdownActive] = useState(false);

  return (
    <div>
      <form className="heroForm" onSubmit={handleSubmit}>
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
        <button className="heroForm__button" type="submit">
          <span className="heroForm__button--text">Start with your 100% bonus</span>
        </button>
      </form>
    </div>
  );
};

export default HeroForm;
