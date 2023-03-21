import React, {useState} from "react"

export default function AddDataForm(props){

const {addSale, viewAdd, setViewAdd} = props
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
        addSale(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="addForm">
                <h1 className="addTitle">Add Data Form</h1>
                <input 
                    className="addDay"
                    type="text"
                    name="day"
                    value={inputs.day}
                    onChange={handleChange}
                    placeholder="mm/dd/yyyy"
                />
                <input 
                    className="addOrders"
                    type="number"
                    name="orders"
                    value={inputs.orders}
                    onChange={handleChange}
                    placeholder="Orders"
                />
                <input 
                    className="addGrossSales"
                    type="number"
                    name="gross_sales"
                    value={inputs.gross_sales}
                    onChange={handleChange}
                    placeholder="Gross Sales"
                />
                <input 
                    className="addDiscounts"
                    type="number"
                    name="discounts"
                    value={inputs.discounts}
                    onChange={handleChange}
                    placeholder="Discounts"
                />
                <input 
                    className="addReturns"
                    type="number"
                    name="returns"
                    value={inputs.returns}
                    onChange={handleChange}
                    placeholder="Returns"
                />
                <input 
                    className="addNetSales"
                    type="number"
                    name="net_sales"
                    value={inputs.net_sales}
                    onChange={handleChange}
                    placeholder="Net Sales"
                />
                <input 
                    className="addShipping"
                    type="number"
                    name="shipping"
                    value={inputs.shipping}
                    onChange={handleChange}
                    placeholder="Shipping"
                />
                <input 
                    className="addTaxes"
                    type="number"
                    name="taxes"
                    value={inputs.taxes}
                    onChange={handleChange}
                    placeholder="Taxes"
                />
                <input 
                    className="addTotalSales"
                    type="number"
                    name="total_sales"
                    value={inputs.total_sales}
                    onChange={handleChange}
                    placeholder="Total Sales"
                />
                <input 
                    className="addUnitsPerTransaction"
                    type="number"
                    name="units_per_transaction"
                    value={inputs.units_per_transaction}
                    onChange={handleChange}
                    placeholder="Units per Transaction"
                />
                <input 
                    className="addUnits"
                    type="number"
                    name="Units"
                    value={inputs.Units}
                    onChange={handleChange}
                    placeholder="Units"
                />
                <div className="addButtons">
                    <button className="submitAdd">Submit</button>
                    <button
                        className="closeAdd" 
                        onClick={() => setViewAdd(false)}
                    > Close
                    </button>
                </div>
            </form>
        </div>
    )
}