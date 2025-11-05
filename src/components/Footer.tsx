import { Link } from "react-router-dom";
import ArrowRight from "../assets/images/icons/arrow-right.svg?react";
import Dashed from "../assets/images/icons/dashed.svg?react"
import Logo from "../assets/images/icons/logo.svg?react";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <h2 className="footer-top-title">
              Don't hope for growth. Design it.
            </h2>
            <div className="footer-btn">
                 <CustomButton onClick={() =>{}} text = "Let's work 💬"/>
            </div>
            
          </div>
          <div className="underline">
            <Dashed className="dashed"/>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="grid ">
            <div className="bottom-top">
              <div className="footer-subscribe ">
                <p className="form-title">
                  <span>Join the community: </span>
                   access offers, free programs, and consumer insights
                </p>
                <form className="form">
                  <input type="email"name="email" className="footer-input" />
                  <button className="footer-btn">
                    <ArrowRight className="arrow-right"/>
                  </button>
                </form>
              </div>
              <nav className="footer-navbar ">
                <div className="nav-link">
                  <Link to={"/shop"}>Solutions</Link>
                </div>
                <div className="nav-link">
                  <Link to={"/work"}>Our Work</Link>
                </div>
                <div className="nav-link">
                  <Link to={"/shop"}>Contact</Link>
                </div>
                <ul className="nav-item">
                  <li className="item-list">
                    <Link
                      to={"https://www.linkedin.com/company/fonderstudio/"}
                      target="_blank"
                    >
                      Linkedin
                    </Link>
                  </li>
                  <li className="item-list">
                    <Link
                      to={"/https://clutch.co/profile/fonder-studio"}
                      target="_blank"
                    >
                      Clutch
                    </Link>
                  </li>
                  <li className="item-list">
                    <Link
                      to={"https://www.instagram.com/fonder_studio/"}
                      target="_blank"
                    >
                      Instagram
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="info ">
              <div className="footer-logo">
                <Logo className="color-white" />
              </div>
              <div className="row">
                <ul className="list">
                  <li className="item">Terms & Conditions</li>
                  <li className="item">Privacy Policy</li>
                </ul>
                <p className="title">©2025 Fonder Studio. All rights reserved.</p>
              </div>
            </div>
          </div>
          <div className="underline">
            <Dashed className="dashed"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
