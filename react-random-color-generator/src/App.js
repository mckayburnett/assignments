import React, {useState, useEffect} from "react"

export default function App() {
    
    const [count, setCount] = useState(0)
    const [colors, setColors] = useState('')
    
    useEffect(function(){
        fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(response => response.json())
            .then(response => {
                //console.log('response', response)
                setColors(response.colors[0].hex)
            })
    }, [count])
    
    return (
        <div className="background" style={
            {backgroundColor: `#${colors}`}
            }>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Change Background Color
            </button>
        </div>
    )
}