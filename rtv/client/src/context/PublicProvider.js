import React, { useState } from 'react'
import axios from 'axios'

export const PublicContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export default function PublicProvider(props){

    //Public Icons
    const [color, setColor] = useState("currentColor")
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)

    function addComment(e){
        console.log(e.target)
    }
    function like(e){
        console.log(e.target)
        setColor("blue")
        setLiked(true)
        setDisliked(false)
    }
    function dislike(e){
        console.log(e.target)
        setColor("blue")
        setDisliked(true)
        setLiked(false)
    }

    return(
        <PublicContext.Provider
            value={{
                addComment,
                like,
                dislike,
                color,
                liked,
                disliked
            }}
        >
            { props.children }
        </PublicContext.Provider>
    )
}