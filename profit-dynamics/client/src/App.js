import React, { useState, useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { UserContext } from "./context/UserProvider.js"
import Navbar from './components/Navbar.js'
import Sales from "./components/Sales.js"
import Home from "./components/Home.js"
import ProtectedRoute from './components/ProtectedRoute.js'

export default function App(){
  const { token, logout } = useContext(UserContext)
  
  return (
    <div className="appWrapper">
      { token && <Navbar logout={logout}/>}
      <Routes>
        <Route 
          path="/" 
          element={ token ? <Navigate to='/sales' /> : <Home />}/>
        <Route 
          path="/sales" 
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <Sales />
            </ProtectedRoute>
          }/>
      </Routes>
    </div>
  )

}