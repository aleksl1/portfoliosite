import reactLogo from "../assets/react-logo-icon.png";
import centerImage from "../assets/center.png";
import developerImage from "../assets/developer.png";
import { useContext } from "react";
import LangContext from "../store/lang-context";

const HomePage = () => {
  const contextLang = useContext(LangContext);
  return (
    <>
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
    </>
  );
};

export default HomePage;
