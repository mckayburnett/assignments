import React from "react"

export default function Friend(props) {
    
    return (
        <div className="friendContainer">
            <h1 className="name">{props.name}</h1>
            <h4 className="age">Age: {props.age}</h4>
            <h2 className="pets">Pets</h2>
        </div>
    )
}