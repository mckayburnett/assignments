import React from "react"

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="image" src="https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/home-bg.jpg" />
            <div className="navTop">
                <h3 className="start">Start Bootstrap</h3>
                <div className="navTopRight">
                    <h5>HOME</h5>
                    <h5>ABOUT</h5>
                    <h5>SAMPLE POST</h5>
                    <h5>CONTACT</h5>
                </div>
            </div>
            <h1 className="clean">Clean Blog</h1>
            <h3 className="subClean">A Blog Theme by Start Bootstrap</h3>
        </div>
    )
}