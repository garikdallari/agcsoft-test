import React from "react";
import menuBtnContent from "../images/footer/Group54.svg";
import menuBtnFire from "../images/footer/Vector.svg";

const Footer = ({ onClick, className }) => {
  return (
    <div className={`footer ${className ? className : ""}`}>
      <div className="footer__wrapper">
        <div className="footer__wrapper--action">
          <button
            className="footer__button footer__button--signin"
            type="button"
          >
            Sign in
          </button>
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
        <div className="footer__wrapper--action">
          <button
            className="footer__button footer__button--signup"
            type="button"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
