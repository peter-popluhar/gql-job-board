import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadJob } from "./request";

export const JobDetail = (props) => {
  const [job, setJob] = useState();

  useEffect(() => {
    const {jobId} = props.match.params
    async function fetchData() {
      const data = await loadJob(jobId);
      setJob(data);
    }
    fetchData();
  }, [props.match.params]);

  return (
    <div>
      {job && (
        <>
          <h1 className="title">{job.title}</h1>
          <h2 className="subtitle">
            <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
          </h2>
          <div className="box">{job.description}</div>
        </>
      )}
    </div>
  );
};
