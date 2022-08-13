import React from "react"

export default function Display(props) {
    console.log('props: ', props)
    // useEffect(function(){
    //     setNewColor1(props.color1);
    //     setNewColor2(props.color2);
    //     setNewAngle(props.angle);
    // }, [props.color1, props.color2, props.angle])

    // let [newColor1, setNewColor1] = useState(props.color1)
    // let [newColor2, setNewColor2] = useState(props.color2)
    // let [newAngle, setNewAngle] = useState(props.angle)
    

    const str = `background: linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2});\r\n-moz-background: linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2});\r\n-webkit: linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2});`
    console.log('str', str)
    return (
        <div className="displayContainer">
            <div 
                className="colorDisplay"
                style={{ 
                    background: `linear-gradient(${props.angle}deg, ${props.color1}, ${props.color2})` 
                }}
            ></div>
            <textarea className="code" value={str} readOnly>

            </textarea>
        </div>
    )
}

