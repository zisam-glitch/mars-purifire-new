import { Link } from "react-router-dom";

const ServiceCardOne = ({
  to = "/",
  className,
  iconSrc,
  title,
  text,
  linkText,
}) => {
  return (
    <Link to={to} className={`servCard`}>
      <div className="h-120 grid justify-center">
        <img height={100} src={iconSrc} alt="image alt" />
      </div>
      <div className="service-card__body ">
        <h3 className="service-card__title">{title}</h3>
        <p className="m-0">{text}</p>
      </div>
    </Link>
  );
};

export default ServiceCardOne;
