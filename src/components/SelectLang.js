import { useContext } from "react";
import LangContext from "../store/lang-context";
import flagPL from "../assets/poland.png";
import flagUK from "../assets/united-kingdom.png";

const SelectLang = () => {
  const contextData = useContext(LangContext);
  return (
    <div className="select-lang">
      {contextData.inEnglish ? (
        <span onClick={contextData.changeLang}>
          <img src={flagPL} alt="Polish Flag" />
        </span>
      ) : (
        <span onClick={contextData.changeLang}>
          <img src={flagUK} alt="British Flag" />
        </span>
      )}
    </div>
  );
};

export default SelectLang;
