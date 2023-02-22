import React, { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Sales from "./components/Sales.js"
import Home from "./components/Home.js"

export default function App(){

  const [sales, setSales] = useState([])

  function getSales(){
    axios.get("/sales")
      .then(res => setSales(res.data))
      .catch(err => console.log(err.response.data.errMsg))
    console.log("working")
    console.log(sales[0])
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
  
  return (
    <div className="appWrapper">
      <nav className="navbar">
        <Link to="/" className="homeLink">
          Home
        </Link>
        <Link to="/" className="signOutLink">
          Sign Out
        </Link>
      </nav>
      <div className="signIn">
        <Link to="/sales" className="signInLink">
          Sign In
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sales" element={<Sales />}/>
      </Routes>
    </div>
  )

}