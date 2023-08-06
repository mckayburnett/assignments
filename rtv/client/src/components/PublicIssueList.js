import React, { useContext } from 'react'
import PublicIssue from './PublicIssue.js'
import { UserContext } from '../context/UserProvider.js'
import { PublicContext } from '../context/PublicProvider.js'

export default function PublicIssueList(props){

    const { publicState } = props
    const{ getUsername } = useContext(PublicContext)

    const pubIssues = publicState.issues
    const sortedIssues = pubIssues?.sort((a,b) => a.likes < b.likes ? 1: -1)

    return(
        <div>
            {sortedIssues ? sortedIssues.map(issue => <PublicIssue {...issue} key={issue._id} getUsername={getUsername} pubIssues={pubIssues} replies={issue.reply} sortedIssues={sortedIssues} user={issue.user}/>) : null }
        </div>
    )
}
//{issues ?  issues.map(issue => <Issue {...issue} key={issue._id}/>) : null } 