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
    const [view, setView] = useState(false)
    //arrows
    const [num, setNum] = useState(7);
    function right(){
        { num < 7 ?    
            setNum(num + 1)
            :
            console.log("nope")
        }
    }
    function left(){
        { num > 0 ?    
            setNum(num - 1)
            :
            console.log("nope")
        }
    }
    //templates
    const projectTemplate = projectData.map(project => {
        templates.push(project)
        return(
            <div className="templateWrapper">
                <div className="template">
                    <div className="templateSpot">
                        <img className="templateImage"src={templates[num]?.image} alt="" />
                    </div>
                </div>
            </div>
        )
    })
    //templates view all
    const allTemplates = projectData.map(project => {
        return(
            <div className="allTemplatesWrapper">
                <img className="allTemplatesImage"src={project.image} alt="" />
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