import React, { useState, useContext } from "react"
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'


const initInputs = { email: "", password: "" }

export default function Home(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)
  
    const { signup, login, logout } = useContext(UserContext)
  
    function handleChange(e){
      const {name, value} = e.target
      setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
      }))
    }
  
    function handleSignup(e){
      e.preventDefault()
      signup(inputs)
    }
  
    function handleLogin(e){
      e.preventDefault()
      login(inputs)
    }
  
    return (
        <div className="homeWrapper">
            <link href='https://fonts.googleapis.com/css?family=Varela' rel='stylesheet' type='text/css'></link>
            <img src="https://wallpaperaccess.com/full/732220.jpg" alt="" className="homeBackground"/>
            <div className="companyWrapper">
                <div className="companyName" data-text="Dynamic Development">Dynamic Development</div>
            </div>
        { toggle ?
            <div className="formContainer">
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleSignup}
                    inputs={inputs}
                    btnText="Sign up"
                    memberText="Already a member?"
                    toggle={toggle}
                    setToggle={setToggle}
                />
            </div>
        :
            <div className="formContainer">
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText="Login"
                    memberText="Not a member?"
                    toggle={toggle}
                    setToggle={setToggle}
                />
            </div>
        }
        </div>
    )
}