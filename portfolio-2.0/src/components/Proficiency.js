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
import { FaArrowRight } from 'react-icons/fa'


const Proficiency = React.forwardRef((props, ref) => {

    //cursor functions and state
    const [showText, setShowText] = useState(false)
    const [text, setText] = useState("")
    function enterIcon(e){
        setText(e.target.id)
        setShowText(true);
    }
    function leaveIcon(){
        setText("")
        setShowText(false)
    }

    //button
    function clickProjects(){
        window.scrollBy({
           left: window.innerWidth, 
           top: 0,
            behavior: "smooth"
          });
      }

    return (
        <div className="proficiencyWrapper" id="proficiency" ref={ref}>
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css?family=Inspiration&display=swap" rel="stylesheet"></link>
            <h1 className={showText ? `iconText` : `iconTextHidden`}>{text}</h1>
            <div className="icons-proficiency">
                <FaHtml5 className="html" id="HTML5" onMouseEnter={enterIcon} onMouseLeave={leaveIcon}/>
                <FaCss3Alt className="css" id="CSS3" onMouseEnter={enterIcon} onMouseLeave={leaveIcon}/>
                <TbBrandJavascript className="js" id="JavaScript" onMouseEnter={enterIcon} onMouseLeave={leaveIcon}/>
                <FaReact className="react" id="React JS" onMouseEnter={enterIcon} onMouseLeave={leaveIcon}/>
                <FaNodeJs className="node" id="Node.js" onMouseEnter={enterIcon} onMouseLeave={leaveIcon}/>
                <SiMongodb className="mongo" id="MongoDB" onMouseEnter={enterIcon} onMouseLeave={leaveIcon}/>
                <img src={mongoose} className="pngIcon" id="Mongoose" alt="" onMouseEnter={enterIcon} onMouseLeave={leaveIcon}/>
                <SiExpress className="express" id="Express" onMouseEnter={enterIcon} onMouseLeave={leaveIcon}/>
                <FaGitAlt className="git" id="Git" onMouseEnter={enterIcon} onMouseLeave={leaveIcon}/>
                <img src={GCharts} className="pngIcon" id="GoogleCharts" alt="" onMouseEnter={enterIcon} onMouseLeave={leaveIcon}/>
            </div>
            <button className="button-projects" onClick={clickProjects}>Projects <FaArrowRight className="arrow"/></button>
        </div>
        
    )
})

export default Proficiency