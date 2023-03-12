import React, { useState, useEffect } from "react"
import axios from "axios"
import Chart from 'react-google-charts'

export default function SalesData(props){
    
    const graphSales = props.graphSales
    const dataSet1 = props.dataSet1
    const dataSet2 = props.dataSet2

//const edit = false
//const edit = useState(false) => false, fx()
//const [edit, setEdit] = useState(false)

    const [edit, setEdit] = useState(false)
    function handleEdit(){
        setEdit(true)
        console.log(edit)
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
    console.log("graph line", graphLine)

    const graphLine2 = graphSales.map((sale) => [sale.day, sale[dataSet1], parseFloat((sale[dataSet2]/sale[dataSet1]))])
    console.log("test",graphLine2)
    
    const lineData = [
        ['x', dataSet1, dataSet2],

    ]
    const newLineData = radio==="percentage" ? lineData.concat(graphLine2) : lineData.concat(graphLine)
    
    console.log("new line data", newLineData)
    
    
    const lineChartOptions = color1 && color2 ? {
        legend: {
            position: 'top'
          },
        colors: 
             [`${color1}`, `${color2}`]
        ,
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
    :
    {
    legend: {
        position: 'top'
      },
    colors: 
         ["red", "blue"]
    ,
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
                        chartType={chart ? chart : "LineChart"}
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
            {
            edit ? 
                <div className="customizeBox">Customization
                    <select className="colors1" onChange={handleColor1}>
                        <option value="">--Line 1 Color--</option> 
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="black">Black</option>
                        <option value="yellow">Yellow</option>
                    </select>
                    <select className="colors2" onChange={handleColor2}>
                        <option value="">--Line 2 Color--</option>                        
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="black">Black</option>
                        <option value="yellow">Yellow</option>
                    </select>
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
                :
                <></>
            }
        </div>
    )
}