import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

let settingProps = {
  sectionHeading: {
    title: "Most of our satisfied clients leave their feedback",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-9",
    classes: {
      row: "justify-content-center text-center",
      title: "heading-md text-black",
    },
  },
};

const TestimonialSection = () => {
  return (
    <div
      className="home-1_testimonial-section section-padding-120 "
      id="testimonial"
    >
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading} />

        <div className="testimonial-widget-large">
          <div className="row row--custom ">
            <div
              className="col-lg-6 col-md-8 col-sm-10 col-xs-10"
              data-aos-duration={1000}
              data-aos="fade-right"
            >
              <div className="testimonial-widget-large__image">
                <img
                  src="/image/home-1/testimonial-image.png"
                  alt="handsome-smiling-bearded-man-glasses-working-laptop"
                />
              </div>
            </div>
            <div
              className=" col-lg-6 col-md-10 col-auto"
              data-aos-duration={1000}
              data-aos="fade-left"
            >
              <div className="testimonial-widget-large__body">
                <div className="testimonial-widget-large__icon">
                  <img
                    src="/image/home-1/testimonial-icon.svg"
                    alt="testimonial icon"
                  />
                </div>
                <p className="testimonial-widget-large__review-text">
                  We're thrilled with our new Mars air purifier! After 6 weeks
                  of use in our piercing studio, we're impressed. It keeps the
                  air fresh, crucial for moments when masks come off for
                  piercings. We highly recommend it to similar businesses like
                  tattooists and beauticians.
                </p>
                <h4 className="testimonial-widget-large__user-name">
                  Jacob Davis{" "}
                </h4>
                <span className="testimonial-widget-large__user-position">
                Buckingham - August 31, 2020
                </span>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
