import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider.js'
import { FaRegComments } from 'react-icons/fa'
import { BiLike } from 'react-icons/bi'
import { BiDislike } from 'react-icons/bi'
import { FaTrash } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import ProfileReplies from './ProfileReplies.js'
import ReplyForm from './ReplyForm.js'


export default function Issue(props){

  const { username, issue, comment, imgUrl, _id, likes, dislikes } = props
  const { deleteIssue, getReplies, profReplies, setProfReplies, addReply } = useContext(UserContext)

  const [commentClicked, setCommentClicked] = useState(false)
  const [viewCommentsClicked, setViewCommentsClicked] = useState(false)
  const [replyId, setReplyId] = useState("")

  //for adding a comment
  function clickComment(e){
    setCommentClicked(!commentClicked)
    setReplyId(_id)
    console.log(e)
  }
  //for viewing comments
  function viewComments(){
  getReplies(_id)
  setViewCommentsClicked(!viewCommentsClicked)
  }

  return (
    <div className="issue">
      <div className="issueIcons">
        <FaTrash className="trash" onClick={()=>deleteIssue(_id)} />
        <FaEdit className="edit"/>
      </div>
      <img src={imgUrl} alt={imgUrl} />
      <div>
        <h1 className="issueTitle">{ issue }</h1>
        <h3 className="issueComment"><strong>{ username } </strong> { comment }</h3>
        <div className="profileIcons">
        { !commentClicked ? 
                        <FaRegComments className="addComment" onClick={clickComment}/> 
                    : 
                        <div className="publicReplyForm">
                            <ReplyForm replyId={replyId} addReply={addReply} setCommentClicked={setCommentClicked} commentClicked={commentClicked}/>
                        </div>
                    }
          <div className="publicLikes">
              <div className="likeGroup">   
                  <BiLike className="thumbsUp" /*onClick={clickLike}*/ />
                  <h1 className="likes">{likes}</h1>
              </div> 
              <div className="dislikeGroup">
                  <BiDislike className="thumbsDown" /*onClick={clickDislike}*/ /> 
                  <h1 className="dislikes">{dislikes}</h1>
              </div>
          </div>
          {  viewCommentsClicked ?
            <div className="profileReplyContainer">
              <button onClick={viewComments}>Hide Comments</button>
              {profReplies.replies[_id] && profReplies.replies[_id].map(data => <ProfileReplies {...data} key={data._id} data={data}/>)}
            </div>
          :
            <div className="profileReplyContainer">
              <button onClick={viewComments}>Show Comments</button>
            </div>
          }
        </div>
        
      </div>
      
    </div>
  )
}