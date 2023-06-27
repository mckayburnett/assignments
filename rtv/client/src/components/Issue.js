import React from 'react'


export default function Issue(props){

  const { username, issue, comment, imgUrl, _id } = props

  return (
    <div className="issue">
      <h1>{ issue }</h1>
      <h3><strong>{ username }</strong>{ comment }</h3>
      <img src={imgUrl} alt={imgUrl} width={300}/>
    </div>
  )
}