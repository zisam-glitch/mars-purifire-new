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
                className="h-400 fit-cover rounded"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718195343/dentist-examining-female-s-teeth-in-dentistry.5adfbcc65366e5e82c36_wasfci.webp"
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
                  Helping Dental Clinics Improve Continuity.
                </h2>
                <p>
                  Reduce the risk to your dental clinic of not being able
                  operate a surgery at maximum capacity by choosing a purifier
                  designed by a Dentist. Recognising the need for purification
                  in dentistry, we worked to take the basic principle of air
                  purifiers and upgrade everything to a medical standard. Want
                  to reduce your risk further, then speak to one of our experts
                  about our service contract solution!
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
