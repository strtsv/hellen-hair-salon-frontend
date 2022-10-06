import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Overview from "../components/MasonryBlog/Overview";
import Footer from "../components/Footer";

const MasonryBlog = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <Overview />
      <Footer />
    </div>
  );
};

export default MasonryBlog;
