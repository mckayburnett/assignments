import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Navbar(props){

    const {color} = useContext(ThemeContext)

    return (
          
            <div className={`${color}-nav-wrapper`}>
                <h2 className="home">Home</h2>
                <h2 className="about">About</h2>
                <h2 className="contact">Contact</h2>
            </div>
        
    )
}

export default Navbar