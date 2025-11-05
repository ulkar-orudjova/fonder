import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import creativeImgOne from "../../../assets/images/hero/creatives-img-1.webp";
import creativeImgTwo from "../../../assets/images/hero/creatives-img-2.webp";
import creativeImgThree from "../../../assets/images/hero/creatives-img-3.webp";
import creativeImgFour from "../../../assets/images/hero/creatives-img-4.webp";
import buildersImgOne from "../../../assets/images/hero/builders-img-1.webp";
import buildersImgTwo from "../../../assets/images/hero/builders-img-2.webp";
import buildersImgThree from "../../../assets/images/hero/builders-img-3.webp";
import buildersImgFour from "../../../assets/images/hero/builders-img-4.webp";
import brandsImgOne from "../../../assets/images/hero/brands-img-1.webp";
import brandsImgTwo from "../../../assets/images/hero/brands-img-2.webp";
import brandsImgThree from "../../../assets/images/hero/brands-img-3.webp";
import brandsImgFour from "../../../assets/images/hero/brands-img-4.webp";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <h1 className="title">
            <p className="hero-text">
              We’re a band of seasoned
              <span className="selected-text creatives">
                <span> creatives</span>
              </span>
              <span className="creative-images">
                <span className="image one">
                  <img src={creativeImgOne} alt="creative-img" />
                </span>
                <span className="image two">
                  <img src={creativeImgTwo} alt="creative-img" />
                </span>
                <span className="image three">
                  <img src={creativeImgThree} alt="creative-img" />
                </span>
                <span className="image four">
                  <img src={creativeImgFour} alt="creative-img" />
                </span>
              </span>
              and brand
              <span className="selected-text builders">
                <span>builders</span>
              </span>
              <span className="builders-images">
                <span className="image one">
                  <img src={buildersImgOne} alt="builders-img" />
                </span>
                <span className="image two">
                  <img src={buildersImgTwo} alt="builders-img" />
                </span>
                <span className="image three">
                  <img src={buildersImgThree} alt="builders-img" />
                </span>
                <span className="image four">
                  <img src={buildersImgFour} alt="builders-img" />
                </span>
              </span>
              who craft the oohs and aahs behind
              <span className="selected-text brands">
                <span>beloved brands</span>
              </span>
              <span className="brand-images">
                <span className="image one">
                  <img src={brandsImgOne} alt="brands-img" />
                </span>
                <span className="image two">
                  <img src={brandsImgTwo} alt="brands-img" />
                </span>
                <span className="image three">
                  <img src={brandsImgThree} alt="brands-img" />
                </span>
                <span className="image four">
                  <img src={brandsImgFour} alt="brands-img" />
                </span>
              </span>
            </p>
          </h1>
        </div>
      </div>
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
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <p className="text">
                We helped an IRL puzzle-solving game spread across the U.S. with{" "}
                <span className="info">7x Product Expansion</span> • We helped a
                legacy retail baby brand launch DTC ecommerce with a{" "}
                <span className="info">1M+ online audience</span> • We helped
                launch a cold brew coffee into four years of{" "}
                <span className="info">4X YOY growth</span> •
              </p>
            </SwiperSlide>
          ))}
      </Swiper>
      <video
        src="/public/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="video"
        style={{ width: "100%", height: "auto" }}
      />
    </section>
  );
};

export default Hero;
