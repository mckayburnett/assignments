import React, { useEffect, useState } from 'react'
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

    const initReplies = {
        replies: {}
    }
    const [pubReplies, setPubReplies] = useState(initReplies)
    const [username, setUsername] = useState("")

    //public
    const initPublic = {
        pubUser: JSON.parse(localStorage.getItem("user")) || {},
        pubIssues: []
    }
    const [publicState, setPublicState] = useState(initPublic)

    function getUsername(userId){
        axios.get(`/auth/username/${userId}`)
        .then(res => {
            setUsername(res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
    function getAllIssues(){
        userAxios.get('/api/issue')
        .then(res => {
            setPublicState(prevState => ({
                ...prevState,
                // user: res.user,
                issues: res.data
            }))
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
            getAllIssues();
            getUserIssues();
            })
        .catch(err => console.log(err.response.data.errMsg))        
    }
    function addLike(e){
        userAxios.put(`/api/issue/like/${e}`)
        .then(res => {
            getAllIssues();
            getUserIssues();
            })
        .catch(err => console.log(err.response.data.errMsg))
    }
    function addReply(newReply, _id){
        userAxios.put(`/api/reply/${_id}`, { text: newReply })
            .then(res => {
                console.log(res, newReply)
                setPubReplies(prev => ({
                    ...prev,
                    replies: {
                        ...prev.replies,
                        [_id]: newReply
                    }
                }))
            })
            .catch(err => console.log(err))
    }
    function getReplies(issueId){
        userAxios.get(`/api/reply/issue/${issueId}`)
            .then(res => {
                setPubReplies(prev => ({
                    ...prev,
                    replies: {
                        ...prev.replies,
                        [issueId]: res.data
                    }
                }))

            })
            .catch(err => console.log(err))
    }
    

    return(
        <PublicContext.Provider
            value={{
                getUsername,
                username,
                addReply,
                addDislike,
                addLike,
                publicState,
                setPublicState, 
                getAllIssues,
                getReplies,
                pubReplies
            }}
        >
            { props.children }
        </PublicContext.Provider>
    )
}