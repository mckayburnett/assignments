import React, {useState, useEffect} from "react"

export default function Display(props) {
    
    let [newColor1, setNewColor1] = useState("#000000")
    let [newColor2, setNewColor2] = useState("#000000")
    let [newAngle, setNewAngle] = useState(0)
    useEffect(function(){
        setNewColor1(props.color1);
        setNewColor2(props.color2);
        setNewAngle(props.angle);
    }, [props.color1, props.color2, props.angle])
    
    return (
        <div className="displayContainer">
            <div 
                className="colorDisplay"
                style={{ 
                    background: `linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2})` 
                }}
            ></div>
            <textarea className="code" readOnly>
                {`background: linear-gradient(${newAngle}deg, ${newColor1}, ${newColor2});\r\n-moz-background: linear-gradient(${newAngle}deg, ${newColor1}, ${newColor2});\r\n-webkit: linear-gradient(${newAngle}deg, ${newColor1}, ${newColor2});`}
            </textarea>
        </div>
    )
}

