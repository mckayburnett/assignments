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

    //user
    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: []
    }
    const [userState, setUserState] = useState(initState)

    //public
    const initPublic = {
        pubUser: JSON.parse(localStorage.getItem("user")) || {},
        pubIssues: []
    }
    const [publicState, setPublicState] = useState(initPublic)

    function addDislike(e){
        console.log(e)
        userAxios.put(`/api/issue/dislike/${e}`)
        .then(res => {
            console.log('res',res)
            })
        .catch(err => console.log(err.response.data.errMsg)) 
    }
    function addLike(e){
        userAxios.put(`/api/issue/like/${e}`)
        .then(res => {
            console.log('res',res)
            })
        .catch(err => console.log(err.response.data.errMsg))        
    }
    function addReply(newReply, _id){
        console.log("somewhat working")
        userAxios.put(`/api/issue/reply/${_id}`, newReply)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return(
        <PublicContext.Provider
            value={{
                addReply,
                addDislike,
                addLike,
                
            }}
        >
            { props.children }
        </PublicContext.Provider>
    )
}