import React, {useContext} from "react"
import {Context} from "./Context"
import {BrowerRouter as Router, Routes, Route} from "react-router-dom"

function Game(props){
    
    let {inputs, save} = useContext(Context)
    
    return(
        <div className="gameWrapper">
            <div className="players">
                <div className="player1">
                    <h1 className="name1">{save.inputs?.input1}</h1>
                    <h2 className="score1">0</h2>
                </div>
                <div className="player2">
                    <h1 className="name2">{save.inputs?.input2}</h1>
                    <h2 className="score2">0</h2>
                </div>
            </div>
        </div>
    )
}

export default Game
