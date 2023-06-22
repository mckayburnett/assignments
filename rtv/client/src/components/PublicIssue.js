import React, { useContext } from 'react'
import { PublicContext } from '../context/PublicProvider.js'
import { FaRegComments } from 'react-icons/fa'
import { BiLike } from 'react-icons/bi'
import { BiDislike } from 'react-icons/bi'


export default function PublicIssue(props){

    const {issue, comment, imgUrl, user, liked, disliked } = props
    const { addComment, like, dislike, color } = useContext(PublicContext)

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
                        <BiLike className="like" onClick={like} />
                        <BiDislike className="dislike" onClick={dislike} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}