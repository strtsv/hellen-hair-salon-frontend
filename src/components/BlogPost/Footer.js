import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-minimal context-dark">
        <div className="container wow-outer">
          <div className="wow fadeIn">
            <div className="row row-60">
              <div className="col-12">
                <a href="index.html">
                  <img
                    src="images/logo-inverse-162x54.png"
                    alt
                    width={162}
                    height={54}
                    srcSet="images/logo-inverse-324x108.png 2x"
                  />
                </a>
              </div>
              <div className="col-12">
                <ul className="footer-minimal-nav">
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="news.html">Blog</a>
                  </li>
                  <li>
                    <a href="contacts.html">Contacts</a>
                  </li>
                  <li>
                    <a href="gallery-1.html">Gallery</a>
                  </li>
                  <li>
                    <a href="about-us.html">About</a>
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <ul className="social-list">
                  <li>
                    <a
                      className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-facebook"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-instagram"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-twitter"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-youtube-play"
                      href="#"
                    />
                  </li>
                  <li>
                    <a
                      className="icon icon-sm icon-circle icon-circle-md icon-bg-white fa-pinterest-p"
                      href="#"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <p className="rights">
              <span>©  </span>
              <span className="copyright-year" />
              <span> </span>
              <span>All Rights Reserved.</span>
              <span> </span>
              <span>Hellen</span>
              <span>. </span>
              <a href="privacy-policy.html">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
