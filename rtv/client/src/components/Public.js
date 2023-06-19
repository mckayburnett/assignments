import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider.js'
import IssueList from "./IssueList.js"


export default function Public(){

  const { /*getAllIssues*/ user: { username }, addIssue, issues } = useContext(UserContext)

  useEffect(() => {
    // getAllIssues()
  })
  console.log(IssueList)

  return (
    <div className="public">
      <IssueList />
    </div>
  )
}