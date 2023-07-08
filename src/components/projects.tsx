import { useNavigate } from 'react-router-dom';
import projects from "../data/projects.json";
import svg_component from '../data/svg';

function Projects(){
    let navigate = useNavigate();

    let navigation = (e: any, position: string) => {
        e.preventDefault();
        navigate(position);
    }

    return (
        <div className="job-exp-div" id="projects">
            <h1 className="tit"><b className="number_heading">03.</b> Projects</h1>
            <hr className="header-line"/>
            <h3>Here are some of my best projects. Check them out</h3>
            <section className="project-section">
                {projects['projects'].map((current_project)=>{
                    let id: string = current_project['id'];
                    return <article onClick={(e) => navigation(e, current_project["path"])} className="project" id={`${current_project["id"]}`}>
                                <h2><b className="number_heading">{current_project["project-name"]}</b></h2>
                                {svg_component[id]}
                                <p>{current_project["short-desc"]}</p>
                            </article>;
                })}
            </section>
        </div>
    )
}

export default Projects;