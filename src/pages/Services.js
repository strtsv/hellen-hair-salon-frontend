import React from "react";

import Header from "../components/Header";
import Featured from "../components/Services/Featured";
import CTA from "../components/Services/CTA";
import ServicesList from "../components/Services/ServicesList";
import Features from "../components/Services/Features";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="page animated">
      <Header />
      <Featured />
      <CTA />
      <ServicesList />
      <Features />
      <Footer />
    </div>
  );
};

export default Services;
