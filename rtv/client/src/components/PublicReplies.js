import React, { useContext, useEffect, useState } from 'react'
import { PublicContext } from '../context/PublicProvider.js'
import { UserContext } from '../context/UserProvider.js'
import axios from 'axios'

export default function PublicReplies(props){

    const { text, user, issue, reply, key } = props
    const { getReplies, pubReplies } = useContext(PublicContext)
    
    // const testReply = reply.map(id => getReplies(id))
    // console.log('testReply',testReply)
    // console.log('pubReplies', pubReplies)
    
    return(
        <div className="publicRepliesContainer">
            {/* {testReply} */}
        </div>
    )
}