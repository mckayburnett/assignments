import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'

export default function PublicIssue(props){

    const {issue, comment, imgUrl, user } = props

    return(
        <div className="publicIssue">
            <img src={imgUrl} alt={imgUrl} width={300}/>
            <h1>{issue}</h1>
            <h2><strong>{user}</strong>{comment}</h2>
        </div>
    )
}