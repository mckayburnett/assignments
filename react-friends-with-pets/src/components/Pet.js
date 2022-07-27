import React from "react"

export default function Pet(props) {
    const pets = props.pets.map((pet, i) => {
        
        return (
            <div className="petContainer">
                <h3 className="petName">Name: {pet.name}</h3>
                <h3 className="petBreed">Breed: {pet.breed}</h3>
            </div>
        )
     })
    
    return (
        <div>
            {pets}
        </div>
    )
}