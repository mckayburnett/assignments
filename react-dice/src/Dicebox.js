import React, {useState} from "react"

export default function Dicebox(props) {
   
    return (
        <div className="dice-container">
            <div className="dice">{props.number}</div>
        </div>
    )
}