import React from "react";

const LangContext = React.createContext({
  inEnglish: false,
  changeLang: () => {},
});

export default LangContext;
