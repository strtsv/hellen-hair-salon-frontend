import React from "react";

import Header from "../components/Header";
import Posts from "../components/Products/Posts";
import Welcome from "../components/Products/Welcome";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <div className="page animated">
      <Header />
      <Posts />
      <Welcome />
      <Footer />
    </div>
  );
};

export default Products;
