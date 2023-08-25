import React, { useState, useEffect } from "react"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFileAlt } from "react-icons/fa"
import resume from "../images/myResume.png"

const Contact = React.forwardRef((props, ref) => {

    return(
        <div className="contactWrapper" id="contact" ref={ref}>
            <form action="43af040197c1ce1dc876bd606666812a" method="POST">
                <h1 className="contactTitle">{`{"Say Hi."}`}</h1>
                <input type="text" name="name" placeholder="First and Last Name" required />
                <input type= "text" name="message" placeholder="Message" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I will respond as soon as possible."></input>
                <button type="submit" className="submit">Send</button>
            </form>
            <div className="icons-contact">
                <FaLinkedin className="linkedin" title="LinkedIn" onClick={() => window.location.href = 'https://www.linkedin.com/in/mckay-burnett/'}/> <FaGithub className="github" title="Github" onClick={() => window.location.href = 'https://github.com/mckayburnett'}/> <a href = {resume} target = "_blank"><FaFileAlt className="resume" title="resume"/></a>
            </div>
        </div>
    )
})

export default Contact