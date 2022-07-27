import React, {useState} from "react"

export default function Squares(props) {
     
     return (         
        <div>
            <div className="square"  style={{backgroundColor:props.color}}></div>
        </div>  
     )
}