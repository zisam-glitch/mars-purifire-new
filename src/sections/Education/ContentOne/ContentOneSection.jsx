const ContentSectionOne = () => {
  return (
    <div className="home-1_content-section-1 section-padding-120" id="about">
      <div className="pt-60"></div>
      <div className="container">
        <div className="row row--custom">
          <div
            className="offset-xl-1 col-lg-5 col-auto"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="home-1_content-image-1 content-image--mobile-width">
              <img
                className="h-475 rounded fit-cover"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718302716/back-to-school-2020-scaled_q6z8vm.webp"
                alt="Content Image Main"
              />
              <div className="home-1_content-image-1-shape">
                <img
                  src="/image/home-1/content-image-1-shape.svg"
                  alt="Content Image Shape"
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-7 col-md-10 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-md text-black">
                  Air Purifiers For Schools & Classrooms
                </h2>
                <p>
                  Classroom air purification is vital, as school children are
                  more vulnerable to dangerous levels of air pollution.
                </p>
                <p>
                  Breathing rates in school children are higher in relation to
                  their body weight, and their lung development has been proven
                  to be directly affected by exposure to air contamination.
                  Cost-effective, mobile air purification systems provided by
                  Mars Purifier are the perfect solution for providing clean air
                  in schools & classrooms in the UK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionOne;
