import React, { useState } from "react"

export default function Nav({ homeRef, aboutRef, proficiencyRef, projectsRef }){
    
const scrollIntoView = (ref) => {
    if (ref.current) {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
}
    return (
        <div className="navWrapper">
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inspiration&display=swap" rel="stylesheet"></link>
            <nav className="nav">
                <h1 className="logo">McKay Burnett</h1>
                <div className="nav-links">
                    <h1 className="nav-beginning" onClick={() => {scrollIntoView(homeRef)}}>Home</h1>
                    <h1 className="nav-about" onClick={() => {scrollIntoView(aboutRef)}}>About</h1>
                    <h1 className="nav-proficiency" onClick={() => {scrollIntoView(proficiencyRef)}}>Proficiency</h1>
                    <h1 className="nav-portfolio" onClick={() => {scrollIntoView(projectsRef)}}>Projects</h1>
                    <h1 className="nav-contact">Contact</h1>
                </div>
            </nav>
        </div>

    )
}