import React, { useState, useEffect } from "react"
import projectData from "../projectData.js"
import { FaAngleDoubleRight } from "react-icons/fa"
import { FaAngleDoubleLeft } from "react-icons/fa"
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

const Projects = React.forwardRef((props, ref) => {

    const templates = []
    const titles = [
        "Dynamic Development",
        "Jeopardy",
        "Bounty Hunter",
        "Meme Generator",
        "Simulation RPG",
        "Gradient Code Generator",
        "Vacation Spots",
        "Travel Journal",
        "CSS Zen Garden",
    ]

    //choose single or all projects view
    const [view, setView] = useState(false)

    //arrows
    const [num, setNum] = useState(0);
    function right(){
        { num < 8 &&   
            setNum(num + 1)
            console.log(num)
        }
    }
    function left(){
        { num > 0 &&    
            setNum(num - 1)
            console.log(num)
        }
    }

    //clicking Alltemplates
    function handleClick(e){
        setNum(e.target.alt)
        setView(false)
        window.scrollTo({
            top: 0, 
            behavior: 'auto'
        })
    }

    //clicking see project details
    const [details, setDetails] = useState(false)
    function seeDetails(){
        setDetails(true)
    }

    //templates
    const projectTemplate = projectData.map(project => {
        templates.push(project)
        return(
            <div className="templateWrapper">
                { details ? 
                <div className="template-details">
                    <div className="templateSpot-details">
                        <div className="templateImage-details" style={{background: `url(${templates[num]?.image})`, backgroundSize: `100%`, opacity: num < 4 ? "1%" : num >= 4 && num < 7 ? "3%" : num === 7 ? "5%" : "10%", width: "50vw", height: "80vh", border: "none"}}>
                        </div>
                    </div>
                    <div className="templateSpot-details">
                        <div className="details">
                            <h3 className="description-details"><h2 className="description">Description</h2> {templates[num]?.description}</h3>
                            <h3 className="keyPoints-details" style = {{ whiteSpace: 'pre-line'}}><h2 className="keyPoints">Key Points</h2> {templates[num]?.keyPoints}</h3>
                            <h3 className="skills-details"><h2 className="skillsUsed">Skills Used</h2> {templates[num]?.skillsUsed} </h3>
                            <button className="backButton-details" onClick={() => setDetails(false)}>Back</button>
                        </div>
                    </div>
                </div>
                :
                <div className="template">
                    <div className="templateSpot">
                        <img className="templateImage" src={templates[num]?.image} alt="" />
                        <button className="seeDetails" onClick={seeDetails}>See Project Details</button>
                    </div>
                </div>
                }
            </div>
        )
    })
    //templates view all
    const allTemplates = projectData.map(project => {
        return(
             <div className="allTemplatesWrapper">
                <img className="allTemplatesImage"src={project.image} alt={project.id} onClick={handleClick} />
            </div>
        )
    })
    
    return (
        <>
            {view ? 
            <div className="projectsWrapper" id="projects" ref={ref}>
                <button className="viewSingle" onClick={() => setView(false)}>View Single Project</button>
                { allTemplates }
            </div>
            :
            <div className="projectsWrapper" id="projects" ref={ref}>
            <div className="titlesWrapper">
                <div className="titles-arrows">
                    <h1 className="titles">{titles[num]}</h1>
                    <div className="projectsArrows">
                        <FaAngleDoubleLeft onClick={left} className="projectsArrow-left"/> <FaAngleDoubleRight onClick={right}className="projectsArrow-right"/>
                    </div>
                </div>
                <button className="viewAll" onClick={() => setView(true)}>View All</button>
            </div>
            { projectTemplate }
        </div>
            }
        </>
    )

})

export default Projects