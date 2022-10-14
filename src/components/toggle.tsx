import {useState} from 'react';

function Toggle(props:any){
    const [isToggled, setToggle] = useState(false);

    const closed = <svg width="24" className='ti' height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill="#a8b2d1"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>;
    const opened = <svg width="24" className='ti' height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" fill="#a8b2d1"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>;

    return (
        <div className='toogleDiv'>
            <header onClick={() => setToggle(!isToggled)} className="toggleHeader">{props.header}
                {isToggled ? opened : closed}
            </header>
            <div className="toggleBody">{isToggled ? <p className='bodyIn'>{props.body}</p> : null}</div>
        </div>
    )
}

export default Toggle;