import React from "react";
import searchImg from "../images/search.svg";

const SearchInput = () => {
  return (
    <div className="input__wrapper">
      <div className="input__wrapper--searchIcon">
        <img src={searchImg} alt="search" />
      </div>
      <label for="menu-search">
        <input
          className="input__wrapper--input"
          type="text"
          id="menu-search"
          placeholder="Game name or provider"
        />
      </label>
    </div>
  );
};

export default SearchInput;
