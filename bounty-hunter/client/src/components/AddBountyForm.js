import React, { useState } from "react"

export default function AddBountyForm(props){
    
    const initInputs = {firstName: props.firstName || "", lastName: props.lastName || "", living: props.living || false, bountyAmount: props.bountyAmount || "", jedi: props.type || false}
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
                className="firstName"
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input 
                className="lastName"
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <div className="living-dead">
                <input 
                    type="radio"
                    name="living"
                    value= {inputs.living}
                    onChange={handleChange}
                /> Living
                <input 
                    type="radio"
                    name="living"
                    value= ""
                    onChange={handleChange}
                /> Dead
            </div>
            <input 
                className="bountyAmount"
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount"
            />
            <div className="jedi-sith">
                <input 
                    type="radio"
                    name="jedi"
                    value={inputs.jedi}
                    onChange={handleChange}
                    placeholder="Type"
                /> Jedi
                <input 
                    type="radio"
                    name="jedi"
                    value=""
                    onChange={handleChange}
                    placeholder="Type"
                /> Sith
            </div>
            <button className="addBounty-button">{ props.btnText }</button>
        </form>
    )
}