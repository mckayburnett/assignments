import React, { useContext } from 'react'
import PublicIssue from './PublicIssue.js'
import { UserContext } from '../context/UserProvider.js'

export default function PublicIssueList(props){

    const { publicState } = props
    const pubIssues = publicState.issues
    console.log('publicState in list',publicState)
    //const issue = pubIssues && pubIssues.map((data) => data.issue)
    const sortedIssues = pubIssues?.sort((a,b) => a.likes < b.likes ? 1: -1)
    console.log('sorted issues',pubIssues)
    
    return(
        <div>
            {sortedIssues ? sortedIssues.map(issue => <PublicIssue {...issue} key={issue._id}  pubIssues={pubIssues}/>) : null }
        </div>
    )
}
//{issues ?  issues.map(issue => <Issue {...issue} key={issue._id}/>) : null } 