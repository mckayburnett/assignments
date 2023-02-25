import React, { useState, useEffect } from "react"
import axios from "axios"

export default function SalesData(props){

    const day = []
    const discounts = []
    const grossSales = []
    const netSales = []
    const orders = []
    const returns = []
    const shipping = []
    const taxes = []
    const totalSales = []
    const unitsPerTransaction = []

    console.log("test: ", props.sales)

    function push(){
        for(let i = 0; i < props.sales.length; i++){
            day.push(props[i].day)
            discounts.push(props[i].discounts)
            grossSales.push(props[i].gross_sales)
            netSales.push(props[i].net_sales)
            orders.push(props[i].orders)
            returns.push(props[i].returns)
            shipping.push(props[i].shipping)
            taxes.push(props[i].taxes)
            totalSales.push(props[i].total_sales)
            unitsPerTransaction.push(props[i].units_per_transaction)
        }
    }
    push()
    console.log(day)
    
    
    return(
        <div className="salesDataWrapper">
            <h1 className="clientName">Finops</h1>
            <div className="dataWrapper">
                <h1 className="day">{ day[0] }</h1>
                <p className="orders"> { orders[0] }</p>
            </div>
        </div>
    )
}