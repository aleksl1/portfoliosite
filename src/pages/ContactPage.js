import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="contact page-wrap">
      <div className="contact-info">
        <span>
          <a href="https://github.com/aleksl1?tab=repositories">GitHub</a>
        </span>
        <span>
          <a href="https://www.linkedin.com/feed/">LinkedIn</a>
        </span>
        <span>
          <a href="mailto:aleksander.slawek1@gmail.com">Email</a>
        </span>
        <span>793 675 575</span>
        <span>Messenger</span>
      </div>
    </div>
  );
};

export default ContactPage;
