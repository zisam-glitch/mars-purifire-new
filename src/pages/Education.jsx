

import ContentSectionFour from "@sections/Education/ContentFour";
import ContentSectionThree from "@sections/Education/ContentThree";
import ContentSectionTwo from "@sections/Education/ContentTwo";
import ContentSectionOne from "@sections/Education/ContentOne";
import Calculator from "@sections/Dental/Calculator";
import PortfolioSection from "@sections/Education/Portfolio";
import FooterLayoutOne from "@components/Footer/FooterOne";
import Header from "@components/Header";
import Layout from "../components/Layout/PageWrapper/PageWrapper";
import ServiceSection from "@sections/Dental/Service";

let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const Homepage = () => {
  return (
    <>
      <Layout>
        <Header
          scroll={true}
          signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up"
        />
      
        <ContentSectionOne />
        <ContentSectionTwo />
        <ContentSectionThree />
        <PortfolioSection />
        <ContentSectionFour />
        <ServiceSection />
        <Calculator />
        <FooterLayoutOne {...settingProps.footer} />
      </Layout>
    </>
  );
};

export default Homepage;
