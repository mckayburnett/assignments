import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider.js'
import IssueList from "./IssueList.js"


export default function Public(){

  const { getAllIssues, user: { username }, addIssue, issues, publicState } = useContext(UserContext)

  useEffect(() => {
    getAllIssues()
  },[])

console.log("public page",publicState)

  return (
    <div className="public">
      <IssueList />
    </div>
  )
}