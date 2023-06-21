import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'

export default function PublicIssue(props){

    const {issue, comment, imgUrl, user } = props

    return(
        <div className="publicIssueWrapper">
            <div className="publicInfoContainer">
                <img className="publicImage" src={imgUrl} alt={imgUrl} width={300}/>
                <div className="publicWords">
                    <h1 className="publicIssue">{issue}</h1>
                    <h2 className="publicComment"><strong>{user}{" "}</strong>{" "}{comment}</h2>
                </div>
            </div>
        </div>
    )
}