import React from "react";
import logo from "../images/header/logo.png";
import title from "../images/header/header-title.png";
import seacrh from "../images/header/search.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <a href="/" className="header-item">
          <img src={logo} alt="logo" />
        </a>
        <div className="header-item">
          <img src={title} alt="header-title" />
        </div>
        <div className="header-item header-item--search">
          <img src={seacrh} alt="search" />
        </div>
      </div>
    </div>
  );
};

export default Header;
