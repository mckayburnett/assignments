import React, { useContext } from 'react'
import PublicIssue from './PublicIssue.js'
import { UserContext } from '../context/UserProvider.js'

export default function PublicIssueList(props){

    const { publicState } = props
    const pubIssues = publicState.issues
    const sortedIssues = pubIssues?.sort((a,b) => a.likes < b.likes ? 1: -1)

    return(
        <div>
            {sortedIssues ? sortedIssues.map(issue => <PublicIssue {...issue} key={issue._id}  pubIssues={pubIssues} replies={issue.reply} sortedIssues={sortedIssues}/>) : null }
        </div>
    )
}
//{issues ?  issues.map(issue => <Issue {...issue} key={issue._id}/>) : null } 