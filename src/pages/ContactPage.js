import { useContext } from "react";
import LangContext from "../store/lang-context";
import { FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
  const contextLang = useContext(LangContext);
  return (
    <div className="contact">
      <div className="contact-info">
        <span>
          <h2>
            {contextLang.inEnglish
              ? "Get in touch with me:"
              : "Dane kontaktowe: "}
          </h2>
        </span>
        <span className="contact-phone">
          <FaPhoneAlt /> 793 675 575
        </span>
        <span>
          <a href="mailto:aleksander.slawek1@gmail.com">
            aleksander.slawek1@gmail.com
          </a>
        </span>
      </div>
      <div className="contact-form-wrap">
        <div className="form-header">
          {contextLang.inEnglish
            ? "Do you have any feedback for me?"
            : "Masz uwagi, porady, pytania? Napisz do mnie"}
        </div>
        {contextLang.inEnglish ? (
          <form
            className="contact-form"
            action="https://formsubmit.co/f966a50b91262a167f725854a82927c8"
            method="POST"
          >
            {/* <input type="text" name="name" required placeholder="Name" /> */}
            <textarea
              autoFocus
              name="message"
              id=""
              cols="20"
              rows="5"
            ></textarea>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
            />
            <input
              type="hidden"
              name="_next"
              value={window.location.href}
            ></input>
            <button type="submit">Message me!</button>
          </form>
        ) : (
          <form
            className="contact-form"
            action="https://formsubmit.co/f966a50b91262a167f725854a82927c8"
            method="POST"
          >
            {/* <input type="text" name="name" required placeholder="Imię" /> */}
            <textarea
              autoFocus
              name="message"
              id=""
              cols="20"
              rows="5"
            ></textarea>
            <input
              type="email"
              name="email"
              required
              placeholder="Twój Email"
            />
            <input
              type="hidden"
              name="_next"
              value={window.location.href}
            ></input>
            <button type="submit">Wyślij wiadomość!</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
