import axios from "axios"
import React, { useState } from 'react'

export const UserContext = React.createContext()

export default function UserProvider(props){

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || ""
    }
    const [userState, setUserState] = useState(initState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
            })
    }

    return(
        <UserContext.Provider
            value={{

            }}
        >
            { props.children }
        </UserContext.Provider>
    )
}