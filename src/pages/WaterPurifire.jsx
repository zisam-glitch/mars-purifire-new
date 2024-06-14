import HeroSection from "@sections/WaterPurifire/Hero";
import TestimonialSection from "@sections/WaterPurifire/Testimonial";
import VideoSection from "@sections/WaterPurifire/Video";
import ContentSectionFour from "@sections/WaterPurifire/ContentFour";
import ContentSectionThree from "@sections/WaterPurifire/ContentThree";
import ContentSectionTwo from "@sections/WaterPurifire/ContentTwo";
import ContentSectionOne from "@sections/WaterPurifire/ContentOne"
import CtaSection from "@sections/WaterPurifire/Cta";
import PortfolioSection from "@sections/WaterPurifire/Portfolio";
import BannerSection from "@sections/inner-pages/About/Banner";
import FaqSection from "@sections/WaterPurifire/Faq";
import FooterLayoutOne from "@components/Footer/FooterOne";
import Header from "@components/Header";
import ServiceSection from "@sections/WaterPurifire/Service";
import Feature from "@sections/WaterPurifire/Feature";
import Layout from "../components/Layout/PageWrapper/PageWrapper";

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
        <HeroSection />
        <ContentSectionOne />

        <PortfolioSection />
        <ContentSectionTwo />
        <ContentSectionThree />
        <ContentSectionFour />

        <FooterLayoutOne {...settingProps.footer} />
      </Layout>
    </>
  );
};

export default Homepage;
