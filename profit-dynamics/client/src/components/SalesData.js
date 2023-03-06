import React, { useState, useEffect } from "react"
import axios from "axios"
import Chart from 'react-google-charts'

export default function SalesData(props){
    
    const graphSales = props.graphSales
    console.log(graphSales)
    
    const LineData = [
    ['x', 'dogs', 'cats'],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, 0],
    ]
    const LineChartOptions = {
    hAxis: {
        title: 'Time',
    },
    vAxis: {
        title: 'Popularity',
    },
    series: {
        1: { curveType: 'function' },
    },
    }

    return(
        <div className="salesDataWrapper">
            <h1 className="clientName">Finops</h1>
            <div className="dataWrapper">
                {graphSales[1] ? <h1 className="day">{graphSales[0].day} - {graphSales[graphSales.length-1].day}</h1> : <h1 className="day">Date</h1>}
            </div>
            <div className="graphContainer">
                <Chart
                    chartType="LineChart"
                    height={"600px"}
                    loader={<div>Loading Chart</div>}
                    data={LineData}
                    options={LineChartOptions}
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        </div>
    )
}