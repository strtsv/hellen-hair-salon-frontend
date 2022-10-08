import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Overview from "../components/ModernBlog/Overview";
import Footer from "../components/Footer";

const ModernBlog = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <Overview />
      <Footer />
    </div>
  );
};

export default ModernBlog;
