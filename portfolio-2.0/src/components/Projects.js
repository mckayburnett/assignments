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
                        <div className="templateImage-details" style={{background: `url(${templates[num]?.image})`, backgroundSize: `100%`, opacity: num < 4 ? "1%" : num >= 4 && num < 7 ? "3%" : num === 7 ? "5%" : "10%", width: "50vw", height: "80vh", border: "none"}}>
                        </div>
                    <div className="templateSpot-details">
                        <div className="details">
                            <div className="descriptionWrapper">
                                <h2 className="description">Description</h2> 
                                <h3 className="description-details">{templates[num]?.description}</h3>
                            </div>
                            <div className="keyPointsWrapper">
                                <h2 className="keyPoints">Key Points</h2> 
                                <h3 className="keyPoints-details" style = {{ whiteSpace: 'pre-line'}}>{templates[num]?.keyPoints}</h3>
                            </div>
                            <div className="skillsUsedWrapper">
                                <h2 className="skillsUsed">Skills Used</h2> 
                                <h2 className="skills-details">{templates[num]?.skillsUsed}</h2>
                            </div>
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