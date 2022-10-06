import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/GridBlog/Breadcrumbs";
import Overview from "../components/GridBlog/Overview";
import Footer from "../components/Footer";

const GridBlog = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <Overview />
      <Footer />
    </div>
  );
};

export default GridBlog;
