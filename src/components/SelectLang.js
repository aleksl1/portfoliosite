import { useContext } from "react";
import LangContext from "../store/lang-context";

const SelectLang = () => {
  const contextData = useContext(LangContext);
  return (
    <div className="select-lang">
      {contextData.inEnglish ? (
        <span onClick={contextData.changeLang}>PL</span>
      ) : (
        <span onClick={contextData.changeLang}>ENG</span>
      )}
    </div>
  );
};

export default SelectLang;
