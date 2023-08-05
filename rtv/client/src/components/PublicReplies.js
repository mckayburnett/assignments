import React, { useContext, useEffect, useState } from 'react'
import { PublicContext } from '../context/PublicProvider.js'
import { UserContext } from '../context/UserProvider.js'
import axios from 'axios'

export default function PublicReplies(props){

    const { data } = props
    const { getUsername } = useContext(PublicContext)
    return(
        <div className="publicRepliesContainer">
            { data ? <h1 className="publicReplies"><strong>{data.user} </strong> {data.text}</h1> : <h1 className="pubReplies">No Replies</h1>}
        </div>
    )
}