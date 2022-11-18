import React, {useState, useContext} from "react"
import {BrowerRouter as Router, Routes, Route} from "react-router-dom"
import {Context} from "./Context"

function Practice(props){

    let{getQuestion, question} = useContext(Context)
    

    return(
        <div className="practiceWrapper">
            {question}
        </div>
    )
}

export default Practice
