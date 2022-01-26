import React from "react";

const LangContext = React.createContext({
  inEnglish: true,
  changeLang: () => {},
});

export default LangContext;
