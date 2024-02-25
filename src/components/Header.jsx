import React from "react";
import logo from "../images/header/logo.png";
import title from "../images/header/header-title.png";
import seacrh from "../images/header/search.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <a href="/" className="header__item">
          <img className="header__item--img" src={logo} alt="logo" />
        </a>
        <div className="header__item">
          <img src={title} alt="header__title" />
        </div>
        <div className="header__item header__item--search">
          <img className="header__item--search--img" src={seacrh} alt="search" />
        </div>
      </div>
    </div>
  );
};

export default Header;
