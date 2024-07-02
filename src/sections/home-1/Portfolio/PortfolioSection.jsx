import PortfolioWidgetOne from "@components/Widgets/Portfolio/One/PortfolioWidgetOne";
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
      "https://res.cloudinary.com/db1i46uiv/image/upload/v1718184963/untitled_gsenat.jpg",
    title: "Generation X",
    url: "/product-details/generation-x",
    button: true,
  },
  cardTwo: {
    image:
      "https://res.cloudinary.com/db1i46uiv/image/upload/v1718184668/Untitled_u9ampu.png",
    title: "Generation Y",
    url: "/product-details/generation-y",
    button: true,
  },
  cardThree: {
    image:
      "https://res.cloudinary.com/db1i46uiv/image/upload/v1718185084/Untitled_1_nwzwl4.png",
    title: "Generation Z",
    url: "/product-details/generation-z",
    button: true,
  }
};

let settingProps = {
  sectionHeading: {
    type: "double",
    title: "Our Featured Products",
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
      className="home-1_portfolio-section section-padding-120"
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
          <div className="col-md-4 col-xs-10">
            <PortfolioWidgetOne {...settings.cardOne} />
          </div>
          <div className="col-md-4 col-xs-10">
            <PortfolioWidgetOne {...settings.cardTwo} />
          </div>
          <div className="col-md-4 col-xs-10">
            <PortfolioWidgetOne {...settings.cardThree} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
