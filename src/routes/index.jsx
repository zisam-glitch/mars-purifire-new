import { createBrowserRouter } from "react-router-dom";
import App from "../pages";
import Homepage from "../pages/Home";
import AboutPage from "../pages/AboutPage";

import Dental from "../pages/Dental";
import Education from "../pages/Education";
import HealthCare from "../pages/HealthCare";
import Business from "../pages/Business";
import Hospitality from "../pages/Hospitality";
import GymAndFitness from "../pages/GymAndFitness";
import WaterPurifire from "../pages/WaterPurifire";
import ContactPageThree from "../pages/ContactPageThree";
import ErrorPage from "../pages/ErrorPage";
import PortfolioOnePage from "../pages/PortfolioOnePage";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/dental-air-purifiers-for-dental-clinics",
    element: <Dental />,
  },
  {
    path: "/product-details/:slug",
    element: <ProductDetails />,
  },
  {
    path: "/air-purifiers-for-schools",
    element: <Education />,
  },
  {
    path: "/clinical-air-purifiers-hospital-air-purifier-by-mars-purifier",
    element: <HealthCare />,
  },
  {
    path: "/commercial-air-purifier-commercial-air-purification-by-mars-purifier",
    element: <Business />,
  },
  {
    path: "/mars-airpurifier-hospitality",
    element: <Hospitality />,
  },
  {
    path: "/air-purifiers-for-gyms-and-fitness-studios-mars-purifier",
    element: <GymAndFitness />,
  },
  {
    path: "/water-purifire",
    element: <WaterPurifire />,
  },
  {
    path: "/shop",
    element: <PortfolioOnePage />,
  },
  {
    path: "/contact",
    element: <ContactPageThree />,
  },
    {
    path: "/about",
    element: <AboutPage />,
  },

  // {
  //   path: "/home-2",
  //   element: <HomepageTwo />,
  // },
  // {
  //   path: "/home-3",
  //   element: <HomepageThree />,
  // },
  // {
  //   path: "/home-4",
  //   element: <HomepageFour />,
  // },
  // {
  //   path: "/home-5",
  //   element: <HomepageFive />,
  // },
  // {
  //   path: "/home-6",
  //   element: <HomepageSix />,
  // },
  // {
  //   path: "/home-7",
  //   element: <HomepageSeven />,
  // },
  // {
  //   path: "/home-8",
  //   element: <HomepageEight />,
  // },
  // {
  //   path: "/home-9",
  //   element: <HomepageNine />,
  // },
  // {
  //   path: "/home-10",
  //   element: <HomepageTen />,
  // },

  // {
  //   path: "/reset-password",
  //   element: <ResetPasswordPage />,
  // },
  // {
  //   path: "/sign-in",
  //   element: <SignInPage />,
  // },
  // {
  //   path: "/sign-up",
  //   element: <SignUpPage />,
  // },

  // {
  //   path: "/service",
  //   element: <ServicePage />,
  // },
  // {
  //   path: "/service-details",
  //   element: <ServiceDetails />,
  // },

  // {
  //   path: "/contact-2",
  //   element: <ContactPageTwo />,
  // },
  // {
  //   path: "/contact-3",
  //   element: <ContactPageThree />,
  // },
  // {
  //   path: "/pricing",
  //   element: <PricingPageOne />,
  // },
  // {
  //   path: "/pricing-2",
  //   element: <PricingPageTwo />,
  // },
  // {
  //   path: "/career",
  //   element: <CareerPage />,
  // },
  // {
  //   path: "/career-details",
  //   element: <CareerDetailsPage />,
  // },
  {
    path: "/404",
    element: <ErrorPage />,
  },
  // {
  //   path: "/coming-soon",
  //   element: <ComingSoonPage />,
  // },
  // {
  //   path: "/blog",
  //   element: <BlogPage />,
  // },
  // {
  //   path: "/blog-details",
  //   element: <BlogDetailsPage />,
  // },
  // {
  //   path: "/team",
  //   element: <TeamPage />,
  // },

  // {
  //   path: "/portfolio-3",
  //   element: <PortfolioThreePage />,
  // },
  // {
  //   path: "/portfolio-4",
  //   element: <PortfolioFourPage />,
  // },
  // {
  //   path: "/faq",
  //   element: <FaqOnePage />,
  // },
  // {
  //   path: "/faq-2",
  //   element: <FaqTwoPage />,
  // },
  // {
  //   path: "/faq-3",
  //   element: <FaqThreePage />,
  // },
  // {
  //   path: "/faq-4",
  //   element: <FaqFourPage />,
  // },
]);
