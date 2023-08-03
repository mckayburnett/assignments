import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserProvider.js'
import axios from 'axios'

export default function ProfileReplies(props){

    const { data } = props

    console.log('testing data from public replies', data)
    
    return(
        <div className="profilecRepliesContainer">
            { data.text.length > 0 ? 
                <h1 className="profileReplies"><strong>{data.user} </strong> {data.text}</h1> 
            : 
                <h1 className="profileReplies">No Comments</h1>
            }
        </div>
    )
}