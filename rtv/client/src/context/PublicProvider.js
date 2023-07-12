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

    function getAllIssues(){
        userAxios.get('/api/issue')
        .then(res => {
            setPublicState(prevState => ({
                ...prevState,
                // user: res.user,
                issues: res.data
            }))
            console.log("publicState",publicState.issues)
            console.log('res.data', res)
        })
        .catch(err => console.log(err.response.data.errMsg))
        
    }

    function getUserIssues(){
        userAxios.get('/api/issue/user')
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: res.data
            }))
            
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addDislike(e){
        userAxios.put(`/api/issue/dislike/${e}`)
        .then(res => {
            const { user, token } = res.data
            setPublicState(prevPublicState => ({
                ...prevPublicState,
                user
            }))
            getAllIssues()
            console.log('publicState', publicState)
            setUserState(prevUserState => ({
                ...prevUserState,
                user, 
                token
            }))
            getUserIssues()
            console.log('userstate',userState)
        }) 
    }
    function addLike(e){
        userAxios.put(`/api/issue/like/${e}`)
        .then(res => {
            console.log('res',res)
            })
        .catch(err => console.log(err.response.data.errMsg))        
    }
    function addReply(newReply, _id){
        console.log('id:', _id, '  ---   newReply:', newReply)
        userAxios.put(`/api/reply/${_id}`, newReply)
            .then(res => {
                console.log(res, "args here")
                
            })
            .catch(err => console.log(err))
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