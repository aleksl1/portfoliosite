import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";
import { useContext } from "react";
import LangContext from "../store/lang-context";

const ProjectsPage = () => {
  const [projectsData, setProjectsData] = useState([]);
  const contextLang = useContext(LangContext);
  const projectsFile = contextLang.inEnglish
    ? "projectseng.json"
    : "projectspl.json";

  useEffect(() => {
    fetch(
      `https://aslawekportfolio-default-rtdb.europe-west1.firebasedatabase.app/${projectsFile}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("cant read projects database");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setProjectsData([...data]);
      });
  }, [projectsFile]);

  const allProjects = projectsData.map((project) => (
    <ProjectCard
      name={project.name}
      stack={project.stack}
      details={project.details}
      live={project.live}
      github={project.github}
      key={project.live}
    />
  ));

  return (
    <div className="projects page-wrap">
      <div className="projects-header">
        <h1>{contextLang.inEnglish ? "My projects:" : "Projekty: "}</h1>
      </div>
      {allProjects}
    </div>
  );
};

export default ProjectsPage;
