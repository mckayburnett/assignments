import React, {useState} from "react"
import Display from "./Display"

export default function Colors() {
    
    const [color1, setColor1] = useState("#000000")
    const [color2, setColor2] = useState("#000000")
    const [angle, setAngle] = useState(0)

    function handleChange1(e){
        setColor1(e.target.value)
        console.log(`color1: `, color1)
    }
    function handleChange2(e){
        setColor2(e.target.value)
        console.log(`color2: `, color2)
    }
    function handleChange3(e){
        setAngle(e.target.value)
        console.log(`angle: `, angle)
    }
    console.log('state: ', color1, color2, angle)

    return (
        <div>
            <Display 
                color1={color1}
                color2={color2}
                angle={angle}
            />
            <div className="colorsContainer">
                <h1 className="options">Options</h1>
                <div className="pickers">
                    <h3 className="color1">color 1</h3>
                    <h3 className="colorText1">color</h3>
                    <input 
                        type="color" 
                        className="input1"
                        name="color1"
                        value={color1}
                        onChange={handleChange1}
                    />
                    <br/>
                    <h3 className="color2">color 2</h3>
                    <h3 className="colorText2">color</h3>
                    <input 
                        type="color" 
                        className="input2"
                        name="color2"
                        value={color2}
                        onChange={handleChange2}
                    />    
                    <br/>
                    <h2 className="angle">Angle</h2>
                    <input 
                        type="number" 
                        className="number"
                        name="angle"
                        value={angle}
                        onChange={handleChange3}
                    />
                </div>
            </div>
        </div>
    )
}

