import React, { useState } from 'react'

const initInputs = {
  issue: "",
  comment: "",
  imgUrl: ""
}

export default function TodoForm(props){

  const { addIssue } = props

  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
  }

  const { title, description, imgUrl } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="issue" 
        value={title} 
        onChange={handleChange} 
        placeholder="Issue"/>
      <input 
        type="text" 
        name="comment" 
        value={description} 
        onChange={handleChange} 
        placeholder="Comment"/>
      <input 
        type="text" 
        name="imgUrl" 
        value={imgUrl} 
        onChange={handleChange} 
        placeholder="Image Url (optional)"/>
      <button>Add Issue</button>
    </form>
  )
}