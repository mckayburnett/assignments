import React from "react"
import {useNavigate} from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="homeWrapper">
            <img src="https://mario.wiki.gallery/images/thumb/f/f0/Warp_Pipe_Artwork_-_Super_Mario_3D_World.png/300px-Warp_Pipe_Artwork_-_Super_Mario_3D_World.png" alt="pipe" className="pipe" />
        </div>
    )
}