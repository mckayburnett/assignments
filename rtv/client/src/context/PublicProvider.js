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
    function addLike(e){
        console.log(e)
    }
    function addDislike(e){
        console.log(e.target)
        setColor("blue")
        setDisliked(true)
        setLiked(false)
    }

    return(
        <PublicContext.Provider
            value={{
                addComment,
                addDislike,
                addLike,
                color
            }}
        >
            { props.children }
        </PublicContext.Provider>
    )
}