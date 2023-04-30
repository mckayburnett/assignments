import React, { useState, useEffect } from "react"
import dynamicDevelopmentLLC from "../../images/dynamicDevelopmentLLC.png"
import jeopardy from "../../images/jeopardy.png"
import bountyHunter from "../../images/bountyHunter.png"
import memeGenerator from "../../images/memeGenerator.png"
import simulationRPG from "../../images/simulationRPG.png"
import gradientCodeGenerator from "../../images/gradientCodeGenerator.png"
import vacationSpots from "../../images/vacationSpots.png"
import travelJournal from "../../images/travelJournal.png"
import cssZenGarden from "../../images/cssZenGarden.png"


export default function ProjectExample(){


    return(
        <>
        <img src={dynamicDevelopmentLLC} alt="" className="dDLLC"></img>
        <img src={jeopardy} alt="" className="jeopardy"></img>
        <img src={bountyHunter} alt="" className="bountyHunter"></img>
        <img src={memeGenerator} alt="" className="memeGenerator"></img>
        <img src={simulationRPG} alt="" className="simulationRPG"></img>
        <img src={gradientCodeGenerator} alt="" className="gradientCodeGenerator"></img>
        <img src={vacationSpots} alt="" className="vacationSpots"></img>
        <img src={travelJournal} alt="" className="travelJournal"></img>
        <img src={cssZenGarden} alt="" className="cssZenGarden"></img>
        </>
    )
}