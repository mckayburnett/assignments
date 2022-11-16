import React, {useState, useContext} from "react"
import {BrowerRouter as Router, Routes, Route} from "react-router-dom"
import {Context} from "./Context"

function Home(props){
    let {inputs, saveName, handleChange} = useContext(Context)

    return(
        <div className="homeWrapper">
            <img src="https://thegameagency.com/wp-content/uploads/2021/01/S37-Jeopardy-logo-no-flares-2021-update3.png" className="title" alt="Jeopardy!"/>
            <h1 className="intro">
                Welcome To Jeopardy!<br></br><br></br>If you wish to play against a friend, fill out the boxes below and then select 1v1. If you would like to practice by receiving random questions, simply click Practice.
            </h1>
            <div className="inputs">
                <input
                    className="input1"
                    type="text"
                    placeholder="Name of Player 1"
                    name="input1"
                    value={inputs.input1}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <input
                    className="input2"
                    type="text"
                    placeholder="Name of Player 2"
                    name="input2"
                    value={inputs.input2}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <button className="button" onClick={saveName}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default Home
