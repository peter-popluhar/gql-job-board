import { Link } from "react-router-dom";

export const JobList = (props) => {
  const { jobs } = props;

  return (
    <ul className="box">
      {jobs && jobs.map(({id, title}) => (
        <li className="media" key={id}>
          <div className="media-content">
            <Link to={`/jobs/${id}`}>{title}</Link>
          </div>
        </li>
      ))}
    </ul>
  );
};
