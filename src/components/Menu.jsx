import React from "react";
import Header from "./Header";
import QuantityBadge from "./QuantityBadge";
import messagesImg from "../images/header/messages.svg";
import langImg from "../images/header/lang.png";
import arrDown from "../images/down.png";
import SearchInput from "./SearchInput";
import MenuItem from "./MenuItem";
import { menuData } from "../utils";
import Button from "./Button";
import yellowBtnBg from "../images/buttonBgs/yellowBtn.png";
import menuGreyBtn from "../images/buttonBgs/menuGreyBtn.png";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__header">
        <Header />
        <div className="menu__header--actions">
          <div className="menu__header--actions--messages">
            <QuantityBadge
              quantity={3}
              styles={{ top: "-3px", left: "-5px", fontSize: "10px" }}
            />
            <img src={messagesImg} alt="messages" />
          </div>
          <div className="menu__header--actions--language">
            <div className="menu__header--actions--language--wrapper">
              <img
                className="menu__header--actions--language--flag"
                src={langImg}
                alt="languages"
              />
              <img src={arrDown} alt="langueage dropdown" />
            </div>
          </div>
        </div>
      </div>
      <div className="menu__auth">
        <div className="menu__auth--register">
          <Button
            text="Register"
            className="menu__auth--register--button"
            bgImg={yellowBtnBg}
          />
        </div>
        <div className="menu__auth--login">
          <Button
            text="Log in"
            className="menu__auth--login--button"
            bgImg={menuGreyBtn}
            styles={{ color: "#fff" }}
          />
        </div>
      </div>
      <div className="menu__search">
        <SearchInput />
      </div>
      <div className="menu__list">
        {menuData.map((element) => (
          <MenuItem key={element.title} element={element} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
