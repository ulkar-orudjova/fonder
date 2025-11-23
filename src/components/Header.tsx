import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/icons/logo.svg?react";
import WindowClose from "../assets/images/icons/close.svg?react";
import ArrowRight from "../assets/images/icons/arrow-right.svg?react";
import Dashed from "../assets/images/icons/dashed.svg?react";
import Delete from "../assets/images/icons/delete.svg?react";
import Hamburger from "hamburger-react";
import BrandImg from "../assets/images/brand-audit-img.webp";
import { useState } from "react";
import CustomButton from "./CustomButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="left-side">
            <div className="logo">
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
            <nav className="nav-bar">
              <ul className="nav-list">
                <li className="nav-item">
                  <NavLink to={"/shop"}>Solutions</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/work"}>Work</NavLink>
                </li>
              </ul>
            </nav>
            <button className="lets-work">Let's Work</button>
          </div>
          <div className="right-side">
            <button className="cart-btn" onClick={() =>{setCartIsOpen(!cartIsOpen)}}>
              <span className="cart">🛒</span>
              <span className="count"></span>
            </button>
          </div>
        </div>
        <div className={`cart-window ${cartIsOpen && "open"}`}>
          <div className="overlay" onClick={()=>{setCartIsOpen(false)}}></div>
          <div className="cart-box">
            <div className="cart-head">
              <div className="row">
                <h2 className="head-title">Contact Cart</h2>
                <WindowClose className="window-close"  onClick={()=>{setCartIsOpen(false)}} />
              </div>
            </div>
            <div className="empty hidden">
              <div className="row">
                <h5 className="empty-info">YOUR CART IS EMPTY...</h5>
                <h6 className="empty-text">Build a contact cart or reach out to get started.</h6>
              </div>
              <CustomButton onClick={() =>{}} text="Explore our solutions"/>
            </div>
            <div className="cart-product">
              <div className="dashed">
                <Dashed />
              </div>
              <div className="products">
                <div className="product">
                  <div className="product-img">
                    <img src={BrandImg} alt="" />
                  </div>
                  <div className="right-side">
                    <div className="top">
                      <div className="cart-info">
                        <Link to={""}>
                          <h5 className="title">Brand Experience Audit</h5>
                        </Link>
                      </div>
                      <button className="delete">
                        <Delete className="remove-svg"/>
                      </button>
                    </div>
                    <p className="cart-price">$2,500</p>
                    {/* <p className="quantity">Quantity: 1</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-bottom">
              <div className="dashed">
                <Dashed />
              </div>
              <div className="total-price">
                <span className="title">Total:</span>
                <span className="price">$2,500</span>
              </div>
              <CustomButton onClick={() =>{}} text="Review and Submit"/>
              <p className="text">Don't worry, we're not requesting payment.</p>
            </div>
          </div>
        </div>

        <div className="menu-panel">
          <div className="hamburger-menu">
            <Hamburger
              size={22}
              color="white"
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </div>
          <div className="logo">
            <Link to={"/"} onClick={() => setIsOpen(false)}>
              <Logo />
            </Link>
          </div>
          <div className="right-side">
            <button className="cart-btn">
              <span className="cart">🛒</span>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mobile-menu">
            <nav className="nav-bar">
              <ul className="nav-list">
                <li className="nav-item">
                  <NavLink to={"/shop"} onClick={() => setIsOpen(false)}>
                    Solutions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/work"} onClick={() => setIsOpen(false)}>
                    Work
                  </NavLink>
                </li>
                <li className="nav-item lets-work">
                  <Link to={""}>Let's Work</Link>
                  <span className="lets-work-svg">
                    <ArrowRight className="arrow-right" />
                  </span>
                </li>
              </ul>
            </nav>
            <div className="social-links">
              <ul className="list">
                <li className="item">
                  <p className="link-title">Reach out</p>
                  <Link to={"mailto:hello@fonder.studio"}>
                    hello@fonder.studio
                  </Link>
                </li>
              </ul>
              <ul className="list">
                <li className="item">
                  <p className="link-title">Follow along</p>
                </li>
                <li className="item">
                  <div className="flex">
                    <Link
                      target="_blank"
                      to={"https://www.linkedin.com/company/fonderstudio/"}
                    >
                      LinkedIn
                    </Link>
                    <Link
                      target="_blank"
                      to={"https://clutch.co/profile/fonder-studio"}
                    >
                      Clutch
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bottom">
              <p className="text">©2025 Fonder Studio. All rights reserved.</p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
