const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-name">
        <h3>{props.name}</h3>
      </div>
      <div className="project-stack">{props.stack}</div>
      <div className="project-details">
        <p>{props.details}</p>
      </div>
      <div className="project-links">
        <p>
          <span>Live:</span> <a href={props.live}>{props.live}</a>
        </p>
        <p>
          <span>GitHub:</span> <a href={props.github}>{props.github}</a>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
