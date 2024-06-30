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
import Banner from "@components/Banner/Banner";
import "../style/sections/product-details/_product-details.scss";
import { useState, useEffect } from "react";
import Isotope from "isotope-layout";

let settingProps = {
  footer: {
    className: " footer-padding-default ",
    logo: "logo-white.svg",
  },
};

let data = {
  navListInline: [
    {
      title: "Description",
      data_filter: "description",
    },
    {
      title: "Specification",
      data_filter: "specification",
    },
    {
      title: "Support",
      data_filter: "support",
    },
  ],
  values: [
    {
      doownload_link: "https://www.google.com",
      data_filter: "support",
    },
    {
        data_filter: "description",
    },
    {
        data_filter: "specification",
    },
  ],
};

const ProductDetails = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("description");

  useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      })
    );
  }, []);
  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <>
      <Layout>
        <Header
          scroll={true}
          signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up"
        />
        <Banner title="Product Details" text="Product Details" />
        <div>
          <section className="portfolio-classic_main-section section-padding-120">
            <div className="container">
              <ul className="navigation-list navigation-list--inline">
                {data?.navListInline?.map(({ title, data_filter }, index) => (
                  <li
                    key={index}
                    data-filter={data_filter}
                    onClick={() => setFilterKey(data_filter)}
                    className={`${data_filter === filterKey ? "active" : ""}`}
                  >
                    <button className="btn rounded-pill">{title}</button>
                  </li>
                ))}
              </ul>

              <div className="row navigation-active isotope-navigation portfolio-v1 filter-container ">
                {data?.values?.map((item, index) => (
                  <div
                    key={index}
                    className={`col-lg-4 grid-item filter-item ${item?.data_filter}`}
                  >
                    <div>{item.data_filter}</div>
                  </div>
                ))}
              </div>

              <div className="section-button"></div>
            </div>
          </section>
        </div>
        <FooterLayoutOne {...settingProps.footer} />
      </Layout>
    </>
  );
};

export default ProductDetails;
