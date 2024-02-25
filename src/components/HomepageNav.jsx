import React from "react";
import NavItem from "./NavItem";
import gameSlotsImg from "../images/navItem/Group7382.png";
import liveCasinoImg from "../images/navItem/Vector.png";
import promotionsImg from "../images/navItem/Subtract.png";
import tournamentsImg from "../images/navItem/Group7356.png";

const HomepageNav = () => {
  return (
    <div className="homepageNav">
      <NavItem image={gameSlotsImg} bgColor="#4D583B" text="Game slots" />
      <NavItem image={liveCasinoImg} bgColor="#783D3D" text="Live casino" />
      <NavItem
        image={promotionsImg}
        bgColor="#36474D"
        text="Promotions"
        quantity={3}
      />
      <NavItem image={tournamentsImg} bgColor="#5B3D69" text="Tournaments" />
    </div>
  );
};

export default HomepageNav;
