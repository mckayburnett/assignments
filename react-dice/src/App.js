import Dicebox from "./Dicebox"
import Button from "./Button"
import {useState} from 'react'

export default function App() {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4])
    
    function roll() {
        const randomizer1 = Math.floor(Math.random() * 6) + 1
        const randomizer2 = Math.floor(Math.random() * 6) + 1
        const randomizer3 = Math.floor(Math.random() * 6) + 1
        const randomizer4 = Math.floor(Math.random() * 6) + 1
        const randomizer5 = Math.floor(Math.random() * 6) + 1
        setNumbers([randomizer1, randomizer2, randomizer3, randomizer4, randomizer5])
    }
    return (
        <div className="page">
            <Dicebox number={numbers[0]}/>
            <Dicebox number={numbers[1]}/>
            <Dicebox number={numbers[2]}/>
            <Dicebox number={numbers[3]}/>
            <Dicebox number={numbers[4]}/>
            <Button roll={roll}/>
        </div>
    )
}