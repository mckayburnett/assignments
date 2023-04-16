import React from "react"
import pic01 from "../images/pic01.png"
import { GiExplosiveMaterials } from 'react-icons/gi'

export default function AboutMe (){

    return (
    <div className="aboutMeWrapper">
        <img className="aboutMe-pic" src={pic01} alt="" />
        <div className="explosionContainer">
            < GiExplosiveMaterials className="explosion" />
        </div>
    </div>
    )
}