import React, {useState, useContext, useEffect} from "react"
import {BrowerRouter as Router, Routes, Route} from "react-router-dom"
import {Context} from "./Context"

function Practice(props){

    let{getQuestion, question, save} = useContext(Context)
     
    useEffect(() => {
        getQuestion()
     }, [])
    
    return(
        <div className="practiceWrapper">
            <h1 className="welcome">Welcome {save.inputs?.input1} {`and ${save.inputs?.input2}`}!</h1>
            {question}
        </div>
    )
}

export default Practice
