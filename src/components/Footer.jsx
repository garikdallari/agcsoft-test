import React from "react";
import menuBtnContent from "../images/footer/Group54.svg";
import menuBtnFire from "../images/footer/Vector.svg";
import Button from "./Button";
import yellowBtnBg from "../images/buttonBgs/yellowBtn.png";
import greyBtnBg from "../images/buttonBgs/greyBtn.png";

const Footer = ({ onClick, className }) => {
  return (
    <div className={`footer ${className ? className : ""}`}>
      <div className="footer__wrapper">
        <div className="footer__wrapper--action">
          <Button
            text="Sign in"
            className="footer__button footer__button--signin"
            bgImg={greyBtnBg}
            styles={{ color: "#fff" }}
          />
        </div>
        <div className="footer__wrapper--action footer__wrapper--action--menu">
          <img
            className="footer__wrapper--action--menu--fire"
            src={menuBtnFire}
            alt="menu"
          />
          <button
            className="footer__button footer__button--menu"
            type="button"
            onClick={onClick}
          >
            <img
              className="footer__button--menu--content"
              src={menuBtnContent}
              alt="menu"
            />
          </button>
        </div>
        <div className="footer__wrapper--action footer__wrapper--action--signup">
          <Button
            text="Sign up"
            className="footer__button footer__button--signup"
            bgImg={yellowBtnBg}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
