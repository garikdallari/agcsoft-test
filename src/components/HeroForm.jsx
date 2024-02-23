import React, { useState } from "react";
import CountryDropdown from "./CountryDropdown";
import CurrencyDropdown from "./CurrencyDropdown";

const HeroForm = () => {
const [selectedCountry, setSelectedCountry] = useState("");
const [selectedCurrency, setSelectedCurrency] = useState("");
const [countryDropDownActive, setCountryDropdownActive] = useState(false);
const [currencyDropDownActive, setCurrencyDropdownActive] = useState(false);
  return (
    <div>
      <form className="heroForm">
        <div className="heroForm-inputs">
            <CountryDropdown selected={selectedCountry} isOtherDropdownActive={currencyDropDownActive} setSelected={setSelectedCountry} isActive={countryDropDownActive} setIsActive={setCountryDropdownActive} />
            <CurrencyDropdown selected={selectedCurrency} isOtherDropdownActive={countryDropDownActive} setSelected={setSelectedCurrency} isActive={currencyDropDownActive} setIsActive={setCurrencyDropdownActive} />
        </div>
        <button className="heroForm-button" type="submit">Start with your 100% bonus</button>
      </form>
    </div>
  );
};

export default HeroForm;
