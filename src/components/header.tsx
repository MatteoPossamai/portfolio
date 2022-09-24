import React, { Dispatch, SetStateAction, useEffect } from "react"; 

function Header() {
    const [isOnTop, setIsOnTop] : [boolean, Dispatch<SetStateAction<boolean>>] = React.useState(true);
    const [isSticky, setIsSticky] : [boolean, Dispatch<SetStateAction<boolean>>] = React.useState(false);
    const [scrollY, setScrollY] : [number, Dispatch<SetStateAction<number>>]= React.useState(0);
    const [agileClasses, setAgileClasses] : [string, Dispatch<SetStateAction<string>>] = React.useState("header");

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
        <div className={agileClasses}>

            <a href="/" className="resume-button">Resume</a>
            
            <div className="header-text">
                <a href="#about" className="header-button"><p className="number">01. </p> About</a>
                <a href="/" className="header-button"><p className="number">02. </p> Job experience</a>
                <a href="/" className="header-button"><p className="number">03. </p> Projects</a>
                <a href="/" className="header-button"><p className="number">04. </p> Contact</a>
            </div>
        </div>
    );
    }

export default Header;
