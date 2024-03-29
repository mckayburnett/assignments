import React, { useState } from "react"
import pic01 from "../images/pic01.png"
import pic02 from "../images/pic02.png"
import pic03 from "../images/pic03.png"
import coding from "../coding.mp3"
import { FaArrowRight } from 'react-icons/fa'



const AboutMe = React.forwardRef((props, ref) => {

    //laptop button
    const [meButton, setMeButton] = useState(false)

    //coding string
    const str = `<div className="aboutMeWrapper">
    { meButton ? 
    <>
        <img className="aboutMe-laptop" src={pic02} alt="" />
        <div className="compFull">
            <img className="aboutMe-pic" src={pic01} alt="" />
            <h2 className="aboutMe-description">
                <h1 className="description-one">Front and Back-End developer</h1>
                <br></br>I'm a Utah based Front and Back-End developer. 
                To me, Computer Programming isn't just a career, it's a 
                hobby. I love creating clean, effective, and useful code 
                that makes life easier!</h2>
            <strong className="aboutMe-strong">McKay Burnett</strong>
            <img className="aboutMe-pic2" src={pic03} alt="" />
        </div>
    </>
    :
    <>
        <img className="aboutMe-laptop" src={pic02} alt="" />
        <div className="compEmpty">
            <button className="aboutMe-Button" onClick={() => setMeButton(true)}>
            fdsafdsafds</button>
        </div>
    }
</div>`

    //coding button
    let audio = new Audio(coding)
    function handleCoding(){
        setMeButton(true)
        audio.play()
    }

    //View Proficiency button
    function clickProficiency(){
        window.scrollBy({
           left: window.innerWidth, 
           top: 0,
            behavior: "smooth"
          });
      }

    return (
    <div className="aboutMeWrapper" id="about" ref={ref} >
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Inspiration&display=swap" rel="stylesheet"></link>
        { meButton ? 
        <>
            <img className="aboutMe-laptop" src={pic02} alt="" />
            <div className={ meButton ? "compFull" : "compEmpty" }>
                <img className="aboutMe-pic" src={pic01} alt="" />
                <h2 className="aboutMe-description"><h1 className="description-one">Front and Back-End developer</h1>I'm a Utah based Front and Back-End developer. To me, Computer Programming isn't just a career, it's a hobby. I love creating clean, effective, and useful code that makes life easier!</h2>
                <strong className="aboutMe-strong">McKay Burnett</strong>
                <img className="aboutMe-pic2" src={pic03} alt="" />
                <button className="button-viewProficiency" onClick={clickProficiency}>View Proficiency <FaArrowRight className="arrow"/></button>
            </div>
        </>
        :
        <>
            <img className="aboutMe-laptop" src={pic02} alt="" />
            <div className="compEmpty">
                <h3 className="code" style = {{ whiteSpace: 'pre-wrap'}}>
                   {str}
                </h3>
                <button className="codeButton" onClick={handleCoding}>Click to run code!</button>
            </div>
        </>
        }
    </div>
    )
})

export default AboutMe