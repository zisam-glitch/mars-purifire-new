import HeroSection from "@sections/home-1/Hero";
import TestimonialSection from "@sections/home-1/Testimonial";
import VideoSection from "@sections/home-1/Video";
import BrandSection from "@sections/home-1/Brand";
import CtaSection from "@sections/home-1/Cta";
import PortfolioSection from "@sections/home-1/Portfolio";
import BannerSection from "@sections/inner-pages/About/Banner";
import FaqSection from "@sections/home-1/Faq";
import FooterLayoutOne from "@components/Footer/FooterOne";
import Header from "@components/Header";
import ServiceSection from "@sections/home-1/Service";
import Feature from "@sections/home-1/Feature";
import Layout from "../components/Layout/PageWrapper/PageWrapper";

let settingProps = {
  footer: {
    className: " footer-padding-default ",
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
        <PortfolioSection />
        <VideoSection />
        <ServiceSection />
        <Feature />
        {/* <ContentSectionOne />
        <ContentSectionTwo />
        <PortfolioSection /> */}
        <TestimonialSection />
        <BrandSection />
        <BannerSection/>
        <FaqSection />
        {/* <CtaSection /> */}
        <FooterLayoutOne {...settingProps.footer} />
      </Layout>
    </>
  );
};

export default Homepage;
