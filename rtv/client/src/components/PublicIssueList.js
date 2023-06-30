import React, { useContext } from 'react'
import PublicIssue from './PublicIssue.js'
import { UserContext } from '../context/UserProvider.js'

export default function PublicIssueList(props){

    const { publicState } = props
    const pubIssues = publicState.issues
    console.log(publicState)
    const issue = pubIssues && pubIssues.map((data) => data.issue)
    const mappedIssues = pubIssues.map(issue => issue.likes).sort((a,b) => a < b ? 1: -1)
    console.log(mappedIssues)
    console.log(pubIssues)

    return(
        <div>
            {mappedIssues ? mappedIssues.map(issue => <PublicIssue {...issue} key={issue._id}  />) : null }
        </div>
    )
}
//{issues ?  issues.map(issue => <Issue {...issue} key={issue._id}/>) : null } 