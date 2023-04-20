import React, { useState } from "react"
import pic01 from "../images/pic01.png"
import pic02 from "../images/pic02.png"


export default function AboutMe (){

    //laptop button
    const [meButton, setMeButton] = useState(false)

    return (
    <div className="aboutMeWrapper">
        { meButton ? 
        <div className="compFull">
            <img className="aboutMe-background" src={pic02} alt="" />
            <img className="aboutMe-pic" src={pic01} alt="" />
            <h2 className="aboutMe-description"><strong className="aboutMe-strong">A developer out of Riverton, UT.</strong><br></br>To me, Computer Programming isn't just a career, it's a hobby.<br></br>I love creating clean, effective, and useful code that makes life easier!</h2>
        </div>
        :
        <div className="compEmpty">
            <img className="aboutMe-background" src={pic02} alt="" />
            <textarea className="textArea">fdsafdsafds</textarea>
        </div>
        }
    </div>
    )
}