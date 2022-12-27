import React, {useState} from "react"

export default function AddMovieForm(props){

    const initInputs = { title: props.title || "", genre: props.genre || "" }
    const [inputs, setIntputs] = useState(initInputs)

    function handleChange(e){
        const { name, value } = e.target
        setIntputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setIntputs(initInputs)
    }
    console.log('props.btntext', props.btnText)
    console.log('props', props)
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={inputs.title} 
                onChange={handleChange}
                placeholder="title"
            />
            <input 
                type="text" 
                name="genre" 
                value={inputs.genre} 
                onChange={handleChange}
                placeholder="genre"
            />
            <button>{ props.btnText }</button>
        </form>
    )
}