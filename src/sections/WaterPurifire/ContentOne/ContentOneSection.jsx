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
                className="h-600 rounded fit-cover"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718354138/left.0184643db3affd9d4f76_li3du1.jpg"
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
                  Add A Purpose To Your Drinking Habits
                </h2>
                <p>
                  Achilles bottle is all set to break the market of water
                  bottles.
                </p>
                <p>
                  Protect yourself from bacteria and water-based impurities by
                  getting yourself an Achilles Bottle.
                </p>
                <p>
                  Replaces 500,000 Water Bottles – Reduces plastic waste and
                  needless spend of bottled water. BPA and Plastic free – enjoy
                  fresh water without replacement filters and with chemical free
                  purification.
                </p>{" "}
                <p>
                  Self Cleaning Bottle – Stops bacteria and mold from breeding
                  in your water bottle.
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
