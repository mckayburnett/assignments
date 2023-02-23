import React, { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Sales from "./components/Sales.js"
import Home from "./components/Home.js"

export default function App(){

  const [sales, setSales] = useState([])
  const [signInToggle, setSignInToggle] = useState(false)
  const [confirmToggle, setConfirmToggle] = useState()
  const [incorrectToggle, setIncorrectToggle] = useState(false)
  const [emails, setEmails] = useState([])
  const [passwords, setPasswords] = useState([])

//axios functions
  function getSales(){
    axios.get("/sales")
      .then(res => setSales(res.data))
      .catch(err => console.log(err.response.data.errMsg))
    console.log("working")
    console.log(sales)
  }
  function addSale(newSale){
    axios.post("/sales", newSale)
      .then(res => {
        setSales(prevSales => [...prevSales, res.data])
      })
      .catch(err => console.log(err))
  }
  function deleteSale(saleId){
    axios.delete(`/sales/${saleId}`)
      .then(res => {
        setSales(prevSales => prevSales.filter(sale => sale._id !== saleId))
      })
  }
  function editSale(updates, saleId){
    axios.put(`/sales/${saleId}`, updates)
      .then(res => {
        setSales(prevSales => prevSales.map(sale => sale._id !== saleId ? sale : res.data))
      })
      .catch(err => console.log(err))
    window.location.reload()
  }
  useEffect(() => {
    getSales()
  },[])
  
//other functions
  function handleChangeEmails(e){
    setEmails(e.target.value)
    console.log("emails: ", emails)
  }
  function handleChangePasswords(e){
    setPasswords(e.target.value)
    console.log("passwords: ", passwords)
  }
  function confirming(){
    if((emails === "mckay.burnett@gmail.com" && passwords === "macdaddy58") || (emails === "dyllan.m.phillips@getMaxListeners.com" && passwords === "bigd58")){
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