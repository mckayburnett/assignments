import React from "react"
import Typewriter from "typewriter-effect"
import pic00 from "./images/pic00.png"

export default function App (){

  return (
    <div className="appWrap">        
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Inspiration&display=swap" rel="stylesheet"></link>
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
        <div className="typewriter">
          <Typewriter

            onInit={(typewriter) => {
              typewriter
              .typeString(`{ Hello! /}`)
              .pauseFor(1500)
              .deleteAll(20)

              .typeString("My name is <strong>MCKAY BURNETT</strong>")
              .pauseFor(1000)
              .deleteAll(10)

              .typeString("I'm a <strong>FULL-STACK DEVELOPER</strong> and...")
              .pauseFor(1000)
              .deleteAll(5)

              .typeString("This is my <strong>PORTFOLIO</strong>")
              .start();
            }}
          />
        </div>
      </body>
    </div>
  )
}