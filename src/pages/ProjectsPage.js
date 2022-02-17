import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";

const ProjectsPage = () => {
  const [projectsData, setProjectsData] = useState([]);
  const getCurrentProjectsData = () => {
    fetch(
      "https://aslawekportfolio-default-rtdb.europe-west1.firebasedatabase.app/projects.json"
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
  };

  useEffect(() => {
    getCurrentProjectsData();
  }, []);

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
        <h1>My projects: </h1>
      </div>
      {allProjects}
    </div>
  );
};

export default ProjectsPage;
