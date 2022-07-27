import React from "react"
import Friend from "./Friend"
import Pet from "./Pet"
import data from "../data"

export default function FriendList() {
    const friendsPets = data.map(friend => {
        
        return (
            <div className="friendPet"> 
                <Friend
                    name = {friend.name}
                    age = {friend.age}
                /> 
                <Pet
                    pets = {friend.pets}
                />
            </div>
        )
    })
    
    return (
        <div>
        
            {friendsPets}
            
        </div>
    )
}

