import React, { useState, useEffect } from "react"
import axios from "axios"
import Chart from 'react-google-charts'

export default function SalesData(props){
    
    const graphSales = props.graphSales
    const dataSet1 = props.dataSet1
    const dataSet2 = props.dataSet2
    console.log("graph sales" , graphSales)
    console.log("dataSet1",dataSet1)
    console.log("dataSet2",dataSet2)
 
    const graphLine = graphSales.map((sale) => [sale.day, sale.Units, sale.total_sales])
    const day = graphSales.map((sale) => sale.day)
    const num = day.length-1
    console.log("day",graphSales.map((sale) => sale.day))
    console.log("graph line", graphLine)
    console.log("testing1",`${graphSales[0].dataSet1}`)
    console.log("testing2",`${graphSales[0].dataSet2}`)
    // useEffect(()=> {
    //     graphLine.forEach((item) => lineData.push(item))
    // },[graphLine])

    
  

    
    const lineData = [
        ['x', dataSet1, dataSet2],
        
    ]
    const test = lineData.concat(graphLine)
    console.log("test", test)
    console.log("line data",lineData)
    
    const lineChartOptions = {
        legend: {
            position: 'top'
          },
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
                        data={test}
                        options={lineChartOptions}
                        rootProps={{ 'data-testid': '2' }}
                    />
                    
            </div>
        </div>
    )
}