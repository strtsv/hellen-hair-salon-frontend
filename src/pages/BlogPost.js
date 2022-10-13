import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Blog/Breadcrumbs";
import NewHaircut from "../components/BlogPost/NewHaircut";
import RelatedPosts from "../components/BlogPost/RelatedPosts";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <NewHaircut />
      <RelatedPosts />
      <Footer />
    </div>
  );
};

export default Blog;
