import React, { useState, useEffect } from "react"
import axios from "axios"
import Chart from 'react-google-charts'

export default function SalesData(props){
    
    const graphSales = props.graphSales
    const dataSet1 = props.dataSet1
    const dataSet2 = props.dataSet2
    const radio = props.radio

    const [edit, setEdit] = useState(false)
    function handleEdit(){
        setEdit(true)
        console.log(edit)
    }

    console.log("graph sales" , graphSales)
    console.log("dataSet1",dataSet1)
    console.log("dataSet2",dataSet2)
 
    const graphLine = graphSales.map((sale) => [sale.day, sale[dataSet1], sale[dataSet2]])
    console.log("graph line", graphLine)

    const graphLine2 = graphSales.map((sale) => [sale.day, sale[dataSet1], parseFloat((sale[dataSet2]/sale[dataSet1]))])
    console.log("test",graphLine2)
    
    const lineData = [
        ['x', dataSet1, dataSet2],

    ]
    const newLineData = radio==="percentage" ? lineData.concat(graphLine2) : lineData.concat(graphLine)
    
    console.log("new line data", newLineData)
    
    const lineChartOptions = {
        legend: {
            position: 'top'
          },
        // colors: 
        //     ['red', 'blue']
        // ,
        hAxis: {
            title: 'Date',
        },
        vAxes: {
            0: {title: `${dataSet1}`},
            1: {title: `${dataSet2}`}
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
    

    return(
        <div className="salesDataWrapper">
            <h1 className="clientName">Dynamic Development</h1>
            <div className="dataWrapper">
                {graphSales[1] ? <h1 className="day">{graphSales[0].day} - {graphSales[graphSales.length-1].day}</h1> : <h1 className="day">Date</h1>}
            </div>
            <div className="graphContainer">
                
                    <Chart
                        chartType="LineChart"
                        height={"600px"}
                        loader={<div>Loading Chart</div>}
                        data={newLineData}
                        options={lineChartOptions}
                        rootProps={{ 'data-testid': '2' }}
                    />
            </div>
            <button 
                className="customizeButton" 
                onClick={handleEdit}
            >Customize Graph
            </button>
        </div>
    )
}