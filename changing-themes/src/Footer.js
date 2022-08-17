import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Footer(props){

    const {color} = useContext(ThemeContext)

    return (
        <div className={`${color}-footer-wrapper`}>
            <h3 className="footer">Hope you are enjoying the {`${color} theme! P.S..... the Navbar doesn't work, so don't even try. Please.`}</h3>
        </div>
    )
}

export default Footer