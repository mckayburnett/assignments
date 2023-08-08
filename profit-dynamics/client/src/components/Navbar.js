import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
  const { logout } = props
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