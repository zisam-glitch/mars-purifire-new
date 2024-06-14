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
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718305986/8446_gyazvq.jpg"
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
                  Air Purifiers For Gyms & Fitness Studios
                </h2>
                <p>
                  Clean air is proven to have a variety of health benefits. In
                  addition to aiding in concentration during sports, clean air
                  indirectly promotes better training outcomes. More oxygen is
                  supplied to muscles through unhampered breathing of pure,
                  fresh air, resulting in improved training performance.
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
