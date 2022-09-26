function Projects(){
    return (
        <div className="job-exp-div" id="projects">
            <h1 className="tit"><b className="number_heading">03.</b> Projects</h1>
            <hr className="header-line"/>
            <h3>Here are some of my best projects. Check them out</h3>
            <section className="project-section">
                <article onClick={()=> {window.location.href = "https://mad4feltre.netlify.app/"}} className="project" id="mad4">
                    <h2><b className="number_heading">Mad4 Science</b></h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" fill="#61f7d4" className="bi bi-cloud" viewBox="0 0 16 16"> <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" fill="#61f7d4"></path> </svg>
                    <p>Pollution's level tracker ( Fullstack application )</p>
                </article>

                <article onClick={()=> {window.location.href = "https://github.com/MatteoPossamai/moondev.env"}} className="project" id="mad4">
                    <h2><b className="number_heading">moondev.env</b></h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16"> <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" fill="#61f7d4"></path> </svg>
                    <p>Collaborative online enviroment for developers ( Fullstack application )</p>
                </article>

                <article onClick={()=> {window.location.href = "https://github.com/MatteoPossamai/Referendum"}} className="project" id="mad4">
                    <h2><b className="number_heading">Referendum</b></h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" fill="currentColor" className="bi bi-box" viewBox="0 0 16 16"> <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" fill="#61f7d4"></path> </svg>
                    <p>Simple social for voting and asking question with only tow possible answers</p>
                </article>
            </section>
        </div>
    )
}

export default Projects;