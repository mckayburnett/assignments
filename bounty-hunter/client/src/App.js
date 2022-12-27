import React, { useState, useEffect } from "react"
import axios from "axios"
import AddBountyForm from "./components/AddBountyForm"
import Bounty from "./components/Bounty"

export default function App(){
    const [bounties, setBounties] = useState([])

    function getBounties(){
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }

    function addBounty(newMovie){
        axios.post("/bounties", newMovie)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteBounty(bountyId){
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
    }

    function editBounty(updates, bountyId){
        axios.put(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    },[])

    return (
        <div className="bounty-container">
            <AddBountyForm 
                submit={addBounty}
                btnText="Add Bounty"
                key={bounties.firstName}
            />
            {
            bounties.map(bounty =>
                <Bounty 
                    {...bounty}
                    key={bounty.firstName}
                    deleteBounty={deleteBounty}
                    editBounty={editBounty}
                />)
            }
        </div>
    )
}