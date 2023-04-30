import React, { useState, useEffect } from "react"
import ProjectExample from "./projects/ProjectExample.js"

const Projects = React.forwardRef((props, ref) => {

    return (
        <div className="projectsWrapper" id="projects" ref={ref}>
            <ProjectExample className="projectExample" />
        </div>
    )

})

export default Projects