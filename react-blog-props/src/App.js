import React from "react"
import BlogPost from "./components/BlogPost"
import Footer from "./Footer"
import Header from "./Header"
import data from "./data"

export default function App() {
    const articles = data.map(article => {
        return (
            <BlogPost
                key = {article.id}
                article = {article}
            />
        )
    })
    return (
        <div>
            <Header/>
            {articles}
            <Footer/>    
            
        </div>
    )
}
