import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import HomepageNav from "../../components/HomepageNav";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <HomepageNav />
    </div>
  );
};

export default Homepage;
