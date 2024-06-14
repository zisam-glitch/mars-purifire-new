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
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1717793223/dentist-her-clean-orthodontist-office_23-2149195927_nbzzxf.jpg"
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
                  Air Purification For Dental Clinics
                </h2>
                <p>
                  Enhance air quality and safety in dental clinics with Mars
                  Purifiers. Achieve the necessary 10 air changes per hour and
                  reduce fallow time, ensuring a healthier environment for
                  patients and staff.
                </p>
                <p>
                  With advanced filtration technology, Mars Purifiers capture
                  and neutralize airborne pathogens, allergens, and pollutants,
                  enhancing patient comfort and meeting stringent health
                  regulations. They are an essential investment for modern
                  dental practices committed to safety and excellence.
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
