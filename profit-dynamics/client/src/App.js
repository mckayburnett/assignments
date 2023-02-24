import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Sales from "./components/Sales.js"
import Home from "./components/Home.js"

export default function App(){

  const [signInToggle, setSignInToggle] = useState(false)
  const [confirmToggle, setConfirmToggle] = useState()
  const [incorrectToggle, setIncorrectToggle] = useState(false)
  const [emails, setEmails] = useState([])
  const [passwords, setPasswords] = useState([])


  function handleChangeEmails(e){
    setEmails(e.target.value)
    console.log("emails: ", emails)
  }
  function handleChangePasswords(e){
    setPasswords(e.target.value)
    console.log("passwords: ", passwords)
  }
  function confirming(){
    if((emails === "mckay.burnett@gmail.com" && passwords === "macdaddy58") || (emails === "dyllan.m.phillips@gmail.com" && passwords === "bigd58")){
      setConfirmToggle(true)
    } else {
      setIncorrectToggle(true)
    }
  }
  function signIn(){
    setSignInToggle(false)
    setConfirmToggle(false)
    setEmails("")
    setPasswords("")
    incorrectToggle(false)
  }
  function signOut(){
    setSignInToggle(false)
    setConfirmToggle(false)
    setEmails("")
    setPasswords("")
    incorrectToggle(false)
  }
  function home(){
    setSignInToggle(false)
    setConfirmToggle(false)
    setEmails("")
    setPasswords("")
    incorrectToggle(false)
  }
  
console.log(emails)

  return (
    <div className="appWrapper">
      <nav className="navbar">
        <Link 
          to="/" 
          className="homeLink"
          onClick={home}
        >
          Home
        </Link>
        <Link 
          to="/" 
          className="signOutLink"
          onClick={signOut}
        >
          Sign Out
        </Link>
        <button 
          className="signInButton"
          onClick={() => setSignInToggle(true)}
        >
          Sign In
        </button>
      </nav>
      { signInToggle ?
        <div className="signInForm">
          <input 
            className="email"
            placeholder="Email Address"
            type="text"
            name="email"
            onChange={handleChangeEmails}
          />
          <input 
            className="password"
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChangePasswords}
          />
          { confirmToggle ?
          <div>
            <p className="credentials">Credentials Confirmed!</p>
            <Link 
            to="/sales" 
            className="signInLink"
            onClick={signIn}
            >
              Continue
            </Link>
          </div>
          :
          <button 
            className="confirmButton"
            onClick={confirming}
          >
            {incorrectToggle ?
            <p className="credentials2">Email or Password incorrect please try again</p>
            :
            <></>
          }
            Confirm
          </button>
          }
        </div>
      :
      <></>
      }
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sales" element={<Sales />}/>
      </Routes>
    </div>
  )

}