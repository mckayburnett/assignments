import React, {useState} from "react"
import axios from "axios"

const Context = React.createContext()

function ContextProvider(props){
    const initInput = {
        input1:"",
        input2:""
    }
    const [inputs, setInputs] = useState(initInput)
    const [save, setSave] = useState([])

    function saveName(e){
        e.preventDefault()
        //const {name, value} = e.target
        //setInputs({
        //    [name]: value
        //})
        setSave(prev =>({
            ...prev,
            inputs
        }))
        console.log(inputs.input1, inputs.input2, "save function")

    }
    console.log(save, "save")
    
    function handleChange(e){
        const {name, value} = e.target
        setInputs(newInput => ({...newInput, [name]:value }))
    }

    return(
        <Context.Provider value={{
            inputs,
            setInputs,
            saveName,
            save,
            handleChange
        }}
        >
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}