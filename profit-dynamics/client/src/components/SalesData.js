import React, { useState, useEffect } from "react"
import axios from "axios"

export default function SalesData(props){
    
    let { _id, Units, day, discounts, gross_sales, net_sales, orders, returns, shipping, taxes, total_sales, units_per_transaction } = props.sales
    
    
    
    return(
        <div className="salesDataWrapper">
            <h1 className="clientName">Finops</h1>
            <div className="dataWrapper">
                <h1 className="day">{  }</h1>
                <p className="orders"> {  }</p>
            </div>
        </div>
    )
}