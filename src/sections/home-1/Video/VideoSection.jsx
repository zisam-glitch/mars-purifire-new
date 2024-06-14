import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

let settingProps = {
  sectionHeading: {
    title: "6-Stage Purification & Sterilisation",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-9",
    classes: {
      row: "justify-content-center text-center",
      title: "heading-md text-black",
    },
  },
};

const TestimonialSection = () => {
  return (
    <div className="home-1_testimonial-section pb-120" id="testimonial">
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading} />
        <div className="container">
          <div className="row">
            <div className="col-lg-3 flex flex-col justify-between text-right">
              <p className="video-text">
                Photocatalyst (Gen Z Only)
              </p>
              <p className="video-text">
                Medical Grade HEPA Filter
              </p>
              <p className="video-text">
                UV-C Sterilisation
              </p>
            </div>
            <div className="col-lg-6">
              <div>
                <video
                  src="https://res.cloudinary.com/db1i46uiv/video/upload/v1718103672/GenZ-compressed.cc35110f2562bd534351_cahxdn.mp4"
                  loop
                  autoPlay
                  className="w-full"
                ></video>
              </div>
            </div>
            <div className="col-lg-3 flex flex-col justify-between">
              <p className="video-text">
                Large-Particulate Filter
              </p>
              <p className="video-text">
                Activated Carbon Filter
              </p>
              <p className="video-text">
                Ion Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
