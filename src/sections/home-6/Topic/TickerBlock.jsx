import { hasClassProps } from "@utils/helpers";
const TickerBlock = ({ className }) => {
  return (
    <>
      <div className={`ticker-03_content${hasClassProps(className)}`}>
        <div className="ticker-item">
          <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718132334/Untitled_design_8_exagcu.png" alt="image alt" />
        </div>
        <div className="ticker-item">
          <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718132335/Untitled_design_9_pfi3y7.png" alt="image alt" />
        </div>
        <div className="ticker-item">
          <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718132335/Untitled_design_7_yw37ef.png" alt="image alt" />
        </div>
        <div className="ticker-item">
          <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718132336/Untitled_design_6_qbpp9m.png" alt="image alt" />
        </div>
        </div>
    </>
  );
};

export default TickerBlock;
