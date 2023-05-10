import React, { useEffect, useState, useRef } from "react"
import Home from "./components/Home.js"
import Proficiency from "./components/Proficiency.js"
import Nav from "./components/Nav.js"
import AboutMe from "./components/AboutMe.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"

export default function App (){

  const homeRef = useRef();
  const aboutRef = useRef();
  const proficiencyRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  

  return (
    <div className="appWrapper">
      <Nav homeRef={homeRef} aboutRef={aboutRef} proficiencyRef={proficiencyRef} projectsRef={projectsRef} contactRef={contactRef}/>
      <Home ref={homeRef} />
      <AboutMe ref={aboutRef} />
      <Proficiency ref={proficiencyRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  )
}