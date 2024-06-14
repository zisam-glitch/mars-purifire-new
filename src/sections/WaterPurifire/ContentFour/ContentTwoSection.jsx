const ContentTwo = () => {
  return (
    <div className="home-1_content-section-2 padding-top-60 padding-bottom-120">
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
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718357460/info.0900d6584bfa9ccce74c_v5jxy7.jpg"
                alt="Content Image Main"
              />
            </div>
          </div>
          <div
            className="m-0 offset-xl-1 col-xl-7 col-lg-7 col-md-11"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="pt-40">
              <div className="content-text-block">
                <h2 className="content-title heading-md text-45 text-black">
                  One Small Change
                </h2>
              </div>
              <div className="">
                <div className="content-list-block">
                  <ul className="content-list">
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      Plastic in water bottles takes 500-700 years to dissolve.
                    </li>
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      Plastic in water bottles is killing animals and ocean
                      life.
                    </li>
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      Pure water in 60 seconds. .{" "}
                    </li>
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      Plastic in water bottles is entering our food chain.
                    </li>
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      Time to leave behind the reusable plastic bottles causing
                      regular damage to our planet. Time to embrace the best new
                      water filtration system today{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTwo;
