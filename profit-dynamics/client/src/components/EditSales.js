import React, { useState, useEffect } from "react"
import axios from "axios"
import { PromiseProvider } from "mongoose"

export default function EditSales(props){

    const initInputs = {
        day: props.day || "",
        orders: props.orders || "",
        gross_sales: props.gross_sales || "",
        discounts: props.discounts || "",
        returns: props.returns || "",
        net_sales: props.net_sales || "",
        shipping: props.shipping || "",
        taxes: props.taxes || "",
        total_sales: props.total_sales || "",
        units_per_transaction: props.units_per_transaction || "",
        Units: props.Units || ""
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        console.log(e.target.value)
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    function handleSubmit(e){
        e.preventDefault()
        props.editSales(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                className="day"
                type="text"
                name="day"
                value={inputs.day}
                onChange={handleChange}
                placeHolder="mm/dd/yyyy"
            />
            <input 
                className="orders"
                type="text"
                name="orders"
                value={inputs.day}
                onChange={handleChange}
                placeHolder="mm/dd/yyyy"
            />
        </form>

    )
}