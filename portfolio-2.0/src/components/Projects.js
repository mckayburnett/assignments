import React, { useState, useEffect } from "react"
import projectData from "../projectData.js"

const Projects = React.forwardRef((props, ref) => {

    const projectTemplate = projectData.map(project => {
        console.log(project)
        return(
            <div className="templateWrapper">
                <img className="templateImage"src={project.image} alt="" />
            </div>
        )
    })
    
    return (
        <div className="projectsWrapper" id="projects" ref={ref}>
            {projectTemplate}
        </div>
    )

})

export default Projects