import React, {useContext, useEffect} from "react"
import {Context} from "./Context"
import {BrowerRouter as Router, Routes, Route} from "react-router-dom"

function Game(props){
    
    let {inputs, save, lock, setLock, lockAnswer, gameQuestions, getGameQuestions} = useContext(Context)
    
    useEffect(() => {
        getGameQuestions()
    },[])
        

    return(
        <div className="gameWrapper">
            <div className="players">
                <div className="player1">
                    <h1 className="name1">{save.inputs?.input1}</h1>
                    <h2 className="score1">0</h2>
                    <input 
                        className="answer1" 
                        type="text"
                        placeholder="Answer Here"
                        name="answer1"
                        disabled = {lock ? "disabled" : ""}
                    />
                </div>
                <button className="lockButton" onClick={lockAnswer}>Lock in Answers</button>
                <div className="player2">
                    <h1 className="name2">{save.inputs?.input2}</h1>
                    <h2 className="score2">0</h2>
                    <input 
                        className="answer2" 
                        type="text"
                        placeholder="Answer Here"
                        name="answer2"
                        disabled = {lock ? "disabled" : ""} 
                    />
                </div>
            </div>
                <div className="board">
                    <div className="cat1"></div>
                    <div className="cat1val1"></div>
                    <div className="cat1val2"></div>
                    <div className="cat1val3"></div>
                    <div className="cat1val4"></div>
                    <div className="cat1val5"></div>
                    <div className="cat2"></div>
                    <div className="cat2val1"></div>
                    <div className="cat2val2"></div>
                    <div className="cat2val3"></div>
                    <div className="cat2val4"></div>
                    <div className="cat2val5"></div>
                    <div className="cat3"></div>                   
                    <div className="cat3val1"></div>
                    <div className="cat3val2"></div>
                    <div className="cat3val3"></div>
                    <div className="cat3val4"></div>
                    <div className="cat3val5"></div>
                    <div className="cat4"></div>
                    <div className="cat4val1"></div>
                    <div className="cat4val2"></div>
                    <div className="cat4val3"></div>
                    <div className="cat4val4"></div>
                    <div className="cat4val5"></div>                      
                </div>
            <link href="https://fonts.googleapis.com/css?family=Schoolbell&v1" rel="stylesheet" />
        </div>
    )
}

export default Game
