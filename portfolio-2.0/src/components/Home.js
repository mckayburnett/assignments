import React, { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"
import pic00 from "../images/pic00.png"
import typing from "../typing.mp3"
import { FaArrowRight } from 'react-icons/fa'

const Home = React.forwardRef((props, ref) => {

  //setTimeout(() => typing.play(), 500)
  let audio = new Audio(typing)
  
  //enter button
  const [enter, setEnter] = useState(false)
  const [showButton, setShowButton] = useState(false)
  function handleEnter(){
    setEnter(true);
    setTimeout(() => {
      setShowButton(true);
    }, 7300)
    setTimeout(() => {
      audio.play()
      setTimeout(() => {
        audio.pause()
      }, 1100)
    }, 300);
    setTimeout(() => {
      audio.play()
      setTimeout(() => {
        audio.pause()
        setTimeout(() => {
          audio.play()
          setTimeout(() => {
            audio.pause()
            setTimeout(() => {
              audio.play()
              setTimeout(() => {
                audio.pause()
              }, 1200)
            }, 1700)
          }, 2900)
        }, 1300)
      }, 2200)
    }, 2700);
  }

  //about me button
  function clickAboutMe(){
    window.scrollBy({
       left: window.innerWidth, 
       top: 0,
        behavior: "smooth"
      });
  }
  
  return (
    <div className="homeWrapper" id="home" ref={ref}>        
    {enter ? 
      <body>
        <img className="me" src={pic00} alt="" />
        <div className="typewriter">
          <Typewriter

            onInit={(typewriter) => {

              typewriter
                .changeDelay(50)
                .typeString(`{"Hello!"}`)
                .pauseFor(1500)
                .deleteAll(20)

                .changeDelay(50)
                .typeString("My name is <strong>MCKAY BURNETT</strong>")
                .pauseFor(1500)
                .deleteAll(10)

                .changeDelay(50)
                .typeString("I'm a <strong>FULL-STACK DEVELOPER</strong> and...<br></br>")
                .pauseFor(1500)

                .changeDelay(50)
                .typeString("This is my <strong>PORTFOLIO</strong>")
                .start();

            }}
          />
        </div>
        <button className={showButton ? `button-aboutMe` : `hidden`} onClick={clickAboutMe}>About Me <FaArrowRight className="arrow"/></button>
      </body>
      :
      <div className="enterContainer">
        <button className="enter" onClick={handleEnter}>Enter</button>
        <img className="me-2" src={pic00} alt="" />
      </div>
      }
    </div>
  )
})

export default Home