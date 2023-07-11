import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'
import { FaRegComments } from 'react-icons/fa'
import { BiLike } from 'react-icons/bi'
import { BiDislike } from 'react-icons/bi'
import { FaTrash } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'


export default function Issue(props){

  const { username, issue, comment, imgUrl, _id, likes, dislikes } = props
  const { deleteIssue } = useContext(UserContext)
  console.log(_id)
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
            <FaRegComments className="addComment" /*onClick={clickComment}*//>
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
        </div>
      </div>
    </div>
  )
}