function AboutPage() {
    return (
        <section className="about-section" id="about">
            <header className="about-header">
                <h1 className=""><b className="number_heading">01.</b> About</h1>
                <hr className="header-line"/>
            </header>
            <div>
            <p className="long-description bold">Hi, my name is Matteo. I started
                                                programming and developing my own code in 2018, when I
                                                fall in love with static website creation in
                                                HTML / CSS / Javascript.  </p>

            <p className="long-description bold">Then I moved to backend development, and I made an
                                                internship as Backend Engineer in <a href="https://zwap.in/">ZWAP.in</a>, 
                                                where I developed, maintained and tested their 
                                                backend system in Django. while currently I am enrolled in my 
                                                Computer Science degree, trying to become a much better developer. </p>

            <p className="long-description bold">Here there are the most important technologies I worked 
                                                with recently and I am the most confident with:</p>
            <div className="techs">
                <ul className="tech-list">
                    <li><span>Python and Django</span></li>
                    <li><span>Javascript (ES6 +)</span></li>
                    <li><span>Node.Js</span></li>
                </ul>
                <ul className="tech-list">
                    <li><span>React</span></li>
                    <li><span>Golang</span></li>
                    <li><span>C++</span></li>
                </ul>
            </div>
            </div>
            <img src="logo.png" alt="logo" className="logo-img"/>
        </section>
    );
    }

export default AboutPage;