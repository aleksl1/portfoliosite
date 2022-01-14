import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaChevronUp,
  FaHome,
  FaCogs,
  FaInfoCircle,
  FaMailBulk,
} from "react-icons/fa";
import Logo from "./Logo";

const Navigation = () => {
  const [showNav, setShowNav] = useState(true);
  // const [showClassName,setShowClassName] =
  const showNavClass = showNav ? "" : "hide";
  const hideNavClass = showNav ? "hide" : "";
  // let showNavClass = "";
  // let hideNavClass = "hide";
  const navToggleHandler = () => {
    setShowNav((prevState) => !prevState);
    // showNavClass = "hide";
    // hideNavClass = "";
  };

  const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo-wrap">
          <Logo name="webdev" />
        </div>
        <ul className={`nav-list ${showNavClass}`}>
          <li>
            <NavLink className={activeClass} to="/">
              Home <FaHome className="icon-centered" />
            </NavLink>
          </li>
          <li>
            <NavLink className={activeClass} to="projects">
              Projects <FaCogs className="icon-centered" />
            </NavLink>
          </li>
          <li>
            <NavLink className={activeClass} to="about">
              About Me <FaInfoCircle className="icon-centered" />
            </NavLink>
          </li>

          <li>
            <NavLink className={activeClass} to="contact">
              Contact <FaMailBulk className="icon-centered" />
            </NavLink>
          </li>
        </ul>
        <div className={`bars-container ${hideNavClass}`}>
          <FaBars className="bars-menu" onClick={navToggleHandler} />
        </div>
        <div
          className={`nav-toggle ${showNavClass}`}
          onClick={navToggleHandler}
        >
          <FaChevronUp className="chevron-up" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
