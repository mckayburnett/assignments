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
                    className="editDay"
                    type="text"
                    name="day"
                    value={inputs.day}
                    onChange={handleChange}
                    placeholder="mm/dd/yyyy"
                />
                <input 
                    className="editOrders"
                    type="text"
                    name="orders"
                    value={inputs.orders}
                    onChange={handleChange}
                    placeholder="Orders"
                />
                <input 
                    className="grossSales"
                    type="number"
                    name="gross_sales"
                    value={inputs.gross_sales}
                    onChange={handleChange}
                    placeholder="Gross Sales"
                />
                <input 
                    className="discounts"
                    type="number"
                    name="discounts"
                    value={inputs.discounts}
                    onChange={handleChange}
                    placeholder="Discounts"
                />
                <input 
                    className="returns"
                    type="number"
                    name="returns"
                    value={inputs.returns}
                    onChange={handleChange}
                    placeholder="Returns"
                />
                <input 
                    className="netSales"
                    type="number"
                    name="net_sales"
                    value={inputs.net_sales}
                    onChange={handleChange}
                    placeholder="Net Sales"
                />
                <input 
                    className="shipping"
                    type="number"
                    name="shipping"
                    value={inputs.shipping}
                    onChange={handleChange}
                    placeholder="Shipping"
                />
                <input 
                    className="taxes"
                    type="number"
                    name="taxes"
                    value={inputs.taxes}
                    onChange={handleChange}
                    placeholder="Taxes"
                />
                <input 
                    className="totalSales"
                    type="number"
                    name="total_sales"
                    value={inputs.total_sales}
                    onChange={handleChange}
                    placeholder="Total Sales"
                />
                <input 
                    className="unitsPerTransaction"
                    type="number"
                    name="units_per_transaction"
                    value={inputs.units_per_transaction}
                    onChange={handleChange}
                    placeholder="Units per Transaction"
                />
                <input 
                    className="units"
                    type="number"
                    name="Units"
                    value={inputs.Units}
                    onChange={handleChange}
                    placeholder="Units"
                />
                <button className="submitEdit">Submit</button>
            </form>
    )
}