import FeatureCard from "@components/Cards/Home/Feature";
import data from "./data";
import SectionHeading from "@components/Layout/SectionHeading";

const FeatureSection = () => {

  let settings = {
    SectionHeading: {
      title: "What Mars Purifier Filters And Kills",
      column: "col-xxl-6 col-xl-7 col-lg-8 col-md-9",
      classes: {
        title: "heading-md text-black",
        className: "text-center",
        row: "justify-content-center",
      },
    },
  };

  return (
    <>
      <div className="contact_feature-section section-padding">
      <SectionHeading {...settings.SectionHeading} />

        <div className="container">
          <div className="row justify-content-center gutter-y-default">
            {data?.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6"
                data-aos-duration={1000}
                data-aos="fade-left"
                data-aos-delay={item.aos}
              >
                <FeatureCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
