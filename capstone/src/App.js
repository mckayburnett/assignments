import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios'


export default function App() {
    function getData() {
        axios.get(`https://api.edamam.com/api/food-database`)
        .then(res => (res.data))
        .catch(error => console.log(error))
    }
    getData()
    return (
        <></>
    )
}