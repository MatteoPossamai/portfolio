import jobs from "../data/jobs.json";

function JobExperience() {
  return (
    <section className="job-exp-div" id="job">
      <h1 className="tit"><b className="number_heading">02.</b> Job Experience</h1>
      <hr className="header-line"/>
      <div className="job-ctn">

        {jobs["jobs"].map((job) => {
          let tasks = job["tasks"];
          return <section className="workCard" id={job["id"]}>
                    <h2><b className="number_heading">{job['job-role']}</b></h2>
                    <h2>Company: <a href={job["company-website"]}>{job['company']}</a></h2>
                    <p className="jobDate">{job["working-period"]}</p>
                    <ul className="jobDesc">
                      {tasks.map((task) => {
                        return <li><span>{task}</span></li>
                      })} 
                    </ul>
                  </section>     
        })}
      </div>
    </section>
  );
}

export default JobExperience;