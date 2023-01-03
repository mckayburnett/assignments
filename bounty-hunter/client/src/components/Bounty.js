import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm"

export default function Bounty(props){
    
    const { firstName, lastName, living, bountyAmount, type, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    console.log('bounty props', props)

    return(
        <div>
            { !editToggle ?
                <>
                    <h1>{ firstName } { lastName }</h1>
                    <p>Status: {`${living ? "Alive" : "Dead"}`}</p>
                    <p>Bounty Amount: { bountyAmount }</p>
                    <p>Type: { type }</p>
                    <button
                        onClick={() => props.deleteBounty(_id)}
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >
                        Edit
                    </button>
                </>
            :
                <>
                    <AddBountyForm 
                        firstName = { firstName }
                        lastName = { lastName }
                        living = { living }
                        bountyAmount = { bountyAmount }
                        type = { type }
                        _id = { _id }
                        btnText = "Submit Edit"
                        submit = { props.editBounty }
                    />
                    <button 
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >
                        Close
                    </button>
                </>
            }
        </div>
    )
}