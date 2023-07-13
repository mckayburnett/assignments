import React, { useContext, useState } from 'react'
import { PublicContext } from '../context/PublicProvider.js'
import { UserContext } from '../context/UserProvider.js'
import { FaRegComments } from 'react-icons/fa'
import { BiLike } from 'react-icons/bi'
import { BiDislike } from 'react-icons/bi'
import CommentForm from './ReplyForm.js'


export default function PublicIssue(props){

    const { issue, comment, imgUrl, user, _id, likes, dislikes, pubIssues } = props
    const { addReply, color, addDislike, likeComment, addLike, publicState, setPublicState, getAllIssues } = useContext(PublicContext)
    
    const [commentClicked, setCommentClicked] = useState(false)
    const [replyId, setReplyId] = useState("")

    const [likey, setLikey] = useState({likes: likes, token: ""})
    const [dislikey, setDislikey] = useState({dislikes: dislikes, token: ""})

    function clickComment(){
        setCommentClicked(!commentClicked)
        setReplyId(_id)
    }
    function clickLike(){
        const index = pubIssues?.findIndex(issue => issue._id === _id);
        const updatedLikes = publicState?.issues[index]?.likes;
        if(localStorage.issueLikeId === _id){
        console.log("already liked post")
        } else {
        addLike(_id)
        localStorage.setItem("issueLikeId", _id)
        getAllIssues();
        setLikey({likes: updatedLikes})
        console.log(localStorage)
        }
    }
    function clickDislike(){
        addDislike(_id)
        const index = pubIssues.findIndex(issue => issue._id === _id);
        const updatedDislikes = publicState.issues[index].dislikes;
        getAllIssues();
        setDislikey({dislikes: updatedDislikes})
    }

    return(
        <div className="publicIssueWrapper">
            <div className="publicInfoContainer">
                <img className="publicImage" src={imgUrl} alt={imgUrl} width={300}/>
                <div className="publicWords">
                    <h1 className="publicIssue">{issue}</h1>
                    <h2 className="publicComment"><strong>{user}{" "}</strong>{" "}{comment}</h2>                   
                </div>
                <div className="publicIcons">
                    <FaRegComments className="addComment" onClick={clickComment}/>
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
                { commentClicked &&
                <div className="publicReply">
                    <CommentForm replyId={replyId} addReply={addReply} />
                </div>
                }
            </div>
        </div>
    )
}