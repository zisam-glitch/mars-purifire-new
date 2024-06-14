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
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718304794/Work-5-1.b2b4611ece8e3e76c5e9_gn0yil.webp"
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
                  Clean Air For Every Space.
                </h2>
                <p>
                  COVID has forever changed how we work, where we work and the
                  relationship between employers and employees. Leading
                  organisations are acting quickly, thinking beyond re-entry to
                  reimagine the future work and the digital, physical and
                  emotional dimension of their space.
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
