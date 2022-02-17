import { useState } from "react";
import CVPage from "./CVPage";
const AboutMePage = () => {
  const [showCV, setShowCV] = useState(false);

  const showCVHandler = () => {
    setShowCV((prevState) => !prevState);
  };
  return (
    <div className="about-me page-wrap">
      <div>
        <button className="btn" onClick={showCVHandler}>
          {showCV ? "Show introduction" : "Show CV"}
        </button>
      </div>
      {showCV ? (
        <CVPage />
      ) : (
        <div>
          <p>
            Hello, I'm Aleks, a beginner front-end developer, currently in
            process of improving what I have already learned and getting to know
            more, new, front-end related technologies , check out my projects or
            read more about me
          </p>
          <p>
            Starting in front-end, I got to know HTML, CSS and JavaScript. Right
            now I am focused mostly on React and on getting better understanding
            of pure JavaScript. Get more details on what I know( or what I think
            i know) here about me
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutMePage;
