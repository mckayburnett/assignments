import React, {useState} from "react"

export default function Button(props) {
    
    return (
        <button className="button" onClick={props.roll}>Click to Roll Dice</button> 
    )
}