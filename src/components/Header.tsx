import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/icons/logo.svg?react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="left-side">
            <div className="logo">
              <Link to={"/"}>
               <Logo/>
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
      </div>
    </header>
  );
};

export default Header;
