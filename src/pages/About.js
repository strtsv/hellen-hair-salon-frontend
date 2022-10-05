import React from "react";

import Header from "../components/Header";
import Bread from "../components/Bread";
import AboutUs from "../components/About/AboutUs";
import OurServices from "../components/About/OurServices";
import OurTeam from "../components/About/OurTeam";
import SectionProject from "../components/About/SectionProject";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="page animated">
      <Header />
      <Bread />
      <AboutUs />
      <OurServices />
      <OurTeam />
      <SectionProject />
      <Footer />
    </div>
  );
};

export default About;
