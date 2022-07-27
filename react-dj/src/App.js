import React, {useState} from "react"
import Squares from "./Squares"
import Buttons from "./Buttons"

export default function App() {
    const [colors, setColors] = useState(["white", "white", "white", "white"])
    
    function changeAll() {
        setColors(prevColor => {
            if (prevColor[0] !== "white"){
                return ["white", "white", "white", "white"]
            } else if(prevColor[0] === "white") {
                return ["black", "black", "black", "black"]
            }
        })  
    }
    function purple() {
        setColors(prevColor => {
            return ["purple", "purple", prevColor, prevColor]
        })
    }
    function leftBlue() {
        setColors(prevColor => {
            return [prevColor, prevColor, "blue", prevColor]
        })
    }
    function rightBlue() {
        setColors(prevColor => {
            return [prevColor, prevColor, prevColor, "blue"]
        })
    }
    function usa() {
        setColors(["blue", "white", "red", "red"])
    }
    function mexico() {
        setColors(["green", "red", "green", "red"])
    }
    function rainbow() {
        setColors(["orange", "green", "blue", "purple" ])
    }
    function utah() {
        setColors(["orange", "white", "orange", "orange"])
    }
    
    return (
        <div className="all">
            <div className="container">
                <Squares color={colors[0]}/>
                <Squares color={colors[1]}/>
                <Squares color={colors[2]}/>
                <Squares color={colors[3]}/>
                
            </div>
            <Buttons change={changeAll} purple={purple} left={leftBlue} right={rightBlue}
            usa={usa} mexico={mexico} rainbow={rainbow} utah={utah}/>
        </div>
    )
}

