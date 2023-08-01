import React, { useContext, useEffect, useState } from 'react'
import { PublicContext } from '../context/PublicProvider.js'
import { UserContext } from '../context/UserProvider.js'
import axios from 'axios'

export default function PublicReplies(props){

    const { reply } = props
    const { getReplies, pubReplies } = useContext(PublicContext)
    
    useEffect(() => {
        getReplies(reply)
      }, [reply])
    
    console.log('pubreplies', pubReplies)
    
    return(
        <div className="publicRepliesContainer">
            <h1 className="publicReplies">{pubReplies}</h1>
        </div>
    )
}