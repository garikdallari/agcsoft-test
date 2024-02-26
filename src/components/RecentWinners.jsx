import React from "react";
import recentWinnersLogo from "../images/recentWinners/17_extra_Flag_bsii1.png";
import recentWinImg from "../images/recentWinners/Rectangle12.png";

const RecentWinners = () => {
  return (
    <div className="recentWinners">
      <div className="recentWinners__topBg">
        <div className="recentWinners__topBg--topBg1"></div>
        <div className="recentWinners__topBg--topBg2"></div>
      </div>
      <div className="recentWinners__content">
        <div className="recentWinners__logo">
          <div className="recentWinners__logo--image">
            <img src={recentWinnersLogo} alt="recentwinners" />
          </div>
          <div className="recentWinners__logo--text">
            <p className="recentWinners__logo--text">RECENT</p>
            <p className="recentWinners__logo--text recentWinners__logo--text--highlighted">
              WINNERS
            </p>
          </div>
        </div>
        <div className="recentWinners__elements">
          <div className="recentWinners__element">
            <div className="recentWinners__element--text">
              <p className="">Robert - €18.75</p>
              <p className="">
                in{" "}
                <span className="recentWinners__element--text--highlighted">
                  Sun of Egypt
                </span>
              </p>
            </div>
            <div className="recentWinners__element--image">
              <img src={recentWinImg} alt="recentwin" />
            </div>
          </div>
          <div className="recentWinners__element">
            <div className="recentWinners__element--text">
              <p className="">Robert - €18.75</p>
              <p className="">
                in{" "}
                <span className="recentWinners__element--text--highlighted">
                  Crystal Fruits
                </span>
              </p>
            </div>
            <div className="recentWinners__element--image">
              <img src={recentWinImg} alt="recentwin" />
            </div>
          </div>
          <div className="recentWinners__element">
            <div className="recentWinners__element--text">
              <p className="">Robert - €18.75</p>
              <p className="">
                in{" "}
                <span className="recentWinners__element--text--highlighted">
                  Crystal Fruits
                </span>
              </p>
            </div>
            <div className="recentWinners__element--image">
              <img src={recentWinImg} alt="recentwin" />
            </div>
          </div>
          <div className="recentWinners__element">
            <div className="recentWinners__element--text">
              <p className="">Robert - €18.75</p>
              <p className="">
                in{" "}
                <span className="recentWinners__element--text--highlighted">
                  Crystal Fruits
                </span>
              </p>
            </div>
            <div className="recentWinners__element--image">
              <img src={recentWinImg} alt="recentwin" />
            </div>
          </div>
        </div>
      </div>
      <div className="recentWinners__bottomBg">
        <div className="recentWinners__bottomBg--bottomBg1"></div>
        <div className="recentWinners__bottomBg--bottomBg2"></div>
      </div>
    </div>
  );
};

export default RecentWinners;
