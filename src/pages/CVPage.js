import devImg from "../assets/developer.png";

const CVPage = () => {
  return (
    <div className="cv-page">
      <div className="cv-header">
        <h5>Aleksander Sławek</h5>
        <span>Junior Front-end developer</span>
      </div>
      <div className="cv-aside">
        <div className="cv-photo">
          <img src={devImg} alt="" />
        </div>
        <div className="cv-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          consequuntur inventore quisquam iste pariatur itaque modi deserunt
          quae atque harum?
        </div>
      </div>
      <div className="cv-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam
        quo consectetur, illo quos quas beatae, perspiciatis iste voluptates
        praesentium fugit voluptatem, necessitatibus magni quis nesciunt quae
        cumque in? Ad eveniet, incidunt ipsum quisquam adipisci voluptate nam
        autem odit, nihil asperiores at deserunt corporis cum, cupiditate
        placeat repellat dolores voluptatem!
      </div>
    </div>
  );
};

export default CVPage;
