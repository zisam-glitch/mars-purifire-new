import SectionHeading from "@components/Layout/SectionHeading";
import ServiceData from "./data";
import ServiceCardOne from "@components/Cards/Service/One";

let settings = {
  SectionHeading: {
    title: "WhisperClean: Portable Air Purification Solution",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-9",
    classes: {
      title: "heading-md text-black",
      className: "text-center",
      row: "justify-content-center",
    },
  },
};
const ServiceSection = () => {
  return (
    <div className="home-1_service-section padding-bottom-120" id="feature">
      <div className="home-1_service-section-shape">
        <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718014177/savedSVGExport0_6_-svg_nnc0yb.svg" alt="image" />
      </div>
      <div className="container">
        <div className="home-1_service-section-wrapper">
          <SectionHeading {...settings.SectionHeading} />
          <div className="row gutter-y-default justify-content-center">
            {ServiceData.map((item, index) => {
              return (
                <div key={index} className="col-xl-6 col-lg-6 col-md-10">
                  <ServiceCardOne
                    className=" hvr-fill align-center"
                    {...item}
                    to={"/service-details"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
