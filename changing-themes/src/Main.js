import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Main(props){
    
    const {color, toggleTheme} = useContext(ThemeContext)

    return (
        <div className={`${color}-main-wrapper`}>
            <h1 className="title">Click the Button to change Theme</h1>
            <button className="button" onClick={toggleTheme}>{`Change Theme`}</button>
        </div>
    )
}

export default Main