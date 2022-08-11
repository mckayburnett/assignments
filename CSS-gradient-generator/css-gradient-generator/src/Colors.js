import React from "react"

export default function Colors() {
    
    const [color1, setColor1] = React.useState("#rrggbb")
    const [color2, setColor2] = React.useState("#rrggbb")
    console.log(color1.value, "this is color1")

    return (
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
                    onChange={setColor1}
                />
                <br/>
                <h3 className="color2">color 2</h3>
                <h3 className="colorText2">color</h3>
                <input 
                    type="color" 
                    className="input2"
                    name="color2"
                    value={color2}
                    onChange={setColor2}
                />    
                <br/>
                <h2 className="angle">Angle</h2>
                <input 
                    type="number" 
                    className="number"
                    name="angle"
                />
            </div>
        </div>
    )
}

