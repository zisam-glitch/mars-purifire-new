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
import { useParams } from "react-router-dom";
import generationXfile from "../../public/files/Generation X INSTALLATION.pdf";
import generationYfile from "../../public/files/Generation Y INSTALLATION.pdf";
import generationZfile from "../../public/files/Generation Z INSTALLATION.pdf";
import generationSfile from "../../public/files/Generation S INSTALLATION.pdf";
import generationXbrochurefile from "../../public/files/Generation X and Y brochure.pdf";
import generationYbrochurefile from "../../public/files/Generation X and Y brochure.pdf";
import generationZbrochurefile from "../../public/files/Generation Z and Generation Z ULTRA Brochure.pdf";
import generationSbrochurefile from "../../public/files/Generation S Brochure.pdf";


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
    { key: "generation-z", link: generationZfile , brochurelink : generationZbrochurefile},
    { key: "generation-x", link: generationXfile , brochurelink : generationXbrochurefile},
    { key: "generation-y", link: generationYfile , brochurelink : generationYbrochurefile},
    { key: "generation-s", link: generationSfile , brochurelink : generationSbrochurefile},
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
      shortDescription: "Generation S is a domestic air purifier designed for spaces up to 30m2. It operates with a power usage of <20W.",
        image_links:[
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720292075/Gen_S_Front_2_quasnr.png",
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720292075/Gen_S_Side_1_qfhvxq.jpg",
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720292077/Gen_S_Side_2_bukcui.jpg",
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720292081/Gen_S_Top_1_ufwr0y.jpg",
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
        shortDescription: "Generation X is a domestic air purifier designed for spaces up to 144m2. It operates with a power usage of 26W or 46W.",
        image_links:[
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720291959/1_-_Gen_X_iausxd.jpg",
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720291955/2-_Gen_X_fltowu.jpg",
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720291953/3_-_Gen_X_xqmvwp.jpg",
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720291953/4_-_Gen_X_ftrobf.jpg",
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720291951/5_-_Gen_X_zvugsn.jpg",
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
        shortDescription: "Generation Y is a clinical air purifier designed for spaces up to 126m2. It operates with a power usage of <85W.",
        image_links:[
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720291991/Gen_Y_Front_1_ii4t2i.jpg",
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720291999/Gen_Y_BACK_sgrmn4.jpg",
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720291989/Gen_Y_Front_2_ahp6rs.jpg",
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
        shortDescription: "Generation Z is an industrial air purifier designed for spaces up to 230m2. It operates with a power usage of 110W.",
        // Add generation key based on model prefix
        key: "generation-z",
        image_links:[
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720291725/generation_Z_nomwop.png",
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720291725/generation_Z_purifier.3216_zqwckv.png",
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720291726/generation_Z_purifier.3220_lk7wfh.png",
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720291730/generation_Z_purifier.3204_tklqwz.png",
          "https://res.cloudinary.com/dyzgc1l2g/image/upload/v1720291730/generation_Z_purifier.3207_x6n5xk.png",
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
  );
  //.link
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
      <div className='product-details-container'>
        <div className='product-details-container__image'>
          <ProductImage
              name={productData?.model}
              shortDescription={productData?.shortDescription}
              category={productData?.category}
              image_links={productData?.image_links}
              openModal={openModal} closeModal={closeModal}
          />
        </div>
        <div className='product-details-container__details'>
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
