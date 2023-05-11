import React, { useState, useEffect } from "react"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFileAlt } from "react-icons/fa"
import resume from "../images/resume.png"

const Contact = React.forwardRef((props, ref) => {

    return(
        <div className="contactWrapper" id="contact" ref={ref}>
            <form action="https://formsubmit.co/mckay.burnett.coding@gmail.com" method="POST">
                <input type="text" name="name" placeholder="First and Last Name" required />
                <input type= "text" name="message" placeholder="Message" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I will respond as soon as possible."></input>
                <button type="submit" className="submit">Send</button>
            </form>
            <div className="icons-contact">
                <FaLinkedin className="linkedin" onClick={() => window.location.href = 'https://www.linkedin.com/in/mckay-burnett/'}/> <FaGithub className="github" onClick={() => window.location.href = 'https://github.com/mckayburnett'}/> <a href = {resume} target = "_blank"><FaFileAlt className="resume" /></a>
            </div>
        </div>
    )
})

export default Contact