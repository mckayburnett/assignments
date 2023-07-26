import React, { useContext, useState } from 'react'
import { PublicContext } from '../context/PublicProvider.js'
import { UserContext } from '../context/UserProvider.js'

export default function PublicReplies(props){

    const { reply } = props
    const { getReplies } = useContext(PublicContext)
    
    console.log('!!!', reply)

    return(
        <div className="publicRepliesContainer">

        </div>
    )
}