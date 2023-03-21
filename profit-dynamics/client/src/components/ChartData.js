import React, { useState, useEffect } from "react"
import axios from "axios"
import Chart from 'react-google-charts'

export default function ChartData(props){
    
    const graphSales = props.graphSales
    const dataSet1 = props.dataSet1
    const dataSet2 = props.dataSet2

    console.log("testing123", props.sales)

    const [edit, setEdit] = useState(false)
    function handleEdit(){
        setEdit(true)
    }

    const [color1, setColor1] = useState()
    const [color2, setColor2] = useState()
    function handleColor1(e){
        setColor1(e.target.value)
    }
    function handleColor2(e){
        setColor2(e.target.value)
    }

    const [chart, setChart] = useState()
    function handleChart(e){
        setChart(e.target.value)
    }

    const [radio, setRadio] = useState([])
    function handleChangeRadio(e){
        setRadio(e.target.value)
    }

    console.log("graph sales" , graphSales)
    console.log("dataSet1",dataSet1)
    console.log("dataSet2",dataSet2)
 
    const graphLine = graphSales.map((sale) => [sale.day, sale[dataSet1], sale[dataSet2]])
    const graphLine2 = graphSales.map((sale) => [sale.day, sale[dataSet1], parseFloat((sale[dataSet2]/sale[dataSet1]))])
    
    const lineData = [
        ['x', dataSet1, dataSet2],

    ]
    const newLineData = radio==="percentage" ? lineData.concat(graphLine2) : lineData.concat(graphLine)

    let lineColors = color1 || color2 ? [`${color1||"red"}`, `${color2||"blue"}`] : ["red", "blue"]
    
    
    const lineChartOptions = {
        legend: {
            position: 'top'
          },
        colors: 
             lineColors
        ,
        hAxis: {
            title: 'Date',
        },
        vAxes: {
            0: {title: `${dataSet1||0}`},
            1: {title: `${dataSet2||1}`}
        },
        series: {
            0: {targetAxisIndex:0},
            1: {targetAxisIndex:1}

        },
        animation: {
            duration: 500,
            easing: 'in',
            startup: true
        }
    }

    console.log("testing testing", lineChartOptions.vAxes)

    return(
        <div className="salesDataWrapper">
            
            <div className="dataWrapper">
                {graphSales[1] ? <h1 className="day">{graphSales[0].day} - {graphSales[graphSales.length-1].day}</h1> : <h1 className="day">Date</h1>}
            </div>
            <div className="graphContainer">
                <Chart
                    chartType={chart ? chart : "LineChart"}
                    height={"600px"}
                    loader={<div>Loading Chart</div>}
                    data={newLineData}
                    options={lineChartOptions}
                    rootProps={{ 'data-testid': '2' }}
                    
                />
                <button 
                    className="customizeButton" 
                    onClick={handleEdit}
                >Customize Graph
                </button>
            </div>
            {
            edit ?
            <draggable> 
                <div className="customizeBox">Customization
                    <p className="line1">Line 1 Color</p>
                    <p className="line2">Line 2 Color</p>
                    <input className="colors1" type='color' onChange={handleColor1}></input>
                    <input className="colors2" type='color' onChange={handleColor2}></input>
                    <select className="chartType" onChange={handleChart}>
                        <option value="">--Chart Type--</option>
                        <option value="LineChart">Line Chart</option>
                        <option value="BarChart">Bar Chart</option>
                        <option value="AreaChart">Area Chart</option>
                        <option value="ColumnChart">Column Chart</option>
                    </select>
                    <div className="radioButtons">
                        <input
                            className="integer"
                            type="radio"
                            name="type"
                            value="integer"
                            onChange={handleChangeRadio}
                            placeholder="Type"
                        />Integer
                        <input
                            className="percentage"
                            type="radio"
                            name="type"
                            value="percentage"
                            onChange={handleChangeRadio}
                            placeholder="Type"
                        />Percentage (Data Set 2 of Data Set 1)
                    </div>
                    <button className="closeButton" onClick={() => setEdit(false)}>Close</button>
                </div>
            </draggable>
                :
                <></>
            }
        </div>
    )
}