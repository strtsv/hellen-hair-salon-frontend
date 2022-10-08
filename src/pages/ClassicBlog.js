import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/ClassicBlog/Breadcrumbs";
import Overview from "../components/ClassicBlog/Overview";
import Footer from "../components/Footer";

const ClassicBlog = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <Overview />
      <Footer />
    </div>
  );
};

export default ClassicBlog;
