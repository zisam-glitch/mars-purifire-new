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
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718305291/61mgi32fCnS._AC_SL1000__glypd1.jpg"
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
                  Air Purifiers For The Hospitality Industry
                </h2>
                <p>
                  Protect your staff and customers with clean, purified air.
                  Designed for bars, hotels, restaurants, clubs, and commercial
                  premises.
                </p>
                <p>
                  Our advanced air purifiers ensure a safe, healthy environment
                  for hospitality venues. Using cutting-edge filtration, they
                  remove pollutants, allergens, and pathogens, enhancing guest
                  comfort. Perfect for bars, hotels, restaurants, and clubs,
                  they promote well-being and elevate your establishment's
                  ambiance with cleaner, purified air.
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
