import ArrowRight from "../../../assets/images/icons/arrow-right.svg?react";
import CustomButton from "../../../components/CustomButton";
import { useAppDispatch } from "../../../redux/hooks";
import { setIsContactModalOpen } from "../../../redux/slices/modalSlice";
import { sliderData } from "../../../db/sliderDb";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";


const WorkWithUs = () => {
  const dispatch = useAppDispatch();
  const repeatedSlides = Array(10).fill(sliderData).flat();
  return (
    <section className="work-with-us">
      <div className="container">
        <div  className="row">
          <span className="headline">Good things come in lean teams</span>
          <h2 className="title">
            <p className="info">
              We move fast, sweat the details, and build brands that scale by
              design, not by accident.
            </p>
          </h2>
          <div className="work-with-us-btn">
            <CustomButton onClick={()=>dispatch(setIsContactModalOpen(true))} text="Let's work" className="pink">
              <ArrowRight className="arrow-right" />
            </CustomButton>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        speed={2000}
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
        {repeatedSlides.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="img" className="slide-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WorkWithUs;
