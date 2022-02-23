import myPhoto from "../assets/zdjcv-removebg.png";
import { useContext } from "react";
import LangContext from "../store/lang-context";
import { Link } from "react-router-dom";

const HomePage = () => {
  const contextLang = useContext(LangContext);

  const engIntro = (
    <div className="intro-container">
      <h1 className="intro-title">Hi, my name is Aleks.</h1>
      <ul className="intro-list">
        <li className="intro-item">
          See my{" "}
          <Link className="intro-link" to="projects">
            projects
          </Link>
        </li>
        <li className="intro-item">
          Read more{" "}
          <Link className="intro-link" to="about">
            about me
          </Link>
        </li>
        <li className="intro-item">
          <Link className="intro-link" to="contact">
            Contact me
          </Link>
        </li>
      </ul>
    </div>
  );

  const plIntro = (
    <div className="intro-container">
      <h1 className="intro-title">Cześć, mam na imię Aleks</h1>
      <ul className="intro-list">
        <li className="intro-item">
          Przejrzyj moje{" "}
          <Link className="intro-link" to="projects">
            projekty
          </Link>
        </li>
        <li className="intro-item">
          Dowiedz się więcej{" "}
          <Link className="intro-link" to="about">
            o mnie
          </Link>
        </li>
        <li className="intro-item">
          <Link className="intro-link" to="contact">
            Skontaktuj się ze mną
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <div className="home page-wrap">
        <div className="page-container">
          <div className="home-introduction">
            {contextLang.inEnglish ? engIntro : plIntro}
          </div>
          <div className="img-container">
            <img src={myPhoto} alt="web developer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
