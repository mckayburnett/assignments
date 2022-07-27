import React, {useState} from "react"

export default function Buttons(props) {
    return (
        <div className="buttons">
            <button className="b1" onClick={props.change}>Small Time DJ</button>
            <button className="b2" onClick={props.purple}>Party DJ</button>
            <button className="b3" onClick={props.left}>Pro DJ Left</button>
            <button className="b4" onClick={props.right}>Pro DJ Right</button>
            <button className="b5" onClick={props.usa}>Big Time DJ 1</button>
            <button className="b6" onClick={props.mexico}>Big Time DJ 2</button>
            <button className="b7" onClick={props.rainbow}>Big Time DJ 3</button>
            <button className="b8" onClick={props.utah}>Big Time DJ 4</button>
        </div>
    )
}