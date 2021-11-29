import { useState } from "react";
import { createJob } from "./request";

export const JobForm = (props) => {
  const [values, setValues] = useState({ title: "", description: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({...values,  [name]: value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const companyId = "SJV0-wdOM";
    const { title, description } = values;
    createJob({ companyId, title, description }).then((job) => {
      props.history.push(`/jobs/${job.id}`);
    });
  };

  const { title, description } = values;

  return (
    <div>
      <h1 className="title">New Job</h1>
      <div className="box">
        <form>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="input"
                style={{ height: "10em" }}
                name="description"
                value={description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" onClick={handleClick}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
