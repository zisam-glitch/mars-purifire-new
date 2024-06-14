const FeatureCard = ({ iconSrc, title, description }) => {
  return (
    <>
      <div className="feature-card grid justify-center ">
        <div className="pt-15 grid justify-center ">
          <img className="w-60" src={iconSrc} alt="image alt" />
        </div>
        <div className="feature-card__body pt-15">
          <h3 className="feature-card__title">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
