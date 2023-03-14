import React, { useState, useEffect } from "react"
import axios from "axios"

export default function SalesData(props){

const { viewChart, day, Units, discounts, orders, gross_sales, net_sales, returns, shipping, taxes, total_sales, units_per_transaction } = props


    return (
        <div className="salesDataContainer">
            <p>{ day }</p>
            <p>{ orders }</p>
            <p>{ gross_sales }</p>
            <p>{ discounts }</p>
            <p>{ returns }</p>
            <p>{ net_sales }</p>
            <p>{ shipping }</p>
            <p>{ taxes }</p>
            <p>{ total_sales }</p>
            <p>{ units_per_transaction }</p>
            <p>{ Units }</p>
        </div>
    )

}