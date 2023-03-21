import React, { useState, useEffect } from "react"
import axios from "axios"
import EditSales from "./EditSales"
import AddDataForm from "./AddDataForm"

export default function SalesData(props){

const { deleteSale, viewChart, day, Units, discounts, orders, gross_sales, net_sales, returns, shipping, taxes, total_sales, units_per_transaction, _id, editSale, addSale, viewAdd, setViewAdd } = props

const [editToggle, setEditToggle] = useState(false)

    return (
        <div>
            { !editToggle ? 
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
                    <div className="editDelete">
                        <button className="salesEdit" onClick={() => setEditToggle(true)}>Edit</button>
                        <button className="salesDelete" onClick={() => deleteSale(_id, console.log(_id))}>Delete</button>
                    </div>
                </div>
            :
            <div className="editSales">
                < EditSales 
                    editSale={editSale}
                    day={day}
                    orders={orders}
                    gross_sales={gross_sales}
                    discounts={discounts}
                    returns={returns}
                    net_sales={net_sales}
                    shipping={shipping}
                    taxes={taxes}
                    total_sales={total_sales}
                    units_per_transaction={units_per_transaction}
                    Units={Units}
                    _id={_id}
                    editToggle={editToggle}
                    setEditToggle={setEditToggle}
                />
                
            </div>
            }
        </div>
    )

}