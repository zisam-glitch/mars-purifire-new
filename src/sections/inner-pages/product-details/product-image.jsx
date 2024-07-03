import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const ProductImage = (props) => {
  return (
    <div className="home-1_hero-section md-pt-200 md-pb-150" id="hero">
      <div className="home-1_hero-shape-1">
        <img src="/image/home-1/hero-shape-1.svg" alt="hero shape One" />
      </div>
      <div className="home-1_hero-shape-2">
        <img
          src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718011455/savedSVGExport0-svg_svtypj.svg"
          alt="hero shape two"
        />
      </div>
      <div className="container">
        <div className="col">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{
                    width: '100%',
                }}
            >
                {
                    props.image_links.map((image, i) => (
                        <SwiperSlide><img src={image} alt={i}/></SwiperSlide>
                    ))
                }
            </Swiper>
          <div
            className="col-xxl-auto col-lg-7 col-md-10"
            data-aos-duration={1000}
            data-aos="fade-right"
            data-aos-delay={300}
          >
            <div className="home-1_hero-content">
              <div className="home-1_hero-content-text">
                <h1 className="hero-content__title mb-12 primary heading-xxl"></h1>
                <h1 className="hero-content__title heading-xxl">
                  {props.name}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className='w-full flex justify-center'>
            <button
                className="btn-masco btn-masco--header rounded-pill btn-fill--up mt-120"
                onClick={props.openModal}
            >
                Request
            </button>
        </div>
    </div>
  );
};

export default ProductImage;
