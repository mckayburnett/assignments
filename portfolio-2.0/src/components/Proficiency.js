import React, { useState } from "react"
import {FaHtml5} from "react-icons/fa"
import {FaCss3Alt} from "react-icons/fa"
import {TbBrandJavascript} from "react-icons/tb"
import {FaReact} from "react-icons/fa"
import {FaNodeJs} from "react-icons/fa"
import {SiMongodb} from "react-icons/si"
import mongoose from "../images/mongoose.png"
import {SiExpress} from "react-icons/si"
import {FaGitAlt} from "react-icons/fa"
import GCharts from "../images/GCharts.png"




const Proficiency = React.forwardRef((props, ref) => {


    return (
        <div className="proficiencyWrapper" id="" ref={ref}>
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inspiration&display=swap" rel="stylesheet"></link>
            <div className="icons">
                <FaHtml5 className="html" />
                <FaCss3Alt className="css" />
                <TbBrandJavascript className="js"  />
                <FaReact className="react"  />
                <FaNodeJs className="node"  />
                <SiMongodb className="mongo"  />
                <img src={mongoose} className="pngIcon" id="mongoose" alt=""/>
                <SiExpress className="express"  />
                <FaGitAlt className="git"  />
                <img src={GCharts} className="pngIcon" id="gCharts" alt=""/>
            </div>
        </div>
        
    )
})

export default Proficiency