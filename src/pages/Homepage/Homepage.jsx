import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import HomepageNav from "../../components/HomepageNav";
import RecentWinners from "../../components/RecentWinners";
import Footer from "../../components/Footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <HomepageNav />
      <RecentWinners />
      <Footer />
    </div>
  );
};

export default Homepage;
