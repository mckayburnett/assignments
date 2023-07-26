import React, { useContext, useEffect, useState } from 'react'
import { PublicContext } from '../context/PublicProvider.js'
import { UserContext } from '../context/UserProvider.js'

export default function PublicReplies(props){

    const { replies, text, user, issue, reply, key } = props
    const { getReplies } = useContext(PublicContext)
    
    const [replyData, setReplyData] = useState(null);

   console.log('reply',reply)
    getReplies(reply[0])
    

    return(
        <div className="publicRepliesContainer">
            {reply}
        </div>
    )
}