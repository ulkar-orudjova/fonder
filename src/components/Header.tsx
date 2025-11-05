import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/icons/logo.svg?react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="leftSide">
            <div className="logo">
              <Link to={"/"}>
               <Logo/>
              </Link>
            </div>
            <nav className="navBar">
              <ul className="navList">
                <li className="navItem">
                  <NavLink to={"/shop"}>Solutions</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to={"/work"}>Work</NavLink>
                </li>
              </ul>
            </nav>
            <div className="letsWork">
              <Link to={"/"}>Let's Work</Link>
            </div>
          </div>
          <div className="rightSide">
            <button className="cartBtn">
              <span className="cart">🛒</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
