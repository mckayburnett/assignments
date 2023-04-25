import React, { useState } from "react"

export default function Nav(){

    const aboutPage = () => document.getElementById('aboutPage');
    

    return (
        <div className="navWrapper">
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inspiration&display=swap" rel="stylesheet"></link>
            <nav className="nav">
                <h1 className="logo">McKay Burnett</h1>
                <div className="nav-links">
                    <h1 className="nav-beginning">Beginning</h1>
                    <h1 className="nav-about">About</h1>
                    <h1 className="nav-proficiency">Proficiency</h1>
                    <h1 className="nav-portfolio">Portfolio</h1>
                    <h1 className="nav-contact">Contact</h1>
                </div>
            </nav>
        </div>

    )
}