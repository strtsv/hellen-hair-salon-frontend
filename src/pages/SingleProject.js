import React from "react";

import Header from "../components/Header";
import Bread from "../components/Bread";
import ProjectDescription from "../components/SingleProject/ProjectDescription";
import SectionCarousel from "../components/SingleProject/SectionCarousel";
import SectionSkills from "../components/SingleProject/SectionSkills";
import Footer from "../components/Footer";

const SinglePost = () => {
  return (
    <div className="page animated">
      <Header />
      <Bread />
      <ProjectDescription />
      <SectionCarousel />
      <SectionSkills />
      <Footer />
    </div>
  );
};

export default SinglePost;
