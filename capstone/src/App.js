import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import axios from 'axios'
import Game from "./Game.js"
import Home from "./Home.js"
import Practice from "./Practice.js"
import {ContextProvider} from './Context'

function App(props) {

    return (
        <div>  
            <ContextProvider>  
                <div className="appWrapper">
                    <div className="topNav">
                        <Link to="/" className="homeLink">
                            Home
                        </Link>
                    </div>
                    <div className="bottomNav">
                        <Link to="/game" className="gameLink">
                            Player vs Player
                        </Link>
                        <Link to="/practice" className="practiceLink">
                            Practice
                        </Link>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/game" element={<Game />}/>
                    <Route path="/practice" element={<Practice />}/>
                </Routes>
            </ContextProvider>
        </div>
    )
}

export default App;