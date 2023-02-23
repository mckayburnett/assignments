import React, {useState} from "react"

export default function Home(){

    return (
        <div className="homeWrapper">
            <link href='https://fonts.googleapis.com/css?family=Varela' rel='stylesheet' type='text/css'></link>
            <img src="https://wallpaperaccess.com/full/732220.jpg" alt="" className="homeBackground"/>
            <div className="companyWrapper">
                <div className="companyName" data-text="Dynamic Development">Dynamic Development</div>
            </div>
        </div>
    )
}