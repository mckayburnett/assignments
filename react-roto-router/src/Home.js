import React, {useState} from "react"
import {useNavigate} from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    const [inputs, setInputs] = useState([
        {
            firstName:"",
            lastName:"",
            number:"",
            date:"",
            email:"",
            text:""  
        }
    ])

    function clear(){
        setInputs(
            {
            firstName:"",
            lastName:"",
            number:"",
            date:"",
            email:"",
            text:""
            }
        )
    }
    function submitted(){
        setInputs(
            {
            firstName:"",
            lastName:"",
            number:"",
            date:"",
            email:"",
            text:`SUCCESSFULLY SUBMITTED`
            }
        )
    }
    return (
        <div className="homeWrapper" >
            <img src="https://i1.sndcdn.com/artworks-SrrZpOVFI1CzNPuQ-bHYZGA-t500x500.jpg" alt="castle" className="castle"/>
            <div className="inputs">
                <input 
                    className="firstName"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={inputs.firstName}
                />
                <input
                    className="lastName"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={inputs.lastName}
                />
                <input
                    className="number"
                    type="tel"
                    placeholder="Phone Number"
                    name="number"
                    value={inputs.number}
                />
                <input
                    className="date"
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={inputs.date}
                />
                <input 
                    className="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={inputs.email}
                />
                <textarea 
                    className="text"
                    type="text"
                    placeholder="Description of service needed"
                    name="text"
                    value={inputs.text}
                />
                <button className="submit" onClick={submitted}>Submit</button>
                <button className="clear" onClick={clear}>Clear</button>
            </div>
            <h1 className="home--top">Plumbing services in the greater Mushroom Kingdom area</h1>
            <h2 className="home--description">The one thing all residences need is good plumbing. Whether it's repairs, installations, or getting rid of those pesty Bowsers, the Mario Brothers have you covered at Mario Bros. Plumbing!</h2>
            <h2 className="home--contact">Need urgent plumbing? Contact us 7 days a week 24 hours a day! Call (801)555-1234 or set an appointment on the right of your screen!</h2>
        </div>
    )
}