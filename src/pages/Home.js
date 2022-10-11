import React from "react";

import Header from "../components/Header";
import DePaletra from "../components/Home/DePaletra";
import AboutUs from "../components/Home/AboutUs";
import Selectedworks from "../components/Home/Selectedworks";
import OurTeam from "../components/Home/OurTeam";
import Clients from "../components/Home/Clients";
import Portfolio from "../components/Home/Portfolio";
import Blog from "../components/Home/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <DePaletra />
      <AboutUs />
      <Selectedworks />
      <OurTeam />
      <Clients />
      <Portfolio />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
