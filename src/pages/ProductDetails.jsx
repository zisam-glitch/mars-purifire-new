import HeroSection from "@sections/home-1/Hero";
import FooterLayoutOne from "@components/Footer/FooterOne";
import Header from "@components/Header";
import Layout from "../components/Layout/PageWrapper/PageWrapper";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Isotope from "isotope-layout";
import FormModal from "@sections/inner-pages/product-details/form-modal";
import ProductDescription from "@sections/inner-pages/product-details/product-description";
import ProductDetailsTable from "@sections/inner-pages/product-details/product-specification";
import ProductImage from "@sections/inner-pages/product-details/product-image";
import ProductSupport from "@sections/inner-pages/product-details/product-support";
import { useParams } from "react-router-dom"
import generationXfile from "../../public/files/Generation X INSTALLATION.pdf";
import generationYfile from "../../public/files/Generation Y INSTALLATION.pdf";
import generationZfile from "../../public/files/Generation Z INSTALLATION.pdf";
import generationSfile from "../../public/files/Generation S INSTALLATION.pdf";

const settingProps = {
  footer: {
    className: "footer-padding-default",
    logo: "logo-white.svg",
  },
};

const data = {
  navListInline: [
    { title: "Description", data_filter: "description" },
    { title: "Specification", data_filter: "specification" },
    { title: "Support", data_filter: "support" },
  ],
  download_links: [
    { key: "generation-z", link: generationZfile },
    { key: "generation-x", link: generationXfile },
    { key: "generation-y", link: generationYfile },
    { key: "generation-s", link: generationSfile },
  ],
};

const airPurifiers = [
    {
        model: "Generation S",
        category: "Domestic",
        cadr: "160m3/hr",
        coverage: "30m2",
        noiseLevel: "<58db",
        power: "<20W",
        voltage: "20V",
        ratedFrequency: "50HZ",
        productDimensions: "218x218x250mm",
        packageDimensions: "270x270x390mm",
        netWeight: "3kg",
        grossWeight: "3.6kg",
        // Add generation key based on model prefix
        key: "generation-s",
        image_links:[
          "public/image/gen-x/1 - Gen X .jpg",
          "public/image/gen-x/2 - Gen X .jpg",
          "public/image/gen-x/3 - Gen X .jpg",
          "public/image/gen-x/4 - Gen X .jpg",
          "public/image/gen-x/5 - Gen X .jpg",
          ],
      },
      {
        model: "Generation X",
        category: "Domestic",
        cadr: "720m3/hr",
        coverage: "144m2",
        noiseLevel: "<56db",
        power: "26W or 46W",
        voltage: "220V",
        ratedFrequency: "50HZ",
        productDimensions: "590x280x276mm",
        packageDimensions: "625x340x330mm",
        netWeight: "6.35kg",
        grossWeight: "7.55kg",
        // Add generation key based on model prefix
        key: "generation-x",
        image_links:[
          "/public/image/gen-x/1 - Gen X .jpg",
          "/public/image/gen-x/2- Gen X.jpg",
          "/public/image/gen-x/3 - Gen X.jpg",
          "/public/image/gen-x/4 - Gen X.jpg",
          "/public/image/gen-x/5 - Gen X.jpg",
        ],
      },
      {
        model: "Generation Y",
        category: "Clinical",
        cadr: "633m3/hr",
        coverage: "126m2",
        noiseLevel: "<65db",
        power: "<85W",
        voltage: "220V",
        ratedFrequency: "50HZ",
        productDimensions: "820x345x345mm",
        packageDimensions: "840x360x360mm",
        netWeight: "9kg",
        grossWeight: "11kg",
        // Add generation key based on model prefix
        key: "generation-y",
        image_links:[
          "/public/image/gen-y/Gen Y BACK.jpg",
          "/public/image/gen-y/Gen Y Front 1.jpg",
          "/public/image/gen-y/Gen Y Front 2.jpg",
            ],
      },
      {
        model: "Generation Z",
        category: "Industrial",
        cadr: "1156m3/hr",
        coverage: "230m2",
        noiseLevel: "<70db",
        power: "110W",
        voltage: "220V",
        ratedFrequency: "50HZ",
        productDimensions: "890x530x330mm",
        packageDimensions: "950x570x380mm",
        netWeight: "26.5kg",
        grossWeight: "29kg",
        // Add generation key based on model prefix
        key: "generation-z",
        image_links:[
          "/public/image/gen-z/generation Z.png",
          "/public/image/gen-z/generation Z purifier.3204.png",
          "/public/image/gen-z/generation Z purifier.3207.png",
          "/public/image/gen-z/generation Z purifier.3216.png",
          "/public/image/gen-z/generation Z purifier.3220.png",
            ],
      },
];



const ProductDetails = () => {

  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("description");
  const { slug } = useParams();
  const productData = airPurifiers.find((item) => item.key === slug);
  const installation_download_link = data.download_links.find(
    (item) => item.key === slug
  ).link;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const location = useLocation();
  const fullPath = `${window.location.origin}${location.pathname}`;

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
      isotope.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  const renderContent = (item) => {
    switch (item?.data_filter) {
      case "specification":
        return <ProductDetailsTable productData={productData} />;
      case "support":
        return <ProductSupport link={installation_download_link} />;
      default:
        return <ProductDescription productData={productData} />;
    }
  };

  return (
    <Layout>
      <Header
        scroll={true}
        signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up"
      />
      <div className='flex flex-row'>
        <div className='w-50'>
          <ProductImage
              name={productData?.model}
              image_links={productData?.image_links}
              openModal={openModal} closeModal={closeModal}
          />
        </div>
        <div className='w-50'>
        <section className="portfolio-classic_main-section section-padding-120">
          <div className="container">
            <ul className="navigation-list navigation-list--inline">
              {data.navListInline.map(({title, data_filter}, index) => (
                  <li
                      key={index}
                      data-filter={data_filter}
                      onClick={() => setFilterKey(data_filter)}
                      className={data_filter === filterKey ? "active" : ""}
                  >
                    <button className="btn rounded-pill">{title}</button>
                  </li>
              ))}
            </ul>
            <div className="row navigation-active isotope-navigation portfolio-v1 filter-container">
              {data.navListInline.map((item, index) => (
                  <div key={index} className={`filter-item ${item?.data_filter}`}>
                    <div className="details-container">{renderContent(item)}</div>
                  </div>
              ))}
            </div>
          </div>
        </section>
        </div>
      </div>


      <FormModal
          modalIsOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
          product={productData?.model}
          redirect_url={fullPath}
      />
      <FooterLayoutOne {...settingProps.footer} />
    </Layout>
  );
};

export default ProductDetails;
