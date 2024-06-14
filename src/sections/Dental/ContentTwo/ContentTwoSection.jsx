const ContentTwo = () => {
  return (
    <div className="home-1_content-section-2 padding-top-60 padding-bottom-60">
      <div className="container">
        <div className="row row--custom pt-60" >
          <div
            className="col-xl-5 col-lg-5 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="home-1_content-image-2 content-image--mobile-width">
              <img
                className="h-475 fit-cover rounded"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718194377/2147879168_omuzdx.jpg"
                alt="Content Image Main"
              />
             
            </div>
          </div>
          <div
            className="m-0 offset-xl-1 col-xl-7 col-lg-7 col-md-11"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-md text-45 text-black">
                  Air Purifiers That Help Dental Clinics Reduce Fallow Time.
                </h2>
                <p>
                  UK dental practices face pressure to contain virus spread and
                  reduce fallow time per BDA guidance. Mars Purifier provides
                  guidance for selecting suitable air purifiers, addressing
                  concerns over airborne contaminants, including COVID-19
                </p>
              </div>
              <div className="flex gap-40">
                <div className="content-list-block">
                  <ul className="content-list">
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      10 Air Changes
                    </li>
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      10 minutes fallow time
                    </li>
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      BDA guidance
                    </li>
                  </ul>
                </div>
                <div className="content-list-block">
                  <ul className="content-list">
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      plug and play
                    </li>
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      keep patient and staff safe
                    </li>
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-blue.svg"
                        alt="alternative text"
                      />
                      increase turnover a day
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
