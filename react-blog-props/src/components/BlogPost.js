import React from "react"

export default function BlogPost(props) {
    
    return (
        <div className="blogBody">
            <h1 className="title">{props.article.title}</h1>
            <h2 className="subtitle">{props.article.title}</h2>
            <div className="posted">
                <h4 className="author">{props.article.author}</h4>
                <h4 className="date">{props.article.date}</h4>
            </div>
        </div>
    )
}
