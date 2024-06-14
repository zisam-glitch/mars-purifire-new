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
                className="h-475 fit-cover rounded"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718355742/Untitled_design_18_xmtjsz.png"
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
                  The Achilles Bottle
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
                      Powered by deep UVC – effectively eliminate 99.99% of
                      mold, bacteria and viruses from water, with nothing but UV
                      light exposure.
                    </li>
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      Ultra lightweight and insulated stainless steel.
                    </li>
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      Pure water in 60 seconds.
                    </li>
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      Most bacteria neutralised, including the infamous E.coli,
                      using advanced technological cleaning systems.
                    </li>
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      Long lasting power and splash proof
                    </li>
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      The bottle activates the cleaning system every 2 hours to
                      ensure that the bottle and the water inside are free of
                      any odour.{" "}
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
