import { useState } from "react";
import ModalVideo from "react-modal-video";

const ContentSection = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="about_content-section bg-light-2  section-padding-120">
        <div className="container">
          <div className="row row--custom items-center">
            <div className="col-xxl-6 col-lg-5 col-md-6 col-7">
              <div className="about_content-image-block ">
                <div className="about_content-image content-image--mobile-width">
                  <img
                    className="rounded h-475 fit-cover"
                    src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718189954/white-modern-design-air-purifier-dehumidifier-innovation_954894-96653_ogkvzy.avif"
                    alt="alternative text"
                  />
                </div>
                <ModalVideo
                  channel="youtube"
                  youtube={{ mute: 0, autoplay: 0 }}
                  isOpen={isOpen}
                  videoId="6XczotLJBA4?si=o1uPnVNvIwR4ql6Q"
                  onClose={() => setOpen(false)}
                />
                <button
                  style={{ border: "none" }}
                  onClick={() => setOpen(true)}
                  className="absolute-center btn-play sonar-emitter "
                >
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>
            </div>
            <div
              className="col-xxl-6 col-lg-7 col-md-10 col-auto"
              data-aos-duration={1000}
              data-aos="fade-left"
            >
              <div className="content">
                <div className="content-text-block">
                  <h2 className="content-title heading-md text-black">
                    Air Purification Innovations
                  </h2>
                  <p className="mb-0">
                    Mars Purifier stands as a testament to the vision of our
                    founder, Pavan Bhogal. Pavan, whose name means "purifying
                    wind," was dedicated to improving air quality for a
                    healthier world. Sadly, Pavan passed away at the young age
                    of 31, but his legacy drives our mission forward.
                    <br />
                    We are the leading brand in commercial air purification for
                    airborne contamination and infection control and the an
                    purification brand to achieve ISO 14644 accreditation. Our
                    certified solutions manage a broad range of particulate,
                    chemical, gaseous, and odor contamination.
                    <br />
                    <b className="">
                      In honor of Pavan Bhogal, we strive to create a world with
                      cleaner, healthier air. Contact us today for expert
                      advice.
                    </b>
                  </p>
                </div>
                {/* <div className="content-testimonial">
                  <div className="content-testimonial__text">
                    <p>
                      “We love what we do &amp; create partnerships with our
                      clients to ensure their digital transformation is
                      positioned for long-term success.”
                    </p>
                  </div>
                  <div className="content-testimonial__user-metadata">
                    <div className="content-testimonial__user">
                      <img
                        src="/image/about/user-image.png"
                        alt="alternative text"
                      />
                    </div>
                    <div className="content-testimonial__body">
                      <h4 className="content-testimonial__user-name">
                        Karen Lynn
                      </h4>
                      <span>CEO &amp; Co-founder @ Company</span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSection;
