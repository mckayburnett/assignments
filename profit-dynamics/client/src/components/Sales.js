import React, { useEffect, useState } from "react"
import axios from "axios"
import ChartData from "./ChartData"
import SalesData from "./SalesData"
import AddDataForm from "./AddDataForm"


export default function Sales(props){
    
  const [sales, setSales] = useState([])
  const [dateOne, setDateOne] = useState([])
  const [dateTwo, setDateTwo] = useState([])
  const [graphSales, setGraphSales] = useState([])
  const [dataSet1, setDataSet1] = useState([])
  const [dataSet2, setDataSet2] = useState([])
  const [viewAdd, setViewAdd] = useState(false)
  const [viewChart, setViewChart] = useState(true)
  const [generate, setGenerate] = useState(false)
  function toggleChart(){
    setViewChart(false)
}

  const userAxios = axios.create()
  userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
  })


//axios functions
  function getSales(){
    userAxios.get("/api/sales")
      .then(res => setSales(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }
  function addSale(newSale){
    userAxios.post("/api/sales", newSale)
      .then(res => {
        setSales(prevSales => [...prevSales, res.data])
      })
      .catch(err => console.log(err))
  }
  function deleteSale(saleId){
    userAxios.delete(`/api/sales/${saleId}`)
      .then(res => {
        setSales(prevSales => prevSales.filter(sale => sale._id !== saleId))
      })
      .catch(err => console.log(err))
  }
  function editSale(updates, saleId){
    userAxios.put(`/api/sales/${saleId}`, updates)
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

  function handleChange1(e){
    // console.log("date: ",e.target.value)
    setDateOne(Date.parse(e.target.value))
  }
  function handleChange2(e){
    // console.log("date: ",e.target.value)
    setDateTwo(Date.parse(e.target.value))
  }
  function handleChange3(e){
    setDataSet1(e.target.value)
  }
  function handleChange4(e){
    setDataSet2(e.target.value)
  }
  
const mappedDates = sales.map((sale) => sale.day).sort((a, b) => a > b ? 1 : -1)
const dropdownDates = mappedDates.map((sale) => <option value={sale}>{sale}</option>)

  //my baby
  useEffect(() => {
    setGraphSales(sales.filter(sale => Date.parse(sale.day) <= dateTwo && Date.parse(sale.day) >= dateOne).sort((a, b) => a.day > b.day ? 1 : -1))
  }, [dateOne, dateTwo])
  



    return (
        <div className="salesWrapper">
            <img src="https://cdn.fansshare.com/pictures/wallpaperbackground/good-background-colors-free-wallpapers-color-photo-color-backgrounds-815378648.jpg" alt="" className="salesBackground"/>
          <div className="dates">
            <p className="drop1Title">--Starting Date--</p> 
            <p className="drop2Title">--Ending Date--</p>
            <p className="drop3Title">--Data Set 1--</p>
            <p className="drop4Title">--Data Set 2--</p>
            <select className="dropDown1" onChange={handleChange1}>
              {dropdownDates}
            </select>
            <select className="dropDown2" onChange={handleChange2}>
              {dropdownDates}
            </select>
            <select className="dropDown3" onChange={handleChange3}>
              <option value=""></option>
              <option value="Units">Units</option>
              <option value="discounts">Discounts</option>
              <option value="gross_sales">Gross Sales</option>
              <option value="net_sales">Net Sales</option>
              <option value="orders">Orders</option>
              <option value="returns">Returns</option>
              <option value="shipping">Shipping</option>
              <option value="taxes">Taxes</option>
              <option value="total_sales">Total Sales</option>
              <option value="units_per_transaction">Units per Transaction</option>
            </select>
            <select className="dropDown4" onChange={handleChange4}>
              <option value=""></option>
              <option value="Units">Units</option>
              <option value="discounts">Discounts</option>
              <option value="gross_sales">Gross Sales</option>
              <option value="net_sales">Net Sales</option>
              <option value="orders">Orders</option>
              <option value="returns">Returns</option>
              <option value="shipping">Shipping</option>
              <option value="taxes">Taxes</option>
              <option value="total_sales">Total Sales</option>
              <option value="units_per_transaction">Units per Transaction</option>
            </select>
            { !generate ?
              <button className="generateButton" onClick={() =>setGenerate(true)}>Generate Chart</button>
              :
              <button className="generateButton" onClick={() =>setGenerate(false)}>Remove Chart</button>
            }
          </div>
        { viewChart && generate ? 
          <button onClick={toggleChart} className="toggleChartButton">View/Manipulate Data</button>
          : generate ? 
          <button onClick={() => setViewChart(true)} className="toggleChartButton2">Back to Chart</button>
          :
          <></>
        }
        { viewAdd && 
              <AddDataForm 
                  addSale={addSale}
                  viewAdd={viewAdd}
                  setViewAdd={setViewAdd}
              />
            }
          { viewChart ? 
            <></>
          :
            <div className="titles">
              <h3>Date</h3>
              <h3>Orders</h3>
              <h3>Gross Sales</h3>
              <h3>Discounts</h3>
              <h3>Returns</h3>
              <h3>Net Sales</h3>
              <h3>Shipping</h3>
              <h3>Taxes</h3>
              <h3>Total Sales</h3>
              <h3>Units per Transaction</h3>
              <h3>Units</h3>
              <button className="addData" onClick={() => setViewAdd(true)}>Add Data</button>
            </div>
          }
          
            { viewChart && generate ? 
              <ChartData 
                  graphSales={graphSales}
                  dataSet1={dataSet1}
                  dataSet2={dataSet2}
                  sales={sales}
              />
              : generate ?
              graphSales.map(sale =>
              <SalesData
                  {...sale}
                  getSales={getSales}
                  addSale={addSale}
                  deleteSale={deleteSale}
                  editSale={editSale}
                  graphSales={graphSales}
                  viewChart={viewChart}
                  viewAdd={viewAdd}
                  setViewAdd={setViewAdd}
              />)
              :
              <></> 
            }
            

        </div>
    )
}

