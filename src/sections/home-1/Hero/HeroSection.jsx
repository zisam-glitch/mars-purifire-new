import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { useState } from "react";
import Typewriter from "typewriter-effect";

import Button from "@components/Buttons";
import { ButtonPlay } from "@components/Buttons/Button";

const HeroSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="home-1_hero-section md-pt-200 md-pb-150" id="hero">
      <div className="home-1_hero-shape-1">
        <img src="/image/home-1/hero-shape-1.svg" alt="hero shape One" />
      </div>
      <div className="home-1_hero-shape-2">
        <img
          src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718011455/savedSVGExport0-svg_svtypj.svg"
          alt="hero shape two"
        />
      </div>
      <div className="container">
        <div className="row row--hero-content">
          <div className="col-xxl-auto col-lg-5 col-md-7 col-sm-8 col-10  transform-none ">
            <div className="home-1_hero-image-block">
              <div className="home-1_hero-image">
                <img
                  src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718011002/gen-x-y-z-mixed-no-bg.dec4a22a19a24f5249d9_obqfc0.webp"
                  alt="hero image"
                />
              </div>
            </div>
          </div>
          <div
            className="col-xxl-auto col-lg-7 col-md-10"
            data-aos-duration={1000}
            data-aos="fade-right"
            data-aos-delay={300}
          >
            <div className="home-1_hero-content">
              <div className="home-1_hero-content-text">
                <h1 className="hero-content__title mb-12 primary heading-xxl">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: ["Clinical", "Industrial", "Domestic"],
                    }}
                  />
                </h1>
                <h1 className="hero-content__title heading-xxl">
                  Air Purification System
                </h1>
                <p>
                  Buy with confidence when you choose a Mars Purifier Unit,
                  designed for use in clinical and regulatory enviroments.
                </p>
              </div>
              {/* <div className="home-1_hero-newsletter">
                <form action="#" className="newsletter-form-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                  />
                  <Button role="submit" className="rounded-pill">
                    Subscribe
                  </Button>
                </form>
                <span className="home-1_hero-newsletter__bottom-text">
                  <img src="/image/icons/icon-check-blue.svg" alt="icon" /> No
                  credit card is required. You can cancel anytime
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
