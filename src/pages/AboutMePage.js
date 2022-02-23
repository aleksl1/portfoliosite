import { useContext } from "react";
import LangContext from "../store/lang-context";

const AboutMePage = () => {
  const contextLang = useContext(LangContext);

  const engAboutMe = (
    <div className="aboutMeInfo">
      <h4>Hello, I'm Aleks, a beginner front-end developer.</h4>

      <p>
        Starting in front-end, I got to know HTML, CSS and JavaScript. Right now
        I am focused mostly on React and on getting better, more in depth
        understanding of pure JavaScript.
      </p>
      <p>
        I also plan to keep learning new stuff and reinforce what I have already
        learned,and the best way to do it is by writing code every day :)
      </p>
      <p>
        I'm looking for a job or a project where I can learn more about
        commercial side of building websites and learn from more experienced
        developers.
      </p>
    </div>
  );

  const polAboutMe = (
    <div className="aboutMeInfo">
      <h4>Cześć, jestem Aleks - początkujący front-end developer</h4>

      <p>
        Znam główne technologie front-end: HTMLa CSS i JavaScript, aktualnie
        skupiam się na React'cie oraz jeszcze lepszym zrozumieniu wszystkich
        tajników JavaScriptu
      </p>
      <p>
        Planuję kontynuować naukę nowych technologii związanych z frontendem
        oraz umacnianie już zdobytej wiedzy, uważam, że najlepszym sposobem na
        to jest po prostu pisanie kodu każdego dnia :)
      </p>
      <p>
        Dlatego szukam pierwszej pracy lub możliwości udziału w projekcie gdzie
        będę mógł lepiej poznać komercyjne praktyki frontendowe oraz uczyć się
        od bardziej zaawansowanych developerów.
      </p>
    </div>
  );

  return (
    <div className="about-me page-wrap">
      {contextLang.inEnglish ? engAboutMe : polAboutMe}
    </div>
  );
};

export default AboutMePage;
