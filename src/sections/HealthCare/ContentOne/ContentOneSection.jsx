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
                className="h-400 rounded fit-cover"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718303721/senior-man-with-respirator-hospital-bed_yehqfi.jpg"
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
                  Clinical & Hospital Grade Air Purifiers - Trusted By The NHS
                </h2>
                <p>
                  Clinical & hospital-grade air purifiers, ISO accredited and
                  trusted by the NHS, dental clinics, and clean rooms worldwide.
                </p>
                <p>
                  Learn why Mars Purifier is designed to eliminate viruses meet
                  every tough standard possible – with no exceptions.
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
