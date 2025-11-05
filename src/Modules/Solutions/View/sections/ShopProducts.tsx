import { Link } from "react-router-dom";
import brandAudit from "../../../../assets/images/brand-audit-img.webp";
import ArrowRight from "../../../../assets/images/icons/arrow-right.svg?react";
import { forwardRef } from "react";

const ShopProducts = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className="shop-products">
      <div className="container">
        <div className="row">
          <div className="product-card">
            <Link to={""}>
              <div className="card-img">
                <img src={brandAudit} alt="brand-img" />
                <div className="card-button">
                  <ArrowRight className="arrow-right" />
                </div>
              </div>
              <div className="card-info">
                <h3 className="card-title">Brand Experience Audit</h3>
                <div className="card-info-right">
                  <h5 className="card-price">$2,000</h5>
                  <p className="card-text">2 Weeks</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="product-card">
            <Link to={""}>
              <div className="card-img">
                <img src={brandAudit} alt="brand-img" />
                <div className="card-tag">
                  <span className="tag">Best Seller</span>
                </div>
                <div className="card-button">
                  <ArrowRight className="arrow-right" />
                </div>
              </div>
              <div className="card-info">
                <h3 className="card-title">Brand Experience Audit</h3>
                <div className="card-info-right">
                  <h5 className="card-price">$2,000</h5>
                  <p className="card-text">2 Weeks</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="product-card">
            <Link to={""}>
              <div className="card-img">
                <img src={brandAudit} alt="brand-img" />
                <div className="card-tag success">
                  <span className="tag">Popular</span>
                </div>
                <div className="card-button">
                  <ArrowRight className="arrow-right" />
                </div>
              </div>
              <div className="card-info">
                <h3 className="card-title">Brand Experience Audit</h3>
                <div className="card-info-right">
                  <h5 className="card-price">$2,000</h5>
                  <p className="card-text">2 Weeks</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="product-card">
            <Link to={""}>
              <div className="card-img">
                <img src={brandAudit} alt="brand-img" />
                <div className="card-button">
                  <ArrowRight className="arrow-right" />
                </div>
              </div>
              <div className="card-info">
                <h3 className="card-title">Brand Experience Audit</h3>
                <div className="card-info-right">
                  <h5 className="card-price">$2,000</h5>
                  <p className="card-text">2 Weeks</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});

ShopProducts.displayName = "ShopProducts";

export default ShopProducts;
