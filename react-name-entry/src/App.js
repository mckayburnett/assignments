import React, {useState} from "react"
import ReactDOM from "react-dom"

export default function App() {
    const nameArray = []
    
    const [form, setForm] = useState("")
    
    const [nameList, setNameList] = useState(nameArray)
    
    
   
    function handleChange(event){
        
        const {name, value} = event.target
        
        setForm(prevForm => {
            return {
                ...prevForm, 
                [name]: value
            }
        })
    }
    
    function handleSubmit(event){
        event.preventDefault()
        
        setNameList(prevNameList => [...prevNameList, form.inputNames]) // adding to running list
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Enter Name"
                onChange={handleChange}
                name="inputNames"
                className="input"
            />
            <h1 className="h1">{form.inputNames}</h1>
            <button className="button">Click to Submit</button>
            <ol>
                {nameList.map((name, index) => {
                    return <li key={index}>{name}</li>
                })}
            </ol>
        </form>
    )
}