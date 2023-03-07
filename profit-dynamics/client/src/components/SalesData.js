import React, { useState, useEffect } from "react"
import axios from "axios"
import Chart from 'react-google-charts'

export default function SalesData(props){
    
    const graphSales = props.graphSales
    const dataSet1 = props.dataSet1
    const dataSet2 = props.dataSet2
    console.log(graphSales)
    console.log("dataSet1",dataSet1)
    console.log("dataSet2",dataSet2)

    const LineData = [
    ['x', `${dataSet1}`, `${dataSet2}`],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, 0],
    ]
    const LineData2 = [
        ['x', "Units", "Units"],
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
    const LineChartOptions2 = {
        legend: {
            position: 'top'
          },
        hAxis: {
            title: 'Date',
        },
        vAxes: {
            0: {title: "Units"},
            1: {title: "Units"}
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
                { dataSet1[0] && dataSet2[0] ?
                    <Chart
                        chartType="LineChart"
                        height={"600px"}
                        loader={<div>Loading Chart</div>}
                        data={LineData}
                        options={LineChartOptions}
                        rootProps={{ 'data-testid': '2' }}
                    />
                    :
                    <Chart
                        chartType="LineChart"
                        height={"600px"}
                        loader={<div>Loading Chart</div>}
                        data={LineData2}
                        options={LineChartOptions2}
                        rootProps={{ 'data-testid': '2' }}
                    />
                }   
            </div>
        </div>
    )
}