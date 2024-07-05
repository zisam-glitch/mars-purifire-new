import { hasClassProps } from "@utils/helpers";

const FooterLayoutOne = ({ className, logo, socialClass }) => {
  return (
    <div className={`footer-padding-default`}>
      <div className="container">
        <div className="row row--footer-main">
          <div className="col-md-8 col-lg-4 col-xl-4 col-xxl-4">
            <div className="footer__content-block">
              <div className="footer__content-text">
                <div className="footer-brand">
                  <img
                    className="mx-55"
                    src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718185947/download_jglamv.png"
                    alt="image alt"
                  />
                </div>
                <p>The specialist in air purification.</p>
              </div>
              <br />
              <ul
                className={`list-social${socialClass ? ` ${socialClass}` : ""}`}
              >
                <li>
                  <a href="https://www.facebook.com/marspurifier.uk" target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/mars.purifier" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@marspurifier7320" target="_blank">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-8 col-xl-8 col-xxl-7 ">
            <div className="row row--list-block justify-between">
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto">
                <h3 className="footer-title">Contact</h3>
                <ul className="footer-list">
                  <li>
                    <a href="#">Phone: 0800 099 6375</a>
                  </li>

                  <li>
                    <a href="#">Mon – Fri: 9.00am 5.00pm</a>
                  </li>
                  <li>
                    <a href="#">
                      Headquarters Wollaton, <br /> Nottingham, United Kingdom
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto">
                <h3 className="footer-title"> Qucik Links</h3>
                <ul className="footer-list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="/contact"> Contact </a>
                  </li>
                </ul>
              </div>
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto">
                <h3 className="footer-title">Resources</h3>
                <ul className="footer-list">
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Acceptable Use Policy</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-block">
        <div className="container">
          <div className="copyright-inner text-center  copyright-border">
            <p>
              © Copyright 2024, Build by <u> Grow With Sayed</u>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLayoutOne;
