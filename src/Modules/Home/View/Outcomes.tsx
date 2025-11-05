import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

const Outcomes = () => {
  return (
    <section className="outcomes">
      <div className="row">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={true}
          speed={20000}
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
          {Array(18)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                    <h2>Outcomes</h2>
                    <div className="square"></div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Outcomes;
