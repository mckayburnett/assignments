import React, { useContext, useEffect, useState } from 'react'
import { PublicContext } from '../context/PublicProvider.js'
import { UserContext } from '../context/UserProvider.js'
import axios from 'axios'

export default function PublicReplies(props){

    const { replies, text, user, issue, reply, key } = props
    const { getReplies } = useContext(PublicContext)
    
    getReplies(reply[0])

    return(
        <div className="publicRepliesContainer">
            {reply}
        </div>
    )
}