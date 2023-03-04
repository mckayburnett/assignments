import React, { useEffect, useState } from "react"
import axios from "axios"
import SalesData from "./SalesData"


export default function Sales(props){
    
const [sales, setSales] = useState([])
const [dateOne, setDateOne] = useState([])
const [dateTwo, setDateTwo] = useState([])
const [graphSales, setGraphSales] = useState([])

//axios functions
  function getSales(){
    axios.get("/sales")
      .then(res => setSales(res.data))
      .catch(err => console.log(err.response.data.errMsg))
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
    //console.log("sales: ", sales)
  },[])

  function handleChange1(e){
    // console.log("date: ",e.target.value)
    setDateOne(Date.parse(e.target.value))
  }
  function handleChange2(e){
    // console.log("date: ",e.target.value)
    setDateTwo(Date.parse(e.target.value))
  }
  
  //my baby
  useEffect(() => {
    setGraphSales(sales.filter(sale => Date.parse(sale.day) <= dateTwo && Date.parse(sale.day) >= dateOne))
  }, [dateOne, dateTwo])
  
  console.log(graphSales)
  
  
  
    return (
        <div className="salesWrapper">
            <img src="https://cdn.fansshare.com/pictures/wallpaperbackground/good-background-colors-free-wallpapers-color-photo-color-backgrounds-815378648.jpg" alt="" className="salesBackground"/>
          <div className="dates">
            <p className="drop1Title">--Starting Date--</p> 
            <p className="drop2Title">--Ending Date--</p>
            <select className="dropDown1" onChange={handleChange1}>
              {sales.map((sale) => <option value={sale.day}>{sale.day}</option>)}
            </select>
            <select className="dropDown2" onChange={handleChange2}>
              {sales.map((sale) => <option value={sale.day}>{sale.day}</option>)}
            </select>
          </div>
              <SalesData 
                  graphSales={graphSales}
              />
        </div>
    )
}

