import React from "react";
import style from './Nav.module.css';


function Nav() {
    return (
        <div className={style.nav}>
            <a href="Home">Home</a>
            <a href="Skills">Skills</a>
            <a href="Projects">Projects</a>
            <a href="Contact">Contact</a>
        </div>
    );
}

export default Nav;
