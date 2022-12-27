import React, { useState } from "react"

export default function AddBountyForm(props){
    
    const initInputs = {firstName: props.firstName || "", lastName: props.lastName || "", living: props.living || true, bountyAmount: props.bountyAmount || "", type: props.type || "Jedi"}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
        console.log('inputs',inputs)
    }
    console.log(inputs)

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input 
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input 
                type="radio"
                name="living"
                value= "true"
                onChange={handleChange}
            /> Living
            <input 
                type="radio"
                name="living"
                value= "false"
                onChange={handleChange}
            /> Dead
            <input 
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount"
            />
            <input 
                type="radio"
                name="type"
                value="Jedi"
                onChange={handleChange}
                placeholder="Type"
            /> Jedi
            <input 
                type="radio"
                name="type"
                value="Sith"
                onChange={handleChange}
                placeholder="Type"
            /> Sith
            <button>{ props.btnText }</button>
        </form>
    )
}