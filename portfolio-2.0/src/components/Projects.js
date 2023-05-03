import React, { useState, useEffect } from "react"
import projectData from "../projectData.js"
import { FaAngleDoubleRight } from "react-icons/fa"
import { FaAngleDoubleLeft } from "react-icons/fa"

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
    //arrows
    const [num, setNum] = useState(7);
    function add(){
        
    }

    const projectTemplate = projectData.map(project => {
        console.log("project",project)
        templates.push(project)
        console.log("templates", templates[0])
        return(
            <div className="templateWrapper">
                <div className="template">
                    <img className="templateImage"src={templates[num]?.image} alt="" />
                </div>
            </div>
        )
    })
    
    return (
        <div className="projectsWrapper" id="projects" ref={ref}>
            <div className="titlesWrapper">
                <div className="titles-arrows">
                    <h1 className="titles">{titles[num]}</h1>
                    <div className="projectsArrows">
                        <FaAngleDoubleLeft onClick={() => {setNum(num - 1)}} className="projectsArrow-left"/> <FaAngleDoubleRight onClick={() => {setNum(num + 1)}}className="projectsArrow-right"/>
                    </div>
                </div>
            </div>
            {projectTemplate}
        </div>
    )

})

export default Projects