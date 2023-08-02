import React, { useContext, useEffect, useState } from 'react'
import { PublicContext } from '../context/PublicProvider.js'
import { UserContext } from '../context/UserProvider.js'
import axios from 'axios'

export default function PublicReplies(props){

    const { data } = props

    console.log('testing data from public replies', data)
    
    return(
        <div className="publicRepliesContainer">
            <h1 className="publicReplies"><strong>{data.user} </strong> {data.text}</h1>
        </div>
    )
}