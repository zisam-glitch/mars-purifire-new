import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProductImage = (props) => {
    return (
        <div className="home-1_hero-section md-pt-200 md-pb-150" id="hero">
            <div className="home-1_hero-shape-1">
                <img src="/image/home-1/hero-shape-1.svg" alt="hero shape One"/>
            </div>
            <div className="home-1_hero-shape-2">
                <img
                    src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718011455/savedSVGExport0-svg_svtypj.svg"
                    alt="hero shape two"
                />
            </div>
            <div className="container">
                <div className="product-image-container">
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
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper product-image-container__image-div"

                    >
                        {
                            props.image_links.map((image, i) => (
                                <SwiperSlide>
                                    <img src={image} alt={i} className='product-image-container__images'/>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className='product-image-container__details-div'>
                        <h1 className="product-image-container__details-h1">
                            {props.name}
                        </h1>
                        <div className='p-20'>
                            <h4 className="product-image-container__details-h4">
                              Category:  {props.category}
                            </h4>
                            <p className="product-image-container__details-p">
                                {props.shortDescription}
                            </p>
                        </div>
                        <div className='w-full flex justify-center'>
                            <button
                                className="btn-masco btn-masco--header rounded-pill btn-fill--up mt-20"
                                onClick={props.openModal}
                            >
                                Price On Request
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductImage;
