import React, { useEffect, useState, useRef } from "react"
import Home from "./components/Home.js"
import Proficiency from "./components/Proficiency.js"
import Nav from "./components/Nav.js"
import AboutMe from "./components/AboutMe.js"

export default function App (){

  const homeRef = useRef();
  const aboutRef = useRef();
  const profRef = useRef();
  

  return (
    <div clasName="appWrapper">
      < Nav homeRef={homeRef} aboutRef={aboutRef} profRef={profRef}/>
      < Home ref={homeRef}/>
      < AboutMe ref={aboutRef}/>
      < Proficiency ref={profRef} />
    </div>
  )
}