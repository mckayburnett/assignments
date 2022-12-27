import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm"

export default function Bounty(props){
    
    const { firstName, lastName, living, bountyAmount, type, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    console.log('bounty props', props)

    return(
        <div>
            <h1>First Name: { firstName }</h1>
            <h1>Last Name: { lastName }</h1>
            <p>Status: {`${living ? "Alive" : "Dead"}`}</p>
            <p>Bounty Amount: { bountyAmount }</p>
            <p>Type: { type }</p>
        </div>
    )
}