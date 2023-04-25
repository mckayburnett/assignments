import React, { useEffect, useState } from "react"
import Home from "./components/Home.js"
import AboutMe from "./components/AboutMe.js"
import Proficiency from "./components/Proficiency.js"
import Nav from "./components/Nav.js"

export default function App (){
  return (
    <div clasName="appWrapper">
      < Nav />
      < Home id="homePage"/>
      < AboutMe id="aboutPage"/>
      < Proficiency id="proficiencyPage"/>
    </div>
  )
}