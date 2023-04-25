import React, { useState } from "react"
import pic01 from "../images/pic01.png"
import pic02 from "../images/pic02.png"


export default function AboutMe (){

    //laptop button
    const [meButton, setMeButton] = useState(false)

    return (
    <div className="aboutMeWrapper">
        { meButton ? 
        <>
        <img className="aboutMe-laptop" src={pic02} alt="" />
        <div className="compFull">
            <img className="aboutMe-pic" src={pic01} alt="" />
            <h2 className="aboutMe-description">Based out of Utah<br></br><br></br>To me, Computer Programming isn't just a career, it's a hobby.<br></br><br></br>I love creating clean, effective, and useful code that makes life easier!<br></br><br></br>Front and Back-End developer</h2>
            <strong className="aboutMe-strong">McKay Burnett</strong>
        </div>
        </>
        :
        <div className="compEmpty">
            <img className="aboutMe-laptop" src={pic02} alt="" />
            <button className="aboutMe-Button" onClick={() => setMeButton(true)}>fdsafdsafds</button>
        </div>
        }
    </div>
    )
}