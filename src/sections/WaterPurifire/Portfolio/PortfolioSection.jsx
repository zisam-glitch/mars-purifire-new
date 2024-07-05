import PortfolioWidgetOne from "@components/Widgets/Portfolio/Two/PortfolioWidgetTwo";
import SectionHeading from "@components/Layout/SectionHeading";
import Button from "@components/Buttons/Button";

const settings = {
  sectionTitle: {
    columnLeft: "col-xl-6  col-md-8",
    className: "Our Featured Products",
    title: "We create world-class web design, & branding",
    titleClass: "heading-md text-black",
    buttonClass: "btn-masco rounded-pill btn-fill--up",
    buttonText: "Sea all",
    link: "portfolio.html",
  },
  cardOne: {
    image:
      "https://res.cloudinary.com/db1i46uiv/image/upload/v1718354492/img2.ba24fa8e14af60dda8bb_2_kcqd86.png",
    title: "Generation X",
    category: "£495.00",
    url: "/portfolio-details",
    button: true,
  },
  cardTwo: {
    image:
      "https://res.cloudinary.com/db1i46uiv/image/upload/v1718354476/70747239986_rijgun.png",
    title: "Generation Y",
    category: "£695.00",
    url: "/portfolio-details",
    button: true,
  },
};

let settingProps = {
  sectionHeading: {
    type: "double",
    title: "Trending Water Bottles ",
    buttonText: "See all",
    classes: {
      columnLeft: "col-xl-6  col-md-8 ",
      columnRight: "col-xl-3 col-lg-4 col-md-4",
      className: "text-center text-md-initial",
      title: "heading-md text-black",
      row: "text-center text-md-initial",
    },
  },
};
const Portfolio = () => {
  return (
    <div
      className="home-1_portfolio-section padding-bottom-120"
      id="portfolio"
    >
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading}>
          <Button
            href="/shop"
            className="btn-masco rounded-pill btn-fill--up"
          >
             All Products
          </Button>
        </SectionHeading>

        <div className="row row--portfolio-gutter">
          <div className="col-md-6 col-xs-10">
            <PortfolioWidgetOne {...settings.cardOne} />
          </div>
          <div className="col-md-6 col-xs-10">
            <PortfolioWidgetOne {...settings.cardTwo} />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
