import React from "react";
import $ from "jquery";
import "../../assets/js/parallax.js";

import i from "../../assets/images/icon-lists-title-bg.jpg";

class Breadcrumbs extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section
        className="parallax-container"
        data-parallax-img={i}
        data-image-src={i}
      >
        <div className="parallax-content breadcrumbs-custom context-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-9">
                <h1 className="breadcrumbs-custom-title">News</h1>
                <ul className="breadcrumbs-custom-path">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">News</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Breadcrumbs;
