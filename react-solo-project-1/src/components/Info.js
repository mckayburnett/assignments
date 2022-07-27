import React from "react"

export default function Info(){
    return (
        <div className="info">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHBt-KTAUE42w/profile-displayphoto-shrink_800_800/0/1651972540435?e=1657756800&v=beta&t=vU79rFyemXrg_SSYmrchafuG1S3JdnUICU7KQGqzGCA" id="image"/>
            <h1>McKay Burnett</h1>
            <h3>Full Stack Developer</h3>
            <a>mckay.burnett@gmail.com</a>
            <button className="buttons" id="email">email</button>
            <button className="buttons" id="linked">LinkedIn</button>
        </div>
    )
}