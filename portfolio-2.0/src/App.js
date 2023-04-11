import React from "react"


export default function App (){

  return (
    <div className="appWrap">        
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
      <nav className="nav">
        <h1>Top</h1>
        <h1>Proficiency</h1>
        <h1>Portfolio</h1>
        <h1>Contact</h1>
      </nav>
      <body>
        <h1 className="test anim-typewriter">{ `{ Hello. I'm `}<strong>McKay Burnett</strong>{`, a Full-Stack Developer, and this is my PORTFOLIO. }`}</h1>
      </body>
    </div>
  )
}