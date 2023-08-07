import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider.js'
import PublicIssueList from './PublicIssueList.js'


export default function Public(){

  const { user: { username }, addIssue, issues, publicState, makePublic } = useContext(UserContext)

  return (
    <div className="public">
      <h1 className="publicName">Public Page</h1>
      <PublicIssueList publicState={publicState} username={username}/>
    </div>
  )
}