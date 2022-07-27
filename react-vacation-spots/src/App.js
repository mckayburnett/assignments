import React from "react"
import Header from "./Header"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import data from "./data"

export default function App() {
    const spots = data.map(spot=>{
        return (
            <Cards
            key = {spot.id}
            spot = {spot}
            />
        )
    }) 
    return (
        <div>
            <Header />
            {spots}
        </div>
    )
}