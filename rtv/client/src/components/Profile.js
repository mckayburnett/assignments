import React, { useContext } from 'react'
import IssueForm from './IssueForm.js'
import IssueList from './IssueList.js'
import Issue from './Issue.js'
import { UserContext } from '../context/UserProvider.js'


export default function Profile(){
  const { 
    user: { 
      username 
    }, 
    addIssue, 
    issues
  } = useContext(UserContext)

  return (
    <div className="profile">
      <h1><strong className="username">{username}'s</strong> Profile Page</h1>
      <IssueForm addIssue={addIssue}/>
      <IssueList issues={issues} username={username}/>
    </div>
  )
}