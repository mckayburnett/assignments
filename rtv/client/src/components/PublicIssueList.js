import React, { useContext } from 'react'
import PublicIssue from './PublicIssue.js'
import { UserContext } from '../context/UserProvider.js'

export default function PublicIssueList(props){

    const { publicState } = props
    const pubIssues = publicState.issues
    const issue = pubIssues && pubIssues.map((data) => data.issue)
    console.log('issue',issue)
    console.log('pubissues', pubIssues)

    return(
        <div>
            {pubIssues ? pubIssues.map(issue => <PublicIssue {...issue} key={issue._id} />) : null }
        </div>
    )
}
//{issues ?  issues.map(issue => <Issue {...issue} key={issue._id}/>) : null } 