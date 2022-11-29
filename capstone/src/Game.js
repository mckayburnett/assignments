import React, {useContext, useEffect} from "react"
import {Context} from "./Context"
import {BrowerRouter as Router, Routes, Route} from "react-router-dom"

function Game(props){
    
    let {inputs, save, lock, setLock, lockAnswer, gameQuestions, getCat1, getCat2, getCat3, getCat4, getCat5, category1, category2, category3, category4, category5, valSelected, selected, valSelected2, selected2} = useContext(Context)
    
    useEffect(() => {
        getCat1();
        getCat2();
        getCat3();
        getCat4();
        getCat5();
    },[])

    console.log('gameCat1: ',category1.clues)
    // console.log(category1.clues[0].question)
    console.log(category1?.clues?.[0].question)
    
    
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
                    <div className="cat1">{category1.title}</div>
                    {selected ? 
                    <div className="gameQuestion" onClick={valSelected}>{category1?.clues?.[0].question}</div> 
                    : 
                    <div className="cat1val1" onClick={valSelected}>$200</div>}
                    {selected2 ?
                    <div className="gameQuestion" onClick={valSelected2}>
                    {category1?.clues?.[1].question}</div> 
                    :
                    <div className="cat1val2" onClick={valSelected2}>$400</div>}
                    <div className="cat1val3">$600</div>
                    <div className="cat1val4">$800</div>
                    <div className="cat1val5">$1000</div>
                    <div className="cat2">{category2.title}</div>
                    <div className="cat2val1">$200</div>
                    <div className="cat2val2">$400</div>
                    <div className="cat2val3">$600</div>
                    <div className="cat2val4">$800</div>
                    <div className="cat2val5">$1000</div>
                    <div className="cat3">{category3.title}</div>                   
                    <div className="cat3val1">$200</div>
                    <div className="cat3val2">$400</div>
                    <div className="cat3val3">$600</div>
                    <div className="cat3val4">$800</div>
                    <div className="cat3val5">$1000</div>
                    <div className="cat4">{category4.title}</div>
                    <div className="cat4val1">$200</div>
                    <div className="cat4val2">$400</div>
                    <div className="cat4val3">$600</div>
                    <div className="cat4val4">$800</div>
                    <div className="cat4val5">$1000</div> 
                    <div className="cat5">{category5.title}</div>
                    <div className="cat5val1">$200</div>
                    <div className="cat5val2">$400</div>
                    <div className="cat5val3">$600</div>
                    <div className="cat5val4">$800</div>
                    <div className="cat5val5">$1000</div>                    
                </div>
            <link href="https://fonts.googleapis.com/css?family=Schoolbell&v1" rel="stylesheet" />
        </div>
    )
}

export default Game
