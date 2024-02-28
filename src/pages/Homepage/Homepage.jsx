import React, { useState } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import HomepageNav from "../../components/HomepageNav";
import RecentWinners from "../../components/RecentWinners";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={`homepage ${isMenuOpen ? "menuopen" : ""}`}>
      {!isMenuOpen ? (
        <div className="homepage__wrapper">
          <Header />
          <Hero />
          <HomepageNav />
          <RecentWinners />
        </div>
      ) : (
        <>
          <Menu />
        </>
      )}
      <Footer onClick={toggleMenu} />
    </div>
  );
};

export default Homepage;
