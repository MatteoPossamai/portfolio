import {useParams} from 'react-router-dom';
import FourOFour from './404';
import Toggle from './toggle';
import projects from "../data/projects.json";
import svg_component from '../data/svg';

function SingleProject(){
    const validIds = ['mytable','mad4', 'moondev', 'referendum', 'shape', 'portfolio'];

    const id = useParams<{id:string}>();
    
    const valor:any = id.id;
    let project = projects['projects'].filter((project) => project['id'] === valor)[0];
    let image = '/' + project['id'] + '.png';

    if (!validIds.includes(valor)){
        return (<FourOFour />)
    }
    return (
        <div className='code404'>
            <h1>{project['project-name']}</h1>
            <div className='topIcon'>{svg_component[project['id']]}</div>
            <div className='projectBody'>
                <img src={process.env.PUBLIC_URL + image} alt="project-img" className="projectImage" />
                <br />
                <p>Here is the project code: <a href={project['github']} className="projectLink">GitHub</a></p>
                {project['link'] ? <p>Here is the project site: <a href={project['link']} target="_blank" rel="noreferrer" className="projectLink">Link</a></p> : <p>This project is not hosted, but you can build it locally on your own machine from the GitHube repository</p>}
                
                <h2 style={{'color':'#61f7d4'}}>Here are all the informations reguarding the project itself</h2>
                {project['toggles'].map((toggle:any) => {
                    console.log(toggle)
                    return (
                        <Toggle header={toggle['header']} body={toggle['body']} />
                    )
                })}
            </div>
        </div>
    )
}

export default SingleProject;