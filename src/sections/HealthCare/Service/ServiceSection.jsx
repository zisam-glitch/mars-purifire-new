import SectionHeading from "@components/Layout/SectionHeading";
import ServiceData from "./data";
import ServiceCardOne from "@components/Cards/Service/Three";

let settings = {
  SectionHeading: {
    title: "Mars Purifier Core Service",
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
          <div className="row gutter-y-default  justify-content-center">
            {ServiceData.map((item, index) => {
              return (
                <div key={index} className="col-xl-4 col-lg-4 col-md-10">
                  <ServiceCardOne
                    className=" h-500 text-center grid justify-start align-start"
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
