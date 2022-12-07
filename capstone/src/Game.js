import React, {useContext, useEffect, useState} from "react"
import {Context} from "./Context"
import {BrowerRouter as Router, Routes, Route} from "react-router-dom"
import { clear } from "@testing-library/user-event/dist/clear"

function Game(props){
    
    let {inputs, setAnswerButton, answerButton, seeAnswer, save, lock, gameQuestions, getCat, category1, category2, category3, category4, category5, pushed1, setPushed1, answer, setAnswer} = useContext(Context)
    
    useEffect(() => {
        getCat();
    },[])

    const [score1, setScore1] = useState(0)
    const [score2, setScore2] = useState(0)
    const [eValue, setEValue] = useState()
    function clickName1(e){
        e.preventDefault();
        if (eValue === 0){
            setScore1(prevScore => prevScore + 200)
        } else if (eValue === 1){
            setScore1(prevScore => prevScore + 400)
        } else if (eValue === 2){
            setScore1(prevScore => prevScore + 600)
        } else if (eValue === 3){
            setScore1(prevScore => prevScore + 800)
        } else if (eValue === 4){
            setScore1(prevScore => prevScore + 1000)
        }
    }
    function clickName2(){
        if (eValue === 0){
            setScore2(prevScore => prevScore + 200)
        } else if (eValue === 1){
            setScore2(prevScore => prevScore + 400)
        } else if (eValue === 2){
            setScore2(prevScore => prevScore + 600)
        } else if (eValue === 3){
            setScore2(prevScore => prevScore + 800)
        } else if (eValue === 4){
            setScore2(prevScore => prevScore + 1000)
        }
    }
    const [categorySwitch1, setCategorySwitch1] = useState([""])
    const [categorySwitch2, setCategorySwitch2] = useState([""])
    const [categorySwitch3, setCategorySwitch3] = useState([""])
    const [categorySwitch4, setCategorySwitch4] = useState([""])
    const [categorySwitch5, setCategorySwitch5] = useState([""])

    function clickCategory1(e){
        setPushed1("Question: " + category1.clues[e].question);
        setAnswer("Answer: " + category1.clues[e].answer);
        setAnswerButton(false);
        setEValue(e)
        setCategorySwitch1(prev => prev + String(e))
    }
    function clickCategory2(e){
        setPushed1("Question: " + category2.clues[e].question);
        setAnswer("Answer: " + category2.clues[e].answer);
        setAnswerButton(false);
        setEValue(e)
        setCategorySwitch2(prev => prev + String(e))
    }
    function clickCategory3(e){
        setPushed1("Question: " + category3.clues[e].question)
        setAnswer("Answer: " + category3.clues[e].answer);
        setAnswerButton(false);
        setEValue(e)
        setCategorySwitch3(prev => prev + String(e))
    }
    function clickCategory4(e){
        setPushed1("Question: " + category4.clues[e].question)
        setAnswer("Answer: " + category4.clues[e].answer);
        setAnswerButton(false);
        setEValue(e)
        setCategorySwitch4(prev => prev + String(e))
    }
    function clickCategory5(e){
        setPushed1("Question: " + category5.clues[e].question);
        setAnswer("Answer: " + category5.clues[e].answer);
        setAnswerButton(false);
        setEValue(e)
        setCategorySwitch5(prev => prev + String(e))
    }
    const [answerVals, setAnswerVals] = useState([
        {
            answerVal1: "",
            answerVal2: ""
        }
    ])
    function clearAll(){
        setPushed1("");
        setAnswer("");
        setAnswerButton(false);

    }
    
    return(
        <div className="gameWrapper">
            <div className="players">
                <div className="player1">
                    <h1 className="name1" onClick={clickName1}>{save.inputs?.input1}</h1>
                    <h2 className="score1">{score1}</h2>
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
                    <h1 className="name2" onClick={clickName2}>{save.inputs?.input2}</h1>
                    <h2 className="score2">{score2}</h2>
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
                    {answer}
                    <br></br>
                    <button className="clearButton" onClick={clearAll}>Clear Q&A</button>
                </div>
                :
                <></>    
            }
            </div>
            }
                <div className="board">
                    <div className="cat1">{category1.title}</div>
                    {categorySwitch1.includes("0") ? <div className="clickedVal"></div>:<div className="cat1val1" onClick={()=>clickCategory1(0)}>$200</div>}
                    {categorySwitch1.includes("1") ? <div className="clickedVal"></div>:<div className="cat1val2" onClick={()=>clickCategory1(1)}>$400</div>}
                    {categorySwitch1.includes("2") ? <div className="clickedVal"></div>:<div className="cat1val3" onClick={()=>clickCategory1(2)}>$600</div>}
                    {categorySwitch1.includes("3") ? <div className="clickedVal"></div>:<div className="cat1val4" onClick={()=>clickCategory1(3)}>$800</div>}
                    {categorySwitch1.includes("4") ? <div className="clickedVal"></div>:<div className="cat1val5" onClick={()=>clickCategory1(4)}>$1000</div>}
                    <div className="cat2">{category2.title}</div>
                    {categorySwitch2.includes("0") ? <div className="clickedVal"></div>:<div className="cat2val1" onClick={()=>clickCategory2(0)}>$200</div>}
                    {categorySwitch2.includes("1") ? <div className="clickedVal"></div>:<div className="cat2val2" onClick={()=>clickCategory2(1)}>$400</div>}
                    {categorySwitch2.includes("2") ? <div className="clickedVal"></div>:<div className="cat2val3" onClick={()=>clickCategory2(2)}>$600</div>}
                    {categorySwitch2.includes("3") ? <div className="clickedVal"></div>:<div className="cat2val4" onClick={()=>clickCategory2(3)}>$800</div>}
                    {categorySwitch2.includes("4") ? <div className="clickedVal"></div>:<div className="cat2val5" onClick={()=>clickCategory2(4)}>$1000</div>}
                    <div className="cat3">{category3.title}</div>                   
                    {categorySwitch3.includes("0") ? <div className="clickedVal"></div>:<div className="cat3val1" onClick={()=>clickCategory3(0)}>$200</div>}
                    {categorySwitch3.includes("1") ? <div className="clickedVal"></div>:<div className="cat3val2" onClick={()=>clickCategory3(1)}>$400</div>}
                    {categorySwitch3.includes("2") ? <div className="clickedVal"></div>: <div className="cat3val3" onClick={()=>clickCategory3(2)}>$600</div>}
                    {categorySwitch3.includes("3") ? <div className="clickedVal"></div>:<div className="cat3val4" onClick={()=>clickCategory3(3)}>$800</div>}
                    {categorySwitch3.includes("4") ? <div className="clickedVal"></div>:<div className="cat3val5" onClick={()=>clickCategory3(4)}>$1000</div>}
                    <div className="cat4">{category4.title}</div>
                    {categorySwitch4.includes("0") ? <div className="clickedVal"></div>:<div className="cat4val1" onClick={()=>clickCategory4(0)}>$200</div>}
                    {categorySwitch4.includes("1") ? <div className="clickedVal"></div>:<div className="cat4val2" onClick={()=>clickCategory4(1)}>$400</div>}
                    {categorySwitch4.includes("2") ? <div className="clickedVal"></div>:<div className="cat4val3" onClick={()=>clickCategory4(2)}>$600</div>}
                    {categorySwitch4.includes("3") ? <div className="clickedVal"></div>:<div className="cat4val4" onClick={()=>clickCategory4(3)}>$800</div>}
                    {categorySwitch4.includes("4") ? <div className="clickedVal"></div>:<div className="cat4val5" onClick={()=>clickCategory4(4)}>$1000</div>} 
                    <div className="cat5">{category5.title}</div>
                    {categorySwitch5.includes("0") ? <div className="clickedVal"></div>:<div className="cat5val1" onClick={()=>clickCategory5(0)}>$200</div>}
                    {categorySwitch5.includes("1") ? <div className="clickedVal"></div>:<div className="cat5val2" onClick={()=>clickCategory5(1)}>$400</div>}
                    {categorySwitch5.includes("2") ? <div className="clickedVal"></div>:<div className="cat5val3" onClick={()=>clickCategory5(2)}>$600</div>}
                    {categorySwitch5.includes("3") ? <div className="clickedVal"></div>:<div className="cat5val4" onClick={()=>clickCategory5(3)}>$800</div>}
                    {categorySwitch5.includes("4") ? <div className="clickedVal"></div>:<div className="cat5val5" onClick={()=>clickCategory5(4)}>$1000</div>}                    
                </div>
            <link href="https://fonts.googleapis.com/css?family=Schoolbell&v1" rel="stylesheet" />
        </div>
    )
}

export default Game
