import React, { useState, useEffect } from "react"
import axios from "axios"

export default function SalesData(props){

let { getSales, addSale, editSale, deleteSale, graphSales, viewChart } = props

console.log("sales data",graphSales.day)


    return (
        <div className="salesDataContainer">
            {graphSales.map((sale) => <h1>{sale.day}</h1>)}
        </div>
    )

}