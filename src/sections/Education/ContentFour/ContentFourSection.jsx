import { Accordion } from "react-bootstrap";
import data from "./data.json";

const ContentFour = () => {
  return (
    <div className="home-1_content-section-2 padding-top-120 padding-bottom-120">
      <div className="container">
        <div className="row row--custom pt-120">
          <div
            className="col-xl-6 col-lg-6 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="row row--custom">
              <div className="col-lg-12">
                <div className="accordion-style-1" id="home-1-faq">
                  <Accordion className="accordion-style" defaultActiveKey="0">
                    {data?.map(({ title, body }, index) => {
                      return (
                        <Accordion.Item eventKey={index} key={index}>
                          <Accordion.Header>{title}</Accordion.Header>
                          <Accordion.Body className="accordion-item__body">
                            {body}
                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          <div
            className="m-0 offset-xl-1 col-xl-6 col-lg-6 col-md-11"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-md text-38 text-black">
                  Free Air Change Rate Certificate For Each Room With Our
                  Servicing Plans Or Contract Hire Purchase.
                </h2>
                <p>
                  Mars Purifier specialises in dental and clinical air
                  purification, part of this is understanding that while patient
                  and staff safety is always your number one priority, second is
                  always business continuity through being able to both maintain
                  reduced fallow time and provide evidence of compliance to
                  regulatory body’s in the event of inspection. Available as a
                  Servicing Plan for pre-brought units or as a Contract Hire
                  Purchase it’s the perfect way to purchase your purification
                  solution or provide the peace of mind and business continuity
                  reassurance of knowing we are on hand to help in the event of
                  failure.
                </p>
              </div>
              {/* <div className="flex gap-40">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentFour;
