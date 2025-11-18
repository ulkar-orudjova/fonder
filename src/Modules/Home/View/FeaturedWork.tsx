import Dashed from "../../../assets/images/icons/dashed.svg?react";
import ArrowRight from "../../../assets/images/icons/arrow-right.svg?react";
import CustomButton from "../../../components/CustomButton";
import Plyo from "../../../assets/images/plyo-img.webp";
import Escapely from "../../../assets/images/Escapely.img.webp";
import MereCatch from "../../../assets/images/mere-catch.webp";
import GoldBug from "../../../assets/images/gold-bug.webp";
import { Link } from "react-router-dom";

const FeaturedWork = () => {
  return (
    <section className="featured-work">
      <div className="container">
        <div className="row">
          <div className="dashed-svg">
            <Dashed className="dashed" />
          </div>
          <div className="top">
            <h2 className="title">Featured Work</h2>
            <CustomButton
              className="blue hidden"
              onClick={() => {}}
              text="All work"
            >
              <ArrowRight className="arrow-right" />
            </CustomButton>
          </div>
          <div className="bottom">
            <div data-aos = "fade-down-right" data-aos-delay="200" className="card">
              <Link to={"/work"}>
                <div className="card-image">
                  <img src={Plyo} alt="plyo-img" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">Plyo</h2>
                  <p className="card-text">Sports vitamins that keep up</p>
                </div>
              </Link>
            </div>
            <div data-aos = "fade-down-left" className="card">
              <Link to={"/work"}>
                <div className="card-image">
                  <img src={Escapely} alt="escapely-img" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">Escapely</h2>
                  <p className="card-text">Escape the expected</p>
                </div>
              </Link>
            </div>
            <div className="card">
              <Link to={"/work"}>
                <div className="card-image">
                  <img src={MereCatch} alt="mere-catch-img" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">MereCatch</h2>
                  <p className="card-text">The future of fine footwear</p>
                </div>
              </Link>
            </div>
            <div className="card">
              <Link to={"/work"}>
                <div className="card-image">
                  <img src={GoldBug} alt="gold-bug-img" />
                </div>
                <div className="card-info">
                  <h2 className="card-title">GoldBug</h2>
                  <p className="card-text">
                    Bringing a retail legacy to ecommerce
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <CustomButton
            className="blue md-hidden"
            onClick={() => {}}
            text="All work"
          >
            <ArrowRight className="arrow-right" />
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
