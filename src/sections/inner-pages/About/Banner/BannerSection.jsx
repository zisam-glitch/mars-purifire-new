const BannerSection = () => {
  return (
    <>
      <div className="about_banner-section">
        <div className="container">
          <div className="row justify-content-center row--custom">
            <div className="col-12">
              <div className="row banner_image-row padding-bottom-120">
                <div className="col-xs-4 col-7">
                  <div className="single-image-1">
                    <img
                      className="banerimage"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718187203/1332.8a2e771dd57fcc37fa77_cbrown.webp"
                      alt="alternative text"
                    />
                  </div>
                </div>
                <div className="col-xs-4 col-7">
                  <div className="single-image-2">
                    <img
                      className="banerimage"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718187216/1333.b6d763a1fbaf68eb5f43_gtzs6e.webp"
                      alt="alternative text"
                    />
                  </div>
                </div>
                <div className="col-xs-4 col-7">
                  <div className="single-image-3">
                    <img
                      className="banerimage"
                      src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718187172/1331.d2d69c535168c230ee7c_rarv8z.webp"
                      alt="alternative text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
