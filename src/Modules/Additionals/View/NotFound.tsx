import CustomButton from "../../../components/CustomButton";
import ArrowRight from "../../../assets/images/icons/arrow-right.svg?react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";


const NotFound = () => {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  }
  return (
    <section data-aos = "fade-up" className="not-found">
     
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={true}
          speed={10000}
          loop={true}
          freeMode={true}
          loopAdditionalSlides={10}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
          }}
          allowTouchMove={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <h1> 404: Page Not Found</h1>
              </SwiperSlide>
            ))}
        </Swiper>

        <p className="text">
          Fiddlesticks... The page you seek no longer exists or never did. Let’s
          get you back on track.
        </p>
        <CustomButton onClick={goToHome} text="Take me home">
          <ArrowRight className="arrow-right" />
        </CustomButton>
      
    </section>
  );
};

export default NotFound;
