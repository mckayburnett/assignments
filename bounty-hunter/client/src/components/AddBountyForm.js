import React, { useState } from "react"

export default function AddBountyForm(props){
    
    const initInputs = {
        firstName: props.firstName || "", 
        lastName: props.lastName || "", 
        living: props.living || "", 
        bountyAmount: props.bountyAmount || "", 
        type: props.type || ""
}

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        console.log(e.target.value)
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    // function radioChange(e){
    //     const { value } = e.target
    //     console.log(value)
    //     setInputs(prevInputs => {
    //         return {
    //             ...prevInputs, 
    //             living: value
    //         }
    //     })
    // }

    // function typeChange(e){
    //     const { value } = e.target
    // }

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
                    value= "alive"
                    onChange={handleChange}
                /> Living
                <input 
                    type="radio"
                    name="living"
                    value= "dead"
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
                    name="type"
                    value="jedi"
                    onChange={handleChange}
                    placeholder="Type"
                /> Jedi
                <input 
                    type="radio"
                    name="type"
                    value="sith"
                    onChange={handleChange}
                    placeholder="Type"
                /> Sith
            </div>
            <button className="addBounty-button">{ props.btnText }</button>
        </form>
    )
}