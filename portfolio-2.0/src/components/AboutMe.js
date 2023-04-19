import React from "react"
import pic01 from "../images/pic01.png"
import pic02 from "../images/pic02.png"


export default function AboutMe (){

    return (
    <div className="aboutMeWrapper">
        <img className="aboutMe-background" src={pic02} alt="" />
        <img className="aboutMe-pic" src={pic01} alt="" />
        <h2 className="aboutMe-description"><strong className="aboutMe-strong">A developer out of Riverton, UT.</strong><br></br>To me, Computer Programming isn't just a career, it's a hobby.<br></br>I love creating clean, effective, and useful code that makes life easier!</h2>
    </div>
    )
}