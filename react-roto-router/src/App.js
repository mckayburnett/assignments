import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Home.js"
import About from "./About.js"
import Services from "./Services"
import {useEffect} from "react"

export default function App() {
    
    return (
        <div>
            <div className="pageTop">
                <nav className="nav">
                    <h2 className="message">Serving the Mushroom Kingdom since 1985</h2>
                    <Link to="/about" className="about">
                       |About|
                    </Link>
                    <Link to="/services" className="services">
                        |Services|
                    </Link>
                    <Link to="/" className="home">
                       |Home| 
                    </Link>
                </nav>
                <img src="https://see.fontimg.com/api/renderfont4/3zBwX/eyJyIjoiZHciLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiI0ZFMEMwQyIsImJnYyI6IiMxODFFRkYifQ/TWFyaW8gQnJvcy4gUGx1bWJpbmc/mario-world-pixel-color.png" alt="Mario Bros Plumbing" className="title"></img>
            </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
        </div>
    )
}