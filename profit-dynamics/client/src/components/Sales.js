import React, { useEffect, useState } from "react"
import axios from "axios"


export default function Sales(props){
    
const [sales, setSales] = useState([])

//axios functions
  function getSales(){
    axios.get("/sales")
      .then(res => setSales(res.data))
      .catch(err => console.log(err.response.data.errMsg))
    console.log("working")
    console.log(sales)
  }
  function addSale(newSale){
    axios.post("/sales", newSale)
      .then(res => {
        setSales(prevSales => [...prevSales, res.data])
      })
      .catch(err => console.log(err))
  }
  function deleteSale(saleId){
    axios.delete(`/sales/${saleId}`)
      .then(res => {
        setSales(prevSales => prevSales.filter(sale => sale._id !== saleId))
      })
  }
  function editSale(updates, saleId){
    axios.put(`/sales/${saleId}`, updates)
      .then(res => {
        setSales(prevSales => prevSales.map(sale => sale._id !== saleId ? sale : res.data))
      })
      .catch(err => console.log(err))
    window.location.reload()
  }
  useEffect(() => {
    getSales()
    console.log("sales: ", sales)
  },[])
    

    return (
        <div className="salesWrapper">
            <img src="https://cdn.fansshare.com/pictures/wallpaperbackground/good-background-colors-free-wallpapers-color-photo-color-backgrounds-815378648.jpg" alt="" className="salesBackground"/>
        </div>
    )
}

