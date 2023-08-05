import React, { useContext, useState } from 'react'
import { PublicContext } from '../context/PublicProvider.js'
import { UserContext } from '../context/UserProvider.js'

export default function ReplyForm(props){

  const { replyId, addReply, setCommentClicked, commentClicked } = props
  const [id, setId] = useState("")
  const [reply, setReply] = useState([])

  function handleChange(e){
    setId(replyId)
    setReply(
      [e.target.value]
    )
  }

  function handleSubmit(e){
    e.preventDefault()
    addReply(reply, id)
    setReply([])
  }

    return(
      <form className="replyForm" onSubmit={handleSubmit}>
        <textarea 
          className="replyInput"
          type="text" 
          name="reply" 
          value={reply} 
          onChange={handleChange} 
          placeholder="Reply here"
        />
        <button className="replyCancel" type="button" onClick={() => setCommentClicked(!commentClicked)}>Cancel</button>
        <button className="replyPost" type="button" onClick={handleSubmit}>Post</button>
      </form>
    )
}