import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/icons/logo.svg?react";
import ArrowRight from "../assets/images/icons/arrow-right.svg?react";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <div className="lets-work">
              <Link to={""}>Let's Work</Link>
            </div>
          </div>
          <div className="right-side">
            <button className="cart-btn">
              <span className="cart">🛒</span>
            </button>
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
