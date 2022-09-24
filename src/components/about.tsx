function AboutPage() {
    return (
        <div className="about-section" id="about">
            <header className="about-header">
                <h1 className="">01. About</h1>
                <hr className="header-line"/>
            </header>
            <p className="long-description bold">Hi, my name is Matteo and I like to program and develop solutions <br />
            for the web and not only. I started programming and developing my <br /> 
            own code in 2018, when I fall in love with static website creation <br />
            in HTML / CSS / Javascript.  </p>
            <p className="long-description bold">Then I moved to backend development, and I made an internship as <br />
            Backend Engineer in <a href="https://zwap.in/">ZWAP.in</a>, where I developed,  <br />
            maintained and tested their backend system in Django. </p>
            <p className="long-description bold">Currently I am enrolled in my Computer Science degree, trying to  <br />
            become a much better developer. </p>
            <p className="long-description bold">Here there are the most important technologies I worked with recently<br />
            and I am more confident with:</p>
            <div className="techs">
                <ul>
                    <li>Python with Django</li>
                    <li>Javascript (ES6 +)</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>Golang</li>
                    <li>C++</li>
                </ul>
            </div>
        </div>
    );
    }

export default AboutPage;