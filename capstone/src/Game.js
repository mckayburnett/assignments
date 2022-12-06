import React, {useContext, useEffect, useState} from "react"
import {Context} from "./Context"
import {BrowerRouter as Router, Routes, Route} from "react-router-dom"
import { clear } from "@testing-library/user-event/dist/clear"

function Game(props){
    
    let {inputs, setAnswerButton, answerButton, seeAnswer, save, lock, gameQuestions, getCat, category1, category2, category3, category4, category5, pushed1, setPushed1, answer, setAnswer} = useContext(Context)
    
    useEffect(() => {
        getCat();
    },[])


    function clearQAndA(){
        setPushed1(null);
        setAnswer(null)
    }
    function clickCategory1(e){
        setPushed1("Question: " + category1.clues[e].question);
        setAnswer("Answer: " + category1.clues[e].answer);
        setAnswerButton(false);
    }
    function clickCategory2(e){
        setPushed1("Question: " + category2.clues[e].question);
        setAnswer("Answer: " + category2.clues[e].answer);
        setAnswerButton(false);
    }
    function clickCategory3(e){
        setPushed1("Question: " + category3.clues[e].question)
        setAnswer("Answer: " + category3.clues[e].answer);
        setAnswerButton(false);
    }
    function clickCategory4(e){
        setPushed1("Question: " + category4.clues[e].question)
        setAnswer("Answer: " + category4.clues[e].answer);
        setAnswerButton(false);
    }
    function clickCategory5(e){
        setPushed1("Question: " + category5.clues[e].question)
        setAnswer("Answer: " + category5.clues[e].answer);
        setAnswerButton(false);
    }
    const [answerVals, setAnswerVals] = useState([
        {
            answerVal1: "",
            answerVal2: ""
        }
    ])
    
    return(
        <div className="gameWrapper">
            <div className="players">
                <div className="player1">
                    <h1 className="name1" onClick={clearQAndA}>{save.inputs?.input1}</h1>
                    <h2 className="score1">0</h2>
                    <input 
                        className= {answerButton? "answer1view" : "answer1"} 
                        type="text"
                        placeholder="Answer Here"
                        name="answer1"
                        value={answerVals.answerVal1}
                    />
                </div>
                <button className="lockButton" onClick={seeAnswer}>See Answer</button>
                <div className="player2">
                    <h1 className="name2" onClick={clearQAndA}>{save.inputs?.input2}</h1>
                    <h2 className="score2">0</h2>
                    <input 
                        className= {answerButton? "answer2view" : "answer2"} 
                        type="text"
                        placeholder="Answer Here"
                        name="answer2"
                        value={answerVals.answerVal2}
                    />
                </div>
            </div>
            {
            <div className="gameQuestion">
            {pushed1}
            {answerButton?
                <div>
                    <br></br>
                    <br></br>
                    {answer}
                </div>
                :
                <></>    
            }
            </div>
        }
                <div className="board">
                    <div className="cat1">{category1.title}</div>
                    <div className="cat1val1" onClick={()=>clickCategory1(0)}>$200</div>
                    <div className="cat1val2" onClick={()=>clickCategory1(1)}>$400</div>
                    <div className="cat1val3" onClick={()=>clickCategory1(2)}>$600</div>
                    <div className="cat1val4" onClick={()=>clickCategory1(3)}>$800</div>
                    <div className="cat1val5" onClick={()=>clickCategory1(4)}>$1000</div>
                    <div className="cat2">{category2.title}</div>
                    <div className="cat2val1" onClick={()=>clickCategory2(0)}>$200</div>
                    <div className="cat2val2" onClick={()=>clickCategory2(1)}>$400</div>
                    <div className="cat2val3" onClick={()=>clickCategory2(2)}>$600</div>
                    <div className="cat2val4" onClick={()=>clickCategory2(3)}>$800</div>
                    <div className="cat2val5" onClick={()=>clickCategory2(4)}>$1000</div>
                    <div className="cat3">{category3.title}</div>                   
                    <div className="cat3val1" onClick={()=>clickCategory3(0)}>$200</div>
                    <div className="cat3val2" onClick={()=>clickCategory3(1)}>$400</div>
                    <div className="cat3val3" onClick={()=>clickCategory3(2)}>$600</div>
                    <div className="cat3val4" onClick={()=>clickCategory3(3)}>$800</div>
                    <div className="cat3val5" onClick={()=>clickCategory3(4)}>$1000</div>
                    <div className="cat4">{category4.title}</div>
                    <div className="cat4val1" onClick={()=>clickCategory4(0)}>$200</div>
                    <div className="cat4val2" onClick={()=>clickCategory4(1)}>$400</div>
                    <div className="cat4val3" onClick={()=>clickCategory4(2)}>$600</div>
                    <div className="cat4val4" onClick={()=>clickCategory4(3)}>$800</div>
                    <div className="cat4val5" onClick={()=>clickCategory4(4)}>$1000</div> 
                    <div className="cat5">{category5.title}</div>
                    <div className="cat5val1" onClick={()=>clickCategory5(0)}>$200</div>
                    <div className="cat5val2" onClick={()=>clickCategory5(1)}>$400</div>
                    <div className="cat5val3" onClick={()=>clickCategory5(2)}>$600</div>
                    <div className="cat5val4" onClick={()=>clickCategory5(3)}>$800</div>
                    <div className="cat5val5" onClick={()=>clickCategory5(4)}>$1000</div>                    
                </div>
            <link href="https://fonts.googleapis.com/css?family=Schoolbell&v1" rel="stylesheet" />
        </div>
    )
}

export default Game
