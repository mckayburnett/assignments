import React, { useState, useEffect } from "react"
import axios from "axios"

export default function SalesData(props){
    
    const graphSales = props.graphSales
    console.log(graphSales)
    
    return(
        <div className="salesDataWrapper">
            <h1 className="clientName">Finops</h1>
            <div className="dataWrapper">
                {graphSales[1] ? <h1 className="day">{graphSales[0].day} - {graphSales[graphSales.length-1].day}</h1> : <h1 className="day">Date</h1>}
                <p className="orders"> {  }</p>
            </div>
        </div>
    )
}