import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserProvider.js'
import axios from 'axios'

export default function ProfileReplies(props){

    const { data } = props
    console.log('data',data)
    
    return(
        <div className="profilecRepliesContainer">
            { data ? 
                <h1 className="profileReplies"><strong>{data.user} </strong> {data.text}</h1> 
            : 
                <h1 className="profileReplies">No Comments</h1>
            }
        </div>
    )
}