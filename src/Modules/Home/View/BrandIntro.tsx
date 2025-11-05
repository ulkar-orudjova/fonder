import ArrowRight from "../../../assets/images/icons/arrow-right.svg?react";
import CustomButton from "../../../components/CustomButton";

const BrandIntro = () => {
  return (
    <section className="brand-intro">
      <div className="container">
        <div className="row">
          <span className="headline">Welcome to Fonder</span>
          <h2 className="title">
            <p className="info">
              We're a consumer-centric brand partner that helps thoughtful goods
              become market-leading brands that people love to buy.
            </p>
          </h2>
          <div className="brand-intro-btn">
            <CustomButton onClick={() => {}} text="Let's work" className="blue">
              <ArrowRight className="arrow-right" />
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;
