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
                <div>
                    <FaHtml5 className="html" />
                    <p className="htmlText">HTML5</p>
                </div> 
                <div>
                    <FaCss3Alt className="css" />
                    <p className="cssText">CSS3</p>
                </div>    
                <div>
                    <TbBrandJavascript className="js" />

                <div></div>
                    <p className="jsText">JavaScript</p>
                    <FaReact className="react"  />
                    <p className="reactText">ReactJS</p>
                    <FaNodeJs className="node"  />
                    <p className="nodeText">Node.js</p>
                    <SiMongodb className="mongo"  />
                    <p className="mongoText">MongoDB</p>
                    <img src={mongoose} className="pngIcon" id="mongoose" alt=""/>
                    <p className="mongooseText">Mongoose</p>
                    <SiExpress className="express"  />
                    <p className="expressText">Express</p>
                    <FaGitAlt className="git"  />
                    <p className="gitText">Git</p>
                    <img src={GCharts} className="pngIcon" id="gCharts" alt=""/>
                    <p className="gChartsText">Google Charts</p>
            </div>
        </div>
        
    )
})

export default Proficiency