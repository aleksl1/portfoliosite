import reactLogo from "../assets/react-logo-icon.png";
import centerImage from "../assets/center.png";
import developerImage from "../assets/developer.png";
import SelectLang from "../components/SelectLang";
import { useContext } from "react";
import LangContext from "../store/lang-context";

const HomePage = () => {
  const contextLang = useContext(LangContext);
  return (
    <>
      <SelectLang />
      <div className="home page-wrap">
        <div className="page-container">
          <div className="home-introduction">
            {contextLang.inEnglish && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                porro maiores praesentium sint cum nobis ratione, asperiores
                quidem quibusdam dicta repudiandae in tenetur voluptas fuga
                blanditiis, velit sequi, hic ipsum!
              </p>
            )}
            {!contextLang.inEnglish && (
              <p>
                PO POLSKU PO POLSKU PO POLSKU PO POLSKU PO POLSKU PO POLSKU PO
                POLSKU PO POLSKU{" "}
              </p>
            )}
          </div>
          <div className="img-container">
            <img src={developerImage} alt="web developer" />
          </div>
        </div>
      </div>
      {/* <div className="home page-wrap desktop">
        <p className="word-animate-clear">Clear</p>
        <p className="word-animate-easy">Easy to Use</p>
        <p className="word-animate-functional">Functional</p>
        <p className="word-animate-responsive">Responsive</p>
        <p className="word-animate-slogan">Websites</p>
        <div className="animation-center">
          <img src={centerImage} alt="hands on keyboard in front of a screen" />
        </div>
        <div className="react-logo">
          <img src={reactLogo} alt="react logo" />
        </div>
        <div className="js-logo">Js</div>
        <div className="css-logo">Css</div>
        <div className="html-logo">Html</div>
      </div> */}
    </>
  );
};

export default HomePage;
