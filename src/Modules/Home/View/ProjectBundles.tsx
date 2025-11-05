import CustomButton from "../../../components/CustomButton";
import ArrowRight from "../../../assets/images/icons/arrow-right.svg?react";
import BrandBuild from "../../../assets/images/brand-build-img.webp";
import ShopifyWebsite from "../../../assets/images/shopify-website-img.webp";
import BrandAudit from "../../../assets/images/brand-audit-img.webp";
import CustomProject from "../../../assets/images/custom-project-img.webp";
import { Link } from "react-router-dom";

const ProjectBundles = () => {
  return (
    <section className="project-bundles">
      <div className="container">
        <div className="row">
          <div className="project-bundles-top row">
            <div className="left-side">
              <p className="headline">Handled with Care</p>
              <h2 className="title">Project Bundles</h2>
            </div>
            <div className="right-side">
              <CustomButton onClick={() => {}} text="All solutions">
                <ArrowRight className="arrow-right" />
              </CustomButton>
            </div>
          </div>
          <div className="project-bundles-bottom">
            <Link to={"/shop"}>
              <div className="card">
                <div className="card-img">
                  <img src={BrandBuild} alt="brand-build" />
                </div>
                <div className="card-info">
                  <div className="left">
                    <div className="card-tag">
                      <span className="tag">Best Seller</span>
                    </div>
                    <h3 className="card-title">Brand Build</h3>
                    <h4 className="card-price">Starting @ $25,000</h4>
                  </div>
                  <div className="right">
                    <div className="button">
                      <ArrowRight className="arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"/shop"}>
              <div className="card">
                <div className="card-img">
                  <img src={ShopifyWebsite} alt="brand-build" />
                </div>
                <div className="card-info">
                  <div className="left">
                    <div className="card-tag green">
                      <span className="tag">Popular</span>
                    </div>
                    <h3 className="card-title">Shopify Website</h3>
                    <h4 className="card-price">Starting @ $50,000</h4>
                  </div>
                  <div className="right">
                    <div className="button">
                      <ArrowRight className="arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"/shop"}>
              <div className="card bg-dark">
                <div className="card-img">
                  <img src={BrandAudit} alt="brand-audit" />
                </div>
                <div className="card-info">
                  <div className="left">
                    <h3 className="card-title">Brand Experience Audit</h3>
                    <h4 className="card-price">$2,000 / Flat Fee</h4>
                  </div>
                  <div className="right right-pink">
                    <div className="button">
                      <ArrowRight className="arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"/shop"}>
              <div className="card bg-dark">
                <div className="card-img">
                  <img src={CustomProject} alt="custom-project-image" />
                </div>
                <div className="card-info">
                  <div className="left">
                    <h3 className="card-title">Custom Project</h3>
                    <h4 className="card-price">Book a discovery call</h4>
                  </div>
                  <div className="right right-pink">
                    <div className="button">
                      <ArrowRight className="arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <CustomButton
          onClick={() => {}}
          text="All solutions"
          className="md-hidden"
        >
          <ArrowRight className="arrow-right" />
        </CustomButton>
      </div>
    </section>
  );
};

export default ProjectBundles;
