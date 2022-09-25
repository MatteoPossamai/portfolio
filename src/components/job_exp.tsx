function JobExperience() {
  return (
    <section className="job-exp-div" id="job">
      <h1 className="tit"><b className="number_heading">02.</b> Job Experience</h1>
      <hr className="header-line"/>
      <div>
      <section className="workCard" id="zwap">
        <h2><b className="number_heading">Software Engineer Intern </b></h2>
        <h2>Company: <a href="https://zwap.in/">Zwap.in</a></h2>
        <p className="jobDate">June 2022 - September 2022</p>
        <ul className="jobDesc">
            <li>
                <span>Worked on the backend refactor of the backend service improving
                performance by 83%
                </span>
            </li>
            <li>
                <span>Tested the new platform writing all the automated tests, 
                finding and resolving more than 95% of known bugs and errors
                </span>
            </li>
            <li>
                <span>
                Improved quality and simplicity of work of non-tech collegues, 
                developing no code solutions to retrive data and making automated 
                routines and database queries.  
                </span>
            </li>    
        </ul>
      </section>
      <section className="workCard" id="MamixSRL">
        <h2><b className="number_heading">Frontend Developer Intern </b></h2>
        <h2>Company: <a href="https://mamix.it/">Mamix SRL</a></h2>
        <p className="jobDate">May 2021 - June 2021</p>
        <ul className="jobDesc">
            <li>
                <span>Mainly worked on the maintaniment of the frontend of the company
                    website and a costumer one, improving performance of them by 12%
                </span>
            </li>
            <li>
                <span>Improved by 5% the number of visitor per month in both sites with 
                    SEO
                </span>
            </li>
        </ul>
      </section>
      </div>
    </section>
  );
}

export default JobExperience;