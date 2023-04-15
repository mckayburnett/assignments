import React, { useEffect, useState } from "react"
import Home from "./components/Home.js"
import AboutMe from "./components/AboutMe.js"

export default function App (){
  return (
    <div clasName="appWrapper">
      < Home />
      < AboutMe />
    </div>
  )
}