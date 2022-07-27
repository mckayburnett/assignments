import React from "react"

export default function Footer() {
    return (
        <div className="footer">
            <div className="buttonContainer">
                <div className="button">
                    <h4 className="older">OLDER POSTS</h4>
                    <i className="fa-solid fa-arrow-right" id="arrow"></i>
                </div>
            </div>
            <div className="icons">
                <i className="fa-brands fa-twitter" id="twitter"></i>
                <i className="fa-brands fa-facebook" id="facebook"></i>
                <i className="fa-brands fa-github" id="github"></i>
            </div>
            <div className="bottom">
                <h4 className="copyright">Copyright</h4>
                <i className="fa-solid fa-copyright" id="copyrightImg"></i>
                <h4 className="yourWebsite">Your Website 2022</h4>
            </div>
        </div>
    )
}