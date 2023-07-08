import React, { useState } from 'react'

const initInputs = {
  issue: "",
  comment: "",
  imgUrl: ""
}

export default function IssueForm(props){

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

  const { issue, comment, imgUrl } = inputs

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Issue</h1>
      <input 
        className="inputImg"
        type="text" 
        name="imgUrl" 
        value={imgUrl} 
        onChange={handleChange} 
        placeholder="Image Url (optional)"/>
      <input 
        className="inputTitle"
        type="text" 
        name="issue" 
        value={issue} 
        onChange={handleChange} 
        placeholder="Issue Title"/>
      <textarea 
        className="inputComment"
        type="text" 
        name="comment" 
        value={comment} 
        onChange={handleChange} 
        placeholder="Comment"/>
      <button>Post</button>
    </form>
  )
}