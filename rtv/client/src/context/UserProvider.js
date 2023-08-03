import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
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

    const initReplies = {
        replies: {}
    }
    const [profReplies, setProfReplies] = useState(initReplies)

    function signup(credentials){
        axios.post('/auth/signup', credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post('/auth/login', credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user" , JSON.stringify(user))
            console.log(user)
            getAllIssues()
            setPublicState(prevPublicState => ({
                ...prevPublicState,
                user
            }))
            getUserIssues()
            setUserState(prevUserState => ({
                ...prevUserState,
                user, 
                token
            }))
            
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            issues: []
        })
    }

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

    function addIssue(newIssue){
        userAxios.post('/api/issue', newIssue)
            .then(res => {
                const { user, token } = res.data
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }))
                getAllIssues()
                setPublicState(prevPublicState => ({
                    ...prevPublicState,
                    user
                }))
                console.log('publicState', publicState)
                getUserIssues()
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteIssue(issueId){
        userAxios.delete(`/api/issue/${issueId}`)
            .then(res => {
                const { user, token } = res.data
                getAllIssues()
                setPublicState(prevPublicState => ({
                    ...prevPublicState,
                    user
                }))
            console.log('publicState', publicState)
            getUserIssues()
            setUserState(prevUserState => ({
                ...prevUserState,
                user, 
                token
            }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    function addReply(newReply, _id){
        userAxios.put(`/api/reply/${_id}`, newReply)
            .then(res => {
                console.log('res',res.data.reply)
                console.log('newReply', newReply)
            })
            .catch(err => console.log(err))
    }
    function getReplies(issueId){
        userAxios.get(`/api/reply/issue/${issueId}`)
            .then(res => {
                res.data.length > 0 && console.log('working')
                console.log('res.data',res.data)
                setProfReplies(prev => ({
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
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                publicState,
                deleteIssue, 
                getAllIssues,
                getUserIssues,
                addReply,
                getReplies,
                profReplies,
                setProfReplies 
            }}
        >
            { props.children }
        </UserContext.Provider>
    )
}