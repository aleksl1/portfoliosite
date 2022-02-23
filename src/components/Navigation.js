import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaCogs, FaInfoCircle, FaMailBulk } from "react-icons/fa";
import Logo from "./Logo";
import SelectLang from "./SelectLang";
import { useContext } from "react";
import LangContext from "../store/lang-context";

const Navigation = () => {
  const [showNav, setShowNav] = useState(true);
  const contextLang = useContext(LangContext);
  const showNavClass = showNav ? "" : "hide";
  const hideNavClass = showNav ? "hide" : "";
  const navToggleHandler = () => {
    setShowNav((prevState) => !prevState);
  };

  const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="logo-wrap">
          <Logo name="webdev" />
        </div>

        <div className="mobile-menu-actions">
          <div
            onClick={navToggleHandler}
            className={`mobile-menu-open ${hideNavClass}`}
          >
            <span>|||</span>
          </div>
          <div
            className={`mobile-menu-close ${showNavClass}`}
            onClick={navToggleHandler}
          >
            X
          </div>
          <div className={`mobile-menu-lang ${showNavClass}`}>
            <SelectLang />
          </div>
        </div>

        <ul className={`nav-list ${showNavClass}`}>
          <li>
            <NavLink onClick={navToggleHandler} className={activeClass} to="/">
              <FaHome className="icon-centered" />{" "}
              {contextLang.inEnglish ? "Home" : "Start"}
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={navToggleHandler}
              className={activeClass}
              to="projects"
            >
              <FaCogs className="icon-centered" />{" "}
              {contextLang.inEnglish ? "Projects" : "Projekty"}
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={navToggleHandler}
              className={activeClass}
              to="about"
            >
              <FaInfoCircle className="icon-centered" />{" "}
              {contextLang.inEnglish ? "About me" : "O mnie"}
            </NavLink>
          </li>

          <li>
            <NavLink
              onClick={navToggleHandler}
              className={activeClass}
              to="contact"
            >
              <FaMailBulk className="icon-centered" />{" "}
              {contextLang.inEnglish ? "Contact" : "Kontakt"}
            </NavLink>
          </li>
        </ul>
        <div className="lang-container">
          <SelectLang />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
