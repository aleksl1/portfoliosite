import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error page-wrap">
      <p>
        Hello, this page doesnt exist. Click <Link to="/">here</Link> to return
        to home page.
      </p>
    </div>
  );
};

export default ErrorPage;
