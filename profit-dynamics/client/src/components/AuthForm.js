import React, { useState } from 'react'

export default function AuthForm(props){

  const { handleChange, handleSubmit, btnText, memberText, toggle, setToggle, inputs: { email, password } } = props
  
  return (
    <form onSubmit={handleSubmit} className="authForm">
        <label>
            <input 
                type="email" 
                value={email} 
                name="email" 
                onChange={handleChange} 
                placeholder="Email"
            />
        </label>
        <label>
            <input 
                type="password" 
                value={password} 
                name="password" 
                onChange={handleChange} 
                placeholder="Password"
            />
        </label>
      <button>{ btnText }</button>
      <p className="member" onClick={() => setToggle(!toggle)}>{memberText}</p>
    </form>
  )
}