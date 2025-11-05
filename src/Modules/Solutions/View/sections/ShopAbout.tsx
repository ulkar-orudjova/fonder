import { Link } from "react-router-dom";
import aboutImg from "../../../../assets/images/shop-about-img.gif"

const ShopAbout = () => {
  return (
    <section className="shop-about">
      <div className="container">
        <div className="row">
          <div className="left-side">
            <img src={aboutImg} alt="about-gif" />
          </div>
          <div className="right-side">
            <h2 className="title">Not sure what you need?</h2>
            <div className="right-side-bottom">
              <div className="info">
                <p className="text">
                  The right place to start is the most important part. Let’s
                  talk to clarify a plan that works with your business and
                  goals. Our team is sharp, but we don’t bite.
                </p>
              </div>
              <div className="btn">
                <Link to="https://app.onecal.io/b/tom-abrams/intro-with-fonder" target="_blank">Book a call</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopAbout;
