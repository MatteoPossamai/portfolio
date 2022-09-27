import {useParams} from 'react-router-dom';
import FourOFour from './404';


function SingleProject(){
    const validIds = ['mad4science', 'moondev', 'referendum', 'portfolio'];

    const id = useParams<{id:string}>();
    const valor:any = id.id;
    if (!validIds.includes(valor)){
        return (<FourOFour />)
    }
    return (
        <div className='code404'>
            <h1>{valor}</h1>
        </div>
    )
}

export default SingleProject;