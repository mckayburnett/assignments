import React from 'react'
import Issue from './Issue.js'

export default function IssueList(props){

  const { issues, username } = props
  console.log("TESTESTESTESt", issues)
  return (
    <div className="issue-list">
      {issues ?  
       issues.map(issue => 
       <Issue 
          {...issue} key={issue._id} 
          username={username} 
          issues={issues} 
          likes={issue.likes} 
          dislikes={issue.dislikes}
        />) 
      : null } 
    </div>
  )
}
// {...issue} is the same as saying title={issue.title}, imgUrl={issue.img}, etc... ) 