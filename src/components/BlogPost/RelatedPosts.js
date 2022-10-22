import React from "react";
import OwlCarousel from "react-owl-carousel";

import i1 from "../../assets/images/post-classic-7-370x255.jpg";
import i2 from "../../assets/images/post-classic-3-370x255.jpg";
import i3 from "../../assets/images/post-classic-8-370x255.jpg";

const options = {
  loop: true,
  autoplay: true,
  smartSpeed: 450,
  dots: true,
  nav: false,
  items: 3,
  navClass: ["owl-prev fa fa-angle-left", "owl-next fa fa-angle-right"],
};

class RelatedPosts extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default">
        <div className="container">
          <h3 className="text-center">Related Posts</h3>
          <div className="row">
            <div className="col-12">
              {}
              <div>
                <OwlCarousel {...options}>
                  <div className="post-classic">
                    <div className="post-classic-figure">
                      <a href="blog-post.html">
                        <img src={i1} alt width={370} height={255} />
                      </a>
                    </div>
                    <div className="post-classic-caption">
                      <h4 className="post-classic-title">
                        <a href="blog-post.html">
                          The Best Styling Options For Your Haircut
                        </a>
                      </h4>
                      <ul className="post-classic-meta">
                        <li>April 25, 2019</li>
                        <li>
                          <a
                            className="post-classic-tag-secondary-2 post-classic-tag"
                            href="#"
                          >
                            Hairstyling
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-classic">
                    <div className="post-classic-figure">
                      <a href="blog-post.html">
                        <img src={i2} alt width={370} height={255} />
                      </a>
                    </div>
                    <div className="post-classic-caption">
                      <h4 className="post-classic-title">
                        <a href="blog-post.html">
                          How to Choose the Right Bridal Hairstyle
                        </a>
                      </h4>
                      <ul className="post-classic-meta">
                        <li>April 25, 2019</li>
                        <li>
                          <a
                            className="post-classic-tag-secondary post-classic-tag"
                            href="#"
                          >
                            News
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-classic">
                    <div className="post-classic-figure">
                      <a href="blog-post.html">
                        <img src={i3} alt width={370} height={255} />
                      </a>
                    </div>
                    <div className="post-classic-caption">
                      <h4 className="post-classic-title">
                        <a href="blog-post.html">
                          Products Everyone Needs for Healthy Hair
                        </a>
                      </h4>
                      <ul className="post-classic-meta">
                        <li>April 25, 2019</li>
                        <li>
                          <a className="post-classic-tag" href="#">
                            Tips
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RelatedPosts;
