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
        like(e)
    }
    function addDislike(e){
        userAxios.put(`/api/issue/dislike/${e}`)
        .then(res => {
            console.log('res',res)
            })
        .catch(err => console.log(err.response.data.errMsg)) 
    }

    function like(e){
        userAxios.put(`/api/issue/like/${e}`)
        .then(res => {
            console.log('res',res)
            console.log('ua',userAxios)
            })
        .catch(err => console.log(err.response.data.errMsg))        
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