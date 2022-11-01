import React, { Dispatch, SetStateAction, useEffect } from "react"; 

function Header() {
    const [isOnTop, setIsOnTop] : [boolean, Dispatch<SetStateAction<boolean>>] = React.useState(true);
    const [isSticky, setIsSticky] : [boolean, Dispatch<SetStateAction<boolean>>] = React.useState(false);
    const [scrollY, setScrollY] : [number, Dispatch<SetStateAction<number>>]= React.useState(0);
    const [agileClasses, setAgileClasses] : [string, Dispatch<SetStateAction<string>>] = React.useState("header");

    const [openMenu, setOpenMenu] : [boolean, Dispatch<SetStateAction<boolean>>] = React.useState(true);

    window.onscroll = () => {
        if(scrollY < window.scrollY){
            setIsSticky(false);
        } else {
            setIsSticky(true);
        }
        setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", () => {
        setIsOnTop(window.scrollY === 0);
    });

    useEffect(() => {
        let classes: string = "header";

        if (!isOnTop){
            classes += " shadowed";
        }
        if (isSticky){
            classes += " sticky";
        }
        setAgileClasses(classes);

    }, [isOnTop, isSticky]);

    return (
        <>
            <div className={agileClasses}>

                <img src="logo.png" alt="logo" className="header-image"/>

                <a href="https://ik.imagekit.io/matteopossamai/MatteoPossamai_CV_Iy1zQ4U1P.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1667325958995" className="resume-button">Resume</a>
                
                <div className="header-text">
                    <a href="#about" className="header-button"><p className="number">01. </p> About</a>
                    <a href="#job" className="header-button"><p className="number">02. </p> Job experience</a>
                    <a href="#projects" className="header-button"><p className="number">03. </p> Projects</a>
                    <a href="#os" className="header-button"><p className="number">04. </p> Open Source</a>
                    <a href="#contact" className="header-button"><p className="number">05. </p> Contact</a>
                </div>
                
                <svg className="hamburger" viewBox="0 0 100 80" width="40" height="40" onClick={() => {setOpenMenu(!openMenu)}}>
                    <rect width="100" height="20" rx="10" className={openMenu ? "visible":"invisible"}></rect>
                    <rect y="35" width="100" height="20" rx="10" className={"visible"} id={openMenu ? "" :"right"}></rect>
                    <rect y="70" width="100" height="20" rx="10" className={openMenu ? "visible":"invisible"}></rect>
                    <rect y="35" width="100" height="20" rx="10" className={openMenu ? "invisible":"visible"} id={openMenu ? "" :"left"}></rect>
                </svg>
                
            </div>

            <div className={openMenu ? "close" : "open"}>
                <div className="menu-text">
                    <h1 className="menuhead">  Menu</h1>
                    <a href="#about" onClick={() =>{setOpenMenu(!openMenu)}} className="menu-button"><p className="number">01. </p> About</a>
                    <a href="#job" onClick={() =>{setOpenMenu(!openMenu)}} className="menu-button"><p className="number">02. </p> Job experience</a>
                    <a href="#projects" onClick={() =>{setOpenMenu(!openMenu)}} className="menu-button"><p className="number">03. </p> Projects</a>
                    <a href="#os" onClick={() =>{setOpenMenu(!openMenu)}} className="menu-button"><p className="number">04. </p> Open Source</a>
                    <a href="#contact" onClick={() =>{setOpenMenu(!openMenu)}} className="menu-button"><p className="number">05. </p> Contact</a>
                    <a href="https://ik.imagekit.io/matteopossamai/MatteoPossamai_CV_Iy1zQ4U1P.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1667325958995" className="menu-button rsm">Resume</a>
                </div>
            </div>
        </>
    );
}

export default Header;
