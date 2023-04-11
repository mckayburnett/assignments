import React from "react"
import pic00 from "./images/pic00.png"

export default function App (){

  return (
    <div className="appWrap">        
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
      <nav className="nav">
        <h1 className="logo">McKay Burnett</h1>
        <div className="nav-links">
          <h1>Top</h1>
          <h1>Proficiency</h1>
          <h1>Portfolio</h1>
          <h1>Contact</h1>
        </div>
      </nav>
      <body>
        <img className="me" src={pic00} alt="" />
        <h1 className="intro anim-typewriter">{ `Hello. I'm `}<strong>MCKAY BURNETT,</strong></h1>
        <h1 className="intro-2 anim-typewriter">{` a Full-Stack Developer, and this is my PORTFOLIO." `}</h1>
      </body>
    </div>
  )
}