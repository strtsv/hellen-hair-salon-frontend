import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Overview from "../components/SinglePost/Overview";
import LatestBlogPosts from "../components/SinglePost/LatestBlogPosts";
import Footer from "../components/Footer";

const SinglePost = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <Overview />
      <LatestBlogPosts />
      <Footer />
    </div>
  );
};

export default SinglePost;
