import React from 'react'

export default function AuthForm(props){
  const {
    handleChange, 
    handleSubmit, 
    btnText, 
    inputs: {
      email, 
      password
    } 
  } = props
  
  return (
    <form onSubmit={handleSubmit} className="authForm">
      <input 
        type="text" 
        value={email} 
        name="email" 
        onChange={handleChange} 
        placeholder="Email"/>
      <input 
        type="password" 
        value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password"/>
      <button className="signUpIn">{ btnText }</button>
    </form>
  )
}