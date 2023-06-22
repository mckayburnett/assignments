import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'
import { FaRegComments } from 'react-icons/fa'
import { BiLike } from 'react-icons/bi'
import { BiDislike } from 'react-icons/bi'


export default function PublicIssue(props){

    const {issue, comment, imgUrl, user } = props

    return(
        <div className="publicIssueWrapper">
            <div className="publicInfoContainer">
                <img className="publicImage" src={imgUrl} alt={imgUrl} width={300}/>
                <div className="publicWords">
                    <h1 className="publicIssue">{issue}</h1>
                    <h2 className="publicComment"><strong>{user}{" "}</strong>{" "}{comment}</h2>
                    <FaRegComments classNae="addComment"/>
                    <BiLike className="like" />
                    <BiDislike className="dislike" />                    
                </div>
            </div>
        </div>
    )
}