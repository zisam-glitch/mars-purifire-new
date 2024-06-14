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
                className="h-600 fit-cover rounded"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718355911/middel.5fb06920058533e63567_hyypqo.jpg"
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
                  Better Filtration
                </h2>
                <p>
                  UV- C is sterilisation of the future – Achilles powerful UV-C
                  light rays are the same wavelength as the UV used to sanitise
                  operating rooms and water treatment plants <br /> <br /> We
                  use innovative technology that helps to ensure water quality
                  inside the system is fully clean, avoiding any bio-contaminant
                  growth. <br /> <br />
                  Drinkable water at your fingertip – High tech, chemical free
                  purification. Best alternative to boiled water. <br /> <br />
                  Every minute, 1 million plastic bottles end up in the garbage,
                  resulting in an average of 3 single-use bottles per person,
                  per week! <br /> <br />
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
