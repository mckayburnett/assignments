import React, { useContext } from 'react'
import { PublicContext } from '../context/PublicProvider.js'
import { UserContext } from '../context/UserProvider.js'
import { FaRegComments } from 'react-icons/fa'
import { BiLike } from 'react-icons/bi'
import { BiDislike } from 'react-icons/bi'


export default function PublicIssue(props){

    const {issue, comment, imgUrl, user, _id, likes, dislikes } = props
    const { addComment, color, addDislike, likeComment, addLike } = useContext(PublicContext)
    
    console.log(issue)
    function clickLike(){
        addLike(_id)
    }
    function clickDislike(){
        addDislike(_id)
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
                    <FaRegComments className="addComment" onClick={addComment}/>
                    <div className="publicLikes">
                        <div className="likeGroup">   
                            <BiLike className="thumbsUp" onClick={clickLike} />
                            <h1 className="likes">{likes}</h1>
                        </div> 
                        <div className="dislikeGroup">
                            <BiDislike className="thumbsDown" onClick={clickDislike} /> 
                            <h1 className="dislikes">{dislikes}</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}