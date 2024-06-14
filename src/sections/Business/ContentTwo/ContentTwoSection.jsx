const ContentTwo = () => {
  return (
    <div className="home-1_content-section-2 padding-top-60 padding-bottom-60">
      <div className="container">
        <div className="row row--custom pt-60">
          <div
            className="col-xl-5 col-lg-5 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="home-1_content-image-2 content-image--mobile-width">
              <img
                className="h-400 fit-cover rounded"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718304641/Work-6-1.c9c68865413f5053c8f1_rrhuh1.jpg"
                alt="Content Image Main"
              />
            </div>
          </div>
          <div
            className="m-0 offset-xl-1 col-xl-7 col-lg-7 col-md-11"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="">
              <div className="content-text-block">
                <h2 className="content-title heading-md text-45 text-black">
                  Commercial-Grade Air Purifiers For Businesses.
                </h2>
                <p>
                  Mars Purifier designs, manufactures and provides portable
                  commercial grade air purification systems. Used by NHS
                  Hospitals and trusted by businesses globally.
                  <br />
                  The World Health Organization has advised that Covid and other
                  airbourne viruses are mainly transmitted by inhaling droplets
                  in the air, rather than touching contaminated surfaces.
                  <br /> Mars Purifiers destroys 99.97% of airbourne viruses and
                  bacteria, including Covid and is the only air purifier to be
                  validated to ISO: 14644.
                </p>
              </div>
              <div className="flex gap-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTwo;
