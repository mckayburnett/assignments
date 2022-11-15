import React, {useContext} from "react"
import {Context} from "./Context"
import {BrowerRouter as Router, Routes, Route} from "react-router-dom"

function Game(props){
    
    let {inputs, save} = useContext(Context)
    console.log(inputs)
    console.log(save.inputs?.input1, "save in game component")
    return(
        <div className="gameWrapper">
            <h1 className="player1">{save.inputs?.input1}</h1>
            <h2 className="score1">some score</h2>
            <h1 className="player2">{save.inputs?.input2}</h1>
            <h2 className="score2">some score</h2>
        </div>
    )
}

export default Game
