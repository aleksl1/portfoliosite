import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import LangContext from "./store/lang-context";
import SelectLang from "./components/SelectLang";
function App() {
  const [isInEnglish, setIsInEnglish] = useState(true);
  const changeLangHandler = () => {
    setIsInEnglish((prevState) => !prevState);
  };

  return (
    <LangContext.Provider
      value={{ inEnglish: isInEnglish, changeLang: changeLangHandler }}
    >
      <div className="background-effects">
        <div className="wrapper">
          <SelectLang />
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="about" element={<AboutMePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </LangContext.Provider>
  );
}

export default App;
