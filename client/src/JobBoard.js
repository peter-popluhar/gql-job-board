import { useState, useEffect } from "react";
import { JobList } from "./JobList";
import { loadJobs } from "./request";

export const JobBoard = () => {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await loadJobs();
      setJobs(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="title">Job Board</h1>
      {jobs && <JobList jobs={jobs} />}
    </div>
  );
};
