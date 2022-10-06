import {useParams} from 'react-router-dom';
import FourOFour from './404';
import projects from "../data/projects.json";
import svg_component from '../data/svg';

function SingleProject(){
    const validIds = ['mad4', 'moondev', 'referendum'];

    const id = useParams<{id:string}>();
    
    const valor:any = id.id;
    let project = projects['projects'].filter((project) => project['id'] === valor)[0];
    let image = project['id'] + '.png';
    console.log(image)
    if (!validIds.includes(valor)){
        return (<FourOFour />)
    }
    return (
        <div className='code404'>
            <h1>{project['project-name']}</h1>
            <div className='topIcon'>{svg_component[project['id']]}</div>
            <img src={`${image}`} alt={project['project-name']} />
        </div>
    )
}

export default SingleProject;