import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'


const initInputs = { email: "", password: "" }

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login } = useContext(UserContext)

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
    <div className="auth-container">
      <div className="authSpacer"></div>
      <div className="flags">RTV</div>
      { toggle ?
        <>
          <AuthForm 
            className="authForm"
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign up"
          />
          <p className="member" onClick={() => setToggle(prev => !prev)}>Already a member?</p>
        </>
      :
        <>
          <AuthForm 
            className="authForm"
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
          />
          <p className="member" onClick={() => setToggle(prev => !prev)}>Not a member?</p>
        </>
      }
    </div>
  )
}