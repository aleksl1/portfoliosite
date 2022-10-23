import {
  FaMobileAlt,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="footer-info">
          <span className="footer-info-social">
            <a href="mailto:aleksander.slawek1@gmail.com">
              <FaEnvelope />
            </a>
          </span>
          <span className="footer-info-social">
            <a href="tel:00000000">
              <FaMobileAlt />
            </a>
          </span>

          <span className="footer-info-social">
            <a href="https://github.com/aleksl1">
              <FaGithub />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
