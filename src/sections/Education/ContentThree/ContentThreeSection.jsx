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
                className="h-600 fit-cover rounded"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718303149/425348808_701339282172992_4054535543189319551_n_d2fswr.jpg"
                alt="Content Image Main"
              />
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
                  Air Pollution Is An Invisible But Dangerous Threat To
                  Children's Health In Schools.
                </h2>
                <p>
                  Over 27% of schools in the UK are exposed to dangerous levels
                  of air pollution. Most of which are within 150 metres of a
                  major road, and thus are being exposed to over 10,000 vehicles
                  each day. Normal ventilation systems, particularly in
                  combination with opening windows, expose children in UK
                  schools to huge amounts of traffic pollution. Mars Purifiers
                  air filtration systems are individually tested and ISO
                  certified to capture traffic pollution as well as common
                  allergens, bacteria, viruses, and other airborne contaminants
                  – keeping school children safe.
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
