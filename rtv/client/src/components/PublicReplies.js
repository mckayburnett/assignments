import React, { useContext, useEffect, useState } from 'react'
import { PublicContext } from '../context/PublicProvider.js'
import { UserContext } from '../context/UserProvider.js'
import axios from 'axios'

export default function PublicReplies(props){

    const { replyId, issueId } = props
    const { getReplies } = useContext(PublicContext)
    
    console.log('replyId',replyId)
    console.log('issueId', issueId)
    //get the reply text from replyId

    
    return(
        <div className="publicRepliesContainer">
            {}
        </div>
    )
}