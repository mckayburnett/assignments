import React from "react"
import {useNavigate} from "react-router-dom"

export default function About() {
    const navigate = useNavigate()

    return (
        <div className="aboutWrapper" /*style={{backgroundImage: 'url("https://addons-media.operacdn.com/media/CACHE/images/themes/15/80615/1.1-rev1/images/0cdd93e3-9d6a-446f-93ca-1de9ec928766/363b449f3b93cc1954f3c17eba71899b.jpg")'}}*/>
            <img src="https://addons-media.operacdn.com/media/CACHE/images/themes/15/80615/1.1-rev1/images/0cdd93e3-9d6a-446f-93ca-1de9ec928766/363b449f3b93cc1954f3c17eba71899b.jpg" alt="pic" className="pic"/>
            <img src="https://mario.wiki.gallery/images/thumb/f/f0/Warp_Pipe_Artwork_-_Super_Mario_3D_World.png/300px-Warp_Pipe_Artwork_-_Super_Mario_3D_World.png" alt="pipe" className="pipe" />
            <img src="https://mario.wiki.gallery/images/3/3e/MPSS_Mario.png" alt="mario" className="mario" />
            <img src="https://mario.wiki.gallery/images/thumb/f/f5/Luigi_Artwork_-_Super_Mario_64_DS.png/1200px-Luigi_Artwork_-_Super_Mario_64_DS.png" alt="luigi" className="luigi" />
            <h1 className="about--mario">Mario</h1>
            <h2 className="details--mario">While Mario was spending time with his girlfriend, Peach, a giant spiked turtle came out of the toilet pipes and stole peach from Mario. Mario spent the next 20 years of his life learning the ins and outs of plumbing in hopes of one day rescuing his girlfriend from the sewers. Eventually, with the help of Peach's dad... who happens to be a mushroom... mario was able to save Peach from the spiked talking turtle, Bowser. Now, with the skills Mario learned from dedicating his life to plumbing, he started Mario Bros. Plumbing and offers his services at the most competitive prices in town! </h2>
            <h1 className="about--luigi">Luigi</h1>
            <h2 className="details--luigi">Mario's brother. He also helps with the plumbing.</h2>
        </div>
    )
}