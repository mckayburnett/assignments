import React, { useContext, useEffect, useState } from 'react'
import { PublicContext } from '../context/PublicProvider.js'
import { UserContext } from '../context/UserProvider.js'
import { FaRegComments } from 'react-icons/fa'
import { BiLike } from 'react-icons/bi'
import { BiDislike } from 'react-icons/bi'
import ReplyForm from './ReplyForm.js'
import PublicReplies from './PublicReplies.js'


export default function PublicIssue(props){
    const { issue, comment, imgUrl, user, _id, likes, dislikes, pubIssues, reply, replies } = props
    const { getUsername, username, addReply, color, addDislike, likeComment, addLike, publicState, setPublicState, getAllIssues, getReplies, pubReplies } = useContext(PublicContext)

    const [commentClicked, setCommentClicked] = useState(false)
    const [viewCommentsClicked, setViewCommentsClicked] = useState(false)
    const [replyId, setReplyId] = useState("")
    const [likey, setLikey] = useState({likes: likes, token: ""})
    const [dislikey, setDislikey] = useState({dislikes: dislikes, token: ""})

    function clickComment(e){
        setCommentClicked(!commentClicked)
        setReplyId(_id)
        console.log('e',e)
    }
    function clickLike() {
        getAllIssues();
        console.log('pubIssues:', pubIssues);
        const index = pubIssues?.findIndex(issue => issue._id === _id);
        console.log('index:', index);
        const updatedLikes = index >= 0 ? publicState?.issues[index]?.likes : likes + 1;
        setLikey({ likes: updatedLikes });
        addLike(_id);
      }
    function clickDislike(){
        getAllIssues();
        console.log('pubIssues:', pubIssues);
        const index = pubIssues?.findIndex(issue => issue._id === _id);
        console.log('index:', index);
        const updatedDislikes = index >= 0 ? publicState?.issues[index]?.likes : likes + 1;
        setDislikey({ dislikes: updatedDislikes });
        addDislike(_id);
    }
    function viewComments(){
        getReplies(_id)
        setViewCommentsClicked(!viewCommentsClicked)
    }
    return(
        <div className="publicIssueWrapper">
            <div className="publicInfoContainer">
                <img className="publicImage" src={imgUrl} alt={imgUrl} width={300}/>
                <div className="publicWords">
                    <h1 className="publicIssue">{issue}</h1>
                    <h2 className="publicComment"><strong>{issue.username}{" "}</strong>{" "}{comment}</h2>                   
                </div>
                <div className="publicIcons">
                    { !commentClicked ? 
                        <FaRegComments className="addComment" onClick={clickComment}/> 
                    : 
                        <div className="publicReplyForm">
                            <ReplyForm key={replyId} replyId={replyId} addReply={addReply} setCommentClicked={setCommentClicked} commentClicked={commentClicked}/>
                        </div>
                    }
                    <div className="publicLikes">
                        <div className="likeGroup">   
                            <BiLike className="thumbsUp" onClick={clickLike} />
                            <h1 className="likes">{likey.likes}</h1>
                        </div> 
                        <div className="dislikeGroup">
                            <BiDislike className="thumbsDown" onClick={clickDislike} /> 
                            <h1 className="dislikes">{dislikey.dislikes}</h1>
                        </div>
                    </div>
                </div>
                {  viewCommentsClicked ?
                <div className="publicReplyContainer">
                    <button className="commentsButton" onClick={viewComments}>Hide Comments</button>
                    {pubReplies.replies[_id] && pubReplies.replies[_id].map(data => <PublicReplies {...data} key={data._id} data={data}/>)}
                </div>
                :
                <div className="publicReplyContainer">
                    <button className="commentsButton" onClick={viewComments}>Show Comments</button>
                </div>
                }
                
            </div>
        </div>
    )
}