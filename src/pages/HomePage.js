import reactLogo from "../assets/react-logo-icon.png";
import centerImage from "../assets/center.png";

const HomePage = () => {
  return (
    <>
      <div className="home page-wrap desktop">
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
      </div>
    </>
  );
};

export default HomePage;
