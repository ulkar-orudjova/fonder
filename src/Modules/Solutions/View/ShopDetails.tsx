import { Link } from "react-router-dom";
import CustomButton from "../../../components/CustomButton";
import Timeline from "../../../assets/images/icons/timeline.svg?react"

const ShopDetails = () => {
  return (
    <section className="shop-details">
      <div className="container">
        <div className="row">
          <div className="left-side">
            <div className="headline">
              <ul className="list">
                <li className="item">
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/shop"}>Solutions</Link>
                </li>
                <li>
                  <span>Brand Experience Audit</span>
                </li>
              </ul>
            </div>
            <div className="info">
              <h1 className="title">Brand Experience Audit</h1>
              <p className="price">$2,000</p>
              <div className="stars"></div>
              <p className="text">
                We dive through every part of your customer journey — from first
                impression to post-purchase — to gauge your brand perception and
                uncover opportunities to convert more customers, build brand
                loyalty, and drive lasting growth.
              </p>
              <div className="underline"></div>
              <div className="timeline">
                <Timeline className="timeline-svg"/>
                <p className="time">
                    Timeline: 2 Weeks
                </p>
              </div>
            </div>
            <div className="button">
                <CustomButton onClick={()=>{}} text="Add to Contact Cart" className="add-btn" />
            </div>
            <div className="advantages">
                <div className="advantage">
                    <img src="https://cdn.sanity.io/images/zob55qdr/production/fa4b00c129b0efb506cec0237fb16294429af31a-18x18.svg?w=18&h=18&auto=format" alt="" />
                    <p className="advantage-text">Easy to Start</p>
                </div>
            </div>
            <div></div>
          </div>
          <div className="right-side">
            {/* <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;
