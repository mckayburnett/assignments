import React, { useContext, useEffect, useState } from 'react'
import { PublicContext } from '../context/PublicProvider.js'
import { UserContext } from '../context/UserProvider.js'
import axios from 'axios'

export default function PublicReplies(props){

    const { reply } = props
    const { getReplies } = useContext(PublicContext)
    

    //get the reply text from replyId
        
    return(
        <div className="publicRepliesContainer">
            <h1 className="publicReplies">{reply}</h1>
        </div>
    )
}