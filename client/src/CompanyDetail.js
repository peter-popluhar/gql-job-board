import { useState, useEffect } from "react";
import { loadCompany } from "./request";
import { JobList } from "./JobList";

export const CompanyDetail = (props) => {
  const [company, setCompany] = useState({ company: null });

  useEffect(() => {
    const { companyId } = props.match.params;
    async function fetchData() {
      const data = await loadCompany(companyId);
      setCompany(data);
    }
    fetchData();

  }, [props.match.params]);
  
  return (
    <div>
      {company && (
        <>
          <h1 className="title">{company.name}</h1>
          <div className="box">{company.description}</div>
          <h5 className="title is-5">Jobs at {company.name}</h5>
          <JobList jobs={company.jobs} />
        </>
      )}
    </div>
  );
};
