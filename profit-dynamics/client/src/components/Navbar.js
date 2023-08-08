import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider.js'

export default function Navbar(props){
  
    const { logout } = useContext(UserContext)

  return (
    <>
    <div className="navbar">
      <Link to="/home" className="navHome">Home</Link>
      <Link to="/sales" className="navSales">Sales</Link>
      <h1 className="navLog" onClick={ logout }>Logout</h1>
    </div>
    <div className="spacer">
      &nbsp;
    </div>
    </>
  )
}