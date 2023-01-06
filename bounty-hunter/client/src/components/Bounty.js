import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm"

export default function Bounty(props){
    
    let { firstName, lastName, living, bountyAmount, jedi, _id, editBounty } = props
    const [editToggle, setEditToggle] = useState(false)
    console.log(living)

    return(
        <div>
            { !editToggle ?
                <div className="bounty-info">
                    <h1>{ firstName } { lastName } 
                        {jedi ? 
                            <img 
                                className="saber-green"
                                src="https://www.pngarts.com/files/3/Green-Lightsaber-PNG-Pic.png" alt="green"/> 
                        : 
                            <img 
                                className="saber-red"
                                src="https://www.pngarts.com/files/3/Red-Lightsaber-Free-PNG-Image.png" alt="red"/>
                        }
                        {!living ? <img
                                    className="skull"
                                    src="https://www.pngarts.com/files/2/Skull-Bones-Transparent.png"
                                    alt="dead"/>
                        :
                            <></>
                        }
                    </h1>
                    <p>Status: {living ? "Alive" : "Dead"}</p>
                    <p>Bounty Amount: { bountyAmount }</p>
                    <p>Type: {`${jedi ? "Jedi" : "Sith"}`}</p>
                    <button
                        className="delete-button"
                        onClick={() => props.deleteBounty(_id)}
                    >
                        Delete
                    </button>
                    <button
                        className="edit-button"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >
                        Edit
                    </button>
                </div>
            :
                <>
                    <AddBountyForm 
                        firstName = { firstName }
                        lastName = { lastName }
                        living = { living }
                        bountyAmount = { bountyAmount }
                        jedi = { jedi }
                        _id = { _id }
                        btnText = "Submit Edit"
                        submit = { editBounty }
                    />
                    <button
                        className="close-button" 
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >
                        Close
                    </button>
                </>
            }
        </div>
    )
}