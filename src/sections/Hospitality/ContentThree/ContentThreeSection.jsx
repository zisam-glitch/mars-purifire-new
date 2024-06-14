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
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718305557/basketball.ed7fb3b62228425707a5_e8keei.webp"
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
                  Air Purifiers For Events
                </h2>
                <p>
                  Did you know that Infectious droplets exhaled, coughed, or
                  sneezed can travel up to 160 feet within the room and then
                  travel up to 10 stories through the building via an air
                  conditioning system and remain there for several hours?
                  <br />
                  <br />
                  By using a commercial air purifier, you can keep your staff
                  and guests as safe as possible – potentially reducing the
                  transmission of infectious diseases and viruses.
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
