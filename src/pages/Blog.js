import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Blog/Breadcrumbs";
import Haircut from "../components/Blog/Haircut";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <Haircut />
      <Footer />
    </div>
  );
};

export default Blog;
