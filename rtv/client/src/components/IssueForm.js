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
    console.log('issues', inputs)
  }

  const { issue, comment, imgUrl } = inputs

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="issue" 
        value={issue} 
        onChange={handleChange} 
        placeholder="Issue"/>
      <input 
        type="text" 
        name="comment" 
        value={comment} 
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