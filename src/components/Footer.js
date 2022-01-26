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
            <a href="tel:793675575">
              <FaMobileAlt />
            </a>
          </span>
          <span className="footer-info-social">
            <a href="https://www.facebook.com/profile.php?id=100002375926921">
              <FaFacebook />
            </a>
          </span>
          <span className="footer-info-social">
            <a href="https://github.com/aleksl1">
              <FaGithub />
            </a>
          </span>
          <span className="footer-info-social">
            <a href="https://www.linkedin.com/in/aleksander-s%C5%82awek-a1383622a/">
              <FaLinkedin />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
