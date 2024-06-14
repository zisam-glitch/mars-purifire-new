import { hasClassProps } from "@utils/helpers";

const BrandSection = ({ className }) => {
  const Band = [
    {
      img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1718184410/4_nki0uj.png",
    },
    {
      img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1718184410/5_pcs5i4.png",
    },
    {
      img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1718184410/2_a3qt9w.png",
    },
    {
      img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1718184410/3_se5xzu.png",
    },
    {
      img: "https://res.cloudinary.com/db1i46uiv/image/upload/v1718184410/1_cweaxg.png",
    },
    
  ];

  return (
    <div className={`brand-section${hasClassProps(className)}`}>
      <div className="container">
        <div className="brands-wrapper-inner pt-0 pb-120 ">
          <div className="brand-heading">
            <h3 className="brand-heading__title">
              From start-ups to Fortune, we partner with brands of all sizes
            </h3>
          </div>
          <div className="brands-wrapper">
            {Band.map((brand, index) => (
              <div
                key={index}
                className="single-brand"
                data-aos-duration={1000}
                data-aos="fade-left"
                data-aos-delay={800}
              >
                <img
                  src={brand.img}
                  width={180}
                  className="rounded"
                  alt={`brand-logo-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-20"></div>
    </div>
  );
};

export default BrandSection;
